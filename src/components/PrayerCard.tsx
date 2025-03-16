
import React, { useState, useEffect } from "react";
import { Clock, Sun } from "lucide-react";
import { Prayer } from "@/data/prayerData";
import { Surah, surahs } from "@/data/surahData";
import SunPosition from "./SunPosition";
import SurahSelection from "./SurahSelection";
import { cn } from "@/lib/utils";
import { ScrollArea } from "./ui/scroll-area";

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
  // Always set first Surah to Al-Fatihah
  const alFatihah = surahs.find(surah => surah.id === "al-fatihah") || surahs[0];
  const [secondSurah, setSecondSurah] = useState<Surah>(surahs.find(surah => surah.id !== "al-fatihah") || surahs[1]);
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
      <ScrollArea className="h-full w-full">
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
          
          {/* Al-Fatihah (First Surah - Always Shown) */}
          <div className="mb-5">
            <h3 className="text-sm font-medium text-gray-900 mb-3">First Surah: Al-Fatihah</h3>
            <div className="bg-white/80 rounded-lg p-4 border border-gray-100">
              <p className="font-arabic text-right text-lg leading-loose mb-3">{alFatihah.arabicText}</p>
              <div className="border-t border-gray-100 pt-3">
                <p className="text-gray-600 text-sm leading-relaxed mb-3">{alFatihah.transliteration}</p>
                <p className="text-gray-500 text-xs">{alFatihah.translation}</p>
              </div>
            </div>
          </div>
          
          {/* Second Surah Selection */}
          <div className="mb-5">
            <h3 className="text-sm font-medium text-gray-900 mb-3">Second Surah Selection</h3>
            <SurahSelection
              label="Choose Second Surah"
              value={secondSurah}
              onChange={setSecondSurah}
              excludeSurahId="al-fatihah"
            />
            
            <div className="mt-5 bg-white/80 rounded-lg p-4 border border-gray-100">
              <p className="font-arabic text-right text-lg leading-loose mb-3">{secondSurah.arabicText}</p>
              <div className="border-t border-gray-100 pt-3">
                <p className="text-gray-600 text-sm leading-relaxed mb-3">{secondSurah.transliteration}</p>
                <p className="text-gray-500 text-xs">{secondSurah.translation}</p>
              </div>
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
          <div className="bg-gray-50 rounded-lg p-4 mb-5">
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
              <div className="text-sm space-y-4 stagger-children">
                <p className="text-gray-600">{prayer.additionalInfo}</p>
                
                {prayer.id === "tahajjud" && (
                  <div className="bg-prayer-primary/5 rounded-lg p-3 border border-prayer-primary/10">
                    <h4 className="font-medium text-prayer-primary mb-2">When to Recite in Tahajjud</h4>
                    <p className="text-gray-600">
                      Tahajjud prayer is performed after Isha prayer and before Fajr, preferably in the last third of the night. 
                      After each pair of rakats, recite the Tashahhud (At-Tahiyyat). For longer surahs, recite them during the 
                      first two rakats. It is recommended to start with a special dua for night prayer and conclude with witr prayer.
                    </p>
                  </div>
                )}
                
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Final Dua (Tashahhud)</h4>
                  <div className="bg-white/80 rounded-lg p-3 border border-gray-100">
                    <p className="font-arabic text-right text-lg leading-loose mb-2">
                      التَّحِيَّاتُ لِلَّهِ وَالصَّلَوَاتُ وَالطَّيِّبَاتُ، السَّلَامُ عَلَيْكَ أَيُّهَا النَّبِيُّ وَرَحْمَةُ اللَّهِ وَبَرَكَاتُهُ، السَّلَامُ عَلَيْنَا وَعَلَى عِبَادِ اللَّهِ الصَّالِحِينَ، أَشْهَدُ أَنْ لَا إِلَهَ إِلَّا اللَّهُ وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ
                    </p>
                    <p className="text-gray-600 italic mb-2">
                      At-tahiyyatu lillahi was-salawatu wat-tayyibatu, as-salamu 'alayka ayyuhan-nabiyyu wa rahmatullahi wa barakatuhu, as-salamu 'alayna wa 'ala 'ibadillahis-salihin, ash-hadu an la ilaha illallahu wa ash-hadu anna Muhammadan 'abduhu wa rasuluhu
                    </p>
                    <p className="text-gray-500 text-sm">
                      "All greetings of humility are for Allah, and all prayers and goodness. Peace be upon you, O Prophet, and the mercy of Allah and His blessings. Peace be upon us and upon the righteous slaves of Allah. I bear witness that there is no deity worthy of worship except Allah, and I bear witness that Muhammad is His slave and Messenger."
                    </p>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Durood Ibrahim</h4>
                  <div className="bg-white/80 rounded-lg p-3 border border-gray-100">
                    <p className="font-arabic text-right text-lg leading-loose mb-2">
                      اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ كَمَا صَلَّيْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ، اللَّهُمَّ بَارِكْ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ كَمَا بَارَكْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ
                    </p>
                    <p className="text-gray-600 italic mb-2">
                      Allahumma salli 'ala Muhammadin wa 'ala aali Muhammadin, kama sallayta 'ala Ibrahima wa 'ala aali Ibrahima, innaka Hamidum Majid. Allahumma barik 'ala Muhammadin wa 'ala aali Muhammadin, kama barakta 'ala Ibrahima wa 'ala aali Ibrahima, innaka Hamidum Majid
                    </p>
                    <p className="text-gray-500 text-sm">
                      "O Allah, send prayers upon Muhammad and the family of Muhammad, as You sent prayers upon Ibrahim and the family of Ibrahim, You are indeed Worthy of Praise, Full of Glory. O Allah, send blessings upon Muhammad and the family of Muhammad, as You sent blessings upon Ibrahim and the family of Ibrahim, You are indeed Worthy of Praise, Full of Glory."
                    </p>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Final Supplication</h4>
                  <div className="bg-white/80 rounded-lg p-3 border border-gray-100">
                    <p className="font-arabic text-right text-lg leading-loose mb-2">
                      اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ عَذَابِ جَهَنَّمَ، وَمِنْ عَذَابِ الْقَبْرِ، وَمِنْ فِتْنَةِ الْمَحْيَا وَالْمَمَاتِ، وَمِنْ شَرِّ فِتْنَةِ الْمَسِيحِ الدَّجَّالِ
                    </p>
                    <p className="text-gray-600 italic mb-2">
                      Allahumma inni a'udhu bika min 'adhabi jahannam, wa min 'adhabil-qabr, wa min fitnatil-mahya wal-mamat, wa min sharri fitnatil-masihid-dajjal
                    </p>
                    <p className="text-gray-500 text-sm">
                      "O Allah, I seek refuge in You from the punishment of Hell, from the punishment of the grave, from the trials of living and dying, and from the evil of the trial of the False Messiah (Anti-Christ)."
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </ScrollArea>
    </div>
  );
};

export default PrayerCard;
