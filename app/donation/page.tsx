"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Heart, CreditCard, Shield, Users, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function DonationPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              <span className="font-bold text-xl">Khagesh Kumar</span>
            </Link>
            <Badge variant="secondary" className="animate-pulse">
              <Heart className="w-3 h-3 mr-1" />
              Donation Page
            </Badge>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-accent/10 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-in fade-in-50 duration-700">
            <h1 className="text-4xl lg:text-6xl font-bold text-primary mb-6 text-balance">
              Support Our Vision for Change
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed text-pretty mb-8">
              Your contribution helps us build a stronger community. Every donation, no matter the size, makes a real
              difference in our mission to serve the people and create lasting positive change.
            </p>
            <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Shield className="w-4 h-4 text-accent" />
                Secure Payments
              </div>
              <div className="flex items-center gap-1">
                <Users className="w-4 h-4 text-accent" />
                Transparent Use
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card className="border-border shadow-lg animate-in slide-in-from-bottom duration-700">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-card-foreground">Make a Donation</CardTitle>
                <CardDescription>Choose your contribution amount and help us build a better future</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Preset Amounts */}
                <div>
                  <label className="text-sm font-medium text-card-foreground mb-3 block">Select Amount</label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    <Button
                      variant="outline"
                      className="h-12 hover:bg-accent hover:text-accent-foreground transition-all duration-200 hover:scale-105 bg-transparent"
                    >
                      ₹500
                    </Button>
                    <Button
                      variant="outline"
                      className="h-12 hover:bg-accent hover:text-accent-foreground transition-all duration-200 hover:scale-105 bg-transparent"
                    >
                      ₹1,000
                    </Button>
                    <Button
                      variant="outline"
                      className="h-12 hover:bg-accent hover:text-accent-foreground transition-all duration-200 hover:scale-105 bg-transparent"
                    >
                      ₹2,500
                    </Button>
                    <Button
                      variant="outline"
                      className="h-12 hover:bg-accent hover:text-accent-foreground transition-all duration-200 hover:scale-105 bg-transparent"
                    >
                      ₹5,000
                    </Button>
                  </div>
                </div>

                {/* Custom Amount */}
                <div>
                  <label className="text-sm font-medium text-card-foreground mb-2 block">Or Enter Custom Amount</label>
                  <Input
                    placeholder="₹ Enter amount"
                    type="number"
                    className="h-12 text-lg transition-all duration-200 focus:scale-105"
                  />
                </div>

                {/* Donor Information */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-card-foreground">Donor Information</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input placeholder="First Name" className="transition-all duration-200 focus:scale-105" />
                    <Input placeholder="Last Name" className="transition-all duration-200 focus:scale-105" />
                  </div>
                  <Input
                    placeholder="Email Address"
                    type="email"
                    className="transition-all duration-200 focus:scale-105"
                  />
                  <Input
                    placeholder="Phone Number"
                    type="tel"
                    className="transition-all duration-200 focus:scale-105"
                  />
                </div>

                {/* Payment Method */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-card-foreground">Payment Method</h3>
                  <div className="grid grid-cols-3 gap-3">
                    <Button
                      variant="outline"
                      className="h-12 hover:bg-accent hover:text-accent-foreground transition-all duration-200 bg-transparent"
                    >
                      <CreditCard className="w-4 h-4 mr-2" />
                      Card
                    </Button>
                    <Button
                      variant="outline"
                      className="h-12 hover:bg-accent hover:text-accent-foreground transition-all duration-200 bg-transparent"
                    >
                      UPI
                    </Button>
                    <Button
                      variant="outline"
                      className="h-12 hover:bg-accent hover:text-accent-foreground transition-all duration-200 bg-transparent"
                    >
                      Net Banking
                    </Button>
                  </div>
                </div>

                {/* Donate Button */}
                <Button
                  size="lg"
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground transition-all duration-200 hover:scale-105"
                >
                  <Heart className="w-5 h-5 mr-2" />
                  Donate Securely Now
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  Your donation is secure and will be processed through encrypted payment systems. All contributions go
                  directly towards community development initiatives.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6 text-balance">Your Impact</h2>
            <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
              See how your contributions help create real change in our community
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-accent mb-2">₹500</div>
                <h3 className="font-semibold text-card-foreground mb-2">School Supplies</h3>
                <p className="text-sm text-muted-foreground">Provides educational materials for 5 students</p>
              </CardContent>
            </Card>

            <Card className="text-center border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-accent mb-2">₹2,500</div>
                <h3 className="font-semibold text-card-foreground mb-2">Healthcare Support</h3>
                <p className="text-sm text-muted-foreground">Funds medical checkups for 10 families</p>
              </CardContent>
            </Card>

            <Card className="text-center border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-accent mb-2">₹5,000</div>
                <h3 className="font-semibold text-card-foreground mb-2">Infrastructure</h3>
                <p className="text-sm text-muted-foreground">Contributes to community development projects</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
