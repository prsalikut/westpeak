import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-16">
        {/* Hero Section */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 text-balance">Contact Us</h1>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
                Ready to find your dream home? Get in touch with our expert team today
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-6">Get in Touch</h2>
                  <p className="text-muted-foreground text-pretty mb-8">
                    Our team is here to help you find the perfect home. Reach out to us through any of the following
                    channels.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-3 mb-3">
                        <Phone className="h-5 w-5 text-primary" />
                        <h3 className="font-semibold text-foreground">Phone</h3>
                      </div>
                      <p className="text-muted-foreground">+91-40-XXXX-XXXX</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-3 mb-3">
                        <Mail className="h-5 w-5 text-primary" />
                        <h3 className="font-semibold text-foreground">Email</h3>
                      </div>
                      <p className="text-muted-foreground">hello@westpeak.in</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-3 mb-3">
                        <MapPin className="h-5 w-5 text-primary" />
                        <h3 className="font-semibold text-foreground">Office</h3>
                      </div>
                      <p className="text-muted-foreground">Hyderabad, Telangana, India</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-3 mb-3">
                        <Clock className="h-5 w-5 text-primary" />
                        <h3 className="font-semibold text-foreground">Hours</h3>
                      </div>
                      <p className="text-muted-foreground">Mon-Sat: 9AM-7PM</p>
                    </CardContent>
                  </Card>
                </div>

                {/* Map Placeholder */}
                <Card>
                  <CardContent className="p-0">
                    <div className="h-64 bg-muted rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
                        <p className="text-muted-foreground">Interactive Map</p>
                        <p className="text-sm text-muted-foreground">TODO: Add Google Maps integration</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Form */}
              <div>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  )
}
