import { ProjectCard } from "./project-card"

const projects = [
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

export function FeaturedProjects() {
  return (
    <section id="projects" className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Featured Project</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Experience luxury living at MONTAGE - where life's precious desires come together in perfect harmony
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
