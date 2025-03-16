
import React, { useState } from "react";
import { Clock, Sun } from "lucide-react";
import { Prayer } from "@/data/prayerData";
import { Surah, surahs } from "@/data/surahData";
import SunPosition from "./SunPosition";
import SurahSelection from "./SurahSelection";
import { cn } from "@/lib/utils";

type PrayerCardProps = {
  prayer: Prayer;
  isCurrentPrayer: boolean;
  index: number;
};

const PrayerCard: React.FC<PrayerCardProps> = ({
  prayer,
  isCurrentPrayer,
  index,
}) => {
  const [firstSurah, setFirstSurah] = useState<Surah>(surahs[0]);
  const [secondSurah, setSecondSurah] = useState<Surah>(surahs[1]);
  const [activeTab, setActiveTab] = useState<"steps" | "completion">("steps");

  const RakatBlock = ({ type, count, color }: { type: string; count: number; color: string }) => (
    <div 
      className={cn(
        "flex flex-col items-center justify-center p-3 rounded-lg",
        `bg-${color}/10 border border-${color}/20`,
        color === 'prayer-fardh' ? 'bg-prayer-fardh/10 border-prayer-fardh/20' : 
        color === 'prayer-sunnah' ? 'bg-prayer-sunnah/10 border-prayer-sunnah/20' : 
        'bg-prayer-nafl/10 border-prayer-nafl/20'
      )}
    >
      <span className="text-2xl font-semibold">{count}</span>
      <span className="text-xs uppercase tracking-wider mt-1">{type}</span>
    </div>
  );

  return (
    <div className="h-full w-full px-4 py-6 flex flex-col">
      <div 
        className={cn(
          "w-full rounded-2xl p-5 glass-effect card-shadow border border-gray-200 transition-all duration-500 mx-auto",
          isCurrentPrayer ? "bg-white/95 ring-2 ring-prayer-primary/20" : "bg-white/90"
        )}
        style={{ maxWidth: "580px" }}
      >
        {/* Prayer Header */}
        <div className="flex items-start justify-between mb-5">
          <div className="flex-1">
            <div className="flex items-center">
              {isCurrentPrayer && (
                <span className="inline-flex items-center justify-center rounded-full bg-prayer-primary/10 px-2.5 py-0.5 text-xs font-medium text-prayer-primary mr-2 animate-pulse-subtle">
                  Current Prayer
                </span>
              )}
              <h2 className="text-2xl font-bold text-gray-900">{prayer.name}</h2>
              <span className="ml-2 text-xl font-arabic text-gray-600">{prayer.arabicName}</span>
            </div>
            
            <div className="flex items-center text-sm text-gray-500 mt-1">
              <Clock className="h-4 w-4 mr-1" />
              <span>{prayer.timeDescription}</span>
            </div>
          </div>
          
          <div className="flex items-center justify-center bg-prayer-primary/5 rounded-full p-2 h-12 w-12">
            <Sun className="h-6 w-6 text-prayer-primary" />
          </div>
        </div>
        
        {/* Sun Position */}
        <SunPosition position={prayer.sunPosition} className="mb-5" />
        
        {/* Rakat Information */}
        <div className="mb-5">
          <h3 className="text-sm font-medium text-gray-900 mb-3">Rakat Information</h3>
          
          <div className="grid grid-cols-3 gap-3">
            {prayer.rakats.sunnah > 0 && (
              <RakatBlock type="Sunnah" count={prayer.rakats.sunnah} color="prayer-sunnah" />
            )}
            {prayer.rakats.fardh > 0 && (
              <RakatBlock type="Fardh" count={prayer.rakats.fardh} color="prayer-fardh" />
            )}
            {prayer.rakats.nafl > 0 && (
              <RakatBlock type="Nafl" count={prayer.rakats.nafl} color="prayer-nafl" />
            )}
          </div>
        </div>
        
        {/* Surah Selection */}
        <div className="mb-5">
          <h3 className="text-sm font-medium text-gray-900 mb-3">Surah Selection</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <SurahSelection
              label="First Surah"
              value={firstSurah}
              onChange={setFirstSurah}
            />
            <SurahSelection
              label="Second Surah"
              value={secondSurah}
              onChange={setSecondSurah}
            />
          </div>
        </div>
        
        {/* Instructions Tabs */}
        <div className="mb-3">
          <div className="flex space-x-1 rounded-lg bg-gray-100 p-1">
            <button
              className={cn(
                "flex-1 text-sm rounded-md py-2 font-medium transition-colors",
                activeTab === "steps"
                  ? "bg-white text-gray-900 shadow-sm"
                  : "text-gray-500 hover:text-gray-900"
              )}
              onClick={() => setActiveTab("steps")}
            >
              Prayer Steps
            </button>
            <button
              className={cn(
                "flex-1 text-sm rounded-md py-2 font-medium transition-colors",
                activeTab === "completion"
                  ? "bg-white text-gray-900 shadow-sm"
                  : "text-gray-500 hover:text-gray-900"
              )}
              onClick={() => setActiveTab("completion")}
            >
              Completion
            </button>
          </div>
        </div>
        
        {/* Instructions Content */}
        <div className="bg-gray-50 rounded-lg p-4 max-h-48 overflow-y-auto">
          {activeTab === "steps" ? (
            <ol className="space-y-2 text-sm stagger-children">
              {prayer.instructions.map((step, index) => (
                <li key={index} className="flex items-start">
                  <span className="bg-prayer-primary/10 text-prayer-primary rounded-full h-5 w-5 flex items-center justify-center text-xs mr-2 mt-0.5 flex-shrink-0">
                    {index + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          ) : (
            <div className="text-sm space-y-3 stagger-children">
              <p className="text-gray-600">{prayer.additionalInfo}</p>
              <div>
                <h4 className="font-medium text-gray-900 mb-1">Final Dua</h4>
                <p className="font-arabic text-right mb-1">اللَّهُمَّ اغْفِرْ لِي</p>
                <p className="text-gray-600">Allahumma ghfir li (O Allah, forgive me)</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PrayerCard;
