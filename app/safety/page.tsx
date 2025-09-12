"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { ArrowLeft, Shield, AlertTriangle, Phone, MapPin, Clock, Waves, Wind, Zap } from "lucide-react"
import Link from "next/link"

export default function SafetyPage() {
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
              <h1 className="text-xl font-bold text-white">Safety Guidelines</h1>
              <p className="text-xs text-cyan-200">Ocean & Coastal Safety</p>
            </div>
          </div>
          <div className="w-20"></div>
        </div>
      </header>

      {/* Emergency Banner */}
      <div className="bg-red-600 text-white py-3">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center space-x-2 text-center">
            <AlertTriangle className="w-5 h-5" />
            <span className="font-semibold">
              Emergency? Call 112 immediately • Coast Guard: 1554 • Varinetra: +91-9877986877
            </span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-12 bg-gradient-to-br from-blue-800 via-blue-900 to-cyan-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-4 bg-cyan-500 text-blue-900">Essential Safety Information</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Ocean Safety Guidelines</h1>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto text-pretty">
            Essential safety information for coastal areas, emergency preparedness, and ocean hazard response protocols.
          </p>
        </div>
      </section>

      {/* Quick Safety Tips */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-900 text-center mb-12">Quick Safety Tips</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-red-200 bg-red-50/50">
              <CardHeader>
                <Waves className="w-8 h-8 text-red-600 mb-3" />
                <CardTitle className="text-red-900">High Waves</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-red-700 space-y-2">
                  <li>• Stay away from shoreline</li>
                  <li>• Avoid fishing or boating</li>
                  <li>• Secure coastal property</li>
                  <li>• Monitor weather updates</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-orange-200 bg-orange-50/50">
              <CardHeader>
                <Wind className="w-8 h-8 text-orange-600 mb-3" />
                <CardTitle className="text-orange-900">Storm Surge</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-orange-700 space-y-2">
                  <li>• Evacuate low-lying areas</li>
                  <li>• Move to higher ground</li>
                  <li>• Avoid driving through floods</li>
                  <li>• Follow evacuation orders</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-purple-200 bg-purple-50/50">
              <CardHeader>
                <Zap className="w-8 h-8 text-purple-600 mb-3" />
                <CardTitle className="text-purple-900">Tsunami</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-purple-700 space-y-2">
                  <li>• Move inland immediately</li>
                  <li>• Seek high ground (30m+)</li>
                  <li>• Don't wait for official warning</li>
                  <li>• Stay away for hours</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-blue-200 bg-blue-50/50">
              <CardHeader>
                <MapPin className="w-8 h-8 text-blue-600 mb-3" />
                <CardTitle className="text-blue-900">Rip Currents</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-blue-700 space-y-2">
                  <li>• Don't fight the current</li>
                  <li>• Swim parallel to shore</li>
                  <li>• Signal for help</li>
                  <li>• Float if tired</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Detailed Guidelines */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-900 text-center mb-12">Detailed Safety Guidelines</h2>
          <div className="max-w-4xl mx-auto space-y-8">
            <Card className="border-blue-200">
              <CardHeader>
                <CardTitle className="text-blue-900 flex items-center">
                  <Shield className="w-6 h-6 mr-2" />
                  Before Ocean Hazards
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-blue-800 mb-3">Preparation</h4>
                    <ul className="text-blue-700 space-y-2">
                      <li>• Monitor weather forecasts regularly</li>
                      <li>• Know evacuation routes and shelters</li>
                      <li>• Prepare emergency kit (water, food, medicines)</li>
                      <li>• Keep important documents safe</li>
                      <li>• Charge electronic devices</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-800 mb-3">Communication</h4>
                    <ul className="text-blue-700 space-y-2">
                      <li>• Share plans with family members</li>
                      <li>• Register with local authorities</li>
                      <li>• Download Varinetra mobile app</li>
                      <li>• Keep emergency contact numbers handy</li>
                      <li>• Stay informed through official channels</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-red-200">
              <CardHeader>
                <CardTitle className="text-red-900 flex items-center">
                  <AlertTriangle className="w-6 h-6 mr-2" />
                  During Ocean Hazards
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-red-800 mb-3">Immediate Actions</h4>
                    <ul className="text-red-700 space-y-2">
                      <li>• Follow evacuation orders immediately</li>
                      <li>• Stay away from beaches and coastline</li>
                      <li>• Avoid driving through flooded areas</li>
                      <li>• Stay indoors if possible</li>
                      <li>• Keep away from windows</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-800 mb-3">Safety Measures</h4>
                    <ul className="text-red-700 space-y-2">
                      <li>• Turn off utilities if instructed</li>
                      <li>• Use battery-powered radio for updates</li>
                      <li>• Don't use elevators</li>
                      <li>• Help others if safe to do so</li>
                      <li>• Report hazards through Varinetra</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-green-200">
              <CardHeader>
                <CardTitle className="text-green-900 flex items-center">
                  <Clock className="w-6 h-6 mr-2" />
                  After Ocean Hazards
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-green-800 mb-3">Recovery</h4>
                    <ul className="text-green-700 space-y-2">
                      <li>• Wait for official all-clear before returning</li>
                      <li>• Check for injuries and provide first aid</li>
                      <li>• Inspect property for damage</li>
                      <li>• Document damage with photos</li>
                      <li>• Contact insurance companies</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-800 mb-3">Caution</h4>
                    <ul className="text-green-700 space-y-2">
                      <li>• Avoid damaged buildings and power lines</li>
                      <li>• Don't drink contaminated water</li>
                      <li>• Be careful of debris and sharp objects</li>
                      <li>• Watch for aftershocks or secondary hazards</li>
                      <li>• Report ongoing hazards</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Emergency Contacts */}
      <section className="py-12 bg-blue-50/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-900 text-center mb-12">Emergency Contacts</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { title: "National Emergency", number: "112", description: "All emergencies" },
              { title: "Coast Guard", number: "1554", description: "Maritime emergencies" },
              { title: "Varinetra Emergency", number: "+91-9877986877", description: "Ocean hazard reporting" },
              { title: "Disaster Management", number: "1070", description: "Natural disasters" },
            ].map((contact, index) => (
              <Card key={index} className="border-red-200 text-center">
                <CardHeader>
                  <Phone className="w-8 h-8 text-red-600 mx-auto mb-2" />
                  <CardTitle className="text-red-900">{contact.title}</CardTitle>
                  <div className="text-2xl font-bold text-red-600">{contact.number}</div>
                </CardHeader>
                <CardContent>
                  <p className="text-red-700 text-sm mb-4">{contact.description}</p>
                  <Button
                    className="w-full bg-red-600 hover:bg-red-700 text-white"
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

      {/* Footer */}
      <footer className="bg-blue-900 py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-8 h-8 relative">
              <Image src="/varinetra-logo.png" alt="Varinetra Logo" width={32} height={32} className="rounded-lg" />
            </div>
            <div>
              <h3 className="font-bold text-white">Varinetra Safety Guidelines</h3>
              <p className="text-xs text-cyan-200">Ocean & Coastal Safety Information</p>
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
