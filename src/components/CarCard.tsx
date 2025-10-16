import React, { useState } from "react";
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
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

interface CarCardProps {
  car: Car;
}

export function CarCard({ car }: CarCardProps) {
  const [showGallery, setShowGallery] = useState(false);

  const images =
    car.images && car.images.length > 0
      ? car.images.map((img) => ({
          original: img,
          thumbnail: img,
        }))
      : [
          {
            original: car.main_image,
            thumbnail: car.main_image,
          },
        ];

  return (
    <>
      {/* ✅ Car Card */}
      <Card
        className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-2xl cursor-pointer"
        onClick={() => setShowGallery(true)}
      >
        {/* ✅ Image Carousel */}
        <div className="relative">
          <Carousel className="w-full">
            <CarouselContent>
              {(car.images && car.images.length > 0
                ? car.images
                : [car.main_image]
              ).map((img, index) => (
                <CarouselItem key={index}>
                  <img
                    src={img}
                    alt={`${car.title} ${index + 1}`}
                    className="w-full h-56 object-cover rounded-t-2xl"
                  />
                </CarouselItem>
              ))}
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

      {/* ✅ Fullscreen Image Viewer */}
      {showGallery && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50">
          <div className="w-full max-w-5xl relative">
            <button
              onClick={() => setShowGallery(false)}
              className="absolute top-4 right-4 z-50 text-white text-2xl font-bold bg-black/50 px-3 py-1 rounded-full"
            >
              ✕
            </button>
            <ImageGallery
              items={images}
              showThumbnails={false}
              showPlayButton={false}
              showFullscreenButton={false}
              showNav={true}
              slideInterval={3000}
              additionalClass="rounded-xl"
            />
          </div>
        </div>
      )}
    </>
  );
}

export default CarCard;
