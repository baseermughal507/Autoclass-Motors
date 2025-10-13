import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CarCard from "@/components/CarCard";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Shield, Award } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { cars } from "@/data/cars";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const featuredCars = cars?.slice(0, 6) || [];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/exterior.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-primary/10 to-transparent" />

        <div className="relative z-10 container mx-auto px-4 text-center md:text-left">
          <div className="max-w-3xl animate-fade-in">
            <h1
              className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              Drive Luxury.
              <br />
              <span className="text-accent">Drive Smart.</span>
            </h1>
            <p className="text-lg md:text-xl text-white drop-shadow-lg mb-8 max-w-2xl">
              Buy and sell quality used cars with confidence at Autoclass Motors.
              Explore our carefully inspected vehicles and enjoy a trusted,
              hassle-free car trading experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/cars">
                <Button
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-primary-foreground group text-lg px-8 py-6"
                >
                  View Our Collection
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-black bg-white hover:bg-transparent hover:text-white hover:shadow-[0_0_15px_rgba(255,255,255,0.5)] transition-all text-lg px-8 py-6"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Cars Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2
              className="text-4xl md:text-5xl font-bold mb-4"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              Featured Vehicles
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Latest Arrivals. Top Picks. Your Next Ride Awaits.
            </p>
          </div>

          {isLoading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="space-y-4">
                  <Skeleton className="h-64 w-full rounded-lg" />
                  <Skeleton className="h-6 w-3/4" />
                  <Skeleton className="h-4 w-1/2" />
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredCars.map((car) => (
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
          )}

          <div className="text-center mt-12">
            <Link to="/cars">
              <Button size="lg" variant="outline" className="border-2 group text-lg px-8">
                View All Cars
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Full-Width Video Section */}
      <section className="py-12 relative">
        <div className="w-full overflow-hidden relative">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-96 md:h-[500px] object-cover"
          >
            <source src="/interior.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* Black overlay */}
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
      </section>


      

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            Ready to Find Your Dream Car?
          </h2>
          <p className="text-lg text-secondary mb-8 max-w-2xl mx-auto">
            Visit our showroom today to explore top-quality used cars. Find the perfect vehicle that matches your style, budget, and lifestyle — all under one roof at Autoclass Motors.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/cars">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-primary-foreground text-lg px-8">
                View Cars for Sale
              </Button>
            </Link>
            <Link to="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-black bg-white hover:bg-transparent hover:text-white hover:shadow-[0_0_15px_rgba(255,255,255,0.5)] transition-all text-lg px-8"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
