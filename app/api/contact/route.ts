import { type NextRequest, NextResponse } from "next/server"
import { writeFile, readFile } from "fs/promises"
import { existsSync } from "fs"
import path from "path"

// Simple rate limiting (in production, use Redis or similar)
const rateLimitMap = new Map()

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const windowMs = 15 * 60 * 1000 // 15 minutes
  const maxRequests = 5

  if (!rateLimitMap.has(ip)) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + windowMs })
    return false
  }

  const limit = rateLimitMap.get(ip)
  if (now > limit.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + windowMs })
    return false
  }

  if (limit.count >= maxRequests) {
    return true
  }

  limit.count++
  return false
}

export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const ip = request.ip || "unknown"
    if (isRateLimited(ip)) {
      return NextResponse.json({ error: "Too many requests. Please try again later." }, { status: 429 })
    }

    const body = await request.json()
    const { name, email, phone, message, projectInterest, gdprConsent } = body

    // Validation
    if (!name || !email || !phone || !message || !gdprConsent) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 })
    }

    // Create lead data
    const leadData = {
      timestamp: new Date().toISOString(),
      name,
      email,
      phone,
      message,
      projectInterest: projectInterest || "General Inquiry",
      gdprConsent,
      ip,
    }

    // Save to CSV (for local development)
    const dataDir = path.join(process.cwd(), "data")
    const csvPath = path.join(dataDir, "leads.csv")

    // Ensure data directory exists
    if (!existsSync(dataDir)) {
      await writeFile(dataDir, "", { flag: "wx" }).catch(() => {})
    }

    // Create CSV header if file doesn't exist
    if (!existsSync(csvPath)) {
      const header = "timestamp,name,email,phone,message,projectInterest,gdprConsent,ip\n"
      await writeFile(csvPath, header)
    }

    // Append lead data
    const csvRow = `"${leadData.timestamp}","${leadData.name}","${leadData.email}","${leadData.phone}","${leadData.message.replace(/"/g, '""')}","${leadData.projectInterest}","${leadData.gdprConsent}","${leadData.ip}"\n`
    const existingData = await readFile(csvPath, "utf-8")
    await writeFile(csvPath, existingData + csvRow)

    // TODO: Send email notification
    // await sendEmailNotification(leadData)

    // TODO: Send to CRM webhook
    // if (process.env.CRM_WEBHOOK_URL) {
    //   await fetch(process.env.CRM_WEBHOOK_URL, {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(leadData)
    //   })
    // }

    console.log("[v0] New lead received:", leadData)

    return NextResponse.json({ success: true, message: "Lead captured successfully" })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
