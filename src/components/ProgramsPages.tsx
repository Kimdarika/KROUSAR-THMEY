import React from "react";
import { 
  ShieldCheck, 
  Heart, 
  ArrowRight, 
  Award, 
  BookOpen, 
  CheckCircle, 
  Music, 
  Sparkles 
} from "lucide-react";
import { IMAGES } from "../data";
import { BrailleSimulator } from "./BrailleSimulator";

// ==================== 1. CHILD WELFARE ====================
export function ChildWelfarePage({ onNavigate }: { onNavigate: (tab: string) => void }) {
  return (
    <div className="space-y-12">
      {/* Hero Cover */}
      <div className="relative bg-primary-custom text-white rounded-3xl overflow-hidden py-16 px-6 sm:px-12 shadow-md">
        <div className="absolute inset-0 opacity-25">
          <img 
            src={IMAGES.childWelfareHero} 
            alt="Child Welfare Hero" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="max-w-3xl relative z-10 space-y-4">
          <span className="inline-block text-royal-gold font-bold tracking-wider text-xs uppercase bg-royal-gold/15 px-3 py-1 rounded-full border border-royal-gold/20">
            Social Care & Protection
          </span>
          <h2 className="font-headline font-bold text-3xl sm:text-5xl text-white tracking-tight leading-tight">
            Child Welfare Program
          </h2>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-light">
            We provide safe sheltering, trauma healing, and a structured pathway to independent community integration for abandoned street children, orphans, or highly vulnerable youth across Cambodia.
          </p>
        </div>
      </div>

      {/* Metrics & Quote */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-7 space-y-4">
          <h3 className="font-headline font-bold text-xl sm:text-2xl text-angkor-blue">A Safe & Loving Environment</h3>
          <p className="text-xs text-on-surface-variant leading-relaxed">
            Krousar Thmey is convinced that a child can only develop and flourish within a stable family framework. We avoid building institutional dependency. Instead, we implement responsive, individual support models designed to trace a direct path back to local community networks.
          </p>
          <p className="text-xs text-on-surface-variant leading-relaxed">
            From emergency rescue to vocational training apprenticeships, our certified Khmer social workers deliver compassionate structural assistance.
          </p>

          <div className="grid grid-cols-3 gap-4 border-t border-surface-container py-4 mt-6">
            <div>
              <p className="text-2xl font-headline font-bold text-angkor-blue">800+</p>
              <p className="text-[10px] text-on-surface-variant leading-snug">Reintegrated into stable biological families</p>
            </div>
            <div>
              <p className="text-2xl font-headline font-bold text-royal-gold">150+</p>
              <p className="text-[10px] text-on-surface-variant leading-snug">Active pupils in Family Houses</p>
            </div>
            <div>
              <p className="text-2xl font-headline font-bold text-hope-green">100%</p>
              <p className="text-[10px] text-on-surface-variant leading-snug">School enrollment in protection units</p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 bg-surface-cream border border-royal-gold/20 p-6 rounded-2xl relative shadow-xs">
          <span className="text-4xl text-royal-gold/20 font-serif absolute top-2 right-4">&quot;</span>
          <p className="font-headline font-semibold text-sm text-primary-custom italic mb-3">
            &quot;My life in Poipet was dangerous; I slept under bridges and worked on the streets. Krousar Thmey gave me a safe family room. Today, I study at a national high school.&quot;
          </p>
          <p className="text-[10px] font-bold text-on-surface-variant">— Sopheap, age 16, Family House Alumnus</p>
        </div>
      </div>

      {/* The 3-Tier Care System */}
      <div className="space-y-6">
        <div className="text-center max-w-xl mx-auto">
          <h3 className="font-headline font-bold text-xl sm:text-2xl text-angkor-blue">Our Three-Tier Support System</h3>
          <p className="text-xs text-on-surface-variant mt-1">
            A logical sequence of actions engineered to secure child safety while actively planning long-term social reintegration.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl border border-surface-container overflow-hidden shadow-xs flex flex-col justify-between">
            <div className="h-40 overflow-hidden relative bg-gray-100">
              <img src={IMAGES.temporaryCenter} alt="Temporary Center" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              <span className="absolute top-3 left-3 bg-primary-custom text-white text-[10px] font-bold px-2.5 py-0.5 rounded shadow">
                Tier 1: Emergency care
              </span>
            </div>
            <div className="p-5 flex-grow flex flex-col justify-between">
              <div className="space-y-2">
                <h4 className="font-headline font-bold text-base text-primary-custom">Temporary Protection Centers</h4>
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  Located in high-risk border zones (like Poipet or Phnom Penh), our centers provide shelter, warm meals, pediatric assessment, and trauma therapy for children in crisis or recently rescued from trafficking.
                </p>
              </div>
              <div className="border-t border-surface-container pt-3 mt-4 text-[10px] font-bold text-angkor-blue flex justify-between">
                <span>Trauma Rehabilitation</span>
                <span>Immediate Safety</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-surface-container overflow-hidden shadow-xs flex flex-col justify-between">
            <div className="h-40 overflow-hidden relative bg-gray-100">
              <img src={IMAGES.longTermHouses} alt="Family Protection Houses" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              <span className="absolute top-3 left-3 bg-royal-gold text-primary-custom text-[10px] font-bold px-2.5 py-0.5 rounded shadow">
                Tier 2: Family houses
              </span>
            </div>
            <div className="p-5 flex-grow flex flex-col justify-between">
              <div className="space-y-2">
                <h4 className="font-headline font-bold text-base text-primary-custom">Long-Term Family Houses</h4>
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  For children unable to safely reunite with biological relatives, we build stable family environments under the guidance of a loving house parent. This secures fully funded schooling, medical support, and apprenticeships.
                </p>
              </div>
              <div className="border-t border-surface-container pt-3 mt-4 text-[10px] font-bold text-royal-gold flex justify-between">
                <span>Stable Environment</span>
                <span>Lifelong Opportunities</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-surface-container overflow-hidden shadow-xs flex flex-col justify-between">
            <div className="h-40 overflow-hidden relative bg-gray-100">
              <img src={IMAGES.brailleClass} alt="Welfare autonomy" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              <span className="absolute top-3 left-3 bg-hope-green text-white text-[10px] font-bold px-2.5 py-0.5 rounded shadow">
                Tier 3: Autonomy
              </span>
            </div>
            <div className="p-5 flex-grow flex flex-col justify-between">
              <div className="space-y-2">
                <h4 className="font-headline font-bold text-base text-primary-custom">Family Reintegration</h4>
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  Our absolute priority is returning children to their relatives. We perform detailed family tracing, providing parents with micro-business grants, farming tools, or cattle to secure self-sufficient survival.
                </p>
              </div>
              <div className="border-t border-surface-container pt-3 mt-4 text-[10px] font-bold text-hope-green flex justify-between">
                <span>Sustainable Livelihood</span>
                <span>Successful Reunification</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ==================== 2. EDUCATION FOR DEAF OR BLIND ====================
export function EducationPage() {
  return (
    <div className="space-y-12">
      {/* Hero Cover */}
      <div className="relative bg-primary-custom text-white rounded-3xl overflow-hidden py-16 px-6 sm:px-12 shadow-md">
        <div className="absolute inset-0 opacity-20">
          <img 
            src={IMAGES.brailleClass} 
            alt="Education Hero" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="max-w-3xl relative z-10 space-y-4">
          <span className="inline-block text-royal-gold font-bold tracking-wider text-xs uppercase bg-royal-gold/15 px-3 py-1 rounded-full border border-royal-gold/20">
            Specialized Pedagogy
          </span>
          <h2 className="font-headline font-bold text-3xl sm:text-5xl text-white tracking-tight leading-tight">
            Education for Deaf or Blind
          </h2>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-light">
            We created the entire specialized school network in Cambodia, inventing Cambodian Braille and the Cambodian Sign Language (CSL) dictionary from scratch. This historic breakthrough guarantees sensory impaired children access to state-accredited national curricula.
          </p>
        </div>
      </div>

      {/* Historical Transition Context */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-7 space-y-4">
          <h3 className="font-headline font-bold text-xl sm:text-2xl text-angkor-blue">A Historic Government Integration</h3>
          <p className="text-xs text-on-surface-variant leading-relaxed">
            For nearly three decades, Krousar Thmey single-handedly established and funded the five specialized primary-secondary schools for sensory impaired youngsters in Phnom Penh, Siem Reap, Battambang, and Kampong Cham.
          </p>
          <p className="text-xs text-on-surface-variant leading-relaxed bg-royal-gold/5 border border-royal-gold/20 p-4 rounded-xl italic">
            In 2019, Krousar Thmey successfully transferred the direct administration and public funding of these five specialized schools to the <strong>Ministry of Education, Youth and Sport (MoEYS)</strong>. This historic transition guarantees public status, state-funded teacher salaries, and permanent institutional sustainability. Krousar Thmey continues to serve as the chief technical quality advisor, designing specialized resources.
          </p>
        </div>

        <div className="lg:col-span-5 bg-white p-6 rounded-2xl border border-surface-container shadow-xs space-y-4">
          <div className="flex gap-3">
            <div className="w-5 h-5 rounded-full bg-hope-green/15 text-hope-green flex items-center justify-center shrink-0 mt-0.5">
              ✓
            </div>
            <div>
              <h5 className="font-headline font-bold text-xs text-primary-custom">Cambodian Braille adapted phonetics</h5>
              <p className="text-[11px] text-on-surface-variant">Designed with custom characters representing Khmer-specific vowels and consonants.</p>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="w-5 h-5 rounded-full bg-hope-green/15 text-hope-green flex items-center justify-center shrink-0 mt-0.5">
              ✓
            </div>
            <div>
              <h5 className="font-headline font-bold text-xs text-primary-custom">National CSL Dictionary</h5>
              <p className="text-[11px] text-on-surface-variant">Published over 2,000 unified sign definitions used across public and private channels.</p>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="w-5 h-5 rounded-full bg-hope-green/15 text-hope-green flex items-center justify-center shrink-0 mt-0.5">
              ✓
            </div>
            <div>
              <h5 className="font-headline font-bold text-xs text-primary-custom">Continuous Teacher Training</h5>
              <p className="text-[11px] text-on-surface-variant">We coordinate specialized pedagogy webinars and tactical resources to train public school instructors.</p>
            </div>
          </div>
        </div>
      </div>

      {/* BRAILLE SIMULATOR INTEGRATION */}
      <BrailleSimulator />
    </div>
  );
}

// ==================== 3. CULTURAL & ARTISTIC DEVELOPMENT ====================
export function CulturePage() {
  return (
    <div className="space-y-12">
      {/* Hero Cover */}
      <div className="relative bg-primary-custom text-white rounded-3xl overflow-hidden py-16 px-6 sm:px-12 shadow-md">
        <div className="absolute inset-0 opacity-25">
          <img 
            src={IMAGES.traditionalDance} 
            alt="Culture Hero" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="max-w-3xl relative z-10 space-y-4">
          <span className="inline-block text-royal-gold font-bold tracking-wider text-xs uppercase bg-royal-gold/15 px-3 py-1 rounded-full border border-royal-gold/20">
            Khmer Heritage & Therapy
          </span>
          <h2 className="font-headline font-bold text-3xl sm:text-5xl text-white tracking-tight leading-tight">
            Cultural & Artistic Development
          </h2>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-light">
            We believe that access to artistic self-expression is a fundamental human right. We provide specialized classical dance, traditional Pinpeat orchestration, and shadow puppetry classes to deaf and blind children.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="space-y-4">
          <h3 className="font-headline font-bold text-xl text-primary-custom">Artistic Expression Beyond Senses</h3>
          <p className="text-xs text-on-surface-variant leading-relaxed">
            Sensory impairment is not an obstacle to cultural mastery. In our specialized classes:
          </p>
          <ul className="space-y-3 text-xs text-on-surface-variant">
            <li className="flex items-start gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-royal-gold mt-1.5 shrink-0" />
              <span><strong>Deaf children perform classical Khmer dances</strong> by feeling the rhythmic vibrations of traditional drums and floorboards, guided by tactile hand signals from side instructors.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-royal-gold mt-1.5 shrink-0" />
              <span><strong>Blind children master traditional Pinpeat instruments</strong>, learning complex melodic patterns on the Roneat (bamboo xylophone) or Chhing (small cymbals) entirely by auditory memory.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-royal-gold mt-1.5 shrink-0" />
              <span><strong>Shadow puppetry (Sbek Thom)</strong> is preserved by providing hearing impaired children with spatial hand training to handle large leather puppets in front of glowing light screens.</span>
            </li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-3xl border border-surface-container shadow-xs flex flex-col justify-center text-center space-y-4">
          <div className="w-12 h-12 bg-royal-gold/15 rounded-xl flex items-center justify-center text-royal-gold mx-auto">
            <Music className="w-6 h-6" />
          </div>
          <h4 className="font-headline font-bold text-base text-primary-custom">Preserving Cambodia&apos;s Heritage</h4>
          <p className="text-xs text-on-surface-variant leading-relaxed max-w-sm mx-auto">
            These performances are featured in annual national festivals, boosting the confidence of sensory-impaired children and demonstrating their exceptional capabilities to Cambodian society.
          </p>
          <div className="border-t border-surface-container-high pt-4 text-[10px] text-gray-400">
            100% Funded by Creative Solidarity Grants
          </div>
        </div>
      </div>
    </div>
  );
}
