"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Users, TrendingUp, Shield, AlertTriangle, Globe, Smartphone, LogIn } from "lucide-react"
import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"

export default function HomePage() {
  const [showAlert, setShowAlert] = useState(false)
  const [showReportModal, setShowReportModal] = useState(false)
  const [showCommunityModal, setShowCommunityModal] = useState(false)
  const [userLocation, setUserLocation] = useState<{ lat: number; lng: number } | null>(null)

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          })
        },
        (error) => {
          console.log("[v0] Geolocation error:", error)
        },
      )
    }
  }, [])

  const handleExploreReports = () => {
    setShowReportModal(true)
  }

  const handleJoinCommunity = () => {
    setShowCommunityModal(true)
  }

  const handleGetHelp = () => {
    window.location.href = "/help"
  }

  const handleViewDashboard = () => {
    // Check if user is logged in (simplified check)
    const isLoggedIn = localStorage.getItem("userLoggedIn") === "true"
    if (!isLoggedIn) {
      alert("Please log in to access the live dashboard")
      window.location.href = "/login"
    } else {
      window.location.href = "/dashboard"
    }
  }

  const handleDownloadApp = () => {
    // Simulate app store redirect
    const userAgent = navigator.userAgent.toLowerCase()
    if (userAgent.includes("android")) {
      window.open("https://play.google.com/store", "_blank")
    } else if (userAgent.includes("iphone") || userAgent.includes("ipad")) {
      window.open("https://apps.apple.com", "_blank")
    } else {
      alert("Mobile app available on iOS App Store and Google Play Store")
    }
  }

  const handleLaunchWebApp = () => {
    const isLoggedIn = localStorage.getItem("userLoggedIn") === "true"
    if (!isLoggedIn) {
      alert("Please log in to access the web platform")
      window.location.href = "/login"
    } else {
      window.location.href = "/dashboard"
    }
  }

  const handleNavigation = (section: string) => {
    if (section === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" })
    } else {
      // Scroll to specific sections
      const element = document.getElementById(section)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      } else {
        // For sections that don't exist, scroll to relevant content
        const sectionMap: { [key: string]: string } = {
          about: "features",
          reports: "dashboard-preview",
          resources: "platform-access",
          community: "features",
          contact: "footer",
        }
        const targetSection = sectionMap[section]
        if (targetSection) {
          const targetElement = document.getElementById(targetSection)
          if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth" })
          }
        }
      }
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-cyan-50">
      {/* Header */}
      <header className="border-b bg-blue-900/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 relative">
              <Image src="/varinetra-logo.png" alt="Varinetra Logo" width={40} height={40} className="rounded-lg" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">Varinetra</h1>
              <p className="text-xs text-cyan-200">Safeguarding Coastal Communities Through Intelligence</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <button
              onClick={() => handleNavigation("home")}
              className="text-white hover:text-cyan-300 transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => handleNavigation("about")}
              className="text-cyan-200 hover:text-cyan-300 transition-colors"
            >
              About
            </button>
            <button
              onClick={() => handleNavigation("reports")}
              className="text-cyan-200 hover:text-cyan-300 transition-colors"
            >
              Reports
            </button>
            <button
              onClick={() => handleNavigation("resources")}
              className="text-cyan-200 hover:text-cyan-300 transition-colors"
            >
              Resources
            </button>
            <button
              onClick={() => handleNavigation("community")}
              className="text-cyan-200 hover:text-cyan-300 transition-colors"
            >
              Community
            </button>
            <button
              onClick={() => handleNavigation("contact")}
              className="text-cyan-200 hover:text-cyan-300 transition-colors"
            >
              Contact
            </button>
          </nav>
          <div className="flex items-center space-x-3">
            <Link href="/login">
              <Button variant="ghost" className="text-cyan-200 hover:text-white hover:bg-blue-800">
                <LogIn className="w-4 h-4 mr-2" />
                Login
              </Button>
            </Link>
            <Button onClick={handleGetHelp} className="bg-cyan-500 hover:bg-cyan-600 text-blue-900">
              <AlertTriangle className="w-4 h-4 mr-2" />
              Get Help
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-800 via-blue-900 to-cyan-900 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/ocean-waves-coastline-aerial-view.jpg')] bg-cover bg-center opacity-30"></div>
        <div className="absolute inset-0 bg-blue-900/60"></div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-blue-50 to-transparent"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-32 h-32 bg-cyan-400/10 rounded-full blur-xl"></div>
          <div className="absolute top-20 right-20 w-48 h-48 bg-blue-400/10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-20 left-1/3 w-24 h-24 bg-cyan-300/10 rounded-full blur-lg"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-blue-800 text-white border-blue-700">
              Ministry of Earth Sciences • Government of India
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 text-balance">
              Advanced Ocean Intelligence for <span className="text-cyan-200">Coastal Safety</span>
            </h1>
            <p className="text-xl text-blue-50 mb-8 text-pretty max-w-2xl mx-auto leading-relaxed">
              Empowering communities through AI-driven hazard detection, real-time reporting, and comprehensive social
              media analytics for maritime safety and disaster preparedness.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={handleExploreReports} size="lg" className="bg-cyan-500 hover:bg-cyan-600 text-blue-900">
                <MapPin className="w-5 h-5 mr-2" />
                Explore Reports
              </Button>
              <Button
                onClick={handleJoinCommunity}
                size="lg"
                variant="outline"
                className="border-cyan-200 text-cyan-50 hover:bg-cyan-400 hover:text-blue-900 bg-blue-800/50"
              >
                <Users className="w-5 h-5 mr-2" />
                Join Community
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section id="features" className="py-16 bg-blue-50/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Comprehensive Ocean Safety Platform</h2>
            <p className="text-blue-700 max-w-2xl mx-auto text-pretty">
              Integrating crowdsourced reporting, social media analytics, and real-time monitoring for enhanced disaster
              preparedness and maritime safety.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-blue-200 hover:shadow-xl hover:shadow-blue-200/20 transition-all duration-300 bg-white/80 backdrop-blur-sm">
              <CardHeader className="pb-3">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-3">
                  <MapPin className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle className="text-lg text-blue-900">Geotagged Reports</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-pretty text-blue-700">
                  Submit location-based hazard reports with photos and videos for real-time situational awareness.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-cyan-200 hover:shadow-xl hover:shadow-cyan-200/20 transition-all duration-300 bg-white/80 backdrop-blur-sm">
              <CardHeader className="pb-3">
                <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-3">
                  <TrendingUp className="w-6 h-6 text-cyan-600" />
                </div>
                <CardTitle className="text-lg text-blue-900">Social Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-pretty text-blue-700">
                  AI-powered analysis of social media trends to detect and monitor ocean hazard discussions.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-blue-200 hover:shadow-xl hover:shadow-blue-200/20 transition-all duration-300 bg-white/80 backdrop-blur-sm">
              <CardHeader className="pb-3">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-3">
                  <Shield className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle className="text-lg text-blue-900">Role-Based Access</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-pretty text-blue-700">
                  Secure platform with different access levels for citizens, officials, and emergency analysts.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-cyan-200 hover:shadow-xl hover:shadow-cyan-200/20 transition-all duration-300 bg-white/80 backdrop-blur-sm">
              <CardHeader className="pb-3">
                <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-3">
                  <Globe className="w-6 h-6 text-cyan-600" />
                </div>
                <CardTitle className="text-lg text-blue-900">Multilingual Support</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-pretty text-blue-700">
                  Regional language support ensuring accessibility for diverse coastal communities across India.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Live Dashboard Preview */}
      <section id="dashboard-preview" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-cyan-100 text-cyan-700 border-cyan-300">Real-Time Monitoring</Badge>
              <h2 className="text-3xl font-bold text-blue-900 mb-6 text-balance">
                Interactive Dashboard with Live Data Visualization
              </h2>
              <p className="text-blue-700 mb-6 text-pretty leading-relaxed">
                Our dynamic dashboard aggregates crowdsourced reports and social media insights on an interactive map,
                generating hotspots based on report density and verified incidents.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-blue-900">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  Real-time hazard report visualization
                </li>
                <li className="flex items-center text-blue-900">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></div>
                  Dynamic hotspot generation
                </li>
                <li className="flex items-center text-blue-900">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  Advanced filtering by location and event type
                </li>
              </ul>
              <Button onClick={handleViewDashboard} className="bg-blue-600 hover:bg-blue-700 text-white">
                View Live Dashboard
              </Button>
            </div>
            <div className="relative">
              <div className="bg-white border-2 border-blue-200 rounded-lg p-6 shadow-xl shadow-blue-200/20">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-blue-900">Active Reports</h3>
                  <Badge variant="outline" className="text-red-600 border-red-300 bg-red-50">
                    Critical
                  </Badge>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg border border-blue-100">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                      <div>
                        <p className="text-sm font-medium text-blue-900">High Waves - Chennai</p>
                        <p className="text-xs text-blue-600">2 minutes ago</p>
                      </div>
                    </div>
                    <Badge variant="outline" className="text-red-600 border-red-300 bg-red-50">
                      Critical
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-cyan-50 rounded-lg border border-cyan-100">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                      <div>
                        <p className="text-sm font-medium text-blue-900">Storm Surge - Mumbai</p>
                        <p className="text-xs text-blue-600">15 minutes ago</p>
                      </div>
                    </div>
                    <Badge variant="outline" className="text-orange-600 border-orange-300 bg-orange-50">
                      Moderate
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg border border-blue-100">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      <div>
                        <p className="text-sm font-medium text-blue-900">Coastal Flooding - Kochi</p>
                        <p className="text-xs text-blue-600">1 hour ago</p>
                      </div>
                    </div>
                    <Badge variant="outline" className="text-blue-600 border-blue-300 bg-blue-50">
                      Low
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Access */}
      <section id="platform-access" className="py-16 bg-blue-50/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Access Anywhere, Anytime</h2>
            <p className="text-blue-700 max-w-2xl mx-auto text-pretty">
              Report hazards and access critical information through our mobile app or web platform, with offline
              capabilities for remote coastal areas.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-blue-200 hover:shadow-xl hover:shadow-blue-200/20 transition-all duration-300 bg-white/90 backdrop-blur-sm">
              <CardHeader className="text-center pb-3">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Smartphone className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl text-gray-900">Mobile Application</CardTitle>
                <CardDescription className="text-gray-700">iOS & Android compatible</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-blue-700 mb-6 text-pretty">
                  Quick reporting with camera integration, GPS tagging, and offline sync capabilities for areas with
                  limited connectivity.
                </p>
                <Button onClick={handleDownloadApp} className="w-full bg-cyan-500 hover:bg-cyan-600 text-blue-900">
                  Download App
                </Button>
              </CardContent>
            </Card>

            <Card className="border-cyan-200 hover:shadow-xl hover:shadow-cyan-200/20 transition-all duration-300 bg-white/90 backdrop-blur-sm">
              <CardHeader className="text-center pb-3">
                <div className="w-16 h-16 bg-cyan-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-cyan-600" />
                </div>
                <CardTitle className="text-xl text-gray-900">Web Platform</CardTitle>
                <CardDescription className="text-gray-700">Full-featured dashboard</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-blue-700 mb-6 text-pretty">
                  Comprehensive reporting interface with advanced analytics, data visualization, and administrative
                  tools for emergency response teams.
                </p>
                <Button
                  onClick={handleLaunchWebApp}
                  variant="outline"
                  className="w-full border-blue-500 text-blue-600 hover:bg-blue-500 hover:text-white bg-transparent"
                >
                  Launch Web App
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="footer" className="bg-blue-900 border-t border-blue-800 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 relative">
                  <Image src="/varinetra-logo.png" alt="Varinetra Logo" width={32} height={32} className="rounded-lg" />
                </div>
                <div>
                  <h3 className="font-bold text-white">Varinetra</h3>
                  <p className="text-xs text-cyan-200">Ocean Intelligence Platform</p>
                </div>
              </div>
              <p className="text-sm text-blue-200 text-pretty">
                Advanced ocean hazard monitoring and coastal safety intelligence platform by INCOIS, Ministry of Earth
                Sciences, Government of India.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Platform</h4>
              <ul className="space-y-2 text-sm text-blue-200">
                <li>
                  <button onClick={handleExploreReports} className="hover:text-cyan-300 transition-colors text-left">
                    Report Hazard
                  </button>
                </li>
                <li>
                  <Link href="/dashboard" className="hover:text-cyan-300 transition-colors">
                    View Dashboard
                  </Link>
                </li>
                <li>
                  <button onClick={handleDownloadApp} className="hover:text-cyan-300 transition-colors text-left">
                    Mobile App
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => alert("API documentation coming soon!")}
                    className="hover:text-cyan-300 transition-colors text-left"
                  >
                    API Access
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-blue-200">
                <li>
                  <Link href="/docs" className="hover:text-cyan-300 transition-colors">
                    Documentation
                  </Link>
                </li>
                <li>
                  <button
                    onClick={() => alert("Training materials coming soon!")}
                    className="hover:text-cyan-300 transition-colors text-left"
                  >
                    Training Materials
                  </button>
                </li>
                <li>
                  <Link href="/community" className="hover:text-cyan-300 transition-colors">
                    Community Guidelines
                  </Link>
                </li>
                <li>
                  <Link href="/help" className="hover:text-cyan-300 transition-colors">
                    Support
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Emergency</h4>
              <ul className="space-y-2 text-sm text-blue-200">
                <li>
                  <button
                    onClick={() =>
                      alert(
                        "Emergency Contacts:\nNational Emergency: 112\nCoast Guard: 1554\nVarinetra: +91-9877986877",
                      )
                    }
                    className="hover:text-cyan-300 transition-colors text-left"
                  >
                    Emergency Contacts
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => alert("Disaster preparedness guidelines will be available soon!")}
                    className="hover:text-cyan-300 transition-colors text-left"
                  >
                    Disaster Preparedness
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => alert("Early warning system information coming soon!")}
                    className="hover:text-cyan-300 transition-colors text-left"
                  >
                    Early Warning System
                  </button>
                </li>
                <li>
                  <Link href="/safety" className="hover:text-cyan-300 transition-colors">
                    Safety Guidelines
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-blue-800 mt-8 pt-8 text-center">
            <p className="text-sm text-blue-200">
              © 2025 Varinetra - Indian National Centre for Ocean Information Services (INCOIS). All rights reserved. |
              Ministry of Earth Sciences, Government of India
            </p>
          </div>
        </div>
      </footer>

      {/* Report Modal */}
      {showReportModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <h3 className="text-xl font-bold text-blue-900 mb-4">Report Ocean Hazard</h3>
            <p className="text-blue-700 mb-6">
              Help keep coastal communities safe by reporting ocean hazards you observe. Your reports contribute to
              real-time monitoring and early warning systems.
            </p>
            <div className="flex space-x-3">
              <Link href="/dashboard" className="flex-1">
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">Go to Dashboard</Button>
              </Link>
              <Button
                variant="outline"
                onClick={() => setShowReportModal(false)}
                className="flex-1 border-blue-600 text-blue-600 hover:bg-blue-50"
              >
                Close
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Community Modal */}
      {showCommunityModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <h3 className="text-xl font-bold text-blue-900 mb-4">Join Our Community</h3>
            <p className="text-blue-700 mb-6">
              Connect with coastal communities, emergency responders, and ocean safety experts. Share knowledge and stay
              informed about ocean hazards in your area.
            </p>
            <div className="flex space-x-3">
              <Link href="/login" className="flex-1">
                <Button className="w-full bg-cyan-500 hover:bg-cyan-600 text-blue-900">Sign Up / Login</Button>
              </Link>
              <Button
                variant="outline"
                onClick={() => setShowCommunityModal(false)}
                className="flex-1 border-cyan-500 text-cyan-600 hover:bg-cyan-50"
              >
                Close
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
