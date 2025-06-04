
import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import PlantScanner from '@/components/PlantScanner';
import PlantInfo from '@/components/PlantInfo';

const Scanner = () => {
  const [plantData, setPlantData] = useState<any>(null);

  const handlePlantIdentified = (data: any) => {
    setPlantData(data);
  };

  const handleBackToScanner = () => {
    setPlantData(null);
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
              Plant Scanner
            </h1>
            <div></div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {!plantData ? (
            <PlantScanner onPlantIdentified={handlePlantIdentified} />
          ) : (
            <div>
              <div className="mb-6">
                <Button 
                  onClick={handleBackToScanner}
                  variant="outline" 
                  className="border-green-200 text-green-700 hover:bg-green-50"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Scan Another Plant
                </Button>
              </div>
              <PlantInfo plantData={plantData} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Scanner;
