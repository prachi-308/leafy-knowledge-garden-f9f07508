
import React, { useState, useRef } from 'react';
import { Camera, Upload, Scan, Loader2 } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

interface PlantScannerProps {
  onPlantIdentified: (data: any) => void;
}

const PlantScanner: React.FC<PlantScannerProps> = ({ onPlantIdentified }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isCameraActive, setIsCameraActive] = useState(false);
  const { toast } = useToast();

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ 
        video: { facingMode: 'environment' } 
      });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        setIsCameraActive(true);
      }
    } catch (error) {
      console.error('Error accessing camera:', error);
      toast({
        title: "Camera Error",
        description: "Unable to access camera. Please try uploading an image instead.",
        variant: "destructive",
      });
    }
  };

  const stopCamera = () => {
    if (videoRef.current?.srcObject) {
      const stream = videoRef.current.srcObject as MediaStream;
      stream.getTracks().forEach(track => track.stop());
      videoRef.current.srcObject = null;
      setIsCameraActive(false);
    }
  };

  const capturePhoto = () => {
    if (videoRef.current && canvasRef.current) {
      const canvas = canvasRef.current;
      const video = videoRef.current;
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.drawImage(video, 0, 0);
        canvas.toBlob((blob) => {
          if (blob) {
            analyzeImage(blob);
            const imageUrl = URL.createObjectURL(blob);
            setPreviewImage(imageUrl);
          }
        }, 'image/jpeg', 0.8);
      }
      stopCamera();
    }
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      analyzeImage(file);
      const imageUrl = URL.createObjectURL(file);
      setPreviewImage(imageUrl);
    }
  };

  const analyzeImage = async (imageFile: Blob) => {
    setIsLoading(true);
    
    try {
      // Convert image to base64
      const reader = new FileReader();
      reader.onload = async () => {
        const base64Image = reader.result as string;
        
        // Here you would call OpenAI's API
        // For now, we'll simulate the response
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        const mockPlantData = {
          id: Date.now(),
          name: "Monstera Deliciosa",
          commonName: "Swiss Cheese Plant",
          scientificName: "Monstera deliciosa",
          family: "Araceae",
          confidence: 92,
          description: "A popular houseplant known for its distinctive split leaves and easy care requirements.",
          care: {
            light: "Bright, indirect light",
            water: "Water when top inch of soil is dry",
            humidity: "50-60% humidity preferred",
            temperature: "65-85°F (18-29°C)",
            fertilizer: "Monthly during growing season"
          },
          facts: [
            "Native to Central America",
            "Can grow up to 20 feet tall in nature",
            "Produces edible fruit when mature",
            "Air-purifying qualities"
          ],
          warnings: [
            "Toxic to pets and children if ingested",
            "May cause skin irritation"
          ],
          image: base64Image,
          scannedAt: new Date().toISOString()
        };
        
        onPlantIdentified(mockPlantData);
      };
      reader.readAsDataURL(imageFile);
      
    } catch (error) {
      console.error('Error analyzing image:', error);
      toast({
        title: "Analysis Failed",
        description: "Unable to identify the plant. Please try again with a clearer image.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Camera/Upload Section */}
      <Card className="border-green-200 shadow-lg bg-white/90 backdrop-blur-sm">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
            Scan Your Plant
          </CardTitle>
          <CardDescription className="text-gray-600">
            Take a photo or upload an image to identify any plant instantly
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {!isCameraActive && !previewImage && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Button
                onClick={startCamera}
                className="h-32 bg-gradient-to-br from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white border-0 flex-col space-y-2 transition-all duration-200 transform hover:scale-105"
                disabled={isLoading}
              >
                <Camera className="w-8 h-8" />
                <span className="text-lg font-semibold">Use Camera</span>
                <span className="text-sm opacity-90">Real-time scanning</span>
              </Button>
              
              <Button
                onClick={() => fileInputRef.current?.click()}
                variant="outline"
                className="h-32 border-2 border-dashed border-green-300 hover:border-green-400 hover:bg-green-50 text-green-700 flex-col space-y-2 transition-all duration-200 transform hover:scale-105"
                disabled={isLoading}
              >
                <Upload className="w-8 h-8" />
                <span className="text-lg font-semibold">Upload Image</span>
                <span className="text-sm opacity-70">Choose from gallery</span>
              </Button>
            </div>
          )}

          {isCameraActive && (
            <div className="relative">
              <video
                ref={videoRef}
                autoPlay
                playsInline
                className="w-full rounded-lg"
              />
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 space-x-4">
                <Button
                  onClick={capturePhoto}
                  className="bg-white text-green-600 hover:bg-green-50 border-2 border-green-600 rounded-full w-16 h-16 transition-all duration-200 transform hover:scale-110"
                >
                  <Camera className="w-6 h-6" />
                </Button>
                <Button
                  onClick={stopCamera}
                  variant="outline"
                  className="bg-white/90 backdrop-blur-sm"
                >
                  Cancel
                </Button>
              </div>
            </div>
          )}

          {previewImage && (
            <div className="relative">
              <img
                src={previewImage}
                alt="Plant preview"
                className="w-full rounded-lg max-h-96 object-cover"
              />
              <Button
                onClick={() => {
                  setPreviewImage(null);
                  URL.revokeObjectURL(previewImage);
                }}
                variant="outline"
                className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm"
              >
                Retake
              </Button>
            </div>
          )}

          {isLoading && (
            <div className="flex flex-col items-center justify-center py-12 space-y-4">
              <div className="relative">
                <Loader2 className="w-12 h-12 text-green-600 animate-spin" />
                <Scan className="w-6 h-6 text-green-800 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold text-green-700">Analyzing Plant...</h3>
                <p className="text-gray-600">Our AI is identifying your plant</p>
              </div>
            </div>
          )}

          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleFileUpload}
            className="hidden"
          />
        </CardContent>
      </Card>

      <canvas ref={canvasRef} className="hidden" />
    </div>
  );
};

export default PlantScanner;
