
import React from "react";
import { cn } from "@/lib/utils";

type SunPositionProps = {
  position: number; // 0-100 value representing position in the sky
  className?: string;
};

const SunPosition: React.FC<SunPositionProps> = ({ position, className }) => {
  const getSunColor = () => {
    // Dawn/dusk: orange-red
    if (position <= 20 || position >= 80) {
      return "bg-gradient-to-b from-amber-400 to-orange-500";
    }
    // Morning/afternoon: yellow
    if (position > 20 && position < 40 || position > 60 && position < 80) {
      return "bg-gradient-to-b from-yellow-300 to-amber-400";
    }
    // Midday: white-yellow
    return "bg-gradient-to-b from-white to-yellow-300";
  };

  const getNightSkyColor = () => {
    // Deep night
    if (position <= 10 || position >= 95) {
      return "from-slate-900 to-indigo-950";
    }
    // Dawn/dusk
    if (position <= 20 || position >= 80) {
      return "from-indigo-900 via-purple-800 to-amber-900";
    }
    // Day
    return "from-blue-400 to-sky-200";
  };

  const horizontalPosition = position; // 0-100
  const verticalPosition = position <= 50 
    ? 100 - position * 2 // Rising (0-50 maps to 100-0)
    : (position - 50) * 2; // Setting (50-100 maps to 0-100)

  return (
    <div 
      className={cn(
        "relative w-full h-24 rounded-xl overflow-hidden card-shadow", 
        className
      )}
    >
      {/* Sky */}
      <div className={`absolute inset-0 bg-gradient-to-b ${getNightSkyColor()} transition-colors duration-500`}>
        {/* Stars (visible at night) */}
        {position <= 20 || position >= 80 ? (
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <div 
                key={i}
                className="absolute rounded-full bg-white animate-pulse-subtle"
                style={{
                  width: Math.random() * 2 + 1 + "px",
                  height: Math.random() * 2 + 1 + "px",
                  top: Math.random() * 100 + "%",
                  left: Math.random() * 100 + "%",
                  opacity: Math.random() * 0.7 + 0.3,
                  animationDelay: `${Math.random() * 2}s`
                }}
              />
            ))}
          </div>
        ) : null}
      </div>

      {/* Ground/Horizon */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-emerald-900 to-emerald-800"
      />

      {/* Sun */}
      <div 
        className={`absolute w-8 h-8 rounded-full ${getSunColor()} shadow-lg transform translate-x(-50%) translate-y(-50%) transition-all duration-300 ease-out`}
        style={{
          left: `${horizontalPosition}%`,
          bottom: `${verticalPosition}%`,
          boxShadow: '0 0 20px rgba(255, 236, 159, 0.8), 0 0 40px rgba(255, 236, 159, 0.4)'
        }}
      />
    </div>
  );
};

export default SunPosition;
