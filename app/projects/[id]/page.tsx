import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Home, Building2, Car, Waves, TreePine, Dumbbell } from "lucide-react"
import { notFound } from "next/navigation"

const projectData = {
  "montage-villas": {
    id: "montage-villas",
    name: "MONTAGE - A Collage of Life's Desires",
    tagline: "Life is a collection of moments, experiences, and memories",
    location: "Budvel, Hyderabad",
    priceRange: "₹2.5Cr - ₹4.2Cr",
    specs: "G+3 Luxury Villas",
    sqft: "3,760 - 5,600 sq.ft",
    status: "ongoing" as const,
    developer: "Teramor Developers",
    plotSize: "167 - 334 sq.yds",
    totalVillas: 52,
    projectArea: "4 Acres",
    clubhouseArea: "20,000 sq.ft",
    description:
      "Life is a collection of moments, experiences, and memories. It's the love and cherished stories that truly give life its meaning. MONTAGE transforms everyday life into something truly extraordinary with unique G+3 villas designed for sophisticated living.",
    images: {
      hero: "/montage/east-villa-167.png",
      gallery: [
        "/montage/sports-zone.png",
        "/montage/gazebo-seating.png",
        "/montage/east-villa-167.png",
        "/montage/west-villa-167.png",
        "/montage/east-villa-334-exterior.png",
        "/montage/west-villa-334-exterior.png",
        "/montage/children-play-area.png",
        "/montage/volleyball-skating.png",
        "/montage/chess-area.png",
        "/montage/covered-seating.png",
        "/montage/bedroom-interiors.png",
        "/montage/family-lounge-theatre.png",
        "/montage/dining-kitchen.png",
        "/montage/living-spaces.png",
        "/montage/east-villa-floor-plans.png",
        "/montage/west-villa-floor-plans.png",
        "/montage/east-villa-334-floors-ground-1.png",
        "/montage/east-villa-334-floors-2-3.png",
        "/montage/west-villa-334-floors-ground-1.png",
        "/montage/west-villa-334-floors-2-3.png",
      ],
    },
    highlights: [
      "Only-of-its-kind G+3 Villas designed for sophisticated living",
      "Covered parking for up to 4 cars in your villa",
      "Eco-friendly bio walls enhance your villa's serenity",
      "Stunning infinity pool at our 20,000 sq.ft clubhouse",
      "Private home theatre in every villa",
      "Dedicated maid rooms and storage space",
      "Customizable backyards and side yards",
      "Private double-height balconies with green spaces",
      "Pitched roof with terracotta tiles for thermal insulation",
      "Natural stone facade for durability and elegance",
    ],
    amenities: [
      { icon: Waves, name: "Infinity Swimming Pool", description: "Rooftop infinity pool with stunning city views" },
      { icon: Dumbbell, name: "Fully Equipped Gymnasium", description: "State-of-the-art fitness center" },
      {
        icon: TreePine,
        name: "Landscaped Gardens",
        description: "Beautifully designed green spaces and seating areas",
      },
      { icon: Car, name: "Covered Parking", description: "Dedicated parking for up to 4 cars per villa" },
      { icon: Home, name: "Multipurpose Hall", description: "Versatile event space for celebrations" },
      { icon: Building2, name: "Preview Theatre", description: "Community cinema for entertainment" },
    ],
    floorPlans: [
      {
        type: "East Villa - 167 Sq Yds",
        area: "3,760 sq.ft",
        bedrooms: "3BHK",
        image: "/montage/east-villa-floor-plans.png",
      },
      {
        type: "West Facing Villa - 167 Sq Yds",
        area: "3,760 sq.ft",
        bedrooms: "3BHK",
        image: "/montage/west-villa-floor-plans.png",
      },
      {
        type: "East Facing Villa - 334 Sq Yds",
        area: "5,600 sq.ft",
        bedrooms: "4BHK",
        image: "/montage/east-villa-334-floors-ground-1.png",
      },
      {
        type: "West Villa - 334 Sq Yds",
        area: "5,600 sq.ft",
        bedrooms: "4BHK",
        image: "/montage/west-villa-334-floors-ground-1.png",
      },
    ],
    connectivity: [
      "Rajendra Nagar Toll Exit (Exit 17) - < 10 mins",
      "PVNR Express Way - < 10 mins",
      "Time School - < 10 mins",
      "Mantra Mall - < 10 mins",
      "Financial District - < 25 mins",
      "Rajiv Gandhi International Airport - < 30 mins",
      "Gachibowli Hub - < 30 mins",
    ],
  },
}

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
  const project = projectData[params.id as keyof typeof projectData]

  if (!project) {
    notFound()
  }

  const statusColors = {
    upcoming: "bg-blue-100 text-blue-800",
    ongoing: "bg-green-100 text-green-800",
    completed: "bg-gray-100 text-gray-800",
  }

  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-16">
        {/* Hero Section */}
        <section className="relative h-[70vh] overflow-hidden">
          <img
            src={project.images.hero || "/placeholder.svg"}
            alt={project.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white px-4">
              <Badge className={`mb-4 ${statusColors[project.status]}`}>
                {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
              </Badge>
              <h1 className="text-4xl sm:text-6xl font-bold mb-4 text-balance">{project.name}</h1>
              <p className="text-xl mb-6 text-pretty max-w-2xl mx-auto">{project.tagline}</p>
              <div className="flex items-center justify-center text-lg mb-8">
                <MapPin className="h-5 w-5 mr-2" />
                <span>{project.location}</span>
              </div>
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Schedule Site Visit
              </Button>
            </div>
          </div>
        </section>

        {/* Project Overview */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Project Overview</h2>
                <p className="text-muted-foreground mb-8 text-pretty leading-relaxed">{project.description}</p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-4 bg-background rounded-lg">
                    <div className="text-2xl font-bold text-primary">{project.totalVillas}</div>
                    <div className="text-sm text-muted-foreground">Total Villas</div>
                  </div>
                  <div className="text-center p-4 bg-background rounded-lg">
                    <div className="text-2xl font-bold text-primary">{project.projectArea}</div>
                    <div className="text-sm text-muted-foreground">Project Area</div>
                  </div>
                  <div className="text-center p-4 bg-background rounded-lg">
                    <div className="text-2xl font-bold text-primary">{project.sqft}</div>
                    <div className="text-sm text-muted-foreground">Built-up Area</div>
                  </div>
                  <div className="text-center p-4 bg-background rounded-lg">
                    <div className="text-2xl font-bold text-primary">{project.clubhouseArea}</div>
                    <div className="text-sm text-muted-foreground">Clubhouse</div>
                  </div>
                </div>
              </div>
              <div>
                <img
                  src={project.images.gallery[0] || "/placeholder.svg"}
                  alt="Master Plan"
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Project Highlights */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">Project Highlights</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.highlights.map((highlight, index) => (
                <Card key={index} className="p-6">
                  <CardContent className="p-0">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <p className="text-sm text-muted-foreground leading-relaxed">{highlight}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Image Gallery */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.images.gallery.map((image, index) => (
                <div key={index} className="group overflow-hidden rounded-lg shadow-lg">
                  <img
                    src={image || "/placeholder.svg"}
                    alt={`MONTAGE Gallery ${index + 1}`}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Amenities */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">World-Class Amenities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {project.amenities.map((amenity, index) => (
                <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <amenity.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-foreground mb-2">{amenity.name}</h3>
                    <p className="text-sm text-muted-foreground">{amenity.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Connectivity */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">Prime Connectivity</h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.connectivity.map((connection, index) => (
                  <div key={index} className="flex items-center space-x-3 p-4 bg-background rounded-lg">
                    <MapPin className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{connection}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Experience MONTAGE?</h2>
            <p className="text-lg mb-8 text-pretty max-w-2xl mx-auto opacity-90">
              Discover luxury villa living where life's precious desires come together. Schedule your site visit today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary">
                Schedule Site Visit
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
              >
                Download Brochure
              </Button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  )
}
