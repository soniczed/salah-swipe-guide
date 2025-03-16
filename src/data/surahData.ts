
export type Surah = {
  id: string;
  name: string;
  arabicName: string;
  arabicText: string;
  transliteration: string;
  translation: string;
  verses: number;
};

export const surahs: Surah[] = [
  {
    id: "al-fatihah",
    name: "Al-Fatihah",
    arabicName: "الفاتحة",
    arabicText: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ\nالْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ\nالرَّحْمَٰنِ الرَّحِيمِ\nمَالِكِ يَوْمِ الدِّينِ\nإِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ\nاهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ\nصِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ",
    transliteration: "Bismillahi r-rahmani r-rahim\nAl-hamdu lillahi rabbi l-'alamin\nAr-rahmani r-rahim\nMaliki yawmi d-din\nIyyaka na'budu wa-iyyaka nasta'in\nIhdina s-sirata l-mustaqim\nSirata l-ladhina an'amta 'alayhim ghayri l-maghdubi 'alayhim wa-la d-dallin",
    translation: "In the name of Allah, the Entirely Merciful, the Especially Merciful\nAll praise is due to Allah, Lord of the worlds\nThe Entirely Merciful, the Especially Merciful\nSovereign of the Day of Recompense\nIt is You we worship and You we ask for help\nGuide us to the straight path\nThe path of those upon whom You have bestowed favor, not of those who have evoked [Your] anger or of those who are astray",
    verses: 7
  },
  {
    id: "al-ikhlas",
    name: "Al-Ikhlas",
    arabicName: "الإخلاص",
    arabicText: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ\nقُلْ هُوَ اللَّهُ أَحَدٌ\nاللَّهُ الصَّمَدُ\nلَمْ يَلِدْ وَلَمْ يُولَدْ\nوَلَمْ يَكُنْ لَهُ كُفُوًا أَحَدٌ",
    transliteration: "Bismillahi r-rahmani r-rahim\nQul huwa llahu ahad\nAllahu s-samad\nLam yalid wa-lam yulad\nWa-lam yakun lahu kufuwan ahad",
    translation: "In the name of Allah, the Entirely Merciful, the Especially Merciful\nSay, 'He is Allah, [who is] One\nAllah, the Eternal Refuge\nHe neither begets nor is born\nNor is there to Him any equivalent'",
    verses: 4
  },
  {
    id: "al-falaq",
    name: "Al-Falaq",
    arabicName: "الفلق",
    arabicText: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ\nقُلْ أَعُوذُ بِرَبِّ الْفَلَقِ\nمِنْ شَرِّ مَا خَلَقَ\nوَمِنْ شَرِّ غَاسِقٍ إِذَا وَقَبَ\nوَمِنْ شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ\nوَمِنْ شَرِّ حَاسِدٍ إِذَا حَسَدَ",
    transliteration: "Bismillahi r-rahmani r-rahim\nQul a'udhu bi-rabbi l-falaq\nMin sharri ma khalaq\nWa-min sharri ghasiqin idha waqab\nWa-min sharri n-naffathati fi l-'uqad\nWa-min sharri hasidin idha hasad",
    translation: "In the name of Allah, the Entirely Merciful, the Especially Merciful\nSay, 'I seek refuge in the Lord of daybreak\nFrom the evil of that which He created\nAnd from the evil of darkness when it settles\nAnd from the evil of the blowers in knots\nAnd from the evil of an envier when he envies'",
    verses: 5
  },
  {
    id: "an-nas",
    name: "An-Nas",
    arabicName: "الناس",
    arabicText: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ\nقُلْ أَعُوذُ بِرَبِّ النَّاسِ\nمَلِكِ النَّاسِ\nإِلَٰهِ النَّاسِ\nمِنْ شَرِّ الْوَسْوَاسِ الْخَنَّاسِ\nالَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ\nمِنَ الْجِنَّةِ وَالنَّاسِ",
    transliteration: "Bismillahi r-rahmani r-rahim\nQul a'udhu bi-rabbi n-nas\nMaliki n-nas\nIlahi n-nas\nMin sharri l-waswasi l-khannas\nAlladhi yuwaswisu fi suduri n-nas\nMina l-jinnati wa-n-nas",
    translation: "In the name of Allah, the Entirely Merciful, the Especially Merciful\nSay, 'I seek refuge in the Lord of mankind\nThe Sovereign of mankind\nThe God of mankind\nFrom the evil of the retreating whisperer\nWho whispers [evil] into the breasts of mankind\nFrom among the jinn and mankind'",
    verses: 6
  },
  {
    id: "al-kawthar",
    name: "Al-Kawthar",
    arabicName: "الكوثر",
    arabicText: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ\nإِنَّا أَعْطَيْنَاكَ الْكَوْثَرَ\nفَصَلِّ لِرَبِّكَ وَانْحَرْ\nإِنَّ شَانِئَكَ هُوَ الْأَبْتَرُ",
    transliteration: "Bismillahi r-rahmani r-rahim\nInna a'taynaka l-kawthar\nFa-salli li-rabbika wa-nhar\nInna shani'aka huwa l-abtar",
    translation: "In the name of Allah, the Entirely Merciful, the Especially Merciful\nIndeed, We have granted you, [O Muhammad], al-Kawthar\nSo pray to your Lord and sacrifice [to Him alone]\nIndeed, your enemy is the one cut off",
    verses: 3
  },
  {
    id: "al-asr",
    name: "Al-Asr",
    arabicName: "العصر",
    arabicText: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ\nوَالْعَصْرِ\nإِنَّ الْإِنْسَانَ لَفِي خُسْرٍ\nإِلَّا الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ وَتَوَاصَوْا بِالْحَقِّ وَتَوَاصَوْا بِالصَّبْرِ",
    transliteration: "Bismillahi r-rahmani r-rahim\nWa-l-'asr\nInna l-insana la-fi khusr\nIlla lladhina amanu wa-'amilu s-salihati wa-tawasaw bi-l-haqqi wa-tawasaw bi-s-sabr",
    translation: "In the name of Allah, the Entirely Merciful, the Especially Merciful\nBy time\nIndeed, mankind is in loss\nExcept for those who have believed and done righteous deeds and advised each other to truth and advised each other to patience",
    verses: 3
  },
  {
    id: "an-nasr",
    name: "An-Nasr",
    arabicName: "النصر",
    arabicText: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ\nإِذَا جَاءَ نَصْرُ اللَّهِ وَالْفَتْحُ\nوَرَأَيْتَ النَّاسَ يَدْخُلُونَ فِي دِينِ اللَّهِ أَفْوَاجًا\nفَسَبِّحْ بِحَمْدِ رَبِّكَ وَاسْتَغْفِرْهُ ۚ إِنَّهُ كَانَ تَوَّابًا",
    transliteration: "Bismillahi r-rahmani r-rahim\nIdha ja'a nasru llahi wa-l-fath\nWa-ra'ayta n-nasa yadkhuluna fi dini llahi afwaja\nFa-sabbih bi-hamdi rabbika wa-staghfirhu innahu kana tawwaba",
    translation: "In the name of Allah, the Entirely Merciful, the Especially Merciful\nWhen the victory of Allah has come and the conquest\nAnd you see the people entering into the religion of Allah in multitudes\nThen exalt [Him] with praise of your Lord and ask forgiveness of Him. Indeed, He is ever Accepting of repentance",
    verses: 3
  },
  {
    id: "al-masad",
    name: "Al-Masad",
    arabicName: "المسد",
    arabicText: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ\nتَبَّتْ يَدَا أَبِي لَهَبٍ وَتَبَّ\nمَا أَغْنَىٰ عَنْهُ مَالُهُ وَمَا كَسَبَ\nسَيَصْلَىٰ نَارًا ذَاتَ لَهَبٍ\nوَامْرَأَتُهُ حَمَّالَةَ الْحَطَبِ\nفِي جِيدِهَا حَبْلٌ مِنْ مَسَدٍ",
    transliteration: "Bismillahi r-rahmani r-rahim\nTabbat yada abi lahabin wa-tabb\nMa aghna 'anhu maluhu wa-ma kasab\nSa-yasla naran dhata lahab\nWa-mra'atuhu hammalata l-hatab\nFi jidiha hablun min masad",
    translation: "In the name of Allah, the Entirely Merciful, the Especially Merciful\nMay the hands of Abu Lahab be ruined, and ruined is he\nHis wealth will not avail him or that which he gained\nHe will enter to burn in a Fire of flame\nAnd his wife [as well] - the carrier of firewood\nAround her neck is a rope of [twisted] fiber",
    verses: 5
  },
  {
    id: "al-fil",
    name: "Al-Fil",
    arabicName: "الفيل",
    arabicText: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ\nأَلَمْ تَرَ كَيْفَ فَعَلَ رَبُّكَ بِأَصْحَابِ الْفِيلِ\nأَلَمْ يَجْعَلْ كَيْدَهُمْ فِي تَضْلِيلٍ\nوَأَرْسَلَ عَلَيْهِمْ طَيْرًا أَبَابِيلَ\nتَرْمِيهِمْ بِحِجَارَةٍ مِنْ سِجِّيلٍ\nفَجَعَلَهُمْ كَعَصْفٍ مَأْكُولٍ",
    transliteration: "Bismillahi r-rahmani r-rahim\nA-lam tara kayfa fa'ala rabbuka bi-ashabi l-fil\nA-lam yaj'al kaydahum fi tadlil\nWa-arsala 'alayhim tayran ababila\nTarmihim bi-hijaratin min sijjil\nFa-ja'alahum ka-'asfin ma'kul",
    translation: "In the name of Allah, the Entirely Merciful, the Especially Merciful\nHave you not considered, how your Lord dealt with the companions of the elephant?\nDid He not make their plan into misguidance?\nAnd He sent against them birds in flocks\nStriking them with stones of hard clay\nAnd He made them like eaten straw",
    verses: 5
  },
  {
    id: "quraysh",
    name: "Quraysh",
    arabicName: "قريش",
    arabicText: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ\nلِإِيلَافِ قُرَيْشٍ\nإِيلَافِهِمْ رِحْلَةَ الشِّتَاءِ وَالصَّيْفِ\nفَلْيَعْبُدُوا رَبَّ هَٰذَا الْبَيْتِ\nالَّذِي أَطْعَمَهُمْ مِنْ جُوعٍ وَآمَنَهُمْ مِنْ خَوْفٍ",
    transliteration: "Bismillahi r-rahmani r-rahim\nLi-ilafi quraysh\nIlafihim rihlata sh-shita'i wa-s-sayf\nFa-l-ya'budu rabba hadha l-bayt\nAlladhi at'amahum min ju'in wa-amanahum min khawf",
    translation: "In the name of Allah, the Entirely Merciful, the Especially Merciful\nFor the accustomed security of the Quraysh\nTheir accustomed security [in] the caravan of winter and summer\nLet them worship the Lord of this House\nWho has fed them, [saving them] from hunger and made them safe, [saving them] from fear",
    verses: 4
  }
];
