
import React from 'react';
import { Leaf, Droplets, Sun, Thermometer, Scissors, AlertTriangle, Star, Calendar } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

interface PlantInfoProps {
  plantData: {
    name: string;
    commonName: string;
    scientificName: string;
    family: string;
    confidence: number;
    description: string;
    care: {
      light: string;
      water: string;
      humidity: string;
      temperature: string;
      fertilizer: string;
    };
    facts: string[];
    warnings: string[];
    image: string;
    scannedAt: string;
  };
}

const PlantInfo: React.FC<PlantInfoProps> = ({ plantData }) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="space-y-6">
      {/* Header Card */}
      <Card className="border-green-200 shadow-lg bg-white/90 backdrop-blur-sm overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <Badge 
                variant="secondary" 
                className={`${
                  plantData.confidence >= 90 ? 'bg-green-100 text-green-700 border-green-200' :
                  plantData.confidence >= 70 ? 'bg-yellow-100 text-yellow-700 border-yellow-200' :
                  'bg-orange-100 text-orange-700 border-orange-200'
                }`}
              >
                <Star className="w-3 h-3 mr-1" />
                {plantData.confidence}% confident
              </Badge>
              <Badge variant="outline" className="text-xs">
                <Calendar className="w-3 h-3 mr-1" />
                {formatDate(plantData.scannedAt)}
              </Badge>
            </div>
            
            <h1 className="text-3xl font-bold text-green-800 mb-2">
              {plantData.name}
            </h1>
            <h2 className="text-xl text-green-600 mb-1">
              {plantData.commonName}
            </h2>
            <p className="text-gray-600 italic mb-4">
              {plantData.scientificName} • {plantData.family}
            </p>
            <p className="text-gray-700 leading-relaxed">
              {plantData.description}
            </p>
          </div>
          
          <div className="relative">
            <img
              src={plantData.image}
              alt={plantData.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>
        </div>
      </Card>

      {/* Care Instructions */}
      <Card className="border-green-200 shadow-lg bg-white/90 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center text-green-800">
            <Leaf className="w-5 h-5 mr-2" />
            Care Instructions
          </CardTitle>
          <CardDescription>
            Everything you need to keep your plant healthy and thriving
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="space-y-2">
              <div className="flex items-center text-yellow-600">
                <Sun className="w-4 h-4 mr-2" />
                <span className="font-semibold">Light</span>
              </div>
              <p className="text-gray-700 pl-6">{plantData.care.light}</p>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center text-blue-600">
                <Droplets className="w-4 h-4 mr-2" />
                <span className="font-semibold">Water</span>
              </div>
              <p className="text-gray-700 pl-6">{plantData.care.water}</p>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center text-teal-600">
                <Thermometer className="w-4 h-4 mr-2" />
                <span className="font-semibold">Temperature</span>
              </div>
              <p className="text-gray-700 pl-6">{plantData.care.temperature}</p>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center text-cyan-600">
                <Droplets className="w-4 h-4 mr-2" />
                <span className="font-semibold">Humidity</span>
              </div>
              <p className="text-gray-700 pl-6">{plantData.care.humidity}</p>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center text-purple-600">
                <Scissors className="w-4 h-4 mr-2" />
                <span className="font-semibold">Fertilizer</span>
              </div>
              <p className="text-gray-700 pl-6">{plantData.care.fertilizer}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Facts and Warnings */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Interesting Facts */}
        <Card className="border-green-200 shadow-lg bg-white/90 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-green-800">🌟 Interesting Facts</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {plantData.facts.map((fact, index) => (
                <li key={index} className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{fact}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Warnings */}
        {plantData.warnings.length > 0 && (
          <Card className="border-orange-200 shadow-lg bg-orange-50/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center text-orange-800">
                <AlertTriangle className="w-5 h-5 mr-2" />
                Important Warnings
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {plantData.warnings.map((warning, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-orange-800">{warning}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default PlantInfo;
