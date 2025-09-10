import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ProjectCard } from "@/components/project-card"

const allProjects = [
  {
    id: "montage-villas",
    name: "MONTAGE - A Collage of Life's Desires",
    location: "Budvel, Hyderabad",
    priceRange: "₹2.5Cr - ₹4.2Cr",
    specs: "G+3 Luxury Villas",
    sqft: "3,760 - 5,600 sq.ft",
    image: "/montage/east-villa-167.png",
    status: "ongoing" as const,
    developer: "Teramor Developers",
    plotSize: "167 - 334 sq.yds",
    totalVillas: 52,
    projectArea: "4 Acres",
    clubhouseArea: "20,000 sq.ft",
    highlights: [
      "Only-of-its-kind G+3 Villas",
      "Covered parking for up to 4 cars",
      "Private double-height balconies",
      "20,000 sq.ft clubhouse with infinity pool",
      "Eco-friendly bio walls",
      "Home theatre in every villa",
    ],
  },
]

export default function ProjectsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-16">
        {/* Hero Section */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 text-balance">Our Project</h1>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
                Experience MONTAGE - where life's precious desires come together in luxury villa living at Budvel,
                Hyderabad
              </p>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  )
}
