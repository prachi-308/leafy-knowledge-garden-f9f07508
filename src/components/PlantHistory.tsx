
import React from 'react';
import { Calendar, Star, Leaf, ChevronRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface PlantHistoryProps {
  plants: any[];
  onSelectPlant: (plant: any) => void;
}

const PlantHistory: React.FC<PlantHistoryProps> = ({ plants, onSelectPlant }) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (plants.length === 0) {
    return (
      <Card className="border-green-200 shadow-lg bg-white/90 backdrop-blur-sm">
        <CardContent className="flex flex-col items-center justify-center py-16">
          <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-4">
            <Leaf className="w-12 h-12 text-green-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">No Plants Scanned Yet</h3>
          <p className="text-gray-600 text-center max-w-md">
            Start scanning plants to build your personal plant collection. Every plant you identify will appear here!
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-4">
      <Card className="border-green-200 shadow-lg bg-white/90 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center text-green-800">
            <Leaf className="w-5 h-5 mr-2" />
            Your Plant Collection
          </CardTitle>
          <CardDescription>
            {plants.length} plant{plants.length !== 1 ? 's' : ''} identified
          </CardDescription>
        </CardHeader>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {plants.map((plant, index) => (
          <Card
            key={plant.id}
            className="border-green-200 shadow-lg bg-white/90 backdrop-blur-sm hover:shadow-xl transition-all duration-200 transform hover:scale-105 cursor-pointer group"
            onClick={() => onSelectPlant(plant)}
          >
            <div className="relative overflow-hidden">
              <img
                src={plant.image}
                alt={plant.name}
                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-200"
              />
              <div className="absolute top-2 left-2">
                <Badge 
                  variant="secondary" 
                  className="bg-white/90 backdrop-blur-sm text-green-700"
                >
                  <Star className="w-3 h-3 mr-1" />
                  {plant.confidence}%
                </Badge>
              </div>
              <div className="absolute top-2 right-2">
                <Badge 
                  variant="outline" 
                  className="bg-white/90 backdrop-blur-sm border-white text-gray-700"
                >
                  <Calendar className="w-3 h-3 mr-1" />
                  {formatDate(plant.scannedAt)}
                </Badge>
              </div>
            </div>
            
            <CardContent className="p-4">
              <div className="flex items-start justify-between">
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-green-800 truncate group-hover:text-green-600 transition-colors">
                    {plant.name}
                  </h3>
                  <p className="text-sm text-green-600 truncate">
                    {plant.commonName}
                  </p>
                  <p className="text-xs text-gray-500 italic truncate mt-1">
                    {plant.scientificName}
                  </p>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-green-600 transition-colors flex-shrink-0 ml-2" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PlantHistory;
