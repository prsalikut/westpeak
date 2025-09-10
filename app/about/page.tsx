import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, Users, Building, Target } from "lucide-react"

const values = [
  {
    icon: Award,
    title: "Quality Excellence",
    description: "We never compromise on construction quality and use only premium materials and proven techniques.",
  },
  {
    icon: Users,
    title: "Customer First",
    description:
      "Every decision we make is centered around delivering exceptional value and experience to our customers.",
  },
  {
    icon: Building,
    title: "Innovation",
    description: "We embrace modern design principles and sustainable building practices in all our developments.",
  },
  {
    icon: Target,
    title: "Transparency",
    description: "Clear pricing, honest timelines, and open communication throughout your journey with us.",
  },
]

const timeline = [
  { year: "2015", event: "West Peak Developers founded with a vision to transform Hyderabad's skyline" },
  { year: "2017", event: "Completed our first residential project - West Peak Gardens" },
  { year: "2019", event: "Expanded to premium villa developments in Jubilee Hills" },
  { year: "2021", event: "Launched West Peak Heights - our flagship apartment complex" },
  { year: "2023", event: "Achieved 1000+ happy families milestone" },
  { year: "2024", event: "Expanding portfolio with sustainable and smart home technologies" },
]

const team = [
  {
    name: "Rajesh Patel",
    role: "Founder & CEO",
    image: "/professional-indian-businessman-ceo.jpg",
    bio: "15+ years in real estate development with a passion for creating exceptional living spaces.",
  },
  {
    name: "Priya Sharma",
    role: "Head of Design",
    image: "/professional-indian-woman-architect.jpg",
    bio: "Award-winning architect specializing in modern residential design and sustainable construction.",
  },
  {
    name: "Vikram Reddy",
    role: "Construction Director",
    image: "/professional-indian-man-construction-engineer.jpg",
    bio: "Expert in project management and quality control with 20+ years of construction experience.",
  },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-16">
        {/* Hero Section */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 text-balance">
                About West Peak Developers
              </h1>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
                Rising above the ordinary to create exceptional homes that stand the test of time
              </p>
            </div>
          </div>
        </section>

        {/* Company Story */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Our Story</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p className="text-pretty">
                    Founded in 2015, West Peak Developers emerged from a simple yet powerful vision: to create homes
                    that don't just shelter, but inspire. We believe that every family deserves a space that reflects
                    their aspirations and supports their dreams.
                  </p>
                  <p className="text-pretty">
                    Over the years, we've grown from a small team with big dreams to one of Hyderabad's most trusted
                    residential developers. Our journey has been marked by unwavering commitment to quality, innovation,
                    and customer satisfaction.
                  </p>
                  <p className="text-pretty">
                    Today, we're proud to have delivered over 1000 homes across prime locations in Hyderabad, each one
                    built with the same attention to detail and passion that defined our very first project.
                  </p>
                </div>
              </div>
              <div>
                <img
                  src="/modern-office-building-west-peak-developers-hydera.jpg"
                  alt="West Peak Developers office"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Values */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Our Values</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                The principles that guide everything we do
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="p-6">
                    <value.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-foreground mb-3">{value.title}</h3>
                    <p className="text-sm text-muted-foreground text-pretty">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Our Journey</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                Key milestones in our growth story
              </p>
            </div>
            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                {timeline.map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <Badge variant="outline" className="mt-1 shrink-0">
                      {item.year}
                    </Badge>
                    <p className="text-muted-foreground text-pretty">{item.event}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Leadership Team</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                Meet the visionaries behind West Peak Developers
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="p-6">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-32 h-32 rounded-full object-cover mx-auto mb-4"
                    />
                    <h3 className="text-lg font-semibold text-foreground mb-1">{member.name}</h3>
                    <p className="text-sm text-primary mb-3">{member.role}</p>
                    <p className="text-sm text-muted-foreground text-pretty">{member.bio}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  )
}
