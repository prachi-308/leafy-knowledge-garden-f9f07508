
import React, { useState } from 'react';
import { ArrowLeft, Search, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Encyclopedia = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  // Mock plant database
  const plants = [
    {
      id: '1',
      name: 'Monstera Deliciosa',
      commonName: 'Swiss Cheese Plant',
      family: 'Araceae',
      careLevel: 'Easy',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
      tags: ['Indoor', 'Tropical', 'Low Light']
    },
    {
      id: '2',
      name: 'Ficus Lyrata',
      commonName: 'Fiddle Leaf Fig',
      family: 'Moraceae',
      careLevel: 'Moderate',
      image: 'https://images.unsplash.com/photo-1586392158143-5b83895c39a6?w=400&h=300&fit=crop',
      tags: ['Indoor', 'Bright Light', 'Statement Plant']
    },
    {
      id: '3',
      name: 'Sansevieria Trifasciata',
      commonName: 'Snake Plant',
      family: 'Asparagaceae',
      careLevel: 'Very Easy',
      image: 'https://images.unsplash.com/photo-1493526026303-ecda91e14c4c?w=400&h=300&fit=crop',
      tags: ['Indoor', 'Low Light', 'Air Purifying']
    },
    {
      id: '4',
      name: 'Epipremnum Aureum',
      commonName: 'Golden Pothos',
      family: 'Araceae',
      careLevel: 'Easy',
      image: 'https://images.unsplash.com/photo-1469796466635-455ede028aca?w=400&h=300&fit=crop',
      tags: ['Indoor', 'Trailing', 'Low Light']
    },
    {
      id: '5',
      name: 'Spathiphyllum',
      commonName: 'Peace Lily',
      family: 'Araceae',
      careLevel: 'Easy',
      image: 'https://images.unsplash.com/photo-1504198458649-3128b932f49e?w=400&h=300&fit=crop',
      tags: ['Indoor', 'Flowering', 'Air Purifying']
    },
    {
      id: '6',
      name: 'Aloe Vera',
      commonName: 'Aloe Vera',
      family: 'Asphodelaceae',
      careLevel: 'Easy',
      image: 'https://images.unsplash.com/photo-1509423350716-97f2360af543?w=400&h=300&fit=crop',
      tags: ['Succulent', 'Medicinal', 'Drought Tolerant']
    }
  ];

  const filteredPlants = plants.filter(plant =>
    plant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    plant.commonName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    plant.family.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getCareColor = (level: string) => {
    switch (level) {
      case 'Very Easy': return 'bg-green-100 text-green-800';
      case 'Easy': return 'bg-blue-100 text-blue-800';
      case 'Moderate': return 'bg-yellow-100 text-yellow-800';
      case 'Difficult': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

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
              Plant Encyclopedia
            </h1>
            <div></div>
          </div>
        </div>
      </div>

      {/* Search Section */}
      <div className="bg-white/60 backdrop-blur-sm border-b border-green-100">
        <div className="container mx-auto px-4 py-6">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                placeholder="Search plants by name, family, or characteristics..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-3 text-lg border-green-200 focus:border-green-400"
              />
            </div>
            <div className="flex items-center justify-between mt-4">
              <p className="text-gray-600">
                Showing {filteredPlants.length} of {plants.length} plants
              </p>
              <Button variant="outline" size="sm" className="border-green-200 text-green-700">
                <Filter className="w-4 h-4 mr-2" />
                Filters
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Plants Grid */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredPlants.map((plant) => (
              <Card
                key={plant.id}
                className="group hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-green-200 cursor-pointer"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={plant.image}
                    alt={plant.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-2 right-2">
                    <Badge className={getCareColor(plant.careLevel)}>
                      {plant.careLevel}
                    </Badge>
                  </div>
                </div>
                
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg text-green-800 group-hover:text-green-600 transition-colors">
                    {plant.commonName}
                  </CardTitle>
                  <CardDescription className="text-sm text-gray-600 italic">
                    {plant.name}
                  </CardDescription>
                  <CardDescription className="text-sm text-green-600">
                    Family: {plant.family}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <div className="flex flex-wrap gap-1">
                    {plant.tags.map((tag, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="text-xs bg-green-100 text-green-700"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {filteredPlants.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No plants found matching your search.</p>
              <Button 
                onClick={() => setSearchTerm('')}
                variant="outline" 
                className="mt-4 border-green-200 text-green-700"
              >
                Clear Search
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Encyclopedia;
