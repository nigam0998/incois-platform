"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { ArrowLeft, Users, MessageCircle, Globe, Star, MapPin } from "lucide-react"
import Link from "next/link"

export default function CommunityPage() {
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
              <h1 className="text-xl font-bold text-white">Varinetra Community</h1>
              <p className="text-xs text-cyan-200">Connect & Collaborate</p>
            </div>
          </div>
          <div className="w-20"></div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 bg-gradient-to-br from-blue-800 via-blue-900 to-cyan-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-4 bg-cyan-500 text-blue-900">Growing Community</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Join Our Community</h1>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto text-pretty">
            Connect with coastal communities, emergency responders, and ocean safety experts. Share knowledge and stay
            informed about ocean hazards.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/login">
              <Button size="lg" className="bg-cyan-500 hover:bg-cyan-600 text-blue-900">
                <Users className="w-5 h-5 mr-2" />
                Join Community
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="border-cyan-200 text-cyan-50 hover:bg-cyan-400 hover:text-blue-900 bg-blue-800/50"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Browse Discussions
            </Button>
          </div>
        </div>
      </section>

      {/* Community Stats */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <Card className="text-center border-blue-200">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-blue-600 mb-2">2,847</div>
                <p className="text-blue-700">Active Members</p>
              </CardContent>
            </Card>
            <Card className="text-center border-cyan-200">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-cyan-600 mb-2">1,204</div>
                <p className="text-blue-700">Reports Shared</p>
              </CardContent>
            </Card>
            <Card className="text-center border-green-200">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-green-600 mb-2">156</div>
                <p className="text-blue-700">Coastal Areas</p>
              </CardContent>
            </Card>
            <Card className="text-center border-purple-200">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-purple-600 mb-2">24/7</div>
                <p className="text-blue-700">Support Available</p>
              </CardContent>
            </Card>
          </div>

          <h2 className="text-3xl font-bold text-blue-900 text-center mb-8">Community Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-blue-200 hover:shadow-xl hover:shadow-blue-200/20 transition-all duration-300">
              <CardHeader>
                <MessageCircle className="w-8 h-8 text-blue-600 mb-3" />
                <CardTitle className="text-blue-900">Discussion Forums</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-blue-700 mb-4">
                  Engage in discussions about ocean safety, share experiences, and learn from experts and fellow
                  community members.
                </p>
                <Button className="w-full" onClick={() => alert("Discussion forums coming soon!")}>
                  Join Discussions
                </Button>
              </CardContent>
            </Card>

            <Card className="border-cyan-200 hover:shadow-xl hover:shadow-cyan-200/20 transition-all duration-300">
              <CardHeader>
                <Globe className="w-8 h-8 text-cyan-600 mb-3" />
                <CardTitle className="text-blue-900">Regional Groups</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-blue-700 mb-4">
                  Connect with people in your coastal region, share local knowledge, and coordinate community responses.
                </p>
                <Button className="w-full" onClick={() => alert("Regional groups will be available soon!")}>
                  Find Your Region
                </Button>
              </CardContent>
            </Card>

            <Card className="border-green-200 hover:shadow-xl hover:shadow-green-200/20 transition-all duration-300">
              <CardHeader>
                <Star className="w-8 h-8 text-green-600 mb-3" />
                <CardTitle className="text-blue-900">Expert Network</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-blue-700 mb-4">
                  Get insights from oceanographers, meteorologists, and emergency response professionals.
                </p>
                <Button className="w-full" onClick={() => alert("Expert network coming soon!")}>
                  Connect with Experts
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Recent Activity */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-900 text-center mb-12">Recent Community Activity</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                user: "Coastal Fisherman",
                location: "Chennai",
                activity: "Shared a high wave alert with photos",
                time: "2 hours ago",
                type: "report",
              },
              {
                user: "Dr. Ocean Expert",
                location: "Mumbai",
                activity: "Posted safety guidelines for storm season",
                time: "4 hours ago",
                type: "discussion",
              },
              {
                user: "Beach Lifeguard",
                location: "Goa",
                activity: "Updated rip current conditions",
                time: "6 hours ago",
                type: "report",
              },
              {
                user: "Community Volunteer",
                location: "Kochi",
                activity: "Organized coastal cleanup event",
                time: "1 day ago",
                type: "event",
              },
            ].map((activity, index) => (
              <Card key={index} className="border-blue-200">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                        <Users className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <div className="flex items-center space-x-2 mb-1">
                          <h4 className="font-semibold text-blue-900">{activity.user}</h4>
                          <Badge variant="outline" className="text-xs">
                            <MapPin className="w-3 h-3 mr-1" />
                            {activity.location}
                          </Badge>
                        </div>
                        <p className="text-blue-700">{activity.activity}</p>
                        <p className="text-sm text-blue-500 mt-1">{activity.time}</p>
                      </div>
                    </div>
                    <Badge
                      variant="outline"
                      className={
                        activity.type === "report"
                          ? "border-red-300 text-red-700"
                          : activity.type === "discussion"
                            ? "border-blue-300 text-blue-700"
                            : "border-green-300 text-green-700"
                      }
                    >
                      {activity.type}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 bg-blue-50/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Ready to Join?</h2>
          <p className="text-blue-700 mb-8 max-w-2xl mx-auto">
            Become part of a growing community dedicated to ocean safety and coastal protection. Your participation
            makes a difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/login">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                Create Account
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent"
            >
              Learn More
            </Button>
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
              <h3 className="font-bold text-white">Varinetra Community</h3>
              <p className="text-xs text-cyan-200">Connecting Coastal Communities</p>
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
