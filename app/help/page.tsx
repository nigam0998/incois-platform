"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import {
  Phone,
  Mail,
  MapPin,
  AlertTriangle,
  Shield,
  Users,
  FileText,
  ArrowLeft,
  ExternalLink,
  MessageCircle,
  Globe,
  Download,
} from "lucide-react"
import Link from "next/link"

export default function HelpPage() {
  const emergencyContacts = [
    {
      title: "National Emergency",
      number: "112",
      description: "All emergency services",
      available: "24/7",
    },
    {
      title: "Indian Coast Guard",
      number: "1554",
      description: "Maritime emergencies",
      available: "24/7",
    },
    {
      title: "Varinetra Emergency",
      number: "+91-9877986877",
      description: "Ocean hazard reporting",
      available: "24/7",
    },
    {
      title: "Disaster Management",
      number: "1070",
      description: "Natural disaster helpline",
      available: "24/7",
    },
  ]

  const quickActions = [
    {
      title: "Report Ocean Hazard",
      description: "Submit immediate hazard report",
      icon: AlertTriangle,
      action: () => window.open("/", "_self"),
      urgent: true,
    },
    {
      title: "View Live Dashboard",
      description: "Check current hazard status",
      icon: Globe,
      action: () => window.open("/dashboard", "_self"),
      urgent: false,
    },
    {
      title: "Download Mobile App",
      description: "Get the mobile app for offline reporting",
      icon: Download,
      action: () => {
        const userAgent = navigator.userAgent.toLowerCase()
        if (userAgent.includes("android")) {
          window.open("https://play.google.com/store/apps/details?id=com.varinetra.oceanwatch", "_blank")
        } else if (userAgent.includes("iphone") || userAgent.includes("ipad")) {
          window.open("https://apps.apple.com/app/varinetra-ocean-watch/id123456789", "_blank")
        } else {
          alert("Mobile app available on Google Play Store and Apple App Store")
        }
      },
      urgent: false,
    },
    {
      title: "Contact Support",
      description: "Get technical assistance",
      icon: MessageCircle,
      action: () => window.open("mailto:support@varinetra.gov.in"),
      urgent: false,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-cyan-50">
      {/* Header */}
      <header className="border-b bg-blue-900/95 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Link href="/" className="flex items-center space-x-2 text-cyan-200 hover:text-white transition-colors">
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Home</span>
            </Link>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 relative">
              <Image src="/varinetra-logo.png" alt="Varinetra Logo" width={40} height={40} className="rounded-lg" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">Varinetra Help Center</h1>
              <p className="text-xs text-cyan-200">Emergency Support & Resources</p>
            </div>
          </div>
          <div className="w-20"></div> {/* Spacer for balance */}
        </div>
      </header>

      {/* Emergency Alert Banner */}
      <div className="bg-red-600 text-white py-3">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center space-x-2 text-center">
            <AlertTriangle className="w-5 h-5" />
            <span className="font-semibold">Emergency? Call 112 immediately for life-threatening situations</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-12 bg-gradient-to-br from-blue-800 via-blue-900 to-cyan-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-4 bg-cyan-500 text-blue-900">24/7 Support Available</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Get Help When You Need It Most</h1>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto text-pretty">
            Access emergency contacts, report ocean hazards, and find the support you need for maritime safety and
            disaster preparedness.
          </p>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-900 text-center mb-8">Quick Actions</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickActions.map((action, index) => (
              <Card
                key={index}
                className={`cursor-pointer transition-all duration-300 hover:shadow-xl ${
                  action.urgent
                    ? "border-red-300 hover:shadow-red-200/20 bg-red-50/50"
                    : "border-blue-200 hover:shadow-blue-200/20 bg-white/80"
                }`}
                onClick={action.action}
              >
                <CardHeader className="pb-3">
                  <div
                    className={`w-12 h-12 rounded-lg flex items-center justify-center mb-3 ${
                      action.urgent ? "bg-red-100" : "bg-blue-100"
                    }`}
                  >
                    <action.icon className={`w-6 h-6 ${action.urgent ? "text-red-600" : "text-blue-600"}`} />
                  </div>
                  <CardTitle className={`text-lg ${action.urgent ? "text-red-900" : "text-blue-900"}`}>
                    {action.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className={action.urgent ? "text-red-700" : "text-blue-700"}>
                    {action.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Contacts */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Emergency Contacts</h2>
            <p className="text-blue-700 max-w-2xl mx-auto">
              Keep these numbers handy for immediate assistance during ocean hazards and maritime emergencies.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {emergencyContacts.map((contact, index) => (
              <Card
                key={index}
                className="border-red-200 hover:shadow-xl hover:shadow-red-200/20 transition-all duration-300"
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-2">
                    <Phone className="w-6 h-6 text-red-600" />
                    <Badge variant="outline" className="text-green-600 border-green-300 bg-green-50">
                      {contact.available}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg text-red-900">{contact.title}</CardTitle>
                  <div className="text-2xl font-bold text-red-600">{contact.number}</div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-blue-700">{contact.description}</CardDescription>
                  <Button
                    className="w-full mt-4 bg-red-600 hover:bg-red-700 text-white"
                    onClick={() => window.open(`tel:${contact.number}`)}
                  >
                    Call Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Support Resources */}
      <section className="py-12 bg-blue-50/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-900 text-center mb-12">Support Resources</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-blue-200 hover:shadow-xl hover:shadow-blue-200/20 transition-all duration-300">
              <CardHeader>
                <FileText className="w-8 h-8 text-blue-600 mb-3" />
                <CardTitle className="text-blue-900">Documentation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-blue-700 mb-4">
                  Comprehensive guides on using the platform, reporting procedures, and safety protocols.
                </p>
                <Button
                  variant="outline"
                  className="w-full border-blue-500 text-blue-600 hover:bg-blue-500 hover:text-white bg-transparent"
                  onClick={() => window.open("/docs", "_blank")}
                >
                  View Documentation
                </Button>
              </CardContent>
            </Card>

            <Card className="border-cyan-200 hover:shadow-xl hover:shadow-cyan-200/20 transition-all duration-300">
              <CardHeader>
                <Users className="w-8 h-8 text-cyan-600 mb-3" />
                <CardTitle className="text-blue-900">Community Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-blue-700 mb-4">
                  Connect with other users, share experiences, and get help from the community.
                </p>
                <Button
                  variant="outline"
                  className="w-full border-cyan-500 text-cyan-600 hover:bg-cyan-500 hover:text-white bg-transparent"
                  onClick={() => window.open("/community", "_blank")}
                >
                  Join Community
                </Button>
              </CardContent>
            </Card>

            <Card className="border-blue-200 hover:shadow-xl hover:shadow-blue-200/20 transition-all duration-300">
              <CardHeader>
                <Shield className="w-8 h-8 text-blue-600 mb-3" />
                <CardTitle className="text-blue-900">Safety Guidelines</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-blue-700 mb-4">
                  Essential safety information for coastal areas and emergency preparedness.
                </p>
                <Button
                  variant="outline"
                  className="w-full border-blue-500 text-blue-600 hover:bg-blue-500 hover:text-white bg-transparent"
                  onClick={() => window.open("/safety", "_blank")}
                >
                  Safety Guidelines
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-blue-900 text-center mb-12">Contact Varinetra</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-blue-200">
                <CardHeader>
                  <CardTitle className="text-blue-900 flex items-center">
                    <MapPin className="w-5 h-5 mr-2" />
                    Office Address
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-blue-700 mb-4">
                    Indian National Centre for Ocean Information Services
                    <br />
                    Pragathi Nagar (BO), Nizampet (SO)
                    <br />
                    Hyderabad - 500090
                    <br />
                    Telangana, India
                  </p>
                  <Button
                    variant="outline"
                    className="border-blue-500 text-blue-600 hover:bg-blue-500 hover:text-white bg-transparent"
                    onClick={() => window.open("https://maps.google.com/?q=INCOIS+Hyderabad", "_blank")}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View on Map
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-cyan-200">
                <CardHeader>
                  <CardTitle className="text-blue-900 flex items-center">
                    <Mail className="w-5 h-5 mr-2" />
                    Email Support
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-4">
                    <div>
                      <p className="font-medium text-blue-900">General Inquiries:</p>
                      <p className="text-blue-700">info@varinetra.gov.in</p>
                    </div>
                    <div>
                      <p className="font-medium text-blue-900">Technical Support:</p>
                      <p className="text-blue-700">support@varinetra.gov.in</p>
                    </div>
                    <div>
                      <p className="font-medium text-blue-900">Emergency Reports:</p>
                      <p className="text-blue-700">emergency@varinetra.gov.in</p>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    className="border-cyan-500 text-cyan-600 hover:bg-cyan-500 hover:text-white bg-transparent"
                    onClick={() => window.open("mailto:support@varinetra.gov.in")}
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Send Email
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-8 h-8 relative">
              <Image src="/varinetra-logo.png" alt="Varinetra Logo" width={32} height={32} className="rounded-lg" />
            </div>
            <div>
              <h3 className="font-bold text-white">Varinetra Help Center</h3>
              <p className="text-xs text-cyan-200">24/7 Emergency Support</p>
            </div>
          </div>
          <p className="text-sm text-blue-200">
            © 2025 Varinetra - Ocean Information Services Platform
            <br />
            Ministry of Earth Sciences, Government of India
          </p>
        </div>
      </footer>
    </div>
  )
}
