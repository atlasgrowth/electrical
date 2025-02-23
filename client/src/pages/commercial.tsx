import { useQuery } from "@tanstack/react-query";
import { getBusinessData } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const commercialServices = [
  {
    title: "Commercial Installation",
    description: "Expert installation of electrical systems for businesses and commercial properties.",
    image: "https://images.unsplash.com/photo-1590959651373-a3db0f38c961?auto=format&fit=crop&q=80&w=2000"
  },
  {
    title: "Energy Management",
    description: "Smart energy solutions to reduce costs and improve efficiency.",
    image: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&q=80&w=2000"
  },
  {
    title: "Electrical Maintenance",
    description: "Regular maintenance and servicing of commercial electrical systems.",
    image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&q=80&w=2000"
  }
];

export default function Commercial() {
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
            Commercial Electrical Services
            {business?.basic_info.city && ` in ${business.basic_info.city}`}
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl">
            Professional commercial electrical services by {business?.basic_info.name}. 
            We help businesses maintain efficient and reliable electrical systems.
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
            {commercialServices.map((service, index) => (
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
