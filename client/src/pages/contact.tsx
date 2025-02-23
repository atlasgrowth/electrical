import { useQuery } from "@tanstack/react-query";
import { getBusinessData } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, MapPin, Clock, Facebook, Instagram, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Contact() {
  const { data: business } = useQuery({
    queryKey: ['business'],
    queryFn: getBusinessData,
    retry: false
  });

  return (
    <main className="min-h-screen bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">
          Contact {business?.basic_info.name}
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-primary" />
                Contact Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {business?.basic_info.phone && (
                <div className="flex items-center gap-4">
                  <Button 
                    className="w-full"
                    onClick={() => window.location.href = `tel:${business.basic_info.phone}`}
                  >
                    <Phone className="mr-2 h-4 w-4" />
                    {business.basic_info.phone}
                  </Button>
                </div>
              )}

              {business?.basic_info.city && (
                <div className="flex items-center gap-2 text-gray-600">
                  <MapPin className="h-4 w-4" />
                  <span>Located in {business.basic_info.city}</span>
                </div>
              )}

              {business?.basic_info.working_hours && Object.keys(business.basic_info.working_hours).length > 0 && (
                <div className="flex items-center gap-2 text-gray-600">
                  <Clock className="h-4 w-4" />
                  <span>Business Hours Available</span>
                </div>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="h-5 w-5 text-primary" />
                Connect With Us
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {business?.social_media?.facebook && (
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => window.open(business.social_media.facebook, '_blank')}
                >
                  <Facebook className="mr-2 h-4 w-4" />
                  Visit us on Facebook
                </Button>
              )}

              {business?.social_media?.instagram && (
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => window.open(business.social_media.instagram, '_blank')}
                >
                  <Instagram className="mr-2 h-4 w-4" />
                  Follow us on Instagram
                </Button>
              )}

              {business?.social_media?.reviews_link && (
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => window.open(business.social_media.reviews_link, '_blank')}
                >
                  <Star className="mr-2 h-4 w-4" />
                  Read Our Reviews
                </Button>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}
