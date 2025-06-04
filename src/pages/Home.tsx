
import React from 'react';
import { Link } from 'react-router-dom';
import { Camera, Leaf, History, BookOpen, Settings, Sparkles, ArrowRight, Star } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-green-600 to-emerald-600 text-white">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative container mx-auto px-4 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-3xl flex items-center justify-center">
                <Leaf className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Discover Nature with
              <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                PlantScan AI
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-green-100">
              Identify any plant instantly using advanced AI technology. Get detailed care instructions and build your plant collection.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/scanner">
                <Button size="lg" className="bg-white text-green-600 hover:bg-green-50 text-lg px-8 py-6 rounded-2xl shadow-lg">
                  <Camera className="w-6 h-6 mr-2" />
                  Start Scanning
                </Button>
              </Link>
              <Link to="/encyclopedia">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8 py-6 rounded-2xl">
                  <BookOpen className="w-6 h-6 mr-2" />
                  Browse Plants
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Choose PlantScan AI?</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience the most advanced plant identification technology with features designed for plant enthusiasts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="group hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-green-200">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-green-800">AI-Powered Recognition</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-600 text-center">
                Advanced machine learning algorithms provide 99% accurate plant identification from just a single photo.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-green-200">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-green-800">Care Instructions</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-600 text-center">
                Get detailed care guides, watering schedules, and growing tips tailored to each specific plant.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-green-200">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <History className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-green-800">Personal Collection</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-600 text-center">
                Build and manage your personal plant collection with photos, notes, and care tracking.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white/80 backdrop-blur-sm border-t border-green-100">
        <div className="container mx-auto px-4 py-16">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">Quick Actions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link to="/scanner" className="group">
              <Card className="hover:shadow-lg transition-all duration-200 border-green-200 group-hover:border-green-400">
                <CardContent className="p-6 text-center">
                  <Camera className="w-12 h-12 text-green-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <h4 className="font-semibold text-gray-800 mb-2">Scan Plant</h4>
                  <p className="text-sm text-gray-600">Take a photo to identify</p>
                  <ArrowRight className="w-5 h-5 text-green-600 mx-auto mt-3 group-hover:translate-x-1 transition-transform" />
                </CardContent>
              </Card>
            </Link>

            <Link to="/history" className="group">
              <Card className="hover:shadow-lg transition-all duration-200 border-green-200 group-hover:border-green-400">
                <CardContent className="p-6 text-center">
                  <History className="w-12 h-12 text-green-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <h4 className="font-semibold text-gray-800 mb-2">My Plants</h4>
                  <p className="text-sm text-gray-600">View your collection</p>
                  <ArrowRight className="w-5 h-5 text-green-600 mx-auto mt-3 group-hover:translate-x-1 transition-transform" />
                </CardContent>
              </Card>
            </Link>

            <Link to="/encyclopedia" className="group">
              <Card className="hover:shadow-lg transition-all duration-200 border-green-200 group-hover:border-green-400">
                <CardContent className="p-6 text-center">
                  <BookOpen className="w-12 h-12 text-green-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <h4 className="font-semibold text-gray-800 mb-2">Encyclopedia</h4>
                  <p className="text-sm text-gray-600">Browse plant database</p>
                  <ArrowRight className="w-5 h-5 text-green-600 mx-auto mt-3 group-hover:translate-x-1 transition-transform" />
                </CardContent>
              </Card>
            </Link>

            <Link to="/profile" className="group">
              <Card className="hover:shadow-lg transition-all duration-200 border-green-200 group-hover:border-green-400">
                <CardContent className="p-6 text-center">
                  <Settings className="w-12 h-12 text-green-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <h4 className="font-semibold text-gray-800 mb-2">Settings</h4>
                  <p className="text-sm text-gray-600">Manage your profile</p>
                  <ArrowRight className="w-5 h-5 text-green-600 mx-auto mt-3 group-hover:translate-x-1 transition-transform" />
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">10,000+</div>
              <div className="text-green-200">Plant Species</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">99.2%</div>
              <div className="text-green-200">Accuracy Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">1M+</div>
              <div className="text-green-200">Plants Identified</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
