"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import {
  ArrowLeft,
  AlertTriangle,
  TrendingUp,
  MapPin,
  Activity,
  Users,
  Bell,
  Waves,
  Camera,
  Send,
  Settings,
  Shield,
  BarChart3,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Image from "next/image"

export default function Dashboard() {
  const [user, setUser] = useState<{ email: string; role: string } | null>(null)
  const [userLocation, setUserLocation] = useState<{ lat: number; lng: number } | null>(null)
  const [showReportForm, setShowReportForm] = useState(false)
  const [showAdminSettings, setShowAdminSettings] = useState(false)
  const [showAnalytics, setShowAnalytics] = useState(false)
  const [showAllReports, setShowAllReports] = useState(false)
  const [reportData, setReportData] = useState({
    type: "",
    severity: "",
    description: "",
    location: "",
    photo: null as File | null,
    video: null as File | null,
  })

  const [alerts, setAlerts] = useState([
    { id: 1, type: "High Wave Alert", location: "Coastal Tamil Nadu", status: "Active", severity: "high" },
    { id: 2, type: "Storm Surge Watch", location: "Andhra Pradesh Coast", status: "Potential", severity: "medium" },
    { id: 3, type: "Tsunami Warning", location: "No active warnings", status: "Clear", severity: "low" },
  ])

  const [stats, setStats] = useState({
    reportsToday: 1204,
    activeAlerts: 15,
    topRegion: "Mumbai",
    socialMentions: 2847,
  })

  useEffect(() => {
    const userData = localStorage.getItem("incois_user")
    if (!userData) {
      window.location.href = "/login"
      return
    }
    setUser(JSON.parse(userData))

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          })
          setReportData((prev) => ({
            ...prev,
            location: `${position.coords.latitude.toFixed(4)}, ${position.coords.longitude.toFixed(4)}`,
          }))
        },
        (error) => {
          console.log("[v0] Geolocation error:", error)
          setReportData((prev) => ({
            ...prev,
            location: "Location not available",
          }))
        },
      )
    }

    const script = document.createElement("script")
    script.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
    script.onload = initializeMap
    document.head.appendChild(script)

    const link = document.createElement("link")
    link.rel = "stylesheet"
    link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
    document.head.appendChild(link)

    return () => {
      document.head.removeChild(script)
      document.head.removeChild(link)
    }
  }, [])

  const initializeMap = () => {
    if (typeof window !== "undefined" && (window as any).L) {
      const L = (window as any).L

      const mapOptions = {
        dragging: true,
        scrollWheelZoom: true,
        touchZoom: true,
        doubleClickZoom: true,
        boxZoom: true,
        keyboard: true,
        zoomControl: true,
      }

      const map = L.map("dashboard-map", mapOptions).setView([20.5937, 78.9629], 5)

      L.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png", {
        attribution: "&copy; OpenStreetMap contributors &copy; CARTO",
        subdomains: "abcd",
        maxZoom: 20,
      }).addTo(map)

      const hotspots = [
        { lat: 19.076, lng: 72.8777, type: "High Waves", severity: "high" },
        { lat: 13.0827, lng: 80.2707, type: "Storm Surge", severity: "medium" },
        { lat: 17.6868, lng: 83.2185, type: "Unusual Tides", severity: "medium" },
        { lat: 11.6234, lng: 92.7265, type: "Official Warning", severity: "high" },
      ]

      hotspots.forEach((spot) => {
        const color = spot.severity === "high" ? "#dc2626" : spot.severity === "medium" ? "#f59e0b" : "#10b981"

        L.circleMarker([spot.lat, spot.lng], {
          radius: 10,
          fillColor: color,
          color: "#fff",
          weight: 2,
          opacity: 1,
          fillOpacity: 0.8,
        })
          .addTo(map)
          .bindPopup(
            `<strong>${spot.type}</strong><br>Severity: ${spot.severity}<br>Location: ${spot.lat.toFixed(2)}, ${spot.lng.toFixed(2)}`,
          )
      })
    }
  }

  const handleReportSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!userLocation) {
      alert("Location is required to submit a report. Please enable location services.")
      return
    }

    alert(
      `Report submitted successfully!\nType: ${reportData.type}\nSeverity: ${reportData.severity}\nLocation: ${reportData.location}`,
    )
    setShowReportForm(false)
    setReportData({
      type: "",
      severity: "",
      description: "",
      location: userLocation ? `${userLocation.lat.toFixed(4)}, ${userLocation.lng.toFixed(4)}` : "",
      photo: null,
      video: null,
    })
  }

  const handleAdminSettings = () => {
    setShowAdminSettings(true)
  }

  const handleAnalytics = () => {
    setShowAnalytics(true)
  }

  const handleViewAllReports = () => {
    setShowAllReports(true)
  }

  const handleReadMore = () => {
    window.open("https://incois.gov.in/portal/osf/sf.jsp", "_blank")
  }

  const handleFileUpload = (type: "photo" | "video", file: File | null) => {
    setReportData((prev) => ({ ...prev, [type]: file }))
  }

  const handleLogout = () => {
    localStorage.removeItem("incois_user")
    localStorage.removeItem("userLoggedIn")
    window.location.href = "/"
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-blue-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-blue-600">Loading dashboard...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-900 to-blue-800 text-white shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/">
                <Button variant="ghost" size="sm" className="text-white hover:bg-blue-800">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Home
                </Button>
              </Link>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 relative">
                  <Image src="/varinetra-logo.png" alt="Varinetra Logo" width={32} height={32} className="rounded-lg" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold">Varinetra Dashboard</h1>
                  <p className="text-blue-200">Real-time Ocean Hazard Monitoring</p>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant="outline" className="text-white border-white">
                {user.role === "admin" ? <Shield className="h-3 w-3 mr-1" /> : <Users className="h-3 w-3 mr-1" />}
                {user.role === "admin" ? "Administrator" : "Community User"}
              </Badge>
              <Bell className="h-6 w-6 text-yellow-300" />
              <span className="text-sm">Welcome, {user.email}</span>
              <Button variant="ghost" size="sm" onClick={handleLogout} className="text-white hover:bg-blue-800">
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Quick Actions */}
        <div className="mb-8 flex flex-wrap gap-4">
          <Button onClick={() => setShowReportForm(true)} className="bg-red-600 hover:bg-red-700 text-white">
            <AlertTriangle className="h-4 w-4 mr-2" />
            Report Hazard
          </Button>
          {user.role === "admin" && (
            <>
              <Button
                onClick={handleAdminSettings}
                variant="outline"
                className="border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent"
              >
                <Settings className="h-4 w-4 mr-2" />
                Admin Settings
              </Button>
              <Button
                onClick={handleAnalytics}
                variant="outline"
                className="border-green-600 text-green-600 hover:bg-green-50 bg-transparent"
              >
                <BarChart3 className="h-4 w-4 mr-2" />
                Analytics
              </Button>
            </>
          )}
        </div>

        {/* Real-time Alerts */}
        <Card className="mb-8 border-l-4 border-l-red-500">
          <CardHeader>
            <CardTitle className="flex items-center text-red-700">
              <AlertTriangle className="h-5 w-5 mr-2" />
              Real-time Alerts
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {alerts.map((alert) => (
                <div
                  key={alert.id}
                  className={`p-3 rounded-lg border-l-4 ${
                    alert.severity === "high"
                      ? "border-l-red-500 bg-red-50"
                      : alert.severity === "medium"
                        ? "border-l-yellow-500 bg-yellow-50"
                        : "border-l-green-500 bg-green-50"
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <strong className="text-gray-900">{alert.type}:</strong>
                      <span className="ml-2 text-gray-700">{alert.location}</span>
                    </div>
                    <span
                      className={`px-2 py-1 rounded text-xs font-medium ${
                        alert.status === "Active"
                          ? "bg-red-100 text-red-800"
                          : alert.status === "Potential"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-green-100 text-green-800"
                      }`}
                    >
                      [{alert.status}]
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Statistics Grid - Different for Admin vs User */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-100">Reports Today</p>
                  <p className="text-3xl font-bold">{stats.reportsToday.toLocaleString()}</p>
                </div>
                <Activity className="h-8 w-8 text-blue-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-red-500 to-red-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-red-100">Active Alerts</p>
                  <p className="text-3xl font-bold">{stats.activeAlerts}</p>
                </div>
                <AlertTriangle className="h-8 w-8 text-red-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-green-500 to-green-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-green-100">{user.role === "admin" ? "Top Region" : "Your Area"}</p>
                  <p className="text-2xl font-bold">{user.role === "admin" ? stats.topRegion : "Safe"}</p>
                </div>
                <MapPin className="h-8 w-8 text-green-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-500 to-purple-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-100">{user.role === "admin" ? "Social Mentions" : "My Reports"}</p>
                  <p className="text-3xl font-bold">
                    {user.role === "admin" ? stats.socialMentions.toLocaleString() : "3"}
                  </p>
                </div>
                <Users className="h-8 w-8 text-purple-200" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* News & Advisories */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-blue-700">
                <TrendingUp className="h-5 w-5 mr-2" />
                News & Advisories (Varinetra)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                Latest update: Fishermen are advised not to venture into the sea along the south Tamil Nadu coast due to
                high winds and rough sea conditions.
              </p>
              <Button
                onClick={handleReadMore}
                variant="outline"
                size="sm"
                className="text-blue-600 border-blue-600 hover:bg-blue-50 bg-transparent"
              >
                Read more...
              </Button>
            </CardContent>
          </Card>

          {/* Recent Reports */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-blue-700">
                <Waves className="h-5 w-5 mr-2" />
                Recent Hazard Reports
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                {user.role === "admin"
                  ? "Crowdsourced reports show unusual tide levels near Puri, Odisha. Social media trends indicate rising concern about rip currents in Goa."
                  : "Your recent reports and community updates from your area. Stay informed about local ocean conditions."}
              </p>
              <div className="flex space-x-2">
                <Button
                  onClick={handleViewAllReports}
                  variant="outline"
                  size="sm"
                  className="text-blue-600 border-blue-600 hover:bg-blue-50 bg-transparent"
                >
                  View All Reports
                </Button>
                <Button
                  onClick={() => setShowReportForm(true)}
                  variant="outline"
                  size="sm"
                  className="text-green-600 border-green-600 hover:bg-green-50 bg-transparent"
                >
                  Submit Report
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Interactive Map */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center text-blue-700">
              <MapPin className="h-5 w-5 mr-2" />
              Live Hazard Map: Active Hotspots
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div id="dashboard-map" className="h-96 w-full rounded-lg border border-gray-200"></div>
            <div className="mt-4 flex items-center space-x-6 text-sm text-gray-600">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                High Severity
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                Medium Severity
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                Low Severity
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Analytics Chart Section for Admin */}
        {user.role === "admin" && (
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center text-blue-700">
                <BarChart3 className="h-5 w-5 mr-2" />
                Hazard Reports Analytics
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg flex items-center justify-center border-2 border-dashed border-blue-200">
                <div className="text-center">
                  <BarChart3 className="h-12 w-12 text-blue-400 mx-auto mb-2" />
                  <p className="text-blue-600 font-medium">Interactive Analytics Chart</p>
                  <p className="text-blue-500 text-sm">Real-time hazard reporting trends and statistics</p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>

      {/* Report Form Modal */}
      {showReportForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-6 max-w-md w-full max-h-[90vh] overflow-y-auto">
            <h3 className="text-xl font-bold text-blue-900 mb-4">Report Ocean Hazard</h3>
            <form onSubmit={handleReportSubmit} className="space-y-4">
              <div>
                <Label htmlFor="hazard-type">Hazard Type</Label>
                <Select
                  value={reportData.type}
                  onValueChange={(value) => setReportData((prev) => ({ ...prev, type: value }))}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select hazard type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="high-waves">High Waves</SelectItem>
                    <SelectItem value="storm-surge">Storm Surge</SelectItem>
                    <SelectItem value="tsunami">Tsunami</SelectItem>
                    <SelectItem value="coastal-flooding">Coastal Flooding</SelectItem>
                    <SelectItem value="unusual-tides">Unusual Tides</SelectItem>
                    <SelectItem value="rip-currents">Rip Currents</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="severity">Danger Level</Label>
                <Select
                  value={reportData.severity}
                  onValueChange={(value) => setReportData((prev) => ({ ...prev, severity: value }))}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select danger level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="low">Low - Minor concern</SelectItem>
                    <SelectItem value="medium">Medium - Moderate risk</SelectItem>
                    <SelectItem value="high">High - Immediate danger</SelectItem>
                    <SelectItem value="critical">Critical - Life threatening</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="location">Location</Label>
                <Input
                  id="location"
                  value={reportData.location}
                  onChange={(e) => setReportData((prev) => ({ ...prev, location: e.target.value }))}
                  placeholder="Auto-detected location"
                  readOnly
                  className="bg-gray-50"
                />
                <p className="text-xs text-gray-500 mt-1">Location automatically detected from your device</p>
              </div>

              <div>
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  value={reportData.description}
                  onChange={(e) => setReportData((prev) => ({ ...prev, description: e.target.value }))}
                  placeholder="Describe what you observed..."
                  rows={3}
                />
              </div>

              <div>
                <Label htmlFor="photo-upload">Photo Upload</Label>
                <div className="mt-2">
                  <input
                    type="file"
                    id="photo-upload"
                    accept="image/*"
                    onChange={(e) => handleFileUpload("photo", e.target.files?.[0] || null)}
                    className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                  />
                  {reportData.photo && (
                    <p className="text-xs text-green-600 mt-1">Photo selected: {reportData.photo.name}</p>
                  )}
                </div>
              </div>

              <div>
                <Label htmlFor="video-upload">Video Upload</Label>
                <div className="mt-2">
                  <input
                    type="file"
                    id="video-upload"
                    accept="video/*"
                    onChange={(e) => handleFileUpload("video", e.target.files?.[0] || null)}
                    className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                  />
                  {reportData.video && (
                    <p className="text-xs text-green-600 mt-1">Video selected: {reportData.video.name}</p>
                  )}
                </div>
              </div>

              <div className="flex items-center space-x-2 text-sm text-blue-600 bg-blue-50 p-3 rounded-lg">
                <Camera className="h-4 w-4" />
                <span>Photos and videos help authorities assess the situation more accurately</span>
              </div>

              <div className="flex space-x-3 pt-4">
                <Button type="submit" className="flex-1 bg-red-600 hover:bg-red-700 text-white">
                  <Send className="h-4 w-4 mr-2" />
                  Submit Report
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setShowReportForm(false)}
                  className="flex-1 border-gray-300 text-gray-600 hover:bg-gray-50"
                >
                  Cancel
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Admin Settings Modal */}
      {showAdminSettings && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <h3 className="text-xl font-bold text-blue-900 mb-4">Admin Settings</h3>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <Card>
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-blue-800 mb-2">User Management</h4>
                    <p className="text-sm text-gray-600 mb-3">Manage user accounts and permissions</p>
                    <Button size="sm" className="w-full">
                      Manage Users
                    </Button>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-blue-800 mb-2">Alert Configuration</h4>
                    <p className="text-sm text-gray-600 mb-3">Configure alert thresholds and notifications</p>
                    <Button size="sm" className="w-full">
                      Configure Alerts
                    </Button>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-blue-800 mb-2">System Settings</h4>
                    <p className="text-sm text-gray-600 mb-3">General system configuration</p>
                    <Button size="sm" className="w-full">
                      System Config
                    </Button>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-blue-800 mb-2">Data Export</h4>
                    <p className="text-sm text-gray-600 mb-3">Export reports and analytics data</p>
                    <Button size="sm" className="w-full">
                      Export Data
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
            <div className="flex justify-end mt-6">
              <Button
                onClick={() => setShowAdminSettings(false)}
                variant="outline"
                className="border-gray-300 text-gray-600 hover:bg-gray-50"
              >
                Close
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Analytics Modal */}
      {showAnalytics && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <h3 className="text-xl font-bold text-blue-900 mb-4">Analytics Dashboard</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-sm">Reports by Region</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-32 bg-gradient-to-r from-blue-100 to-cyan-100 rounded flex items-center justify-center">
                    <p className="text-blue-600">Regional Distribution Chart</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-sm">Severity Trends</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-32 bg-gradient-to-r from-red-100 to-orange-100 rounded flex items-center justify-center">
                    <p className="text-red-600">Severity Timeline Chart</p>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="flex justify-end">
              <Button
                onClick={() => setShowAnalytics(false)}
                variant="outline"
                className="border-gray-300 text-gray-600 hover:bg-gray-50"
              >
                Close
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* View All Reports Modal */}
      {showAllReports && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <h3 className="text-xl font-bold text-blue-900 mb-4">All Hazard Reports</h3>
            <div className="space-y-4">
              {[
                {
                  id: 1,
                  type: "High Waves",
                  location: "Mumbai Coast",
                  severity: "High",
                  time: "2 hours ago",
                  reporter: "Fisherman",
                },
                {
                  id: 2,
                  type: "Storm Surge",
                  location: "Chennai Port",
                  severity: "Medium",
                  time: "4 hours ago",
                  reporter: "Coast Guard",
                },
                {
                  id: 3,
                  type: "Unusual Tides",
                  location: "Goa Beach",
                  severity: "Low",
                  time: "6 hours ago",
                  reporter: "Tourist",
                },
                {
                  id: 4,
                  type: "Rip Currents",
                  location: "Puri Coast",
                  severity: "High",
                  time: "8 hours ago",
                  reporter: "Lifeguard",
                },
              ].map((report) => (
                <Card key={report.id} className="border-l-4 border-l-blue-500">
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-semibold text-blue-900">{report.type}</h4>
                        <p className="text-sm text-gray-600">
                          {report.location} • {report.time}
                        </p>
                        <p className="text-xs text-gray-500">Reported by: {report.reporter}</p>
                      </div>
                      <Badge
                        variant="outline"
                        className={
                          report.severity === "High"
                            ? "border-red-300 text-red-700"
                            : report.severity === "Medium"
                              ? "border-yellow-300 text-yellow-700"
                              : "border-green-300 text-green-700"
                        }
                      >
                        {report.severity}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="flex justify-end mt-6">
              <Button
                onClick={() => setShowAllReports(false)}
                variant="outline"
                className="border-gray-300 text-gray-600 hover:bg-gray-50"
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
