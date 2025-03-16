
import React, { useState, useMemo } from "react";
import { ChevronDown } from "lucide-react";
import { Surah, surahs } from "@/data/surahData";
import { cn } from "@/lib/utils";

type SurahSelectionProps = {
  label: string;
  onChange: (surah: Surah) => void;
  value: Surah;
  className?: string;
  excludeSurahId?: string;
};

const SurahSelection: React.FC<SurahSelectionProps> = ({
  label,
  onChange,
  value,
  className,
  excludeSurahId,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const filteredSurahs = useMemo(() => {
    return surahs.filter(surah => !excludeSurahId || surah.id !== excludeSurahId);
  }, [excludeSurahId]);

  const handleSelect = (surah: Surah) => {
    onChange(surah);
    setIsOpen(false);
  };

  return (
    <div className={cn("relative", className)}>
      <div className="text-sm font-medium text-prayer-primary mb-1">{label}</div>
      <div
        className="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-200 cursor-pointer hover:border-prayer-primary transition-colors card-shadow"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center">
          <span className="text-sm font-medium">{value.name}</span>
          <span className="ml-2 text-sm text-gray-500 font-arabic">
            {value.arabicName}
          </span>
        </div>
        <ChevronDown
          className={cn(
            "h-4 w-4 text-gray-500 transition-transform duration-200",
            isOpen ? "transform rotate-180" : ""
          )}
        />
      </div>

      {isOpen && (
        <div
          className="absolute z-10 mt-1 w-full max-h-60 overflow-auto bg-white rounded-lg border border-gray-200 shadow-lg animate-fade-in origin-top glass-effect"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="py-1">
            {filteredSurahs.map((surah) => (
              <div
                key={surah.id}
                className={cn(
                  "px-3 py-2 cursor-pointer flex items-center justify-between hover:bg-prayer-primary/5 transition-colors",
                  value.id === surah.id ? "bg-prayer-primary/10" : ""
                )}
                onClick={() => handleSelect(surah)}
              >
                <span className="text-sm font-medium">{surah.name}</span>
                <span className="text-sm text-gray-500 font-arabic">
                  {surah.arabicName}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SurahSelection;
