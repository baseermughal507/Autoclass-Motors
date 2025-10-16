import React, { useState, useRef } from "react";
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
import { ChevronLeft, ChevronRight, X } from "lucide-react";

interface CarCardProps {
  car: Car;
}

export function CarCard({ car }: CarCardProps) {
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scale, setScale] = useState(1);
  const touchStartX = useRef<number | null>(null);

  const images = car.images && car.images.length > 0 ? car.images : [car.main_image];

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const deltaX = e.touches[0].clientX - touchStartX.current;
    if (Math.abs(deltaX) > 60) {
      if (deltaX > 0) {
        prevImage();
      } else {
        nextImage();
      }
      touchStartX.current = null;
    }
  };

  const nextImage = () =>
    setCurrentIndex((prev) => (prev + 1) % images.length);
  const prevImage = () =>
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  const toggleZoom = (e: React.MouseEvent) => {
    e.stopPropagation();
    setScale((prev) => (prev === 1 ? 2 : 1));
  };

  return (
    <>
      {/* ✅ Car Card */}
      <Card
        className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-2xl cursor-pointer"
        onClick={() => setIsViewerOpen(true)}
      >
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
      {isViewerOpen && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
          onClick={() => {
            setIsViewerOpen(false);
            setScale(1);
          }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
        >
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 text-white bg-black/60 p-2 rounded-full z-50"
            onClick={(e) => {
              e.stopPropagation();
              setIsViewerOpen(false);
              setScale(1);
            }}
          >
            <X size={24} />
          </button>

          {/* Left / Right Arrows */}
          <button
            className="absolute left-3 md:left-6 text-white bg-black/50 hover:bg-black/70 rounded-full p-2 z-40"
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
          >
            <ChevronLeft size={28} />
          </button>
          <button
            className="absolute right-3 md:right-6 text-white bg-black/50 hover:bg-black/70 rounded-full p-2 z-40"
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
          >
            <ChevronRight size={28} />
          </button>

          {/* Image */}
          <img
            src={images[currentIndex]}
            alt={`${car.title} ${currentIndex + 1}`}
            className={`object-contain transition-transform duration-300 ${
              scale === 1
                ? "max-h-[90vh] max-w-[90vw]"
                : "scale-150 max-h-[90vh] max-w-[90vw]"
            }`}
            onClick={toggleZoom}
          />
        </div>
      )}
    </>
  );
}

export default CarCard;
