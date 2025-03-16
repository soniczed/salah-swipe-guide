
export type RakatInfo = {
  sunnah: number;
  fardh: number;
  nafl: number;
};

export type PrayerTime = {
  start: string;
  end: string;
};

export type Prayer = {
  id: string;
  name: string;
  arabicName: string;
  time: PrayerTime;
  timeDescription: string;
  rakats: RakatInfo;
  instructions: string[];
  additionalInfo: string;
  sunPosition: number; // 0-100 representing position in sky
};

export const prayers: Prayer[] = [
  {
    id: "fajr",
    name: "Fajr",
    arabicName: "الفجر",
    time: {
      start: "Dawn",
      end: "Sunrise"
    },
    timeDescription: "From dawn until sunrise",
    rakats: {
      sunnah: 2,
      fardh: 2,
      nafl: 0
    },
    instructions: [
      "Make intention (Niyyah) for Fajr prayer",
      "Begin with 'Allahu Akbar' raising hands to ears",
      "Place right hand over left hand on chest",
      "Recite Surah Al-Fatihah followed by another surah",
      "Bow down (Ruku) saying 'Subhana Rabbiyal Azeem' three times",
      "Rise saying 'Sami Allahu liman hamidah, Rabbana lakal hamd'",
      "Prostrate (Sujood) saying 'Subhana Rabbiyal A'la' three times",
      "Sit briefly between prostrations",
      "Prostrate again saying 'Subhana Rabbiyal A'la' three times",
      "Stand for second rakat and repeat steps",
      "After second prostration, sit for Tashahhud",
      "Recite At-Tahiyyat, Durood, and Dua",
      "Conclude with turning head right saying 'Assalamu alaikum wa rahmatullah'",
      "Then turn head left repeating the same"
    ],
    additionalInfo: "Fajr prayer consists of 2 Sunnah rakats followed by 2 Fardh rakats. It is recommended to pray Fajr as early as possible after dawn breaks.",
    sunPosition: 10
  },
  {
    id: "dhuhr",
    name: "Dhuhr",
    arabicName: "الظهر",
    time: {
      start: "Midday",
      end: "Mid-afternoon"
    },
    timeDescription: "When the sun begins to decline from its zenith",
    rakats: {
      sunnah: 4,
      fardh: 4,
      nafl: 2
    },
    instructions: [
      "Make intention (Niyyah) for Dhuhr prayer",
      "Begin with 'Allahu Akbar' raising hands to ears",
      "Place right hand over left hand on chest",
      "Recite Surah Al-Fatihah followed by another surah",
      "Bow down (Ruku) saying 'Subhana Rabbiyal Azeem' three times",
      "Rise saying 'Sami Allahu liman hamidah, Rabbana lakal hamd'",
      "Prostrate (Sujood) saying 'Subhana Rabbiyal A'la' three times",
      "Sit briefly between prostrations",
      "Prostrate again saying 'Subhana Rabbiyal A'la' three times",
      "Stand for second rakat and repeat steps",
      "After second prostration, sit for Tashahhud",
      "Recite At-Tahiyyat",
      "Stand for third rakat and recite only Surah Al-Fatihah",
      "Complete third rakat with ruku and sujood",
      "Stand for fourth rakat and repeat third rakat steps",
      "After fourth rakat, sit for final Tashahhud",
      "Recite At-Tahiyyat, Durood, and Dua",
      "Conclude with turning head right saying 'Assalamu alaikum wa rahmatullah'",
      "Then turn head left repeating the same"
    ],
    additionalInfo: "Dhuhr prayer consists of 4 Sunnah rakats, followed by 4 Fardh rakats, and then 2 Nafl rakats. It is performed at the declining of the sun from its zenith.",
    sunPosition: 50
  },
  {
    id: "duha",
    name: "Duha",
    arabicName: "الضحى",
    time: {
      start: "Morning",
      end: "Noon"
    },
    timeDescription: "After sunrise when the sun has risen to the height of a spear until just before noon",
    rakats: {
      sunnah: 0,
      fardh: 0,
      nafl: 4
    },
    instructions: [
      "Make intention (Niyyah) for Duha prayer",
      "Begin with 'Allahu Akbar' raising hands to ears",
      "Place right hand over left hand on chest",
      "Recite Surah Al-Fatihah followed by another surah",
      "Bow down (Ruku) saying 'Subhana Rabbiyal Azeem' three times",
      "Rise saying 'Sami Allahu liman hamidah, Rabbana lakal hamd'",
      "Prostrate (Sujood) saying 'Subhana Rabbiyal A'la' three times",
      "Sit briefly between prostrations",
      "Prostrate again saying 'Subhana Rabbiyal A'la' three times",
      "Stand for second rakat and repeat steps",
      "After second prostration, sit for Tashahhud",
      "Recite At-Tahiyyat, Durood, and Dua",
      "Conclude with turning head right saying 'Assalamu alaikum wa rahmatullah'",
      "Then turn head left repeating the same",
      "Repeat the process for a total of 2, 4, 8 or 12 rakats as desired"
    ],
    additionalInfo: "Duha is a voluntary prayer performed in the morning. The minimum is 2 rakats, and the maximum is 12 rakats. The Prophet (PBUH) emphasized its importance for seeking forgiveness and blessings.",
    sunPosition: 30
  },
  {
    id: "asr",
    name: "Asr",
    arabicName: "العصر",
    time: {
      start: "Afternoon",
      end: "Sunset"
    },
    timeDescription: "When the shadow of an object becomes equal to its height until sunset",
    rakats: {
      sunnah: 4,
      fardh: 4,
      nafl: 0
    },
    instructions: [
      "Make intention (Niyyah) for Asr prayer",
      "Begin with 'Allahu Akbar' raising hands to ears",
      "Place right hand over left hand on chest",
      "Recite Surah Al-Fatihah followed by another surah",
      "Bow down (Ruku) saying 'Subhana Rabbiyal Azeem' three times",
      "Rise saying 'Sami Allahu liman hamidah, Rabbana lakal hamd'",
      "Prostrate (Sujood) saying 'Subhana Rabbiyal A'la' three times",
      "Sit briefly between prostrations",
      "Prostrate again saying 'Subhana Rabbiyal A'la' three times",
      "Stand for second rakat and repeat steps",
      "After second prostration, sit for Tashahhud",
      "Recite At-Tahiyyat",
      "Stand for third rakat and recite only Surah Al-Fatihah",
      "Complete third rakat with ruku and sujood",
      "Stand for fourth rakat and repeat third rakat steps",
      "After fourth rakat, sit for final Tashahhud",
      "Recite At-Tahiyyat, Durood, and Dua",
      "Conclude with turning head right saying 'Assalamu alaikum wa rahmatullah'",
      "Then turn head left repeating the same"
    ],
    additionalInfo: "Asr prayer consists of 4 Sunnah rakats, followed by 4 Fardh rakats. The Prophet (PBUH) emphasized the importance of praying Asr on time.",
    sunPosition: 70
  },
  {
    id: "maghrib",
    name: "Maghrib",
    arabicName: "المغرب",
    time: {
      start: "Sunset",
      end: "Dusk"
    },
    timeDescription: "Immediately after sunset until the disappearance of twilight",
    rakats: {
      sunnah: 2,
      fardh: 3,
      nafl: 2
    },
    instructions: [
      "Make intention (Niyyah) for Maghrib prayer",
      "Begin with 'Allahu Akbar' raising hands to ears",
      "Place right hand over left hand on chest",
      "Recite Surah Al-Fatihah followed by another surah",
      "Bow down (Ruku) saying 'Subhana Rabbiyal Azeem' three times",
      "Rise saying 'Sami Allahu liman hamidah, Rabbana lakal hamd'",
      "Prostrate (Sujood) saying 'Subhana Rabbiyal A'la' three times",
      "Sit briefly between prostrations",
      "Prostrate again saying 'Subhana Rabbiyal A'la' three times",
      "Stand for second rakat and repeat steps",
      "After second prostration, sit for Tashahhud",
      "Recite At-Tahiyyat",
      "Stand for third rakat and recite only Surah Al-Fatihah",
      "Complete third rakat with ruku and sujood",
      "After third rakat, sit for final Tashahhud",
      "Recite At-Tahiyyat, Durood, and Dua",
      "Conclude with turning head right saying 'Assalamu alaikum wa rahmatullah'",
      "Then turn head left repeating the same"
    ],
    additionalInfo: "Maghrib prayer consists of 3 Fardh rakats, followed by 2 Sunnah rakats, and then 2 Nafl rakats. It should be performed immediately after sunset.",
    sunPosition: 90
  },
  {
    id: "isha",
    name: "Isha",
    arabicName: "العشاء",
    time: {
      start: "Night",
      end: "Midnight"
    },
    timeDescription: "After the disappearance of twilight until midnight",
    rakats: {
      sunnah: 4,
      fardh: 4,
      nafl: 2
    },
    instructions: [
      "Make intention (Niyyah) for Isha prayer",
      "Begin with 'Allahu Akbar' raising hands to ears",
      "Place right hand over left hand on chest",
      "Recite Surah Al-Fatihah followed by another surah",
      "Bow down (Ruku) saying 'Subhana Rabbiyal Azeem' three times",
      "Rise saying 'Sami Allahu liman hamidah, Rabbana lakal hamd'",
      "Prostrate (Sujood) saying 'Subhana Rabbiyal A'la' three times",
      "Sit briefly between prostrations",
      "Prostrate again saying 'Subhana Rabbiyal A'la' three times",
      "Stand for second rakat and repeat steps",
      "After second prostration, sit for Tashahhud",
      "Recite At-Tahiyyat",
      "Stand for third rakat and recite only Surah Al-Fatihah",
      "Complete third rakat with ruku and sujood",
      "Stand for fourth rakat and repeat third rakat steps",
      "After fourth rakat, sit for final Tashahhud",
      "Recite At-Tahiyyat, Durood, and Dua",
      "Conclude with turning head right saying 'Assalamu alaikum wa rahmatullah'",
      "Then turn head left repeating the same"
    ],
    additionalInfo: "Isha prayer consists of 4 Sunnah rakats, followed by 4 Fardh rakats, and then 2 Nafl rakats, followed by 3 Witr rakats. It is preferable to delay Isha prayer until the first third of the night.",
    sunPosition: 100
  },
  {
    id: "tahajjud",
    name: "Tahajjud",
    arabicName: "التهجد",
    time: {
      start: "Late Night",
      end: "Dawn"
    },
    timeDescription: "After Isha prayer until dawn, preferably in the last third of the night",
    rakats: {
      sunnah: 0,
      fardh: 0,
      nafl: 8
    },
    instructions: [
      "Make intention (Niyyah) for Tahajjud prayer",
      "Begin with 'Allahu Akbar' raising hands to ears",
      "Place right hand over left hand on chest",
      "Recite Surah Al-Fatihah followed by another surah (preferably a longer recitation)",
      "Bow down (Ruku) saying 'Subhana Rabbiyal Azeem' three times",
      "Rise saying 'Sami Allahu liman hamidah, Rabbana lakal hamd'",
      "Prostrate (Sujood) saying 'Subhana Rabbiyal A'la' three times",
      "Sit briefly between prostrations",
      "Prostrate again saying 'Subhana Rabbiyal A'la' three times",
      "Stand for second rakat and repeat steps",
      "After second prostration, sit for Tashahhud",
      "Recite At-Tahiyyat, Durood, and Dua",
      "Conclude with turning head right saying 'Assalamu alaikum wa rahmatullah'",
      "Then turn head left repeating the same",
      "Repeat the process for a total of 8 rakats, praying in pairs of two"
    ],
    additionalInfo: "Tahajjud is a voluntary night prayer consisting of 8 recommended rakats, prayed in pairs. It is considered one of the most rewarding prayers, offering a special connection with Allah in the quiet of the night. The Prophet (PBUH) never abandoned this prayer.",
    sunPosition: 5
  }
];

export const getCurrentPrayer = (): string => {
  const now = new Date();
  const hour = now.getHours();
  
  if (hour >= 4 && hour < 6) return "fajr";
  if (hour >= 6 && hour < 10) return "duha";
  if (hour >= 12 && hour < 15) return "dhuhr";
  if (hour >= 15 && hour < 18) return "asr";
  if (hour >= 18 && hour < 20) return "maghrib";
  if (hour >= 20 || hour < 1) return "isha";
  if (hour >= 1 && hour < 4) return "tahajjud";
  
  return "dhuhr"; // Default
};
