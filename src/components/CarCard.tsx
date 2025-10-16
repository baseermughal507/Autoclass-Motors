import React, { useState } from "react";
import { Car } from "@/data/cars";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useSwipeable } from "react-swipeable";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

interface CarCardProps {
  car: Car;
}

export function CarCard({ car }: CarCardProps) {
  const [showGallery, setShowGallery] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images =
    car.images && car.images.length > 0 ? car.images : [car.main_image];

  const handleSwipe = useSwipeable({
    onSwipedLeft: () =>
      setCurrentIndex((prev) => (prev + 1) % images.length),
    onSwipedRight: () =>
      setCurrentIndex((prev) =>
        prev === 0 ? images.length - 1 : prev - 1
      ),
    trackMouse: true,
  });

  const nextImage = () =>
    setCurrentIndex((prev) => (prev + 1) % images.length);

  const prevImage = () =>
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );

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
              {images.map((img, index) => (
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

      {/* ✅ Fullscreen Viewer */}
      {showGallery && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
          {...handleSwipe}
        >
          <button
            onClick={() => setShowGallery(false)}
            className="absolute top-4 right-4 z-50 text-white text-2xl font-bold bg-black/50 px-3 py-1 rounded-full"
          >
            ✕
          </button>

          {/* ✅ Zoom + Swipe Image */}
          <div className="relative w-full max-w-4xl flex items-center justify-center">
            <button
              onClick={prevImage}
              className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full px-3 py-2 text-xl"
            >
              ‹
            </button>

            <Zoom>
              <img
                src={images[currentIndex]}
                alt={`Image ${currentIndex + 1}`}
                className="max-h-[90vh] rounded-lg object-contain"
              />
            </Zoom>

            <button
              onClick={nextImage}
              className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full px-3 py-2 text-xl"
            >
              ›
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default CarCard;
