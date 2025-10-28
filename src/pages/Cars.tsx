import { Link } from "react-router-dom";
import { cars } from "@/data/cars";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsapp from "@/components/FloatingWhatsapp";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import CarAnimation from "@/components/CarIcon";

const Cars = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <FloatingWhatsapp />

      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-primary text-primary-foreground text-center">
        <div className="container mx-auto px-4">
          <h1
            className="text-4xl md:text-6xl font-bold mb-4"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            Explore Our Cars
          </h1>
          <CarAnimation size="w-64 h-64 mb-6" />
        </div>
      </section>

      {/* Cars Listing Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2
          className="text-4xl md:text-5xl font-extrabold text-center mb-12 bg-clip-text text-transparent 
                    bg-gradient-to-r from-red-600 to-black animate-pulse"
          style={{ fontFamily: "'Bebas Neue', sans-serif" }}
        >
          View Our Collection
        </h2>


        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...cars].reverse().map((car) => (
            <Link key={car.id} to={`/cars/${car.id}`}>
              <Card className="group overflow-hidden hover:shadow-xl transition-shadow relative h-full border">
                {car.is_sold && (
                  <div className="absolute inset-0 bg-black/60 z-10 flex items-center justify-center">
                    <Badge
                      variant="destructive"
                      className="text-2xl px-6 py-2 font-bold"
                    >
                      SOLD
                    </Badge>
                  </div>
                )}
                <img
                src={car.main_image}
                alt={car.title}
                loading="lazy"
                className="w-full h-56 object-cover group-hover:scale-105 transition-transform"
              />
                <CardContent className="p-6">
                  <h3 className="font-bold text-xl mb-2">{car.title}</h3>
                  <p className="text-2xl font-bold text-accent mb-2">
                    Rs. {car.price.toLocaleString()}
                  </p>
                  <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                    {car.short_description}
                  </p>
                  <div className="flex flex-wrap gap-2 text-sm text-muted-foreground mb-4">
                    <span>{car.year}</span>
                    <span>•</span>
                    <span>{car.transmission}</span>
                    <span>•</span>
                    <span>{car.fuel_type}</span>
                  </div>
                  <Button
                    variant="default"
                    className="w-full group-hover:bg-accent transition-colors"
                  >
                    View Details
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        </div>
      </section>

      

      <Footer />
    </div>
  );
};

export default Cars;
