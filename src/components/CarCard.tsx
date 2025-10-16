import React from "react";
import { Car } from "@/data/cars"; // adjust path if needed
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface CarCardProps {
  car: Car;
}

export function CarCard({ car }: CarCardProps) {
  return (
    <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-2xl">
      {/* ✅ Image Carousel */}
      <div className="relative">
    <Carousel className="w-full">
      <CarouselContent>
        {(car.images && car.images.length > 0 ? car.images : [car.main_image]).map(
          (img, index) => (
            <CarouselItem key={index}>
              <img
                src={img}
                alt={`${car.title} ${index + 1}`}
                className="w-full h-56 object-cover rounded-t-2xl"
              />
            </CarouselItem>
          )
        )}
      </CarouselContent>
      <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full" />
      <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full" />
    </Carousel>

    {car.is_sold && (
      <div className="absolute top-2 left-2 bg-red-600 text-white px-3 py-1 text-sm rounded-md z-10">
        SOLD
      </div>
    )}
  </div>

      {/* ✅ Car Info */}
      <div className="p-4 space-y-2">
        <h3 className="text-lg font-semibold">{car.title}</h3>
        <p className="text-sm text-gray-600">{car.short_description}</p>

        <div className="flex justify-between items-center mt-3">
          <span className="text-xl font-bold text-red-600">
            Rs {car.price.toLocaleString()}
          </span>
          <Badge>{car.city}</Badge>
        </div>
      </div>
    </Card>
  );
}

export default CarCard;
