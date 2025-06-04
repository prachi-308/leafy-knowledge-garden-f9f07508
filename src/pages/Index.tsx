
import React, { useState, useRef } from 'react';
import { Camera, Scan, Leaf, Info, History, Sparkles } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import PlantScanner from '@/components/PlantScanner';
import PlantInfo from '@/components/PlantInfo';
import PlantHistory from '@/components/PlantHistory';

const Index = () => {
  const [currentView, setCurrentView] = useState<'scanner' | 'info' | 'history'>('scanner');
  const [plantData, setPlantData] = useState<any>(null);
  const [scannedPlants, setScannedPlants] = useState<any[]>([]);
  const { toast } = useToast();

  const handlePlantIdentified = (data: any) => {
    setPlantData(data);
    setScannedPlants(prev => [data, ...prev.slice(0, 9)]); // Keep last 10 plants
    setCurrentView('info');
    toast({
      title: "Plant Identified! 🌱",
      description: `Found: ${data.name}`,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-md border-b border-green-100 sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                <Leaf className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                  PlantScan AI
                </h1>
                <p className="text-sm text-gray-600">Discover nature with AI</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <Badge variant="secondary" className="bg-green-100 text-green-700 border-green-200">
                <Sparkles className="w-3 h-3 mr-1" />
                AI Powered
              </Badge>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-center space-x-2 mb-8">
          <Button
            onClick={() => setCurrentView('scanner')}
            variant={currentView === 'scanner' ? 'default' : 'outline'}
            className={`${
              currentView === 'scanner' 
                ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white' 
                : 'border-green-200 text-green-700 hover:bg-green-50'
            } transition-all duration-200`}
          >
            <Camera className="w-4 h-4 mr-2" />
            Scanner
          </Button>
          
          <Button
            onClick={() => setCurrentView('info')}
            variant={currentView === 'info' ? 'default' : 'outline'}
            disabled={!plantData}
            className={`${
              currentView === 'info' 
                ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white' 
                : 'border-green-200 text-green-700 hover:bg-green-50 disabled:opacity-50'
            } transition-all duration-200`}
          >
            <Info className="w-4 h-4 mr-2" />
            Plant Info
          </Button>
          
          <Button
            onClick={() => setCurrentView('history')}
            variant={currentView === 'history' ? 'default' : 'outline'}
            className={`${
              currentView === 'history' 
                ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white' 
                : 'border-green-200 text-green-700 hover:bg-green-50'
            } transition-all duration-200`}
          >
            <History className="w-4 h-4 mr-2" />
            History ({scannedPlants.length})
          </Button>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto">
          {currentView === 'scanner' && (
            <PlantScanner onPlantIdentified={handlePlantIdentified} />
          )}
          
          {currentView === 'info' && plantData && (
            <PlantInfo plantData={plantData} />
          )}
          
          {currentView === 'history' && (
            <PlantHistory 
              plants={scannedPlants} 
              onSelectPlant={(plant) => {
                setPlantData(plant);
                setCurrentView('info');
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Index;
