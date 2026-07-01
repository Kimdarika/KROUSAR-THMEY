import React, { useState } from "react";
import { Sparkles, HelpCircle, Eye, Hand } from "lucide-react";

const BRAILLE_MAP: Record<string, boolean[]> = {
  A: [true, false, false, false, false, false],
  B: [true, true, false, false, false, false],
  C: [true, false, false, true, false, false],
  D: [true, false, false, true, true, false],
  E: [true, false, false, false, true, false],
  F: [true, true, false, true, false, false],
  G: [true, true, false, true, true, false],
  H: [true, true, false, false, true, false],
  I: [false, true, false, true, false, false],
  J: [false, true, false, true, true, false],
  K: [true, false, true, false, false, false],
  L: [true, true, true, false, false, false],
  M: [true, false, true, true, false, false],
  N: [true, false, true, true, true, false],
  O: [true, false, true, false, true, false],
  P: [true, true, true, true, false, false],
  Q: [true, true, true, true, true, false],
  R: [true, true, true, false, true, false],
  S: [false, true, true, true, false, false],
  T: [false, true, true, true, true, false],
  U: [true, false, true, false, false, true],
  V: [true, true, true, false, false, true],
  W: [false, true, false, true, true, true],
  X: [true, false, true, true, false, true],
  Y: [true, false, true, true, true, true],
  Z: [true, false, true, false, true, true],
};

const SIGN_DESCRIPTIONS: Record<string, string> = {
  A: "Fist closed tightly, thumb resting straight against the outer side of the folded index finger.",
  B: "Open flat hand with all 4 fingers held straight and together; thumb is folded across the inner palm.",
  C: "Hand curved like a semi-circle, fingers forming a smooth 'C' shape facing inward.",
  D: "Index finger points straight up toward the sky; other three fingers curl down to touch the thumb tip.",
  E: "Fingers curled tightly inward, resting light tips on top of the thumb folded horizontally underneath.",
  F: "Index finger and thumb touch in a clean ring circle, while the other three fingers extend straight up.",
  G: "Index finger and thumb point horizontally toward the side, spaced about an inch apart like a mini claw.",
  H: "Index and middle fingers extended straight out together horizontally; thumb tucks into the folded ring/pinky.",
  I: "Little pinky finger points straight up, while the index, middle, ring, and thumb are folded into a fist.",
  J: "Start with pinky finger straight up, then draw a curved 'J' motion downwards in the air.",
  K: "Index and middle fingers point straight up in a 'V' shape, while the thumb tip presses up against the middle knuckle.",
  L: "Index finger straight up, thumb straight out horizontally, forming a perfect 'L' shape.",
  M: "Fold index, middle, and ring fingers down over the thumb, leaving the pinky folded underneath.",
  N: "Fold index and middle fingers down over the thumb, creating a tight two-digit clasp.",
  O: "Curve all fingers and the thumb inward to touch tips, forming a hollow 'O' shape.",
  P: "Point the index finger straight forward, with middle finger dangling down; thumb tip rests on the middle finger.",
  Q: "Point index and thumb downward like a claw, keeping them spaced apart to represent a circle outline.",
  R: "Index and middle fingers are crossed tightly over each other, while other fingers are folded.",
  S: "Fist closed tightly, with the thumb crossed horizontally across the front of all folded fingers.",
  T: "Fist closed, with the thumb tucked tucked in between the folded index and middle fingers.",
  U: "Index and middle fingers held straight up and touching together, other fingers tucked in with thumb.",
  V: "Index and middle fingers held straight up and spread apart to form a 'V' shape.",
  W: "Index, middle, and ring fingers held straight up and spread apart; pinky and thumb touch.",
  X: "Index finger is curled into a hook shape, pointing upward, while other fingers are closed in a fist.",
  Y: "Extend thumb and pinky finger straight out wide; fold index, middle, and ring fingers down.",
  Z: "Use the index finger to draw the shape of a 'Z' zigzag in the air in front of you.",
};

export function BrailleSimulator() {
  const [activeLetter, setActiveLetter] = useState<string>("A");

  const selectLetter = (letter: string) => {
    setActiveLetter(letter.toUpperCase());
  };

  const activeDots = BRAILLE_MAP[activeLetter] || [false, false, false, false, false, false];
  const activeSign = SIGN_DESCRIPTIONS[activeLetter] || "No description available.";

  return (
    <div className="bg-white p-6 sm:p-8 rounded-3xl border border-surface-container shadow-sm">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-royal-gold/15 rounded-lg flex items-center justify-center text-royal-gold">
          <Sparkles className="w-5 h-5" />
        </div>
        <div>
          <h4 className="font-headline font-bold text-lg text-primary-custom">
            Khmer Braille & CSL Alphabet Simulator
          </h4>
          <p className="text-xs text-on-surface-variant">
            Click any letter to observe its real raised Braille dot cell and Sign Language posture.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Visual Cells */}
        <div className="md:col-span-5 flex flex-col items-center justify-center bg-surface-cream p-6 rounded-2xl border border-surface-container-high">
          <span className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">
            Active Character: <span className="text-royal-gold font-mono text-lg font-black">{activeLetter}</span>
          </span>

          <div className="flex gap-12 items-center justify-center py-4">
            {/* Braille Cell */}
            <div className="flex flex-col items-center">
              <span className="text-[10px] text-gray-400 font-bold mb-3 flex items-center gap-1">
                <Eye className="w-3 h-3" /> Braille 6-Dot
              </span>
              <div className="grid grid-cols-2 gap-x-4 gap-y-4 bg-white p-5 rounded-xl border border-surface-container-high shadow-xs">
                {activeDots.map((isRaised, index) => (
                  <div
                    key={index}
                    className={`w-6 h-6 rounded-full transition-all duration-300 flex items-center justify-center ${
                      isRaised
                        ? "bg-angkor-blue shadow-md scale-110 border-2 border-royal-gold"
                        : "bg-surface-container border border-surface-container-high"
                    }`}
                  >
                    <span className="text-[8px] font-bold text-white opacity-50">{index + 1}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual Alphabet letter display */}
            <div className="flex flex-col items-center">
              <span className="text-[10px] text-gray-400 font-bold mb-3">Print Glyphs</span>
              <div className="w-20 h-24 bg-white border border-surface-container-high rounded-xl flex flex-col items-center justify-center shadow-xs">
                <span className="text-4xl font-headline font-extrabold text-primary-custom">{activeLetter}</span>
                <span className="text-[9px] text-royal-gold font-bold uppercase tracking-wider mt-1">
                  Letter {activeLetter.charCodeAt(0) - 64}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Sign description & Virtual Keyboard */}
        <div className="md:col-span-7 space-y-6">
          <div className="bg-angkor-blue/5 border border-angkor-blue/10 p-5 rounded-2xl">
            <h5 className="font-headline font-bold text-sm text-angkor-blue flex items-center gap-1.5 mb-2">
              <Hand className="w-4 h-4 text-royal-gold" />
              CSL Gesture Posture
            </h5>
            <p className="text-xs text-on-surface-variant leading-relaxed">
              {activeSign}
            </p>
          </div>

          <div>
            <span className="text-xs font-bold text-primary-custom block mb-3">
              Virtual Letter Keyboard (A-Z)
            </span>
            <div className="grid grid-cols-7 sm:grid-cols-9 gap-1.5">
              {Object.keys(BRAILLE_MAP).map((letter) => (
                <button
                  key={letter}
                  onClick={() => selectLetter(letter)}
                  className={`py-2 rounded-lg text-xs font-headline font-bold transition-all ${
                    activeLetter === letter
                      ? "bg-royal-gold text-primary-custom shadow-sm scale-105 border border-royal-gold"
                      : "bg-surface-cream text-on-surface-variant hover:bg-surface-container hover:text-primary-custom border border-surface-container-high"
                  }`}
                >
                  {letter}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 pt-5 border-t border-surface-container-high flex flex-col sm:flex-row justify-between items-center text-xs text-gray-400 gap-3">
        <span className="flex items-center gap-1">
          <HelpCircle className="w-3.5 h-3.5 text-royal-gold" />
          Did you know? Khmer Braille adaptations use standard international phonetics!
        </span>
        <button
          onClick={() => alert("Printing visual braille mapping reference to help deaf-blind educators.")}
          className="text-angkor-blue hover:underline font-bold text-xs"
        >
          View Full Pedagogical PDF Map
        </button>
      </div>
    </div>
  );
}
