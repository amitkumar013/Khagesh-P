import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { UserPlus, Users, Target, Heart, ArrowLeft, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function JoinTeamPage() {
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
              <UserPlus className="w-3 h-3 mr-1" />
              Join Our Team
            </Badge>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-primary/10 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-in fade-in-50 duration-700">
            <h1 className="text-4xl lg:text-6xl font-bold text-primary mb-6 text-balance">
              Join Our Movement for Change
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed text-pretty mb-8">
              Be part of a dedicated team working to build a stronger, more prosperous community. Together, we can
              create lasting positive change and make a real difference in people's lives.
            </p>
            <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Users className="w-4 h-4 text-accent" />
                500+ Volunteers
              </div>
              <div className="flex items-center gap-1">
                <Target className="w-4 h-4 text-accent" />
                Multiple Roles
              </div>
              <div className="flex items-center gap-1">
                <Heart className="w-4 h-4 text-accent" />
                Community Impact
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Opportunities */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6 text-balance">Volunteer Opportunities</h2>
            <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
              Find the perfect way to contribute your skills and passion to our cause
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <Card className="border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-2 animate-in slide-in-from-bottom duration-700 delay-200">
              <CardHeader>
                <Users className="w-8 h-8 text-accent mb-2" />
                <CardTitle className="text-card-foreground">Campaign Volunteer</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Help with door-to-door canvassing, phone banking, and community outreach events.
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-3 h-3 text-accent" />
                    Flexible hours
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-3 h-3 text-accent" />
                    Training provided
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-3 h-3 text-accent" />
                    Community impact
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-2 animate-in slide-in-from-bottom duration-700 delay-300">
              <CardHeader>
                <Target className="w-8 h-8 text-accent mb-2" />
                <CardTitle className="text-card-foreground">Event Coordinator</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Organize and manage campaign events, rallies, and community meetings.
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-3 h-3 text-accent" />
                    Leadership role
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-3 h-3 text-accent" />
                    Event planning experience
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-3 h-3 text-accent" />
                    Team collaboration
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-2 animate-in slide-in-from-bottom duration-700 delay-400">
              <CardHeader>
                <Heart className="w-8 h-8 text-accent mb-2" />
                <CardTitle className="text-card-foreground">Digital Advocate</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Manage social media, create content, and help spread our message online.
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-3 h-3 text-accent" />
                    Remote work
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-3 h-3 text-accent" />
                    Creative freedom
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-3 h-3 text-accent" />
                    Digital skills
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Join Form */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card className="border-border shadow-lg animate-in slide-in-from-bottom duration-700">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-card-foreground">Join Our Team</CardTitle>
                <CardDescription>Fill out the form below and we'll get in touch with you soon</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Personal Information */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-card-foreground">Personal Information</h3>
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
                  <Input placeholder="Address" className="transition-all duration-200 focus:scale-105" />
                </div>

                {/* Volunteer Interests */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-card-foreground">Areas of Interest</h3>
                  <div className="grid grid-cols-2 gap-3">
                    <Button
                      variant="outline"
                      className="h-12 justify-start hover:bg-accent hover:text-accent-foreground transition-all duration-200 bg-transparent"
                    >
                      Campaign Volunteer
                    </Button>
                    <Button
                      variant="outline"
                      className="h-12 justify-start hover:bg-accent hover:text-accent-foreground transition-all duration-200 bg-transparent"
                    >
                      Event Coordinator
                    </Button>
                    <Button
                      variant="outline"
                      className="h-12 justify-start hover:bg-accent hover:text-accent-foreground transition-all duration-200 bg-transparent"
                    >
                      Digital Advocate
                    </Button>
                    <Button
                      variant="outline"
                      className="h-12 justify-start hover:bg-accent hover:text-accent-foreground transition-all duration-200 bg-transparent"
                    >
                      Policy Research
                    </Button>
                  </div>
                </div>

                {/* Availability */}
                <div>
                  <label className="text-sm font-medium text-card-foreground mb-2 block">Availability</label>
                  <div className="grid grid-cols-3 gap-3">
                    <Button
                      variant="outline"
                      className="h-10 hover:bg-accent hover:text-accent-foreground transition-all duration-200 bg-transparent"
                    >
                      Weekdays
                    </Button>
                    <Button
                      variant="outline"
                      className="h-10 hover:bg-accent hover:text-accent-foreground transition-all duration-200 bg-transparent"
                    >
                      Weekends
                    </Button>
                    <Button
                      variant="outline"
                      className="h-10 hover:bg-accent hover:text-accent-foreground transition-all duration-200 bg-transparent"
                    >
                      Evenings
                    </Button>
                  </div>
                </div>

                {/* Experience */}
                <div>
                  <label className="text-sm font-medium text-card-foreground mb-2 block">
                    Tell us about your experience and why you want to join
                  </label>
                  <Textarea
                    placeholder="Share your background, skills, and motivation for joining our team..."
                    rows={4}
                    className="transition-all duration-200 focus:scale-105"
                  />
                </div>

                {/* Submit Button */}
                <Button
                  size="lg"
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground transition-all duration-200 hover:scale-105"
                >
                  <UserPlus className="w-5 h-5 mr-2" />
                  Join Our Team
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  We'll review your application and get back to you within 48 hours. Thank you for your interest in
                  making a difference!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Join Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6 text-balance">Why Join Our Team?</h2>
            <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
              Be part of something bigger than yourself and help create lasting change
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
              <CardContent className="pt-6">
                <Users className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="font-semibold text-card-foreground mb-2">Make a Real Impact</h3>
                <p className="text-sm text-muted-foreground">
                  Your efforts directly contribute to positive changes in our community
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
              <CardContent className="pt-6">
                <Target className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="font-semibold text-card-foreground mb-2">Develop Skills</h3>
                <p className="text-sm text-muted-foreground">
                  Gain valuable experience in leadership, communication, and civic engagement
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
              <CardContent className="pt-6">
                <Heart className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="font-semibold text-card-foreground mb-2">Build Community</h3>
                <p className="text-sm text-muted-foreground">
                  Connect with like-minded individuals who share your passion for change
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
