import React, { useState } from "react";
import { 
  ShieldCheck, 
  Heart, 
  ArrowRight, 
  Award, 
  BookOpen, 
  CheckCircle, 
  Music, 
  Sparkles,
  Home,
  Users,
  GraduationCap,
  TreePalm,
  HandHeart,
  Star,
  Compass,
  Lightbulb,
  Smile,
  Target
} from "lucide-react";
import { IMAGES } from "../data";
import { BrailleSimulator } from "./BrailleSimulator";

// ==================== UTILITY COMPONENTS ====================
const SectionBadge = ({ text, icon: Icon }: { text: string; icon?: any }) => (
  <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-royal-gold/10 text-royal-gold border border-royal-gold/20 backdrop-blur-sm">
    {Icon && <Icon className="w-3.5 h-3.5" />}
    <span className="w-1.5 h-1.5 rounded-full bg-royal-gold animate-pulse" />
    {text}
  </span>
);

const SectionHeader = ({ badge, badgeIcon, title, subtitle }: any) => (
  <div className="text-center max-w-2xl mx-auto space-y-3">
    <SectionBadge text={badge} icon={badgeIcon} />
    <h2 className="font-headline font-bold text-3xl sm:text-4xl text-angkor-blue tracking-tight leading-tight">
      {title}
    </h2>
    {subtitle && (
      <p className="text-on-surface-variant text-sm leading-relaxed font-light max-w-xl mx-auto">
        {subtitle}
      </p>
    )}
  </div>
);

const StatCard = ({ icon: Icon, value, label, description, color }: any) => (
  <div className="group bg-white p-6 rounded-2xl border border-surface-container hover:border-royal-gold/30 hover:shadow-xl transition-all duration-300 text-center">
    <div className={`inline-flex p-3 rounded-xl bg-${color}-500/10 text-${color}-500 group-hover:bg-${color}-500 group-hover:text-white transition-all duration-300 mb-3`}>
      <Icon className="w-6 h-6" />
    </div>
    <p className="text-2xl font-headline font-bold text-primary-custom group-hover:text-royal-gold transition-colors duration-300">{value}</p>
    <p className="text-xs font-medium text-on-surface-variant mt-1">{label}</p>
    <p className="text-[10px] text-on-surface-variant/60 mt-0.5">{description}</p>
  </div>
);

// ==================== 1. CHILD WELFARE ====================
export function ChildWelfarePage({ onNavigate }: { onNavigate: (tab: string) => void }) {
  const [activeTier, setActiveTier] = useState<number | null>(null);

  const tiers = [
    {
      id: 1,
      title: "Temporary Protection Centers",
      subtitle: "Emergency Care",
      icon: ShieldCheck,
      color: "from-blue-500 to-blue-600",
      description: "Located in high-risk border zones (like Poipet or Phnom Penh), our centers provide shelter, warm meals, pediatric assessment, and trauma therapy for children in crisis or recently rescued from trafficking.",
      image: IMAGES.temporaryCenter,
      stats: ["Trauma Rehabilitation", "Immediate Safety", "24/7 Support"],
      badge: "Tier 1: Emergency care"
    },
    {
      id: 2,
      title: "Long-Term Family Houses",
      subtitle: "Stable Environment",
      icon: Home,
      color: "from-royal-gold to-amber-500",
      description: "For children unable to safely reunite with biological relatives, we build stable family environments under the guidance of a loving house parent. This secures fully funded schooling, medical support, and apprenticeships.",
      image: IMAGES.longTermHouses,
      stats: ["Stable Environment", "Lifelong Opportunities", "Family Setting"],
      badge: "Tier 2: Family houses"
    },
    {
      id: 3,
      title: "Family Reintegration",
      subtitle: "Sustainable Autonomy",
      icon: Users,
      color: "from-hope-green to-emerald-500",
      description: "Our absolute priority is returning children to their relatives. We perform detailed family tracing, providing parents with micro-business grants, farming tools, or cattle to secure self-sufficient survival.",
      image: IMAGES.brailleClass,
      stats: ["Sustainable Livelihood", "Successful Reunification", "Community Support"],
      badge: "Tier 3: Autonomy"
    }
  ];

  return (
    <div className="space-y-16">
      {/* Hero Cover - Enhanced */}
      <div className="relative bg-gradient-to-br from-primary-custom via-angkor-blue to-primary-custom text-white rounded-3xl overflow-hidden shadow-2xl">
        <div className="absolute inset-0 opacity-15">
          <img 
            src={IMAGES.childWelfareHero} 
            alt="Child Welfare Hero" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary-custom/80 via-transparent to-transparent" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-royal-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-royal-gold/5 rounded-full blur-3xl" />
        
        <div className="relative z-10 px-8 py-16 sm:px-16 sm:py-20 max-w-5xl">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <span className="w-16 h-0.5 bg-royal-gold" />
              <span className="text-royal-gold font-semibold text-xs tracking-[0.2em] uppercase">
                Social Care & Protection
              </span>
            </div>
            
            <h1 className="font-headline font-bold text-4xl sm:text-6xl text-white leading-[1.1] tracking-tight">
              Child Welfare Program
            </h1>
            
            <p className="text-gray-200 text-base sm:text-lg max-w-2xl leading-relaxed font-light">
              We provide safe sheltering, trauma healing, and a structured pathway to independent community integration for abandoned street children, orphans, or highly vulnerable youth across Cambodia.
            </p>
            
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button className="group bg-royal-gold hover:bg-royal-gold/90 text-primary-custom font-semibold text-sm px-6 py-3 rounded-xl shadow-lg shadow-royal-gold/25 hover:shadow-royal-gold/40 transition-all duration-300 flex items-center gap-2 hover:gap-3">
                Support Our Mission
                <Heart className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
              </button>
              <button className="text-white/80 hover:text-white text-sm font-medium flex items-center gap-2 transition-colors duration-300 border-b-2 border-transparent hover:border-white/30 pb-1">
                <Users className="w-4 h-4" />
                See Our Impact
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Metrics & Quote - Enhanced */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-7 space-y-6">
          <h3 className="font-headline font-bold text-2xl sm:text-3xl text-angkor-blue">A Safe & Loving Environment</h3>
          <p className="text-sm text-on-surface-variant leading-relaxed">
            Krousar Thmey is convinced that a child can only develop and flourish within a stable family framework. We avoid building institutional dependency. Instead, we implement responsive, individual support models designed to trace a direct path back to local community networks.
          </p>
          <p className="text-sm text-on-surface-variant leading-relaxed">
            From emergency rescue to vocational training apprenticeships, our certified Khmer social workers deliver compassionate structural assistance.
          </p>

          <div className="grid grid-cols-3 gap-4 border-t border-surface-container pt-6">
            <div className="group text-center">
              <p className="text-3xl font-headline font-bold text-angkor-blue group-hover:text-royal-gold transition-colors duration-300">800+</p>
              <p className="text-[11px] text-on-surface-variant leading-snug">Reintegrated into stable biological families</p>
            </div>
            <div className="group text-center">
              <p className="text-3xl font-headline font-bold text-royal-gold group-hover:text-angkor-blue transition-colors duration-300">150+</p>
              <p className="text-[11px] text-on-surface-variant leading-snug">Active pupils in Family Houses</p>
            </div>
            <div className="group text-center">
              <p className="text-3xl font-headline font-bold text-hope-green group-hover:text-royal-gold transition-colors duration-300">100%</p>
              <p className="text-[11px] text-on-surface-variant leading-snug">School enrollment in protection units</p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 relative">
          <div className="bg-gradient-to-br from-surface-cream to-royal-gold/5 border-2 border-royal-gold/20 p-8 rounded-2xl shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-royal-gold/5 rounded-full blur-2xl" />
            <div className="relative">
              <span className="text-5xl text-royal-gold/30 font-serif absolute -top-2 -left-2">"</span>
              <p className="font-headline font-semibold text-base text-primary-custom italic mb-4 pl-6">
                "My life in Poipet was dangerous; I slept under bridges and worked on the streets. Krousar Thmey gave me a safe family room. Today, I study at a national high school."
              </p>
              <div className="flex items-center gap-3 pl-6">
                <div className="w-10 h-10 rounded-full bg-royal-gold/20 flex items-center justify-center text-royal-gold font-bold">
                  S
                </div>
                <div>
                  <p className="text-sm font-bold text-primary-custom">Sopheap</p>
                  <p className="text-[10px] text-on-surface-variant">Age 16, Family House Alumnus</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* The 3-Tier Care System - Enhanced */}
      <div className="space-y-8">
        <SectionHeader 
          badge="Our Framework"
          badgeIcon={Target}
          title="Three-Tier Support System"
          subtitle="A logical sequence of actions engineered to secure child safety while actively planning long-term social reintegration."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiers.map((tier) => (
            <div 
              key={tier.id}
              className="group bg-white rounded-2xl border-2 border-surface-container hover:border-royal-gold/40 transition-all duration-500 overflow-hidden shadow-sm hover:shadow-xl"
              onMouseEnter={() => setActiveTier(tier.id)}
              onMouseLeave={() => setActiveTier(null)}
              style={{
                transform: activeTier === tier.id ? 'translateY(-8px)' : 'translateY(0)'
              }}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={tier.image} 
                  alt={tier.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-custom/60 via-transparent to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className={`bg-gradient-to-r ${tier.color} text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-lg`}>
                    {tier.badge}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-2 text-white">
                    <tier.icon className="w-5 h-5 text-royal-gold" />
                    <span className="text-xs font-medium text-white/80">{tier.subtitle}</span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h4 className="font-headline font-bold text-lg text-primary-custom group-hover:text-royal-gold transition-colors duration-300">
                  {tier.title}
                </h4>
                <p className="text-sm text-on-surface-variant leading-relaxed mt-2 group-hover:text-primary-custom/90 transition-colors duration-300">
                  {tier.description}
                </p>
                
                <div className="mt-4 pt-4 border-t border-surface-container">
                  <div className="flex flex-wrap gap-2">
                    {tier.stats.map((stat, idx) => (
                      <span key={idx} className="text-[10px] font-medium text-primary-custom bg-surface-cream px-2.5 py-1 rounded-full border border-surface-container-high">
                        {stat}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ==================== 2. EDUCATION FOR DEAF OR BLIND ====================
export function EducationPage() {
  const achievements = [
    { icon: BookOpen, label: "Cambodian Braille", description: "Adapted phonetics with custom characters" },
    { icon: Users, label: "CSL Dictionary", description: "2,000+ unified sign definitions" },
    { icon: GraduationCap, label: "Teacher Training", description: "Specialized pedagogy webinars" }
  ];

  return (
    <div className="space-y-16">
      {/* Hero Cover */}
      <div className="relative bg-gradient-to-br from-primary-custom via-angkor-blue to-primary-custom text-white rounded-3xl overflow-hidden shadow-2xl">
        <div className="absolute inset-0 opacity-20">
          <img 
            src={IMAGES.brailleClass} 
            alt="Education Hero" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary-custom/80 via-transparent to-transparent" />
        
        <div className="relative z-10 px-8 py-16 sm:px-16 sm:py-20 max-w-5xl">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <span className="w-16 h-0.5 bg-royal-gold" />
              <span className="text-royal-gold font-semibold text-xs tracking-[0.2em] uppercase">
                Specialized Pedagogy
              </span>
            </div>
            
            <h1 className="font-headline font-bold text-4xl sm:text-6xl text-white leading-[1.1] tracking-tight">
              Education for Deaf or Blind
            </h1>
            
            <p className="text-gray-200 text-base sm:text-lg max-w-2xl leading-relaxed font-light">
              We created the entire specialized school network in Cambodia, inventing Cambodian Braille and the Cambodian Sign Language (CSL) dictionary from scratch. This historic breakthrough guarantees sensory impaired children access to state-accredited national curricula.
            </p>
          </div>
        </div>
      </div>

      {/* Historical Transition Context - Enhanced */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-7 space-y-6">
          <h3 className="font-headline font-bold text-2xl sm:text-3xl text-angkor-blue">A Historic Government Integration</h3>
          <p className="text-sm text-on-surface-variant leading-relaxed">
            For nearly three decades, Krousar Thmey single-handedly established and funded the five specialized primary-secondary schools for sensory impaired youngsters in Phnom Penh, Siem Reap, Battambang, and Kampong Cham.
          </p>
          
          <div className="bg-gradient-to-br from-royal-gold/5 to-royal-gold/10 border-2 border-royal-gold/20 p-6 rounded-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-royal-gold/5 rounded-full blur-2xl" />
            <div className="relative">
              <p className="text-sm text-on-surface-variant leading-relaxed italic">
                In 2019, Krousar Thmey successfully transferred the direct administration and public funding of these five specialized schools to the <strong className="text-primary-custom">Ministry of Education, Youth and Sport (MoEYS)</strong>. This historic transition guarantees public status, state-funded teacher salaries, and permanent institutional sustainability. Krousar Thmey continues to serve as the chief technical quality advisor, designing specialized resources.
              </p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 space-y-4">
          {achievements.map((item, idx) => (
            <div key={idx} className="group bg-white p-5 rounded-2xl border-2 border-surface-container hover:border-royal-gold/30 hover:shadow-lg transition-all duration-300 flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-xl bg-hope-green/10 text-hope-green group-hover:bg-hope-green group-hover:text-white transition-all duration-300 flex items-center justify-center">
                  <item.icon className="w-5 h-5" />
                </div>
              </div>
              <div>
                <h5 className="font-headline font-bold text-sm text-primary-custom group-hover:text-royal-gold transition-colors duration-300">
                  {item.label}
                </h5>
                <p className="text-xs text-on-surface-variant leading-relaxed mt-0.5">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* BRAILLE SIMULATOR INTEGRATION */}
      <BrailleSimulator />
    </div>
  );
}

// ==================== 3. CULTURAL & ARTISTIC DEVELOPMENT ====================
export function CulturePage() {
  const culturalPrograms = [
    {
      icon: Music,
      title: "Classical Dance",
      description: "Deaf children perform by feeling rhythmic vibrations of traditional drums and floorboards",
      image: IMAGES.traditionalDance,
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Sparkles,
      title: "Pinpeat Orchestra",
      description: "Blind children master traditional instruments through auditory memory and touch",
      image: IMAGES.traditionalDance,
      color: "from-amber-500 to-royal-gold"
    },
    {
      icon: Star,
      title: "Shadow Puppetry",
      description: "Hearing impaired children preserve Sbek Thom through spatial hand training",
      image: IMAGES.traditionalDance,
      color: "from-emerald-500 to-hope-green"
    }
  ];

  return (
    <div className="space-y-16">
      {/* Hero Cover */}
      <div className="relative bg-gradient-to-br from-primary-custom via-angkor-blue to-primary-custom text-white rounded-3xl overflow-hidden shadow-2xl">
        <div className="absolute inset-0 opacity-20">
          <img 
            src={IMAGES.traditionalDance} 
            alt="Culture Hero" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary-custom/80 via-transparent to-transparent" />
        
        <div className="relative z-10 px-8 py-16 sm:px-16 sm:py-20 max-w-5xl">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <span className="w-16 h-0.5 bg-royal-gold" />
              <span className="text-royal-gold font-semibold text-xs tracking-[0.2em] uppercase">
                Khmer Heritage & Therapy
              </span>
            </div>
            
            <h1 className="font-headline font-bold text-4xl sm:text-6xl text-white leading-[1.1] tracking-tight">
              Cultural & Artistic Development
            </h1>
            
            <p className="text-gray-200 text-base sm:text-lg max-w-2xl leading-relaxed font-light">
              We believe that access to artistic self-expression is a fundamental human right. We provide specialized classical dance, traditional Pinpeat orchestration, and shadow puppetry classes to deaf and blind children.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-7 space-y-6">
          <h3 className="font-headline font-bold text-2xl sm:text-3xl text-angkor-blue">Artistic Expression Beyond Senses</h3>
          <p className="text-sm text-on-surface-variant leading-relaxed">
            Sensory impairment is not an obstacle to cultural mastery. In our specialized classes:
          </p>
          
          <div className="space-y-4">
            {culturalPrograms.map((program, idx) => (
              <div key={idx} className="group bg-white p-5 rounded-2xl border-2 border-surface-container hover:border-royal-gold/30 hover:shadow-lg transition-all duration-300 flex items-start gap-4">
                <div className={`flex-shrink-0 p-3 rounded-xl bg-gradient-to-br ${program.color} text-white group-hover:scale-110 transition-transform duration-300`}>
                  <program.icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-headline font-bold text-sm text-primary-custom group-hover:text-royal-gold transition-colors duration-300">
                    {program.title}
                  </h4>
                  <p className="text-xs text-on-surface-variant leading-relaxed mt-0.5">
                    {program.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="bg-gradient-to-br from-surface-cream to-royal-gold/5 border-2 border-royal-gold/20 p-8 rounded-2xl shadow-lg text-center space-y-6">
            <div className="relative">
              <div className="w-20 h-20 mx-auto bg-royal-gold/15 rounded-2xl flex items-center justify-center border-2 border-royal-gold/20">
                <Music className="w-10 h-10 text-royal-gold" />
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-hope-green rounded-full flex items-center justify-center shadow-lg">
                <CheckCircle className="w-4 h-4 text-white" />
              </div>
            </div>
            
            <h4 className="font-headline font-bold text-xl text-primary-custom">Preserving Cambodia's Heritage</h4>
            <p className="text-sm text-on-surface-variant leading-relaxed">
              These performances are featured in annual national festivals, boosting the confidence of sensory-impaired children and demonstrating their exceptional capabilities to Cambodian society.
            </p>
            
            <div className="pt-4 border-t border-surface-container-high">
              <div className="flex items-center justify-center gap-2 text-[11px] text-gray-400">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-royal-gold" />
                  100% Funded
                </span>
                <span className="w-px h-4 bg-surface-container-high" />
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-hope-green" />
                  Creative Grants
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}