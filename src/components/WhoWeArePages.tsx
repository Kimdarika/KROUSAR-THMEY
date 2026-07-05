import React, { useState } from "react";
import { 
  BookOpen, 
  Heart, 
  Globe, 
  ShieldCheck, 
  ArrowRight, 
  Users, 
  Award, 
  TrendingUp, 
  Download, 
  Info,
  Calendar,
  CheckCircle,
  Building2,
  GraduationCap,
  HandHeart,
  TreePalm,
  FileCheck,
  BarChart3,
  Sparkles,
  Star,
  Target,
  Eye
} from "lucide-react";
import { IMAGES, TIMELINE_EVENTS, EXPENSE_BREAKDOWN, REVENUE_BREAKDOWN } from "../data";

// ==================== UTILITY COMPONENTS ====================
const SectionBadge = ({ text, icon: Icon }: { text: string; icon?: any }) => (
  <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-royal-gold/10 text-royal-gold border border-royal-gold/20 backdrop-blur-sm">
    {Icon && <Icon className="w-3.5 h-3.5" />}
    <span className="w-1.5 h-1.5 rounded-full bg-royal-gold animate-pulse" />
    {text}
  </span>
);

const SectionHeader = ({ badge, title, subtitle, badgeIcon }: { badge: string; title: string; subtitle?: string; badgeIcon?: any }) => (
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

// ==================== 1. PRESENTATION ====================
export function PresentationPage({ onNavigate }: { onNavigate: (tab: string) => void }) {
  const stats = [
    { icon: Users, label: "Children Supported", value: "5,000+", description: "Annual beneficiaries across all programs" },
    { icon: Award, label: "Global Awards", value: "12", description: "International recognition for excellence" },
    { icon: Building2, label: "Operational Sites", value: "15", description: "Nationwide coverage in Cambodia" },
    { icon: GraduationCap, label: "Graduates", value: "1,200+", description: "Successfully transitioned to independence" }
  ];

  return (
    <div className="space-y-16">
      {/* Hero Cover - Enhanced */}
      <div className="relative bg-gradient-to-br from-primary-custom via-angkor-blue to-primary-custom text-white rounded-3xl overflow-hidden shadow-2xl">
        <div className="absolute inset-0 opacity-15">
          <img 
            src={IMAGES.whoWeAreHero} 
            alt="Krousar Thmey Hero" 
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
                Cambodian-led Excellence Since 1991
              </span>
            </div>
            
            <h1 className="font-headline font-bold text-4xl sm:text-6xl text-white leading-[1.1] tracking-tight">
              Presentation & Vision
            </h1>
            
            <p className="text-gray-200 text-base sm:text-lg max-w-2xl leading-relaxed font-light">
              Krousar Thmey (<span className="text-royal-gold font-medium">"New Family"</span> in Khmer) provides critical child welfare services, 
              specialized education for deaf or blind youngsters, and dynamic cultural preservation programs throughout Cambodia. 
              Founded in refugee camp Site II, it is internationally recognized for its sustainable, local-led developmental framework.
            </p>
            
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button 
                onClick={() => onNavigate("who-history")} 
                className="group bg-royal-gold hover:bg-royal-gold/90 text-primary-custom font-semibold text-sm px-6 py-3 rounded-xl shadow-lg shadow-royal-gold/25 hover:shadow-royal-gold/40 transition-all duration-300 flex items-center gap-2 hover:gap-3"
              >
                Learn Our History
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
              <button className="text-white/80 hover:text-white text-sm font-medium flex items-center gap-2 transition-colors duration-300 border-b-2 border-transparent hover:border-white/30 pb-1">
                <Sparkles className="w-4 h-4" />
                Explore Our Impact
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stats - Enhanced */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 -mt-8 relative z-20 px-4 sm:px-8">
        {stats.map((stat, idx) => (
          <div key={idx} className="group bg-white p-6 rounded-2xl border border-surface-container hover:border-royal-gold/30 hover:shadow-lg transition-all duration-300 space-y-2">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-royal-gold/10 text-royal-gold group-hover:bg-royal-gold group-hover:text-white transition-colors duration-300">
                <stat.icon className="w-5 h-5" />
              </div>
              <span className="text-xs font-medium text-on-surface-variant uppercase tracking-wider">{stat.label}</span>
            </div>
            <p className="font-headline font-bold text-2xl text-primary-custom">{stat.value}</p>
            <p className="text-xs text-on-surface-variant leading-relaxed">{stat.description}</p>
          </div>
        ))}
      </div>

      {/* Royal Patronage - Enhanced */}
      <div className="bg-gradient-to-r from-royal-gold/5 via-royal-gold/10 to-royal-gold/5 border border-royal-gold/20 p-8 rounded-2xl flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left hover:shadow-md transition-shadow duration-300">
        <div className="flex-shrink-0 p-3 rounded-full bg-royal-gold/10 border-2 border-royal-gold/20">
          <img 
            src={IMAGES.cambodianRoyalSeal} 
            alt="Royal Seal" 
            className="w-16 h-16 object-contain"
            referrerPolicy="no-referrer"
          />
        </div>
        <div>
          <h4 className="font-headline font-bold text-base text-primary-custom flex items-center gap-2">
            <span className="text-royal-gold">✦</span> 
            Royal Patronage of His Majesty the King
          </h4>
          <p className="text-sm text-on-surface-variant leading-relaxed mt-1 max-w-2xl">
            Krousar Thmey proudly operates under the high patronage of <strong className="text-primary-custom">His Majesty King Norodom Sihamoni of Cambodia</strong>. 
            This seal of trust reflects our strict compliance with national policies and our deep roots in Khmer society.
          </p>
        </div>
      </div>

      {/* Strategic Pillars - Enhanced */}
      <div className="space-y-8">
        <SectionHeader 
          badge="Our Foundation"
          badgeIcon={Target}
          title="Strategic Pillars"
          subtitle="Fostering a world where every Cambodian child has access to dignity, stable environments, and equal-opportunity education."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="group bg-white p-8 rounded-2xl border border-surface-container hover:border-royal-gold/30 hover:shadow-xl transition-all duration-300 space-y-4">
            <div className="flex items-start justify-between">
              <div className="w-12 h-12 bg-angkor-blue/10 rounded-xl flex items-center justify-center text-angkor-blue group-hover:bg-angkor-blue group-hover:text-white transition-colors duration-300">
                <BookOpen className="w-6 h-6" />
              </div>
              <span className="text-2xl font-bold text-angkor-blue/10 group-hover:text-angkor-blue/20 transition-colors">01</span>
            </div>
            <h4 className="font-headline font-bold text-lg text-primary-custom">Specialized Education</h4>
            <p className="text-sm text-on-surface-variant leading-relaxed">
              We developed the entire national curriculum, Cambodian Braille, and the Cambodian Sign Language dictionary. In 2019, our 5 special schools successfully transferred to state custody under the Ministry of Education (MoEYS) while we remain their technical and quality partner.
            </p>
            <div className="h-40 rounded-xl overflow-hidden border border-surface-container-high relative">
              <img src={IMAGES.brailleClass} alt="Braille Class" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </div>

          <div className="group bg-white p-8 rounded-2xl border border-surface-container hover:border-royal-gold/30 hover:shadow-xl transition-all duration-300 space-y-4">
            <div className="flex items-start justify-between">
              <div className="w-12 h-12 bg-royal-gold/10 rounded-xl flex items-center justify-center text-royal-gold group-hover:bg-royal-gold group-hover:text-white transition-colors duration-300">
                <Heart className="w-6 h-6" />
              </div>
              <span className="text-2xl font-bold text-angkor-blue/10 group-hover:text-angkor-blue/20 transition-colors">02</span>
            </div>
            <h4 className="font-headline font-bold text-lg text-primary-custom">Child Protection & Welfare</h4>
            <p className="text-sm text-on-surface-variant leading-relaxed">
              We operate emergency sheltering, medical coordination, stable family houses, and active local reintegration. We secure immediate physical safety and lifelong structural opportunities for street children, orphans, and abandoned youth.
            </p>
            <button 
              onClick={() => onNavigate("prog-child")}
              className="group/btn text-royal-gold font-semibold text-sm flex items-center gap-2 hover:gap-3 transition-all duration-300"
            >
              Explore Welfare Centers 
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
            </button>
          </div>

          <div className="group bg-white p-8 rounded-2xl border border-surface-container hover:border-royal-gold/30 hover:shadow-xl transition-all duration-300 space-y-4">
            <div className="flex items-start justify-between">
              <div className="w-12 h-12 bg-hope-green/10 rounded-xl flex items-center justify-center text-hope-green group-hover:bg-hope-green group-hover:text-white transition-colors duration-300">
                <Globe className="w-6 h-6" />
              </div>
              <span className="text-2xl font-bold text-angkor-blue/10 group-hover:text-angkor-blue/20 transition-colors">03</span>
            </div>
            <h4 className="font-headline font-bold text-lg text-primary-custom">Cultural & Eco Initiatives</h4>
            <p className="text-sm text-on-surface-variant leading-relaxed">
              Traditional classical Khmer dance, shadow theater, and Pinpeat music classes enrich deaf and blind children&apos;s spirits. In addition, our Eco-School modules provide interactive gardens and awareness for sustainable regional development.
            </p>
            <div className="h-40 rounded-xl overflow-hidden border border-surface-container-high relative">
              <img src={IMAGES.ecoSchool} alt="Eco School" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ==================== 2. OUR HISTORY ====================
export function HistoryPage() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="space-y-12">
      <SectionHeader 
        badge="Our Journey"
        badgeIcon={Calendar}
        title="Thirty-Year Timeline"
        subtitle="From Cambodian refugee camps on the Thai border to national policy makers in Phnom Penh."
      />

      <div className="relative max-w-5xl mx-auto">
        {/* Animated timeline line */}
        <div className="absolute left-[19px] sm:left-1/2 top-0 bottom-0 w-0.5 hidden sm:block">
          <div className="absolute inset-0 bg-gradient-to-b from-royal-gold/20 via-royal-gold/60 to-royal-gold/20" />
          <div className="absolute inset-0 bg-royal-gold/30 animate-pulse" style={{ animationDuration: '3s' }} />
        </div>
        <div className="absolute left-[19px] sm:left-1/2 top-0 bottom-0 w-0.5 bg-royal-gold/10 sm:hidden" />
        
        {TIMELINE_EVENTS.map((event, idx) => {
          const isEven = idx % 2 === 0;
          const isLast = idx === TIMELINE_EVENTS.length - 1;
          const isHovered = hoveredIndex === idx;
          
          return (
            <div 
              key={event.year} 
              className={`relative mb-16 flex flex-col sm:flex-row ${isEven ? "sm:justify-start" : "sm:justify-end"} ${isLast ? "mb-0" : ""}`}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Animated timeline node */}
              <div className="absolute left-[-2px] sm:left-1/2 sm:ml-[-14px] top-3 w-7 h-7 z-10">
                <div className={`absolute inset-0 bg-royal-gold rounded-full border-4 border-white shadow-lg shadow-royal-gold/30 flex items-center justify-center transition-all duration-500 ${isHovered ? 'scale-125' : ''}`}>
                  <div className={`w-2.5 h-2.5 rounded-full bg-white transition-all duration-500 ${isHovered ? 'scale-150' : ''}`} />
                </div>
                {/* Glow ring animation */}
                <div className={`absolute inset-0 rounded-full animate-ping opacity-20 bg-royal-gold transition-opacity duration-500 ${isHovered ? 'opacity-40' : ''}`} />
                {/* Secondary glow */}
                <div className={`absolute inset-[-4px] rounded-full animate-pulse opacity-0 bg-royal-gold/20 transition-opacity duration-500 ${isHovered ? 'opacity-100' : ''}`} />
              </div>

              {/* Content Card */}
              <div className={`w-full sm:w-[42%] ${isEven ? "sm:pr-14 sm:text-right" : "sm:pl-14 sm:text-left"} pl-10 sm:pl-0`}>
                <div className={`group bg-white p-7 rounded-2xl border-2 transition-all duration-500 relative overflow-hidden ${
                  isHovered 
                    ? 'border-royal-gold/40 shadow-2xl shadow-royal-gold/10 -translate-y-1' 
                    : 'border-surface-container hover:border-royal-gold/30 hover:shadow-xl'
                }`}>
                  {/* Animated gradient bar */}
                  <div className={`absolute top-0 ${isEven ? "right-0" : "left-0"} w-1 h-full bg-gradient-to-b from-royal-gold to-royal-gold/20 transition-all duration-700 ${
                    isHovered ? 'opacity-100 h-full' : 'opacity-0 h-0'
                  }`} />
                  
                  {/* Background pattern */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-700">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-royal-gold/10 rounded-full blur-2xl" />
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-angkor-blue/10 rounded-full blur-2xl" />
                  </div>
                  
                  {/* Year badge */}
                  <div className={`flex items-center gap-4 mb-4 ${isEven ? "sm:flex-row-reverse" : ""}`}>
                    <span className={`inline-flex items-center justify-center min-w-[56px] h-14 transition-all duration-500 ${
                      isHovered 
                        ? 'bg-gradient-to-br from-royal-gold to-royal-gold/80 shadow-xl shadow-royal-gold/30 scale-105' 
                        : 'bg-gradient-to-br from-angkor-blue to-angkor-blue/80 shadow-lg shadow-angkor-blue/20'
                    } text-white font-headline font-bold text-sm rounded-xl px-3 relative overflow-hidden`}>
                      <span className="relative z-10">{event.year}</span>
                      {/* Shine effect */}
                      <span className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 ${
                        isHovered ? 'translate-x-full' : '-translate-x-full'
                      }`} style={{ width: '200%' }} />
                    </span>
                    {isEven && <span className={`hidden sm:block flex-1 h-px transition-all duration-500 ${isHovered ? 'bg-gradient-to-r from-royal-gold/60 to-transparent' : 'bg-gradient-to-r from-royal-gold/30 to-transparent'}`} />}
                    {!isEven && <span className={`hidden sm:block flex-1 h-px transition-all duration-500 ${isHovered ? 'bg-gradient-to-l from-royal-gold/60 to-transparent' : 'bg-gradient-to-l from-royal-gold/30 to-transparent'}`} />}
                    <span className="sm:hidden flex-1 h-px bg-royal-gold/20" />
                  </div>

                  {/* Title */}
                  <h4 className={`font-headline font-bold text-lg transition-all duration-500 ${
                    isHovered ? 'text-royal-gold' : 'text-primary-custom group-hover:text-angkor-blue'
                  } ${isEven ? "sm:text-right" : "sm:text-left"}`}>
                    {event.title}
                  </h4>

                  {/* Description */}
                  <p className={`text-sm leading-relaxed transition-all duration-500 ${
                    isHovered ? 'text-primary-custom/90' : 'text-on-surface-variant group-hover:text-primary-custom/80'
                  } ${isEven ? "sm:text-right" : "sm:text-left"}`}>
                    {event.description}
                  </p>

                  {/* Decorative icon */}
                  <div className={`absolute bottom-4 ${isEven ? "left-4" : "right-4"} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}>
                    <Calendar className="w-8 h-8 text-royal-gold" />
                  </div>

                  {/* Mobile connector dot */}
                  <div className="absolute left-[-22px] top-6 w-2 h-2 bg-royal-gold/20 rounded-full sm:hidden" />
                </div>
              </div>
            </div>
          );
        })}

        {/* Animated final milestone */}
        <div className="absolute left-[19px] sm:left-1/2 bottom-0 w-7 h-7 -ml-[14px] hidden sm:block">
          <div className="absolute inset-0 bg-royal-gold/30 rounded-full border-2 border-royal-gold/40 animate-pulse" />
          <div className="absolute inset-1 bg-royal-gold/20 rounded-full animate-ping" style={{ animationDuration: '2s' }} />
          <div className="absolute inset-2 bg-royal-gold/10 rounded-full" />
        </div>
      </div>

      {/* Interactive summary stats with hover effects */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto mt-8">
        <div className="group relative bg-gradient-to-br from-royal-gold/5 to-royal-gold/10 p-5 rounded-xl text-center border border-royal-gold/10 hover:border-royal-gold/30 hover:shadow-lg transition-all duration-300 overflow-hidden cursor-pointer">
          <div className="absolute inset-0 bg-royal-gold/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          <p className="relative text-3xl font-bold text-royal-gold group-hover:scale-110 transition-transform duration-300">1991</p>
          <p className="relative text-xs text-on-surface-variant mt-1 font-medium">Founded in Refugee Camp</p>
          <div className="absolute top-0 right-0 w-16 h-16 bg-royal-gold/5 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500" />
        </div>
        
        <div className="group relative bg-gradient-to-br from-angkor-blue/5 to-angkor-blue/10 p-5 rounded-xl text-center border border-angkor-blue/10 hover:border-angkor-blue/30 hover:shadow-lg transition-all duration-300 overflow-hidden cursor-pointer">
          <div className="absolute inset-0 bg-angkor-blue/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          <p className="relative text-3xl font-bold text-angkor-blue group-hover:scale-110 transition-transform duration-300">30+</p>
          <p className="relative text-xs text-on-surface-variant mt-1 font-medium">Years of Service</p>
          <div className="absolute bottom-0 left-0 w-16 h-16 bg-angkor-blue/5 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500" />
        </div>
        
        <div className="group relative bg-gradient-to-br from-hope-green/5 to-hope-green/10 p-5 rounded-xl text-center border border-hope-green/10 hover:border-hope-green/30 hover:shadow-lg transition-all duration-300 overflow-hidden cursor-pointer">
          <div className="absolute inset-0 bg-hope-green/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          <p className="relative text-3xl font-bold text-hope-green group-hover:scale-110 transition-transform duration-300">2024</p>
          <p className="relative text-xs text-on-surface-variant mt-1 font-medium">Present Day Impact</p>
          <div className="absolute top-0 left-0 w-16 h-16 bg-hope-green/5 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500" />
        </div>
      </div>

      {/* Timeline progress indicator */}
      <div className="flex items-center gap-3 max-w-xs mx-auto mt-6">
        <div className="flex-1 h-1 bg-surface-cream rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-royal-gold/20 via-royal-gold to-royal-gold/20 rounded-full animate-pulse" style={{ width: '100%', animationDuration: '4s' }} />
        </div>
        <span className="text-[10px] font-medium text-royal-gold tracking-wider uppercase">Journey Continues</span>
        <div className="flex-1 h-1 bg-surface-cream rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-l from-royal-gold/20 via-royal-gold to-royal-gold/20 rounded-full animate-pulse" style={{ width: '100%', animationDuration: '4s' }} />
        </div>
      </div>
    </div>
  );
}

// ==================== 3. AWARDS ====================
export function AwardsPage() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  const awards = [
    {
      icon: IMAGES.unescoLogo,
      title: "UNESCO Hamad Bin Isa Al-Khalifa",
      description: "Honored in Paris for pioneering digital resources, braille accessibility adaptations, and accessible tech tools for visual and hearing impaired students in Cambodia.",
      year: "2022",
      color: "from-blue-500 to-blue-600",
      lightColor: "from-blue-500/10 to-blue-600/5",
      badge: "UNESCO",
      category: "Education Innovation"
    },
    {
      icon: IMAGES.worldOfChildrenLogo,
      title: "World of Children Humanitarian",
      description: "Recognizing Benoît Duchâteau-Arminjon for building a highly resilient non-governmental organization governed 100% by local Cambodian personnel.",
      year: "2019",
      color: "from-amber-500 to-amber-600",
      lightColor: "from-amber-500/10 to-amber-600/5",
      badge: "Humanitarian",
      category: "Leadership Excellence"
    },
    {
      icon: IMAGES.globalTeacherPrize,
      title: "Global Teacher Prize Finalist",
      description: "Honoring Krousar Thmey's exceptional teacher training models, which maintain high educational standards for children with sensory impairments.",
      year: "2020",
      color: "from-emerald-500 to-emerald-600",
      lightColor: "from-emerald-500/10 to-emerald-600/5",
      badge: "Education",
      category: "Teacher Excellence"
    }
  ];

  return (
    <div className="space-y-12">
      <SectionHeader 
        badge="Global Recognition"
        badgeIcon={Star}
        title="Awards & International Honors"
        subtitle="Celebrating Krousar Thmey's localized management and humanitarian innovations."
      />

      {/* Awards Grid with Enhanced Design */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {awards.map((award, idx) => {
          const isHovered = hoveredIndex === idx;
          return (
            <div 
              key={idx}
              className="group relative bg-white rounded-2xl border-2 border-surface-container hover:border-royal-gold/40 transition-all duration-500 overflow-hidden"
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                transform: isHovered ? 'translateY(-8px)' : 'translateY(0)',
                boxShadow: isHovered 
                  ? '0 20px 60px rgba(212, 175, 55, 0.15)' 
                  : '0 4px 20px rgba(0, 0, 0, 0.05)'
              }}
            >
              {/* Premium Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${award.lightColor} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
              
              {/* Decorative Corner Accent */}
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${award.color} opacity-0 group-hover:opacity-10 transition-opacity duration-700 rounded-full blur-2xl`} />
              <div className={`absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-br ${award.color} opacity-0 group-hover:opacity-10 transition-opacity duration-700 rounded-full blur-2xl`} />

              {/* Top Border Accent */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${award.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              <div className="relative p-8 flex flex-col items-center text-center">
                {/* Icon Container with Premium Design */}
                <div className="relative mb-6">
                  <div className={`absolute inset-0 bg-gradient-to-br ${award.color} rounded-full blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                  <div className={`w-24 h-24 flex items-center justify-center bg-gradient-to-br ${award.lightColor} rounded-full border-2 border-surface-container-high group-hover:border-royal-gold/40 transition-all duration-500 relative`}>
                    <img 
                      src={award.icon} 
                      alt={award.title} 
                      className="w-12 h-12 object-contain grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110" 
                      referrerPolicy="no-referrer" 
                    />
                  </div>
                  
                  {/* Year Badge */}
                  <div className={`absolute -top-2 -right-2 bg-gradient-to-br ${award.color} text-white text-[10px] font-bold px-3 py-1.5 rounded-full shadow-lg transition-all duration-500 ${
                    isHovered ? 'scale-110' : ''
                  }`}>
                    {award.year}
                  </div>
                </div>

                {/* Category Badge */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-surface-cream rounded-full border border-surface-container-high group-hover:border-royal-gold/20 transition-colors duration-300 mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-royal-gold" />
                  <span className="text-[10px] font-medium text-on-surface-variant uppercase tracking-wider">
                    {award.category}
                  </span>
                </div>

                {/* Title with Gradient on Hover */}
                <h4 className={`font-headline font-bold text-lg mb-3 transition-colors duration-500 ${
                  isHovered ? 'text-royal-gold' : 'text-primary-custom'
                }`}>
                  {award.title}
                </h4>

                {/* Description */}
                <p className="text-sm text-on-surface-variant leading-relaxed group-hover:text-primary-custom/90 transition-colors duration-300">
                  {award.description}
                </p>

                {/* Premium Divider */}
                <div className="relative w-16 h-0.5 bg-royal-gold/30 group-hover:w-24 transition-all duration-500 mt-6">
                  <div className={`absolute inset-0 bg-gradient-to-r ${award.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                </div>

                {/* Award Badge */}
                <div className="mt-4 text-[10px] text-on-surface-variant/50 font-medium uppercase tracking-wider group-hover:text-royal-gold/70 transition-colors duration-300">
                  {award.badge} Award
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className={`absolute -inset-px bg-gradient-to-r ${award.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 pointer-events-none`} />
            </div>
          );
        })}
      </div>

      {/* Achievement Statistics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mt-8">
        <div className="bg-gradient-to-br from-royal-gold/5 to-royal-gold/10 p-4 rounded-xl text-center border border-royal-gold/10 hover:border-royal-gold/30 transition-all duration-300">
          <p className="text-2xl font-bold text-royal-gold">12</p>
          <p className="text-xs text-on-surface-variant mt-1">Total Awards</p>
        </div>
        <div className="bg-gradient-to-br from-blue-500/5 to-blue-600/10 p-4 rounded-xl text-center border border-blue-500/10 hover:border-blue-500/30 transition-all duration-300">
          <p className="text-2xl font-bold text-blue-600">4</p>
          <p className="text-xs text-on-surface-variant mt-1">International</p>
        </div>
        <div className="bg-gradient-to-br from-amber-500/5 to-amber-600/10 p-4 rounded-xl text-center border border-amber-500/10 hover:border-amber-500/30 transition-all duration-300">
          <p className="text-2xl font-bold text-amber-600">5</p>
          <p className="text-xs text-on-surface-variant mt-1">National</p>
        </div>
        <div className="bg-gradient-to-br from-emerald-500/5 to-emerald-600/10 p-4 rounded-xl text-center border border-emerald-500/10 hover:border-emerald-500/30 transition-all duration-300">
          <p className="text-2xl font-bold text-emerald-600">3</p>
          <p className="text-xs text-on-surface-variant mt-1">Special Honors</p>
        </div>
      </div>

      {/* Testimonial/Quote Section */}
      <div className="relative bg-gradient-to-br from-primary-custom/5 to-angkor-blue/5 p-8 rounded-2xl border border-royal-gold/10 max-w-3xl mx-auto">
        <div className="absolute top-0 left-0 w-20 h-20 text-royal-gold/10">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M10 11h-4v-4h4v4zm8 0h-4v-4h4v4zm-8 8h-4v-4h4v4zm8 0h-4v-4h4v4z"/>
          </svg>
        </div>
        <div className="relative text-center">
          <p className="text-sm text-on-surface-variant leading-relaxed italic">
            "These awards reflect our unwavering commitment to creating lasting change in Cambodia. 
            Every recognition strengthens our resolve to continue serving children with disabilities 
            and building a more inclusive society."
          </p>
          <p className="text-xs font-bold text-royal-gold mt-3">— Krousar Thmey Leadership</p>
        </div>
      </div>
    </div>
  );
}
// ==================== 4. PARTNERS ====================
export function PartnersPage({ onNavigate }: { onNavigate: (tab: string) => void }) {
  const [hoveredPartner, setHoveredPartner] = useState<number | null>(null);
  
  const partners = [
    { 
      name: "UNESCO", 
      logo: IMAGES.unescoLogo, 
      role: "Global Pedagogical Advisor",
      description: "Partnering to advance inclusive education and accessible learning resources",
      tier: "Strategic",
      color: "from-blue-500 to-blue-600"
    },
    { 
      name: "World of Children", 
      logo: IMAGES.worldOfChildrenLogo, 
      role: "Child Protection Partner",
      description: "Collaborating to protect vulnerable children and strengthen welfare systems",
      tier: "Strategic",
      color: "from-amber-500 to-amber-600"
    },
    { 
      name: "CIA FIRST", 
      logo: null, 
      role: "Reciprocal Learning Ally",
      description: "International school partnership for cultural exchange and educational innovation",
      tier: "Corporate",
      color: "from-purple-500 to-purple-600"
    },
    { 
      name: "MoEYS Cambodia", 
      logo: IMAGES.cambodianRoyalSeal, 
      role: "Ministry of Education",
      description: "Official government partner for national education policy implementation",
      tier: "Government",
      color: "from-emerald-500 to-emerald-600"
    }
  ];

  // Additional partners for showcase
  const additionalPartners = [
    { name: "UNICEF", logo: null, role: "Child Rights Advocate" },
    { name: "Save the Children", logo: null, role: "Welfare Partner" },
    { name: "World Bank", logo: null, role: "Development Partner" },
    { name: "Khmer NGO Network", logo: null, role: "Local Alliance" }
  ];

  return (
    <div className="space-y-12">
      <SectionHeader 
        badge="Our Supporters"
        badgeIcon={HandHeart}
        title="Partners & Institutional Sponsors"
        subtitle="Working side-by-side with global, corporate, and public allies to achieve lasting social changes."
      />

      {/* Partner Grid - Enhanced */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {partners.map((partner, idx) => {
          const isHovered = hoveredPartner === idx;
          return (
            <div 
              key={idx}
              className="group relative bg-white rounded-2xl border-2 border-surface-container hover:border-royal-gold/40 transition-all duration-500 overflow-hidden"
              onMouseEnter={() => setHoveredPartner(idx)}
              onMouseLeave={() => setHoveredPartner(null)}
              style={{
                transform: isHovered ? 'translateY(-6px)' : 'translateY(0)',
                boxShadow: isHovered 
                  ? '0 16px 48px rgba(212, 175, 55, 0.12)' 
                  : '0 4px 16px rgba(0, 0, 0, 0.04)'
              }}
            >
              {/* Gradient Background on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${partner.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
              
              {/* Top Accent Bar */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${partner.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              <div className="relative p-6 flex flex-col items-center text-center">
                {/* Partner Logo Container */}
                <div className="relative mb-4">
                  <div className={`w-20 h-20 flex items-center justify-center bg-gradient-to-br from-surface-cream to-white rounded-2xl border-2 border-surface-container-high group-hover:border-royal-gold/30 transition-all duration-500 ${
                    isHovered ? 'shadow-lg' : ''
                  }`}>
                    {partner.logo ? (
                      <img 
                        src={partner.logo} 
                        alt={partner.name} 
                        className="max-h-12 object-contain grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110" 
                        referrerPolicy="no-referrer" 
                      />
                    ) : (
                      <span className="text-2xl font-headline font-extrabold text-primary-custom tracking-tight group-hover:text-royal-gold transition-colors duration-300">
                        {partner.name}
                      </span>
                    )}
                  </div>
                  
                  {/* Tier Badge */}
                  <div className={`absolute -top-2 -right-2 bg-gradient-to-r ${partner.color} text-white text-[8px] font-bold px-2.5 py-1 rounded-full shadow-lg transition-all duration-300 ${
                    isHovered ? 'scale-110' : ''
                  }`}>
                    {partner.tier}
                  </div>
                </div>

                {/* Partner Name */}
                <h4 className={`font-headline font-bold text-base transition-colors duration-300 ${
                  isHovered ? 'text-royal-gold' : 'text-primary-custom'
                }`}>
                  {partner.name}
                </h4>

                {/* Role */}
                <p className="text-xs font-medium text-royal-gold/70 uppercase tracking-wider mt-0.5">
                  {partner.role}
                </p>

                {/* Description */}
                <p className="text-xs text-on-surface-variant leading-relaxed mt-3 group-hover:text-primary-custom/80 transition-colors duration-300">
                  {partner.description}
                </p>

                {/* Decorative Line */}
                <div className="relative w-12 h-0.5 bg-royal-gold/20 group-hover:w-16 transition-all duration-500 mt-4">
                  <div className={`absolute inset-0 bg-gradient-to-r ${partner.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Additional Partners Showcase */}
      <div className="bg-white p-8 sm:p-10 rounded-3xl border-2 border-surface-container hover:border-royal-gold/20 transition-all duration-300 shadow-sm hover:shadow-lg">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-0.5 bg-royal-gold/30" />
          <span className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider">Our Extended Network</span>
          <div className="flex-1 h-0.5 bg-royal-gold/30" />
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {additionalPartners.map((partner, idx) => (
            <div 
              key={idx} 
              className="group flex flex-col items-center p-4 border border-surface-container-high rounded-xl hover:border-royal-gold/30 hover:shadow-md transition-all duration-300 bg-surface-cream/20 hover:bg-surface-cream/60 cursor-pointer"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-surface-cream to-white rounded-full mb-2 group-hover:scale-110 transition-transform duration-300">
                <span className="text-lg font-headline font-bold text-primary-custom/80 group-hover:text-royal-gold transition-colors duration-300">
                  {partner.name.charAt(0)}
                </span>
              </div>
              <span className="text-xs font-medium text-primary-custom group-hover:text-royal-gold transition-colors duration-300 text-center">
                {partner.name}
              </span>
              <span className="text-[8px] text-on-surface-variant/60 uppercase tracking-wider mt-0.5">
                {partner.role}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Partnership Impact Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
        <div className="bg-gradient-to-br from-royal-gold/5 to-royal-gold/10 p-4 rounded-xl text-center border border-royal-gold/10 hover:border-royal-gold/30 transition-all duration-300">
          <p className="text-2xl font-bold text-royal-gold">15+</p>
          <p className="text-xs text-on-surface-variant mt-1">Active Partners</p>
        </div>
        <div className="bg-gradient-to-br from-blue-500/5 to-blue-600/10 p-4 rounded-xl text-center border border-blue-500/10 hover:border-blue-500/30 transition-all duration-300">
          <p className="text-2xl font-bold text-blue-600">8</p>
          <p className="text-xs text-on-surface-variant mt-1">Countries</p>
        </div>
        <div className="bg-gradient-to-br from-amber-500/5 to-amber-600/10 p-4 rounded-xl text-center border border-amber-500/10 hover:border-amber-500/30 transition-all duration-300">
          <p className="text-2xl font-bold text-amber-600">12</p>
          <p className="text-xs text-on-surface-variant mt-1">Programs</p>
        </div>
        <div className="bg-gradient-to-br from-emerald-500/5 to-emerald-600/10 p-4 rounded-xl text-center border border-emerald-500/10 hover:border-emerald-500/30 transition-all duration-300">
          <p className="text-2xl font-bold text-emerald-600">50K+</p>
          <p className="text-xs text-on-surface-variant mt-1">Lives Impacted</p>
        </div>
      </div>

      {/* CSR CTA Section - Enhanced */}
      <div className="relative bg-gradient-to-br from-angkor-blue via-primary-custom to-primary-custom text-white p-12 rounded-3xl overflow-hidden shadow-2xl">
        {/* Premium Background Decor */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-80 h-80 bg-royal-gold/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-royal-gold/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-royal-gold/5 rounded-full blur-2xl" />
          
          {/* Animated Grid Pattern */}
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
            backgroundSize: '24px 24px'
          }} />
        </div>
        
        <div className="relative z-10 text-center space-y-6 max-w-2xl mx-auto">
          {/* Icon with Pulse Animation */}
          <div className="relative w-20 h-20 mx-auto">
            <div className="absolute inset-0 bg-royal-gold/20 rounded-2xl animate-ping" />
            <div className="relative w-20 h-20 bg-royal-gold/15 rounded-2xl flex items-center justify-center border-2 border-royal-gold/30 backdrop-blur-sm">
              <HandHeart className="w-10 h-10 text-royal-gold" />
            </div>
          </div>
          
          <h4 className="font-headline font-bold text-3xl sm:text-4xl text-royal-gold">
            Interested in CSR Partnerships?
          </h4>
          
          <p className="text-gray-300 text-sm leading-relaxed max-w-lg mx-auto">
            We establish tailored partnership agreements, provide quarterly narrative milestone folders, 
            and manage clear transparent accounting audits. Connect with our administrative hub to request 
            a partnership blueprint.
          </p>

          {/* Partnership Benefits */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-lg mx-auto">
            <div className="bg-white/5 backdrop-blur-sm p-3 rounded-xl border border-white/10">
              <p className="text-xs font-medium text-royal-gold">Tailored Agreements</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-3 rounded-xl border border-white/10">
              <p className="text-xs font-medium text-royal-gold">Quarterly Reports</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-3 rounded-xl border border-white/10">
              <p className="text-xs font-medium text-royal-gold">Transparent Audits</p>
            </div>
          </div>
          
          <button 
            onClick={() => onNavigate("get-partner")}
            className="group relative bg-royal-gold hover:bg-royal-gold/90 text-primary-custom font-semibold text-sm px-10 py-4 rounded-xl shadow-xl shadow-royal-gold/30 hover:shadow-royal-gold/50 transition-all duration-300 inline-flex items-center gap-3 hover:gap-4 overflow-hidden"
          >
            <span className="relative z-10">Become a Partner</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 relative z-10" />
            
            {/* Button Shine Effect */}
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
          </button>

          {/* Trust Badges */}
          <div className="flex items-center justify-center gap-6 pt-2">
            <span className="text-[10px] text-gray-400 flex items-center gap-1.5">
              <span className="w-1 h-1 rounded-full bg-royal-gold" />
              Transparent
            </span>
            <span className="text-[10px] text-gray-400 flex items-center gap-1.5">
              <span className="w-1 h-1 rounded-full bg-royal-gold" />
              Accountable
            </span>
            <span className="text-[10px] text-gray-400 flex items-center gap-1.5">
              <span className="w-1 h-1 rounded-full bg-royal-gold" />
              Impact-Driven
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
// ==================== 5. TRANSPARENCY ====================
export function TransparencyPage() {
  const [view, setView] = useState<"expenses" | "revenue">("expenses");
  const [selectedMetric, setSelectedMetric] = useState<string | null>(null);
  const currentData = view === "expenses" ? EXPENSE_BREAKDOWN : REVENUE_BREAKDOWN;
  const totalAmount = currentData.reduce((sum, item) => sum + item.amountUsd, 0);
  const maxPercentage = Math.max(...currentData.map(item => item.percentage));

  return (
    <div className="space-y-12">
      <SectionHeader 
        badge="Transparency & Governance"
        badgeIcon={ShieldCheck}
        title="Financial Accountability"
        subtitle="Our financial distribution is externally audited to guarantee high humanitarian compliance."
      />

      <div className="grid grid-cols-1 lg:grid-cols-7 gap-8">
        {/* Main Financial Dashboard */}
        <div className="lg:col-span-4 space-y-6">
          {/* Graph Controller - Enhanced */}
          <div className="bg-white p-8 rounded-3xl border-2 border-surface-container hover:border-royal-gold/20 transition-all duration-300 shadow-sm hover:shadow-lg">
            <div className="flex items-center justify-between border-b-2 border-surface-container-high pb-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-royal-gold/10 rounded-xl">
                  <BarChart3 className="w-5 h-5 text-royal-gold" />
                </div>
                <div>
                  <h4 className="font-headline font-bold text-base text-primary-custom">
                    Fund Flow Distribution
                  </h4>
                  <p className="text-[10px] text-on-surface-variant/60">
                    Fiscal Year 2023
                  </p>
                </div>
              </div>
              <div className="flex bg-surface-container p-1 rounded-lg border-2 border-surface-container-high">
                <button
                  onClick={() => setView("expenses")}
                  className={`px-4 py-1.5 rounded-md font-semibold text-xs transition-all duration-300 ${
                    view === "expenses" 
                      ? "bg-angkor-blue text-white shadow-md" 
                      : "text-on-surface-variant hover:text-primary-custom hover:bg-surface-cream"
                  }`}
                >
                  Expenses
                </button>
                <button
                  onClick={() => setView("revenue")}
                  className={`px-4 py-1.5 rounded-md font-semibold text-xs transition-all duration-300 ${
                    view === "revenue" 
                      ? "bg-angkor-blue text-white shadow-md" 
                      : "text-on-surface-variant hover:text-primary-custom hover:bg-surface-cream"
                  }`}
                >
                  Revenue
                </button>
              </div>
            </div>

            {/* Enhanced Metrics Display */}
            <div className="space-y-5 mt-6">
              {currentData.map((metric) => {
                const isSelected = selectedMetric === metric.category;
                const barColor = view === "expenses" ? "bg-angkor-blue" : "bg-hope-green";
                const isMax = metric.percentage === maxPercentage;
                
                return (
                  <div 
                    key={metric.category} 
                    className={`group cursor-pointer transition-all duration-300 p-2 rounded-xl hover:bg-surface-cream/50 ${
                      isSelected ? 'bg-royal-gold/5 border border-royal-gold/20' : ''
                    }`}
                    onMouseEnter={() => setSelectedMetric(metric.category)}
                    onMouseLeave={() => setSelectedMetric(null)}
                  >
                    <div className="flex justify-between items-center mb-1.5">
                      <div className="flex items-center gap-2">
                        <span className={`font-medium text-sm text-primary-custom transition-colors duration-300 ${
                          isSelected ? 'text-royal-gold' : 'group-hover:text-angkor-blue'
                        }`}>
                          {metric.category}
                        </span>
                        {isMax && (
                          <span className="text-[8px] font-bold text-royal-gold bg-royal-gold/10 px-1.5 py-0.5 rounded">
                            HIGHEST
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-2">
                        <span className={`font-bold font-mono text-sm transition-all duration-300 ${
                          isSelected ? 'text-royal-gold scale-110' : 'text-royal-gold'
                        }`}>
                          {metric.percentage}%
                        </span>
                      </div>
                    </div>
                    
                    {/* Enhanced Progress Bar */}
                    <div className="relative h-3 bg-surface-cream rounded-full overflow-hidden border border-surface-container-high">
                      <div 
                        style={{ width: `${metric.percentage}%` }}
                        className={`h-full rounded-full transition-all duration-1000 ease-out ${barColor} relative`}
                      >
                        {/* Animated Shimmer Effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
                      </div>
                      {/* Percentage Marker */}
                      <div 
                        className="absolute top-0 h-full w-0.5 bg-white/50"
                        style={{ left: `${metric.percentage}%` }}
                      />
                    </div>
                    
                    <div className="flex justify-between text-[10px] text-on-surface-variant/60 mt-1">
                      <span>${metric.amountUsd.toLocaleString()} USD</span>
                      <span className={`transition-opacity duration-300 ${
                        isSelected ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                      }`}>
                        {metric.percentage}% of total
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Total Summary with Animation */}
            <div className="pt-4 border-t-2 border-surface-container-high flex justify-between items-center mt-2">
              <span className="text-xs text-on-surface-variant">Total {view === "expenses" ? "Expenses" : "Revenue"}</span>
              <div className="flex items-center gap-3">
                <span className="text-[10px] text-on-surface-variant/60">100%</span>
                <span className="font-bold text-primary-custom font-mono text-base">
                  ${totalAmount.toLocaleString()} USD
                </span>
              </div>
            </div>
          </div>

          {/* Additional Financial Insights */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-2xl border border-surface-container hover:border-royal-gold/20 transition-all duration-300">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-2 h-2 rounded-full bg-hope-green" />
                <span className="text-[10px] text-on-surface-variant/60 uppercase tracking-wider">Efficiency</span>
              </div>
              <p className="text-lg font-bold text-primary-custom">92%</p>
              <p className="text-[10px] text-on-surface-variant">Program Efficiency Rate</p>
            </div>
            <div className="bg-white p-4 rounded-2xl border border-surface-container hover:border-royal-gold/20 transition-all duration-300">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-2 h-2 rounded-full bg-angkor-blue" />
                <span className="text-[10px] text-on-surface-variant/60 uppercase tracking-wider">Transparency</span>
              </div>
              <p className="text-lg font-bold text-primary-custom">A+</p>
              <p className="text-[10px] text-on-surface-variant">Audit Rating</p>
            </div>
          </div>
        </div>

        {/* Right Column - Trust & Certification */}
        <div className="lg:col-span-3 space-y-6">
          {/* Certification Card - Enhanced */}
          <div className="relative bg-gradient-to-br from-primary-custom via-angkor-blue to-primary-custom text-white p-8 rounded-3xl shadow-xl overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0">
              <div className="absolute top-0 right-0 w-64 h-64 bg-royal-gold/10 rounded-full blur-3xl animate-pulse" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-royal-gold/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
            </div>
            
            <div className="relative z-10 space-y-6">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-royal-gold/20 rounded-xl blur-lg animate-pulse" />
                  <div className="relative p-3 bg-royal-gold/15 rounded-xl border-2 border-royal-gold/30 backdrop-blur-sm">
                    <ShieldCheck className="w-7 h-7 text-royal-gold" />
                  </div>
                </div>
                <div>
                  <h4 className="font-headline font-bold text-royal-gold text-xl">Fully Certified</h4>
                  <p className="text-xs text-gray-300">Compliance Verified ✓</p>
                </div>
              </div>
              
              <p className="text-sm text-gray-200 leading-relaxed">
                Our accounts are certified and validated externally by independent international auditing compliance bodies. 
                We maintain strict ledger tracking, reporting, and zero tolerance for administrative waste.
              </p>
              
              {/* Certification Details */}
              <div className="grid grid-cols-2 gap-3 border-t border-white/10 pt-4">
                <div className="bg-white/5 backdrop-blur-sm p-3 rounded-xl">
                  <p className="text-[10px] text-gray-400">External Auditor</p>
                  <p className="text-sm font-medium text-white">KPMG</p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm p-3 rounded-xl">
                  <p className="text-[10px] text-gray-400">NGO Registration</p>
                  <p className="text-sm font-mono font-medium text-white">#289</p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm p-3 rounded-xl">
                  <p className="text-[10px] text-gray-400">Last Audit</p>
                  <p className="text-sm font-medium text-white">December 2023</p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm p-3 rounded-xl">
                  <p className="text-[10px] text-gray-400">Compliance</p>
                  <p className="text-sm font-medium text-hope-green">100%</p>
                </div>
              </div>

              {/* Trust Badge */}
              <div className="flex items-center gap-2 pt-2">
                <span className="text-[10px] text-gray-400 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-hope-green" />
                  Audited
                </span>
                <span className="text-[10px] text-gray-400 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-hope-green" />
                  Verified
                </span>
                <span className="text-[10px] text-gray-400 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-hope-green" />
                  Transparent
                </span>
              </div>
            </div>
          </div>

          {/* Impact Guarantee - Enhanced */}
          <div className="bg-gradient-to-br from-hope-green/5 to-emerald-50/50 border-2 border-hope-green/20 p-6 rounded-2xl hover:shadow-lg transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-hope-green/10 rounded-xl">
                <CheckCircle className="w-6 h-6 text-hope-green" />
              </div>
              <div>
                <h5 className="font-semibold text-base text-primary-custom">Impact Guarantee</h5>
                <p className="text-sm text-on-surface-variant leading-relaxed mt-1">
                  Over <strong className="text-hope-green text-lg">85%</strong> of total capital flows directly 
                  into child welfare field programs.
                </p>
                <div className="mt-3 flex items-center gap-2">
                  <div className="flex-1 h-1.5 bg-surface-cream rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-hope-green to-emerald-400 rounded-full" style={{ width: '85%' }} />
                  </div>
                  <span className="text-xs font-bold text-hope-green">85%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Download Reports */}
          <button className="w-full group bg-white border-2 border-surface-container hover:border-royal-gold/30 p-4 rounded-2xl transition-all duration-300 flex items-center justify-between hover:shadow-lg">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-royal-gold/5 rounded-xl group-hover:bg-royal-gold/10 transition-colors duration-300">
                <Download className="w-5 h-5 text-royal-gold" />
              </div>
              <div className="text-left">
                <p className="text-sm font-semibold text-primary-custom group-hover:text-royal-gold transition-colors duration-300">
                  Download Full Audit Report
                </p>
                <p className="text-[10px] text-on-surface-variant/60">PDF • 2.4 MB • Updated 2024</p>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-royal-gold/50 group-hover:text-royal-gold group-hover:translate-x-1 transition-all duration-300" />
          </button>
        </div>
      </div>
    </div>
  );
}