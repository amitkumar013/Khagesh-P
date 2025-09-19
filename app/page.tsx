"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Heart, Users, Target, Award, Mail, Phone, MapPin, Calendar, UserPlus, Menu, X } from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"
import Image from "next/image"
import khagesh from "../public/Khagesh.jpg"
export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-background/95 backdrop-blur-md shadow-lg" : "bg-background/90 backdrop-blur-sm"
        } border-b border-border`}
      >
        <div className="container mx-auto px-4 py-3 lg:py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-accent rounded-full flex items-center justify-center shadow-lg ring-2 ring-accent/20 overflow-hidden">
                <Image
                  src={khagesh}
                  alt="Khagesh logo"
                  width={48}
                  height={48}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="animate-in slide-in-from-left duration-500">
                  <Link href="#home" className="font-bold text-lg lg:text-xl text-primary">Khagesh Kumar</Link>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-6">
              <a
                href="#about"
                className="text-muted-foreground hover:text-primary transition-all duration-200 hover:scale-105 text-sm font-medium"
              >
                About
              </a>
              <a
                href="#vision"
                className="text-muted-foreground hover:text-primary transition-all duration-200 hover:scale-105 text-sm font-medium"
              >
                Vision
              </a>
              <a
                href="#achievements"
                className="text-muted-foreground hover:text-primary transition-all duration-200 hover:scale-105 text-sm font-medium"
              >
                Achievements
              </a>
              <a
                href="#community"
                className="text-muted-foreground hover:text-primary transition-all duration-200 hover:scale-105 text-sm font-medium"
              >
                Community
              </a>
              <a
                href="#contact"
                className="text-muted-foreground hover:text-primary transition-all duration-200 hover:scale-105 text-sm font-medium"
              >
                Contact
              </a>
              <Link href="/donation">
                <Button
                  size="sm"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground transition-all duration-200 hover:scale-105"
                >
                  <Heart className="w-4 h-4 mr-2" />
                  Donate
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-muted-foreground hover:text-primary transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden mt-4 pb-4 border-t border-border animate-in slide-in-from-top duration-300">
              <div className="flex flex-col space-y-3 pt-4">
                <a
                  href="#about"
                  className="text-muted-foreground hover:text-primary transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </a>
                <a
                  href="#vision"
                  className="text-muted-foreground hover:text-primary transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Vision
                </a>
                <a
                  href="#achievements"
                  className="text-muted-foreground hover:text-primary transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Achievements
                </a>
                <a
                  href="#community"
                  className="text-muted-foreground hover:text-primary transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Community
                </a>
                <a
                  href="#contact"
                  className="text-muted-foreground hover:text-primary transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </a>
                <div className="flex flex-col sm:flex-row gap-2 pt-2">
                  <Link href="/donation" onClick={() => setIsMenuOpen(false)}>
                    <Button size="sm" className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-accent-foreground">
                      <Heart className="w-4 h-4 mr-2" />
                      Donate Now
                    </Button>
                  </Link>
                  <Link href="/join-team" onClick={() => setIsMenuOpen(false)}>
                    <Button size="sm" variant="outline" className="w-full sm:w-auto bg-transparent">
                      <UserPlus className="w-4 h-4 mr-2" />
                      Join Team
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section with Photo First */}
      <section id="home" className="relative pt-20 lg:pt-24 pb-16 lg:pb-24 bg-gradient-to-br from-muted/50 to-background overflow-hidden">
        <div className="container mx-auto px-4">
          {/* Photo Section - Now at Top */}
          <div className="flex justify-center mb-8 lg:mb-12 animate-in fade-in-50 duration-700">
            <div className="relative">
              <div className="w-48 h-48 sm:w-56 sm:h-56 lg:w-80 lg:h-80 rounded-full bg-muted overflow-hidden shadow-2xl ring-4 ring-accent/20 hover:ring-accent/40 transition-all duration-500 hover:scale-105">
                <Image
                  src={khagesh}
                  alt="Khagesh Kumar"
                  className="w-full h-full object-cover"
                />
              </div>
             </div>  
          </div>

          {/* Content Section */}
          <div className="max-w-4xl mx-auto text-center space-y-4 lg:space-y-6 animate-in fade-in-50 duration-700 delay-200">
            <Badge variant="secondary" className="w-fit mx-auto animate-in slide-in-from-top duration-500 delay-400">
              <Users className="w-3 h-3 mr-1" />
              Serving the Community
            </Badge>

            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-primary leading-tight text-balance">
              <span className="inline-block animate-in slide-in-from-left duration-700 delay-500">Building</span>{" "}
              <span className="inline-block animate-in slide-in-from-bottom duration-700 delay-600">a</span>{" "}
              <span className="inline-block animate-in slide-in-from-right duration-700 delay-700 text-accent">
                Better
              </span>{" "}
              <span className="inline-block animate-in slide-in-from-left duration-700 delay-800">Tomorrow</span>
              <br className="hidden sm:block" />
              <span className="inline-block animate-in slide-in-from-bottom duration-700 delay-900">
                for Our Community
              </span>
            </h1>

            <p className="text-base lg:text-lg text-muted-foreground leading-relaxed text-pretty max-w-3xl mx-auto animate-in fade-in-50 duration-700 delay-1000 px-4 sm:px-0">
              With integrity, vision, and unwavering commitment to public service, I stand ready to represent your voice
              and champion the causes that matter most to our community.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 justify-center animate-in slide-in-from-bottom duration-700 delay-1100 px-4 sm:px-0">
              <Link href="/donation">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-accent-foreground transition-all duration-200 hover:scale-105"
                >
                  <Heart className="w-5 h-5 mr-2" />
                  Support My Campaign
                </Button>
              </Link>
              <Link href="/join-team">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto transition-all duration-200 hover:scale-105 bg-transparent"
                >
                  <UserPlus className="w-5 h-5 mr-2" />
                  Join Our Team
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 lg:py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12 lg:mb-16 animate-in fade-in-50 duration-700">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-4 lg:mb-6 text-balance">
              <span className="inline-block animate-in slide-in-from-left duration-600">About</span>{" "}
              <span className="inline-block animate-in slide-in-from-right duration-600 delay-200 text-accent">
                Khagesh Kumar
              </span>
            </h2>
            <p className="text-base lg:text-lg text-muted-foreground leading-relaxed text-pretty animate-in fade-in-50 duration-700 delay-300">
              A dedicated public servant with a proven track record of community leadership, policy innovation, and
              grassroots advocacy for positive change.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <Card className="border-border hover:shadow-lg transition-all hover:-translate-y-1 animate-in slide-in-from-bottom duration-700 delay-200">
              <CardHeader>
                <Target className="w-8 h-8 text-accent mb-2" />
                <CardTitle className="text-card-foreground text-lg">Vision-Driven Leadership</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm lg:text-base">
                  Committed to creating sustainable solutions that address the real challenges facing our community
                  today and tomorrow.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-all hover:-translate-y-1 animate-in slide-in-from-bottom duration-700 delay-400">
              <CardHeader>
                <Users className="w-8 h-8 text-accent mb-2" />
                <CardTitle className="text-card-foreground text-lg">Community First</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm lg:text-base">
                  Every decision is made with the community&apos;s best interests at heart, ensuring transparency and
                  accountability in governance.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-all hover:-translate-y-1 animate-in slide-in-from-bottom duration-700 delay-600 sm:col-span-2 lg:col-span-1">
              <CardHeader>
                <Award className="w-8 h-8 text-accent mb-2" />
                <CardTitle className="text-card-foreground text-lg">Proven Results</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm lg:text-base">
                  A track record of successful initiatives in education, healthcare, infrastructure, and economic
                  development.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Vision & Policies */}
      <section id="vision" className="py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12 lg:mb-16 animate-in fade-in-50 duration-700">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-4 lg:mb-6 text-balance">
              <span className="inline-block animate-in slide-in-from-bottom duration-600">My Vision for</span>{" "}
              <span className="inline-block animate-in slide-in-from-top duration-600 delay-200 text-accent">
                Our Future
              </span>
            </h2>
            <p className="text-base lg:text-lg text-muted-foreground leading-relaxed text-pretty animate-in fade-in-50 duration-700 delay-300">
              Together, we can build a stronger, more prosperous community that works for everyone.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            <div className="space-y-6 animate-in slide-in-from-left duration-700 delay-200">
              <div className="border-l-4 border-accent pl-4 lg:pl-6 hover:pl-6 lg:hover:pl-8 transition-all duration-300">
                <h3 className="text-lg lg:text-xl font-semibold text-primary mb-2">Economic Development</h3>
                <p className="text-muted-foreground text-sm lg:text-base">
                  Creating jobs, supporting local businesses, and attracting sustainable industries that benefit our
                  entire community.
                </p>
              </div>

              <div className="border-l-4 border-accent pl-4 lg:pl-6 hover:pl-6 lg:hover:pl-8 transition-all duration-300">
                <h3 className="text-lg lg:text-xl font-semibold text-primary mb-2">Education Excellence</h3>
                <p className="text-muted-foreground text-sm lg:text-base">
                  Investing in our schools, teachers, and students to ensure every child has access to quality
                  education.
                </p>
              </div>

              <div className="border-l-4 border-accent pl-4 lg:pl-6 hover:pl-6 lg:hover:pl-8 transition-all duration-300">
                <h3 className="text-lg lg:text-xl font-semibold text-primary mb-2">Healthcare Access</h3>
                <p className="text-muted-foreground text-sm lg:text-base">
                  Expanding healthcare services and ensuring affordable, quality care for all community members.
                </p>
              </div>
            </div>

            <div className="space-y-6 animate-in slide-in-from-right duration-700 delay-400">
              <div className="border-l-4 border-accent pl-4 lg:pl-6 hover:pl-6 lg:hover:pl-8 transition-all duration-300">
                <h3 className="text-lg lg:text-xl font-semibold text-primary mb-2">Infrastructure Modernization</h3>
                <p className="text-muted-foreground text-sm lg:text-base">
                  Upgrading roads, bridges, and public facilities while investing in green technology and
                  sustainability.
                </p>
              </div>

              <div className="border-l-4 border-accent pl-4 lg:pl-6 hover:pl-6 lg:hover:pl-8 transition-all duration-300">
                <h3 className="text-lg lg:text-xl font-semibold text-primary mb-2">Public Safety</h3>
                <p className="text-muted-foreground text-sm lg:text-base">
                  Ensuring our neighborhoods are safe through community policing and crime prevention programs.
                </p>
              </div>

              <div className="border-l-4 border-accent pl-4 lg:pl-6 hover:pl-6 lg:hover:pl-8 transition-all duration-300">
                <h3 className="text-lg lg:text-xl font-semibold text-primary mb-2">Environmental Protection</h3>
                <p className="text-muted-foreground text-sm lg:text-base">
                  Protecting our natural resources and promoting sustainable practices for future generations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section id="achievements" className="py-16 lg:py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12 lg:mb-16 animate-in fade-in-50 duration-700">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-4 lg:mb-6 text-balance">
              <span className="inline-block animate-in slide-in-from-left duration-600">Proven</span>{" "}
              <span className="inline-block animate-in slide-in-from-right duration-600 delay-200 text-accent">
                Track Record
              </span>
            </h2>
            <p className="text-base lg:text-lg text-muted-foreground leading-relaxed text-pretty animate-in fade-in-50 duration-700 delay-300">
              Real achievements that have made a tangible difference in our community.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            <Card className="text-center border-border hover:shadow-lg transition-all hover:-translate-y-2 hover:scale-105 animate-in slide-in-from-bottom duration-700 delay-200">
              <CardContent className="pt-4 lg:pt-6">
                <div className="text-2xl lg:text-3xl font-bold text-accent mb-1 lg:mb-2">500+</div>
                <p className="text-muted-foreground text-xs lg:text-sm">Jobs Created</p>
              </CardContent>
            </Card>

            <Card className="text-center border-border hover:shadow-lg transition-all hover:-translate-y-2 hover:scale-105 animate-in slide-in-from-bottom duration-700 delay-300">
              <CardContent className="pt-4 lg:pt-6">
                <div className="text-2xl lg:text-3xl font-bold text-accent mb-1 lg:mb-2">12</div>
                <p className="text-muted-foreground text-xs lg:text-sm">Schools Improved</p>
              </CardContent>
            </Card>

            <Card className="text-center border-border hover:shadow-lg transition-all hover:-translate-y-2 hover:scale-105 animate-in slide-in-from-bottom duration-700 delay-400">
              <CardContent className="pt-4 lg:pt-6">
                <div className="text-2xl lg:text-3xl font-bold text-accent mb-1 lg:mb-2">₹50M</div>
                <p className="text-muted-foreground text-xs lg:text-sm">Infrastructure Investment</p>
              </CardContent>
            </Card>

            <Card className="text-center border-border hover:shadow-lg transition-all hover:-translate-y-2 hover:scale-105 animate-in slide-in-from-bottom duration-700 delay-500">
              <CardContent className="pt-4 lg:pt-6">
                <div className="text-2xl lg:text-3xl font-bold text-accent mb-1 lg:mb-2">25+</div>
                <p className="text-muted-foreground text-xs lg:text-sm">Community Programs</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* My Team Section */}
      <section id="community" className="py-16 lg:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12 lg:mb-16 animate-in fade-in-50 duration-700">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-4 lg:mb-6 text-balance">
              <span className="inline-block animate-in slide-in-from-bottom duration-600">Meet</span>{" "}
              <span className="inline-block animate-in slide-in-from-top duration-600 delay-200 text-accent">
                Our Team
              </span>
            </h2>
            <p className="text-base lg:text-lg text-muted-foreground leading-relaxed text-pretty animate-in fade-in-50 duration-700 delay-300">
              Dedicated professionals working together to serve our community with passion and expertise.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
            <Card className="text-center border-border hover:shadow-lg transition-all hover:-translate-y-2 animate-in slide-in-from-bottom duration-700 delay-200">
              <CardContent className="pt-4 lg:pt-6">
                <div className="w-16 h-16 lg:w-24 lg:h-24 bg-muted rounded-full mx-auto mb-3 lg:mb-4 overflow-hidden">
                  <Image
                    src={khagesh}
                    alt="Priya Sharma"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-semibold text-card-foreground mb-1 text-sm lg:text-base">Priya Sharma</h3>
                <p className="text-xs lg:text-sm text-muted-foreground mb-1 lg:mb-2">Campaign Manager</p>
                <p className="text-xs text-muted-foreground hidden lg:block">
                  Strategic planning and community outreach specialist
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-border hover:shadow-lg transition-all hover:-translate-y-2 animate-in slide-in-from-bottom duration-700 delay-300">
              <CardContent className="pt-4 lg:pt-6">
                <div className="w-16 h-16 lg:w-24 lg:h-24 bg-muted rounded-full mx-auto mb-3 lg:mb-4 overflow-hidden">
                  <Image
                    src={khagesh}
                    alt="Rajesh Patel"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-semibold text-card-foreground mb-1 text-sm lg:text-base">Rajesh Patel</h3>
                <p className="text-xs lg:text-sm text-muted-foreground mb-1 lg:mb-2">Policy Advisor</p>
                <p className="text-xs text-muted-foreground hidden lg:block">Education and healthcare policy expert</p>
              </CardContent>
            </Card>

            <Card className="text-center border-border hover:shadow-lg transition-all hover:-translate-y-2 animate-in slide-in-from-bottom duration-700 delay-400">
              <CardContent className="pt-4 lg:pt-6">
                <div className="w-16 h-16 lg:w-24 lg:h-24 bg-muted rounded-full mx-auto mb-3 lg:mb-4 overflow-hidden">
                  <Image
                    src={khagesh}
                    alt="Dr. Meera Singh"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-semibold text-card-foreground mb-1 text-sm lg:text-base">Dr. Meera Singh</h3>
                <p className="text-xs lg:text-sm text-muted-foreground mb-1 lg:mb-2">Communications Director</p>
                <p className="text-xs text-muted-foreground hidden lg:block">Media relations and public engagement</p>
              </CardContent>
            </Card>

            <Card className="text-center border-border hover:shadow-lg transition-all hover:-translate-y-2 animate-in slide-in-from-bottom duration-700 delay-500">
              <CardContent className="pt-4 lg:pt-6">
                <div className="w-16 h-16 lg:w-24 lg:h-24 bg-muted rounded-full mx-auto mb-3 lg:mb-4 overflow-hidden">
                  <Image
                  src={khagesh}
                  alt="Amit Kumar" 
                  className="w-full h-full object-cover" />
                </div>
                <h3 className="font-semibold text-card-foreground mb-1 text-sm lg:text-base">Amit Kumar</h3>
                <p className="text-xs lg:text-sm text-muted-foreground mb-1 lg:mb-2">Volunteer Coordinator</p>
                <p className="text-xs text-muted-foreground hidden lg:block">
                  Community engagement and grassroots organizing
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Donation Section */}
      <section className="py-20 bg-accent text-accent-foreground animate-in fade-in-50 duration-700">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-balance">Support Our Campaign for Change</h2>
            <p className="text-lg mb-8 opacity-90 leading-relaxed text-pretty">
              Your contribution helps us build a stronger community. Every donation, no matter the size, makes a
              difference in our mission to serve the people.
            </p>

            <div className="grid md:grid-cols-4 gap-4 mb-8">
              <Button
                variant="secondary"
                size="lg"
                className="bg-white/20 hover:bg-white/30 text-accent-foreground border-white/30 transition-all duration-200 hover:scale-105"
              >
                ₹500
              </Button>
              <Button
                variant="secondary"
                size="lg"
                className="bg-white/20 hover:bg-white/30 text-accent-foreground border-white/30 transition-all duration-200 hover:scale-105"
              >
                ₹1,000
              </Button>
              <Button
                variant="secondary"
                size="lg"
                className="bg-white/20 hover:bg-white/30 text-accent-foreground border-white/30 transition-all duration-200 hover:scale-105"
              >
                ₹2,500
              </Button>
              <Button
                variant="secondary"
                size="lg"
                className="bg-white/20 hover:bg-white/30 text-accent-foreground border-white/30 transition-all duration-200 hover:scale-105"
              >
                Custom
              </Button>
            </div>

            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-accent hover:bg-white/90 transition-all duration-200 hover:scale-105"
            >
              <Heart className="w-5 h-5 mr-2" />
              Donate Securely Now
            </Button>

            <p className="text-sm mt-4 opacity-75">
              All donations are secure and go directly towards community development initiatives.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 animate-in fade-in-50 duration-700">
              <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6 text-balance">Get in Touch</h2>
              <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
                Have questions, concerns, or ideas? I want to hear from you. Together, we can build a better future.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <div className="space-y-6 animate-in slide-in-from-left duration-700 delay-200">
                <div className="flex items-start gap-4 hover:translate-x-2 transition-transform duration-200">
                  <Mail className="w-6 h-6 text-accent mt-1" />
                  <div>
                    <h3 className="font-semibold text-card-foreground mb-1">Email</h3>
                    <p className="text-muted-foreground">contact@khageshkumar.in</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 hover:translate-x-2 transition-transform duration-200">
                  <Phone className="w-6 h-6 text-accent mt-1" />
                  <div>
                    <h3 className="font-semibold text-card-foreground mb-1">Phone</h3>
                    <p className="text-muted-foreground">+91 98765 43210</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 hover:translate-x-2 transition-transform duration-200">
                  <MapPin className="w-6 h-6 text-accent mt-1" />
                  <div>
                    <h3 className="font-semibold text-card-foreground mb-1">Office Address</h3>
                    <p className="text-muted-foreground">
                      123 Community Center Road
                      <br />
                      District Office, City 110001
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 hover:translate-x-2 transition-transform duration-200">
                  <Calendar className="w-6 h-6 text-accent mt-1" />
                  <div>
                    <h3 className="font-semibold text-card-foreground mb-1">Office Hours</h3>
                    <p className="text-muted-foreground">
                      Monday - Friday: 9:00 AM - 6:00 PM
                      <br />
                      Saturday: 10:00 AM - 2:00 PM
                    </p>
                  </div>
                </div>
              </div>

              <Card className="border-border hover:shadow-lg transition-all animate-in slide-in-from-right duration-700 delay-400">
                <CardHeader>
                  <CardTitle className="text-card-foreground">Send a Message</CardTitle>
                  <CardDescription>Share your thoughts, concerns, or suggestions directly with me.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input placeholder="Your Name" className="transition-all duration-200 focus:scale-105" />
                    <Input
                      placeholder="Your Email"
                      type="email"
                      className="transition-all duration-200 focus:scale-105"
                    />
                  </div>
                  <Input placeholder="Subject" className="transition-all duration-200 focus:scale-105" />
                  <Textarea
                    placeholder="Your Message"
                    rows={4}
                    className="transition-all duration-200 focus:scale-105"
                  />
                  <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground transition-all duration-200 hover:scale-105">
                    Send Message
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center animate-in fade-in-50 duration-700">
            <h3 className="text-2xl font-bold mb-4">Khagesh Kumar</h3>
            <p className="text-primary-foreground/80 mb-6">
              Committed to serving our community with integrity, vision, and dedication.
            </p>
            <div className="flex justify-center space-x-6 mb-6">
              <a
                href="#"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-all duration-200 hover:scale-110"
              >
                Facebook
              </a>
              <a
                href="#"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-all duration-200 hover:scale-110"
              >
                Twitter
              </a>
              <a
                href="#"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-all duration-200 hover:scale-110"
              >
                Instagram
              </a>
              <a
                href="#"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-all duration-200 hover:scale-110"
              >
                LinkedIn
              </a>
            </div>
            <p className="text-sm text-primary-foreground/60">
              © 2024 Khagesh Kumar. All rights reserved. | Paid for by Friends of Khagesh Kumar
            </p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes slideInFromBottom {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideInFromLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideInFromRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideInFromTop {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes textReveal {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-text-reveal {
          animation: textReveal 0.8s ease-out forwards;
        }
        
        .animate-on-scroll {
          animation: slideInFromBottom 0.6s ease-out forwards;
        }
        
        .animate-scale {
          animation: fadeInScale 0.5s ease-out forwards;
        }
        
        @media (max-width: 640px) {
          .animate-in {
            animation-duration: 0.4s;
          }
        }
      `}</style>
    </div>
  )
}
