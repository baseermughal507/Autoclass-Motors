import { useParams, Link, Navigate } from "react-router-dom";
import { useState } from "react";
import { cars } from "@/data/cars";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowLeft,
  Phone,
  MessageSquare,
  Calendar,
  Gauge,
  Fuel,
  Settings,
  MapPin,
  Palette,
  Factory,
  Car as CarIcon,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const CarDetails = () => {
  const { id } = useParams();
  const car = cars.find((c) => String(c.id) === id);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  if (!car) return <Navigate to="/" replace />;

  // ✅ Include main image + other images together in the carousel
  const images = [car.main_image, ...(car.images || [])];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="container mx-auto px-4 py-8 mt-20">
        <div className="mb-6">
          <Link to="/cars">
            <Button variant="ghost">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Cars
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left: Carousel + Car Info */}
          <div className="lg:col-span-2">
            {/* ✅ Image Carousel */}
            <div className="relative mb-6 group">
              {car.is_sold && (
                <div className="absolute top-4 right-4 z-10">
                  <Badge variant="destructive" className="text-xl px-6 py-3">
                    SOLD
                  </Badge>
                </div>
              )}

              <div className="relative overflow-hidden rounded-lg">
                <img
                  src={images[lightboxIndex ?? 0]}
                  alt={car.title}
                  className="w-full h-[500px] object-cover rounded-lg cursor-pointer transition-transform group-hover:scale-[1.02]"
                  onClick={() => setLightboxIndex(0)}
                />
              </div>

              {/* ✅ Thumbnail Carousel */}
              {images.length > 1 && (
                <div className="flex gap-3 mt-4 overflow-x-auto pb-2">
                  {images.map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      alt={`Thumbnail ${i + 1}`}
                      onClick={() => setLightboxIndex(i)}
                      className={`h-20 w-28 object-cover rounded-md cursor-pointer transition-all border-2 ${
                        lightboxIndex === i
                          ? "border-accent scale-105"
                          : "border-transparent hover:scale-105"
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>

            <div className="mb-6">
              <h1 className="text-4xl font-bold mb-4">{car.title}</h1>
              <p className="text-3xl font-bold text-accent mb-2">
                Rs. {car.price.toLocaleString()}
              </p>
              <p className="text-muted-foreground">{car.short_description}</p>
            </div>

            <Card className="p-6 mb-6">
              <h2 className="text-2xl font-bold mb-6">Specifications</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                <Spec icon={<Calendar />} label="Year" value={car.year} />
                <Spec icon={<Gauge />} label="Mileage" value={car.mileage} />
                <Spec icon={<Fuel />} label="Fuel Type" value={car.fuel_type} />
                <Spec icon={<Settings />} label="Transmission" value={car.transmission} />
                <Spec icon={<CarIcon />} label="Engine" value={car.engine_capacity} />
                <Spec icon={<Palette />} label="Color" value={car.color} />
                <Spec icon={<MapPin />} label="Location" value={`${car.city}, ${car.province}`} />
                <Spec icon={<Factory />} label="Assembly" value={car.assembly} />
                <Spec icon={<CarIcon />} label="Body Type" value={car.body_type} />
              </div>
              
            </Card>

            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-4">Description</h2>
              <p className="text-muted-foreground leading-relaxed">
                {car.description}
              </p>
            </Card>
          </div>

          {/* Right: Contact Info */}
          <div className="lg:col-span-1">
            <Card className="p-6 sticky top-24">
              <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
              <div className="flex flex-col gap-4">
                <a href="mailto:zaynmughal182@gmail.com" target="_blank" rel="noopener noreferrer">
                  <Button className="w-full" size="lg">
                    <MessageSquare className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>
                </a>

                <a href={`tel:+923345215337`}>
                  <Button className="w-full" variant="outline" size="lg">
                    <Phone className="mr-2 h-5 w-5" />
                    Call Now
                  </Button>
                </a>

                <a
                  href={`https://wa.me/923345215337?text=Hello!%20I%20am%20interested%20in%20the%20${encodeURIComponent(
                    car.title
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white" size="lg">
                    <MessageSquare className="mr-2 h-5 w-5" />
                    WhatsApp
                  </Button>
                </a>
              </div>
            </Card>
          </div>
        </div>
      </div>

      <Footer />

      {/* ✅ Lightbox Modal */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-6 right-6 text-white text-3xl"
          >
            <X className="h-8 w-8" />
          </button>

          <button
            className="absolute left-4 text-white hover:text-accent"
            onClick={() =>
              setLightboxIndex((prev) => (prev! > 0 ? prev! - 1 : images.length - 1))
            }
          >
            <ChevronLeft className="h-10 w-10" />
          </button>

          <img
            src={images[lightboxIndex]}
            alt="Car Large"
            className="max-h-[90vh] max-w-[90vw] object-contain rounded-lg"
          />

          <button
            className="absolute right-4 text-white hover:text-accent"
            onClick={() =>
              setLightboxIndex((prev) => (prev! < images.length - 1 ? prev! + 1 : 0))
            }
          >
            <ChevronRight className="h-10 w-10" />
          </button>
        </div>
      )}
    </div>
  );
};

// ✅ Reusable spec component
const Spec = ({ icon, label, value }: { icon: JSX.Element; label: string; value: any }) => (
  <div className="flex items-start gap-3">
    <div className="text-accent mt-1">{icon}</div>
    <div>
      <p className="text-sm text-muted-foreground">{label}</p>
      <p className="font-semibold">{value || "N/A"}</p>
    </div>
  </div>
);

export default CarDetails;
