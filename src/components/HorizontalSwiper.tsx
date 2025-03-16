
import React, { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { prayers, getCurrentPrayer } from "@/data/prayerData";
import PrayerCard from "./PrayerCard";
import { cn } from "@/lib/utils";

const HorizontalSwiper: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const currentPrayerId = getCurrentPrayer();

  // Find the index of the current prayer for initial view
  useEffect(() => {
    const currentPrayerIndex = prayers.findIndex(p => p.id === currentPrayerId);
    if (currentPrayerIndex !== -1) {
      setCurrentIndex(currentPrayerIndex);
    }
  }, [currentPrayerId]);

  // Handle touch events
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd || isAnimating) return;
    
    const distance = touchStart - touchEnd;
    const isSwipeLeft = distance > 50;
    const isSwipeRight = distance < -50;
    
    if (isSwipeLeft && currentIndex < prayers.length - 1) {
      navigateTo(currentIndex + 1);
    } else if (isSwipeRight && currentIndex > 0) {
      navigateTo(currentIndex - 1);
    }
    
    setTouchStart(null);
    setTouchEnd(null);
  };

  // Navigation controls
  const navigateTo = (index: number) => {
    if (index >= 0 && index < prayers.length && !isAnimating) {
      setIsAnimating(true);
      setCurrentIndex(index);
      
      setTimeout(() => {
        setIsAnimating(false);
      }, 400); // Match the CSS transition duration
    }
  };

  return (
    <div className="h-full relative overflow-hidden">
      {/* Navigation indicators */}
      <div className="absolute top-5 left-1/2 transform -translate-x-1/2 z-10 flex items-center space-x-1 bg-white/80 backdrop-blur-sm rounded-full px-2 py-1 shadow-md border border-gray-200">
        {prayers.map((_, index) => (
          <div
            key={index}
            className={cn(
              "w-2 h-2 rounded-full transition-all duration-300",
              currentIndex === index
                ? "bg-prayer-primary w-4"
                : "bg-gray-300 hover:bg-gray-400 cursor-pointer"
            )}
            onClick={() => navigateTo(index)}
          />
        ))}
      </div>

      {/* Left/Right navigation buttons */}
      <button
        className={cn(
          "absolute top-1/2 transform -translate-y-1/2 z-10 bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-md border border-gray-200 transition-opacity duration-300",
          currentIndex <= 0 ? "opacity-50 cursor-not-allowed" : "opacity-100 hover:bg-gray-100",
          "left-4"
        )}
        onClick={() => navigateTo(currentIndex - 1)}
        disabled={currentIndex <= 0 || isAnimating}
      >
        <ChevronLeft className="h-5 w-5 text-gray-700" />
      </button>

      <button
        className={cn(
          "absolute top-1/2 transform -translate-y-1/2 z-10 bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-md border border-gray-200 transition-opacity duration-300",
          currentIndex >= prayers.length - 1 ? "opacity-50 cursor-not-allowed" : "opacity-100 hover:bg-gray-100",
          "right-4"
        )}
        onClick={() => navigateTo(currentIndex + 1)}
        disabled={currentIndex >= prayers.length - 1 || isAnimating}
      >
        <ChevronRight className="h-5 w-5 text-gray-700" />
      </button>

      {/* Prayer cards container */}
      <div
        ref={containerRef}
        className="h-full w-full transition-transform duration-400 ease-out"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="h-full flex">
          {prayers.map((prayer, index) => (
            <div
              key={prayer.id}
              className="h-full min-w-full snap-center"
            >
              <PrayerCard
                prayer={prayer}
                isCurrentPrayer={prayer.id === currentPrayerId}
                index={index}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HorizontalSwiper;
