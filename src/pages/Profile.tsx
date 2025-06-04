
import React, { useState } from 'react';
import { ArrowLeft, User, Settings, Bell, Shield, HelpCircle, Star, Camera } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";

const Profile = () => {
  const [notifications, setNotifications] = useState(true);
  const [autoSave, setAutoSave] = useState(true);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-md border-b border-green-100 sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/">
              <Button variant="outline" className="border-green-200 text-green-700 hover:bg-green-50">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              Profile & Settings
            </h1>
            <div></div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Profile Section */}
          <Card className="border-green-200 shadow-lg bg-white/90 backdrop-blur-sm">
            <CardHeader>
              <div className="flex items-center space-x-4">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
                  <User className="w-10 h-10 text-white" />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-2xl text-green-800">Plant Enthusiast</CardTitle>
                  <CardDescription className="text-gray-600">
                    Joined PlantScan AI community
                  </CardDescription>
                  <div className="flex items-center space-x-2 mt-2">
                    <Badge className="bg-green-100 text-green-800">
                      <Star className="w-3 h-3 mr-1" />
                      Plant Explorer
                    </Badge>
                    <Badge variant="outline" className="border-green-200 text-green-700">
                      15 Plants Scanned
                    </Badge>
                  </div>
                </div>
                <Button variant="outline" className="border-green-200 text-green-700">
                  <Camera className="w-4 h-4 mr-2" />
                  Update Photo
                </Button>
              </div>
            </CardHeader>
          </Card>

          {/* Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-green-200 bg-white/90 backdrop-blur-sm text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-green-600 mb-2">15</div>
                <div className="text-gray-600">Plants Scanned</div>
              </CardContent>
            </Card>
            <Card className="border-green-200 bg-white/90 backdrop-blur-sm text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-blue-600 mb-2">12</div>
                <div className="text-gray-600">Species Identified</div>
              </CardContent>
            </Card>
            <Card className="border-green-200 bg-white/90 backdrop-blur-sm text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-purple-600 mb-2">97%</div>
                <div className="text-gray-600">Avg. Accuracy</div>
              </CardContent>
            </Card>
          </div>

          {/* Settings */}
          <Card className="border-green-200 shadow-lg bg-white/90 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center text-green-800">
                <Settings className="w-5 h-5 mr-2" />
                App Settings
              </CardTitle>
              <CardDescription>
                Customize your PlantScan AI experience
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <h4 className="font-medium text-gray-800">Push Notifications</h4>
                  <p className="text-sm text-gray-600">
                    Get notified about plant care reminders and new features
                  </p>
                </div>
                <Switch 
                  checked={notifications} 
                  onCheckedChange={setNotifications}
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <h4 className="font-medium text-gray-800">Auto-save Scans</h4>
                  <p className="text-sm text-gray-600">
                    Automatically save identified plants to your collection
                  </p>
                </div>
                <Switch 
                  checked={autoSave} 
                  onCheckedChange={setAutoSave}
                />
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-green-200 bg-white/90 backdrop-blur-sm hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Bell className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Notifications</h4>
                    <p className="text-sm text-gray-600">Manage your alerts</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-green-200 bg-white/90 backdrop-blur-sm hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Shield className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Privacy</h4>
                    <p className="text-sm text-gray-600">Control your data</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-green-200 bg-white/90 backdrop-blur-sm hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                    <HelpCircle className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Help & Support</h4>
                    <p className="text-sm text-gray-600">Get assistance</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-green-200 bg-white/90 backdrop-blur-sm hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <Star className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Rate App</h4>
                    <p className="text-sm text-gray-600">Share your feedback</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
