import { Hero } from "@/components/hero";
import { useQuery } from "@tanstack/react-query";
import { getBusinessData } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const residentialServices = [
  {
    title: "Electrical Panel Upgrades",
    description: "Upgrade your electrical panel to handle modern power demands safely and efficiently.",
    image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&q=80&w=2000"
  },
  {
    title: "Safety Inspections",
    description: "Comprehensive electrical safety inspections to ensure your home's wiring meets all current codes.",
    image: "https://images.unsplash.com/photo-1590959651373-a3db0f38c961?auto=format&fit=crop&q=80&w=2000"
  },
  {
    title: "Wiring & Rewiring",
    description: "Complete home wiring and rewiring services with expert installation and materials.",
    image: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&q=80&w=2000"
  }
];

export default function Residential() {
  const { data: business } = useQuery({
    queryKey: ['business'],
    queryFn: getBusinessData,
    retry: false
  });

  return (
    <main>
      <section className="relative py-20 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Residential Electrical Services
            {business?.basic_info.city && ` in ${business.basic_info.city}`}
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl">
            Professional residential electrical services for your home by {business?.basic_info.name}. 
            We ensure safety, reliability, and excellence in every project.
          </p>
          <Button 
            size="lg" 
            className="bg-yellow-400 hover:bg-yellow-500 text-black"
            onClick={() => window.location.href = `tel:${business?.basic_info.phone}`}
          >
            <Phone className="mr-2 h-5 w-5" />
            {business?.basic_info.phone || 'Contact Us'}
          </Button>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {residentialServices.map((service, index) => (
              <Card key={index} className="overflow-hidden">
                <div 
                  className="h-48 bg-cover bg-center"
                  style={{ backgroundImage: `url(${service.image})` }}
                />
                <CardHeader>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
