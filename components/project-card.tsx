import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Home, Maximize, Building2, Users } from "lucide-react"
import Link from "next/link"

interface ProjectCardProps {
  project: {
    id: string
    name: string
    location: string
    priceRange: string
    specs: string
    sqft: string
    image: string
    status: "upcoming" | "ongoing" | "completed"
    developer?: string
    plotSize?: string
    totalVillas?: number
    projectArea?: string
    clubhouseArea?: string
    highlights?: string[]
  }
}

export function ProjectCard({ project }: ProjectCardProps) {
  const statusColors = {
    upcoming: "bg-blue-100 text-blue-800",
    ongoing: "bg-green-100 text-green-800",
    completed: "bg-gray-100 text-gray-800",
  }

  return (
    <Card className="group overflow-hidden hover:shadow-lg transition-all duration-300">
      <div className="relative overflow-hidden">
        <img
          src={project.image || "/placeholder.svg"}
          alt={project.name}
          className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <Badge className={`absolute top-4 left-4 ${statusColors[project.status]}`}>
          {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
        </Badge>
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold text-foreground mb-2">{project.name}</h3>
        <div className="flex items-center text-muted-foreground mb-3">
          <MapPin className="h-4 w-4 mr-1" />
          <span className="text-sm">{project.location}</span>
        </div>
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-sm text-muted-foreground">
            <Home className="h-4 w-4 mr-2" />
            <span>{project.specs}</span>
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <Maximize className="h-4 w-4 mr-2" />
            <span>{project.sqft}</span>
          </div>
          {project.plotSize && (
            <div className="flex items-center text-sm text-muted-foreground">
              <Building2 className="h-4 w-4 mr-2" />
              <span>{project.plotSize}</span>
            </div>
          )}
          {project.totalVillas && (
            <div className="flex items-center text-sm text-muted-foreground">
              <Users className="h-4 w-4 mr-2" />
              <span>{project.totalVillas} Villas</span>
            </div>
          )}
        </div>
        <div className="text-lg font-semibold text-primary mb-4">{project.priceRange}</div>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Link href={`/projects/${project.id}`} className="w-full">
          <Button className="w-full">View Project</Button>
        </Link>
      </CardFooter>
    </Card>
  )
}
