import React, { useState } from "react";
import { Sparkles, HelpCircle, Eye, Hand, Volume2, Globe } from "lucide-react";

interface WordCard {
  id: string;
  icon: string;
  khmerName: string;
  phonetic: string;
  english: string;
  french: string;
  braille: boolean[];
  sign: string;
  soundSim: string;
}

const WORDS_DATA: WordCard[] = [
  {
    id: "house",
    icon: "🏠",
    khmerName: "ផ្ទះ",
    phonetic: "Phteah",
    english: "House",
    french: "Maison",
    braille: [true, true, false, false, true, false],
    sign: "Touch the fingers of both hands together at an angle to form a roof shape, then draw hands downward and spread outward.",
    soundSim: "Phteah! (Soft Khmer linguistic audio wave playing)",
  },
  {
    id: "sun",
    icon: "☀️",
    khmerName: "ព្រះអាទិត្យ",
    phonetic: "Preah Atit",
    english: "Sun",
    french: "Soleil",
    braille: [true, false, true, true, false, false],
    sign: "Form a circle with your index finger and thumb, raise it to eye-level, and then spread all fingers outward wide to represent bright sun rays.",
    soundSim: "Preah Atit! (Soft Khmer linguistic audio wave playing)",
  },
  {
    id: "water",
    icon: "💧",
    khmerName: "ទឹក",
    phonetic: "Teuk",
    english: "Water",
    french: "Eau",
    braille: [false, true, true, false, true, false],
    sign: "Extend your index and middle finger in a 'V' shape, and then gently tap your chin twice with a slight upward motion.",
    soundSim: "Teuk! (Soft Khmer linguistic audio wave playing)",
  },
  {
    id: "family",
    icon: "👨‍👩‍👧‍👦",
    khmerName: "គ្រួសារ",
    phonetic: "Krousar",
    english: "Family",
    french: "Famille",
    braille: [true, true, true, false, false, true],
    sign: "Form circles with index fingers and thumbs of both hands. Touch circles together at chest-level, and sweep hands out wide horizontally to meet at the back.",
    soundSim: "Krousar! (Soft Khmer linguistic audio wave playing)",
  },
];

export function WordsPicturesDemo() {
  const [activeCardIndex, setActiveCardIndex] = useState<number>(0);
  const [activeTab, setActiveTab] = useState<"khmer" | "english" | "french" | "braille" | "sign">("khmer");
  const [isPlayingSound, setIsPlayingSound] = useState<boolean>(false);

  const activeCard = WORDS_DATA[activeCardIndex];

  const handlePlaySound = () => {
    setIsPlayingSound(true);
    setTimeout(() => {
      setIsPlayingSound(false);
    }, 1800);
  };

  return (
    <div className="bg-white p-6 sm:p-8 rounded-3xl border border-surface-container shadow-sm">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-angkor-blue/10 rounded-lg flex items-center justify-center text-angkor-blue">
          <Globe className="w-5 h-5 text-royal-gold" />
        </div>
        <div>
          <h4 className="font-headline font-bold text-lg text-primary-custom">
            &quot;Words and Pictures&quot; Educational Flashcard Game
          </h4>
          <p className="text-xs text-on-surface-variant">
            Explore Krousar Thmey&apos;s digital solution for bilingual literacy. Tap cards to see their translation, Braille dots, and Sign cues.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Flashcards selection */}
        <div className="lg:col-span-4 space-y-3">
          <span className="text-xs font-bold text-primary-custom block mb-1">
            Step 1: Choose a Flashcard
          </span>
          <div className="grid grid-cols-2 lg:grid-cols-1 gap-3">
            {WORDS_DATA.map((card, index) => (
              <button
                key={card.id}
                onClick={() => {
                  setActiveCardIndex(index);
                  // Preserve tab or fall back to khmer if it was something else
                }}
                className={`p-4 rounded-2xl border text-left transition-all flex items-center gap-3 ${
                  activeCardIndex === index
                    ? "bg-angkor-blue text-white border-angkor-blue shadow-md scale-[1.02]"
                    : "bg-surface-cream text-primary-custom border-surface-container-high hover:bg-surface-container"
                }`}
              >
                <span className="text-3xl">{card.icon}</span>
                <div>
                  <h5 className="font-headline font-bold text-sm leading-tight">{card.khmerName}</h5>
                  <p className="text-[10px] opacity-75">{card.english}</p>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Right Column: Flashcard Details and Interactive Tabs */}
        <div className="lg:col-span-8 bg-surface-cream p-6 rounded-3xl border border-surface-container-high flex flex-col justify-between">
          <div>
            {/* Step 2 label */}
            <div className="flex justify-between items-center border-b border-surface-container-high pb-3 mb-4">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                Step 2: Choose Linguistic Dimension
              </span>
              <div className="text-xs font-headline font-bold text-royal-gold bg-royal-gold/10 px-3 py-1 rounded-full border border-royal-gold/20 flex items-center gap-1">
                <span>Active Card:</span>
                <span className="text-primary-custom">{activeCard.icon} {activeCard.phonetic}</span>
              </div>
            </div>

            {/* Dimension Tabs */}
            <div className="flex flex-wrap gap-1.5 mb-6">
              {[
                { id: "khmer", label: "Khmer Word" },
                { id: "english", label: "English" },
                { id: "french", label: "French" },
                { id: "braille", label: "Tactile Braille" },
                { id: "sign", label: "Cambodian Sign" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`px-3 py-2 rounded-lg text-xs font-headline font-bold transition-all ${
                    activeTab === tab.id
                      ? "bg-royal-gold text-primary-custom shadow-xs"
                      : "bg-white text-on-surface-variant hover:text-primary-custom hover:bg-surface-container border border-surface-container-high"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Dynamic Card Display Stage */}
            <div className="bg-white p-6 rounded-2xl border border-surface-container shadow-xs min-h-[180px] flex flex-col justify-center items-center text-center relative overflow-hidden">
              {activeTab === "khmer" && (
                <div className="space-y-4">
                  <h3 className="text-5xl font-extrabold text-angkor-blue font-headline">
                    {activeCard.khmerName}
                  </h3>
                  <p className="text-xs font-bold text-royal-gold uppercase tracking-widest font-mono">
                    Phonetic: &quot;{activeCard.phonetic}&quot;
                  </p>
                  <button
                    onClick={handlePlaySound}
                    className="mx-auto flex items-center gap-2 bg-surface-cream border border-surface-container-high hover:bg-royal-gold/20 text-angkor-blue px-4 py-2 rounded-xl text-xs font-bold transition-all"
                  >
                    <Volume2 className={`w-4 h-4 ${isPlayingSound ? "text-royal-gold scale-125 animate-pulse" : "text-gray-400"}`} />
                    Listen Auditory Pronunciation
                  </button>
                </div>
              )}

              {activeTab === "english" && (
                <div className="space-y-2">
                  <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">English Vocabulary</span>
                  <h3 className="text-4xl font-headline font-extrabold text-primary-custom">
                    {activeCard.english}
                  </h3>
                  <p className="text-xs text-on-surface-variant leading-relaxed max-w-sm">
                    Common English equivalent noun used in bilingual primary resource materials for inclusive classes.
                  </p>
                </div>
              )}

              {activeTab === "french" && (
                <div className="space-y-2">
                  <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">French Vocabulary</span>
                  <h3 className="text-4xl font-headline font-extrabold text-primary-custom">
                    {activeCard.french}
                  </h3>
                  <p className="text-xs text-on-surface-variant leading-relaxed max-w-sm">
                    Common French translation, widely distributed in collaborative Europe fundraising newsletters.
                  </p>
                </div>
              )}

              {activeTab === "braille" && (
                <div className="flex flex-col items-center gap-4">
                  <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">6-Dot Braille Adaptation</span>
                  <div className="grid grid-cols-2 gap-3 bg-surface-cream p-4 rounded-xl border border-surface-container-high">
                    {activeCard.braille.map((isRaised, index) => (
                      <div
                        key={index}
                        className={`w-5 h-5 rounded-full ${
                          isRaised ? "bg-angkor-blue border border-royal-gold shadow-sm" : "bg-white border border-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-xs text-on-surface-variant max-w-sm leading-relaxed">
                    Tactile raised dot blueprint allowing blind kids to read &quot;{activeCard.phonetic}&quot; using fingertips.
                  </p>
                </div>
              )}

              {activeTab === "sign" && (
                <div className="space-y-3">
                  <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Cambodian Sign Language</span>
                  <p className="text-sm font-semibold text-primary-custom max-w-md leading-relaxed px-4">
                    &quot;{activeCard.sign}&quot;
                  </p>
                  <p className="text-[11px] text-royal-gold italic">
                    CSL centers on visual description gestures reflecting Cambodian cultural environments.
                  </p>
                </div>
              )}

              {/* simulated sound notification overlay */}
              {isPlayingSound && (
                <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1 py-1">
                  <span className="w-1 h-3 bg-royal-gold rounded-full animate-bounce delay-100"></span>
                  <span className="w-1 h-5 bg-royal-gold rounded-full animate-bounce delay-200"></span>
                  <span className="w-1 h-2 bg-royal-gold rounded-full animate-bounce delay-300"></span>
                  <span className="w-1 h-4 bg-royal-gold rounded-full animate-bounce delay-400"></span>
                </div>
              )}
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-surface-container-high flex justify-between items-center text-[11px] text-gray-400">
            <span>Pedagogical methodology validated by MoEYS Cambodia</span>
            <span>App Version: 1.2.0 (Inclusive Education Series)</span>
          </div>
        </div>
      </div>
    </div>
  );
}
