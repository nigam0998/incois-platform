"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { ArrowLeft, FileText, Download, BookOpen, Video, Users, Shield } from "lucide-react"
import Link from "next/link"

export default function DocumentationPage() {
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
              <h1 className="text-xl font-bold text-white">Varinetra Documentation</h1>
              <p className="text-xs text-cyan-200">User Guides & Resources</p>
            </div>
          </div>
          <div className="w-20"></div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 bg-gradient-to-br from-blue-800 via-blue-900 to-cyan-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-4 bg-cyan-500 text-blue-900">Comprehensive Documentation</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Platform Documentation</h1>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto text-pretty">
            Complete guides, tutorials, and resources for using the Varinetra ocean hazard reporting platform
            effectively.
          </p>
        </div>
      </section>

      {/* Documentation Sections */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-blue-200 hover:shadow-xl hover:shadow-blue-200/20 transition-all duration-300">
              <CardHeader>
                <BookOpen className="w-8 h-8 text-blue-600 mb-3" />
                <CardTitle className="text-blue-900">Getting Started</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-blue-700 mb-4">
                  Learn the basics of using Varinetra for ocean hazard reporting and monitoring.
                </p>
                <ul className="text-sm text-blue-600 space-y-2 mb-4">
                  <li>• Platform overview</li>
                  <li>• Account registration</li>
                  <li>• First hazard report</li>
                  <li>• Dashboard navigation</li>
                </ul>
                <Button className="w-full" onClick={() => alert("Getting Started guide will be available soon!")}>
                  Read Guide
                </Button>
              </CardContent>
            </Card>

            <Card className="border-cyan-200 hover:shadow-xl hover:shadow-cyan-200/20 transition-all duration-300">
              <CardHeader>
                <FileText className="w-8 h-8 text-cyan-600 mb-3" />
                <CardTitle className="text-blue-900">Reporting Guidelines</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-blue-700 mb-4">Best practices for accurate and effective hazard reporting.</p>
                <ul className="text-sm text-blue-600 space-y-2 mb-4">
                  <li>• Report classification</li>
                  <li>• Photo/video guidelines</li>
                  <li>• Location accuracy</li>
                  <li>• Severity assessment</li>
                </ul>
                <Button className="w-full" onClick={() => alert("Reporting guidelines will be available soon!")}>
                  View Guidelines
                </Button>
              </CardContent>
            </Card>

            <Card className="border-blue-200 hover:shadow-xl hover:shadow-blue-200/20 transition-all duration-300">
              <CardHeader>
                <Video className="w-8 h-8 text-blue-600 mb-3" />
                <CardTitle className="text-blue-900">Video Tutorials</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-blue-700 mb-4">Step-by-step video guides for all platform features.</p>
                <ul className="text-sm text-blue-600 space-y-2 mb-4">
                  <li>• Mobile app tutorial</li>
                  <li>• Dashboard walkthrough</li>
                  <li>• Report submission</li>
                  <li>• Admin features</li>
                </ul>
                <Button className="w-full" onClick={() => alert("Video tutorials coming soon!")}>
                  Watch Videos
                </Button>
              </CardContent>
            </Card>

            <Card className="border-green-200 hover:shadow-xl hover:shadow-green-200/20 transition-all duration-300">
              <CardHeader>
                <Shield className="w-8 h-8 text-green-600 mb-3" />
                <CardTitle className="text-blue-900">Safety Protocols</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-blue-700 mb-4">
                  Essential safety information for coastal areas and emergency situations.
                </p>
                <ul className="text-sm text-blue-600 space-y-2 mb-4">
                  <li>• Emergency procedures</li>
                  <li>• Evacuation guidelines</li>
                  <li>• Personal safety tips</li>
                  <li>• Communication protocols</li>
                </ul>
                <Button className="w-full" onClick={() => alert("Safety protocols will be available soon!")}>
                  Read Protocols
                </Button>
              </CardContent>
            </Card>

            <Card className="border-purple-200 hover:shadow-xl hover:shadow-purple-200/20 transition-all duration-300">
              <CardHeader>
                <Users className="w-8 h-8 text-purple-600 mb-3" />
                <CardTitle className="text-blue-900">API Documentation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-blue-700 mb-4">Technical documentation for developers and system integrators.</p>
                <ul className="text-sm text-blue-600 space-y-2 mb-4">
                  <li>• REST API endpoints</li>
                  <li>• Authentication</li>
                  <li>• Data formats</li>
                  <li>• Integration examples</li>
                </ul>
                <Button className="w-full" onClick={() => alert("API documentation coming soon!")}>
                  View API Docs
                </Button>
              </CardContent>
            </Card>

            <Card className="border-orange-200 hover:shadow-xl hover:shadow-orange-200/20 transition-all duration-300">
              <CardHeader>
                <Download className="w-8 h-8 text-orange-600 mb-3" />
                <CardTitle className="text-blue-900">Downloads</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-blue-700 mb-4">Downloadable resources, forms, and reference materials.</p>
                <ul className="text-sm text-blue-600 space-y-2 mb-4">
                  <li>• User manual (PDF)</li>
                  <li>• Quick reference cards</li>
                  <li>• Training materials</li>
                  <li>• Mobile app</li>
                </ul>
                <Button className="w-full" onClick={() => alert("Downloads will be available soon!")}>
                  Download Resources
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-900 text-center mb-12">Frequently Asked Questions</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                question: "How do I report an ocean hazard?",
                answer:
                  "Log into the platform, click 'Report Hazard', fill in the details including location, hazard type, and severity level. Add photos or videos if available.",
              },
              {
                question: "What types of hazards can I report?",
                answer:
                  "You can report high waves, storm surges, tsunamis, coastal flooding, unusual tides, rip currents, and other ocean-related hazards.",
              },
              {
                question: "Is my location automatically detected?",
                answer:
                  "Yes, the platform uses GPS to automatically detect your location when reporting hazards, ensuring accurate positioning.",
              },
              {
                question: "Can I use the platform offline?",
                answer: "The mobile app supports offline reporting, which syncs when you reconnect to the internet.",
              },
            ].map((faq, index) => (
              <Card key={index} className="border-blue-200">
                <CardHeader>
                  <CardTitle className="text-lg text-blue-900">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-blue-700">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
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
              <h3 className="font-bold text-white">Varinetra Documentation</h3>
              <p className="text-xs text-cyan-200">Comprehensive User Resources</p>
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
