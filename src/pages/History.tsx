
import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import PlantHistory from '@/components/PlantHistory';
import PlantInfo from '@/components/PlantInfo';

const History = () => {
  const [selectedPlant, setSelectedPlant] = useState<any>(null);
  // Mock data - in real app this would come from localStorage or API
  const [scannedPlants] = useState([
    {
      id: '1',
      name: 'Monstera Deliciosa',
      commonName: 'Swiss Cheese Plant',
      scientificName: 'Monstera deliciosa',
      confidence: 95,
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
      scannedAt: new Date().toISOString(),
      family: 'Araceae',
      nativeRegion: 'Central America',
      careLevel: 'Easy',
      description: 'A popular houseplant known for its large, glossy leaves with natural holes.'
    },
    {
      id: '2',
      name: 'Fiddle Leaf Fig',
      commonName: 'Fiddle Leaf Fig',
      scientificName: 'Ficus lyrata',
      confidence: 92,
      image: 'https://images.unsplash.com/photo-1586392158143-5b83895c39a6?w=400&h=300&fit=crop',
      scannedAt: new Date(Date.now() - 86400000).toISOString(),
      family: 'Moraceae',
      nativeRegion: 'West Africa',
      careLevel: 'Moderate',
      description: 'A striking indoor tree with large, violin-shaped leaves.'
    }
  ]);

  const handleSelectPlant = (plant: any) => {
    setSelectedPlant(plant);
  };

  const handleBackToHistory = () => {
    setSelectedPlant(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-md border-b border-green-100 sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {selectedPlant ? (
              <Button 
                onClick={handleBackToHistory}
                variant="outline" 
                className="border-green-200 text-green-700 hover:bg-green-50"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to History
              </Button>
            ) : (
              <Link to="/">
                <Button variant="outline" className="border-green-200 text-green-700 hover:bg-green-50">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Home
                </Button>
              </Link>
            )}
            <h1 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              {selectedPlant ? 'Plant Details' : 'My Plant Collection'}
            </h1>
            <div></div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {selectedPlant ? (
            <PlantInfo plantData={selectedPlant} />
          ) : (
            <PlantHistory plants={scannedPlants} onSelectPlant={handleSelectPlant} />
          )}
        </div>
      </div>
    </div>
  );
};

export default History;
