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
  Info 
} from "lucide-react";
import { IMAGES, TIMELINE_EVENTS, EXPENSE_BREAKDOWN, REVENUE_BREAKDOWN } from "../data";

// ==================== 1. PRESENTATION ====================
export function PresentationPage({ onNavigate }: { onNavigate: (tab: string) => void }) {
  return (
    <div className="space-y-12">
      {/* Hero Cover */}
      <div className="relative bg-primary-custom text-white rounded-3xl overflow-hidden py-16 px-6 sm:px-12 shadow-md">
        <div className="absolute inset-0 opacity-20">
          <img 
            src={IMAGES.whoWeAreHero} 
            alt="Presentation Hero" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="max-w-3xl relative z-10 space-y-4">
          <span className="inline-block text-royal-gold font-bold tracking-wider text-xs uppercase bg-royal-gold/15 px-3 py-1 rounded-full border border-royal-gold/20">
            Cambodian-led Excellence Since 1991
          </span>
          <h2 className="font-headline font-bold text-3xl sm:text-5xl text-white tracking-tight leading-tight">
            Presentation & Vision
          </h2>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-light">
            Krousar Thmey (&quot;New Family&quot; in Khmer) provides critical child welfare services, specialized education for deaf or blind youngsters, and dynamic cultural preservation programs throughout Cambodia. Founded in refugee camp Site II, it is internationally recognized for its sustainable, local-led developmental framework.
          </p>
          <div className="pt-2">
            <button 
              onClick={() => onNavigate("who-history")} 
              className="bg-royal-gold hover:bg-royal-gold/90 text-primary-custom font-headline font-bold text-xs px-5 py-2.5 rounded-lg shadow flex items-center gap-2 transition-all"
            >
              Learn Our History
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Royal Patronage Banner */}
      <div className="bg-gradient-to-r from-royal-gold/5 via-royal-gold/15 to-royal-gold/5 border border-royal-gold/25 p-6 rounded-2xl flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
        <img 
          src={IMAGES.cambodianRoyalSeal} 
          alt="Royal Seal" 
          className="w-14 h-14 object-contain"
          referrerPolicy="no-referrer"
        />
        <div>
          <h4 className="font-headline font-bold text-sm text-primary-custom">Royal Patronage of His Majesty the King</h4>
          <p className="text-xs text-on-surface-variant leading-relaxed mt-1">
            Krousar Thmey proudly operates under the high patronage of <strong>His Majesty King Norodom Sihamoni of Cambodia</strong>. This seal of trust reflects our strict compliance with national policies and our deep roots in Khmer society.
          </p>
        </div>
      </div>

      {/* Strategic Pillars */}
      <div className="space-y-6">
        <div className="text-center max-w-xl mx-auto">
          <h3 className="font-headline font-bold text-xl sm:text-2xl text-angkor-blue">Our Strategic Pillars</h3>
          <p className="text-xs text-on-surface-variant mt-1">
            Fostering a world where every Cambodian child has access to dignity, stable environments, and equal-opportunity education.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-surface-container shadow-xs space-y-4">
            <div className="w-10 h-10 bg-angkor-blue/10 rounded-xl flex items-center justify-center text-angkor-blue">
              <BookOpen className="w-5 h-5" />
            </div>
            <h4 className="font-headline font-bold text-base text-primary-custom">Specialized Education</h4>
            <p className="text-xs text-on-surface-variant leading-relaxed">
              We developed the entire national curriculum, Cambodian Braille, and the Cambodian Sign Language dictionary. In 2019, our 5 special schools successfully transferred to state custody under the Ministry of Education (MoEYS) while we remain their technical and quality partner.
            </p>
            <div className="h-32 rounded-xl overflow-hidden border border-surface-container-high">
              <img src={IMAGES.brailleClass} alt="Braille Class" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-surface-container shadow-xs space-y-4">
            <div className="w-10 h-10 bg-royal-gold/15 rounded-xl flex items-center justify-center text-royal-gold">
              <Heart className="w-5 h-5" />
            </div>
            <h4 className="font-headline font-bold text-base text-primary-custom">Child Protection & Welfare</h4>
            <p className="text-xs text-on-surface-variant leading-relaxed">
              We operate emergency sheltering, medical coordination, stable family houses, and active local reintegration. We secure immediate physical safety and lifelong structural opportunities for street children, orphans, and abandoned youth.
            </p>
            <button 
              onClick={() => onNavigate("prog-child")}
              className="text-royal-gold font-bold text-xs flex items-center gap-1 hover:underline pt-2"
            >
              Explore Welfare Centers <ArrowRight className="w-3 h-3" />
            </button>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-surface-container shadow-xs space-y-4">
            <div className="w-10 h-10 bg-hope-green/15 rounded-xl flex items-center justify-center text-hope-green">
              <Globe className="w-5 h-5" />
            </div>
            <h4 className="font-headline font-bold text-base text-primary-custom">Cultural & Eco Initiatives</h4>
            <p className="text-xs text-on-surface-variant leading-relaxed">
              Traditional classical Khmer dance, shadow theater, and Pinpeat music classes enrich deaf and blind children&apos;s spirits. In addition, our Eco-School modules provide interactive gardens and awareness for sustainable regional development.
            </p>
            <div className="h-32 rounded-xl overflow-hidden border border-surface-container-high">
              <img src={IMAGES.ecoSchool} alt="Eco School" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ==================== 2. OUR HISTORY ====================
export function HistoryPage() {
  return (
    <div className="space-y-10">
      <div className="text-center max-w-xl mx-auto">
        <span className="text-royal-gold font-bold text-xs uppercase tracking-wider bg-royal-gold/10 px-3 py-1 rounded-full border border-royal-gold/20">
          Our History
        </span>
        <h2 className="font-headline font-bold text-2xl sm:text-3xl text-angkor-blue mt-2">
          Thirty-Year Timeline Journey
        </h2>
        <p className="text-on-surface-variant text-xs mt-1">
          From Cambodian refugee camps on the Thai border to national policy makers in Phnom Penh.
        </p>
      </div>

      <div className="relative max-w-4xl mx-auto border-l border-royal-gold/30 pl-6 ml-4 sm:ml-auto sm:pl-0 sm:border-l-0">
        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-royal-gold/25 hidden sm:block"></div>

        {TIMELINE_EVENTS.map((event, idx) => {
          const isEven = idx % 2 === 0;
          return (
            <div key={event.year} className={`relative mb-10 flex flex-col sm:flex-row ${isEven ? "sm:justify-start" : "sm:justify-end"}`}>
              {/* Timeline dot */}
              <div className="absolute left-[-31px] sm:left-1/2 sm:ml-[-8px] w-4 h-4 bg-royal-gold rounded-full border-2 border-surface-cream shadow z-10" />

              <div className={`w-full sm:w-[45%] bg-white p-5 rounded-2xl border border-surface-container shadow-xs ${isEven ? "sm:text-right" : "sm:text-left"}`}>
                <span className="inline-block bg-angkor-blue text-white font-headline font-bold text-xs px-2.5 py-0.5 rounded mb-2">
                  {event.year}
                </span>
                <h4 className="font-headline font-bold text-sm sm:text-base text-primary-custom mb-1">
                  {event.title}
                </h4>
                <p className="text-on-surface-variant text-xs leading-relaxed">
                  {event.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ==================== 3. AWARDS ====================
export function AwardsPage() {
  return (
    <div className="space-y-10">
      <div className="text-center max-w-xl mx-auto">
        <span className="text-royal-gold font-bold text-xs uppercase tracking-wider bg-royal-gold/10 px-3 py-1 rounded-full border border-royal-gold/20">
          Global Recognition
        </span>
        <h2 className="font-headline font-bold text-2xl sm:text-3xl text-angkor-blue mt-2">
          Awards & International Honors
        </h2>
        <p className="text-on-surface-variant text-xs mt-1">
          Celebrating Krousar Thmey&apos;s localized management and humanitarian innovations.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        <div className="bg-white p-6 rounded-2xl border border-surface-container shadow-sm flex flex-col items-center text-center space-y-3">
          <div className="w-16 h-16 flex items-center justify-center bg-surface-cream rounded-full border border-surface-container-high">
            <img src={IMAGES.unescoLogo} alt="UNESCO Logo" className="h-10 object-contain grayscale hover:grayscale-0 transition-all" referrerPolicy="no-referrer" />
          </div>
          <h4 className="font-headline font-bold text-sm sm:text-base text-primary-custom">
            UNESCO Hamad Bin Isa Al-Khalifa
          </h4>
          <p className="text-xs text-on-surface-variant leading-relaxed">
            Honored in Paris for pioneering digital resources, braille accessibility adaptations, and accessible tech tools for visual and hearing impaired students in Cambodia.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-surface-container shadow-sm flex flex-col items-center text-center space-y-3">
          <div className="w-16 h-16 flex items-center justify-center bg-surface-cream rounded-full border border-surface-container-high">
            <img src={IMAGES.worldOfChildrenLogo} alt="World of Children Logo" className="h-10 object-contain grayscale hover:grayscale-0 transition-all" referrerPolicy="no-referrer" />
          </div>
          <h4 className="font-headline font-bold text-sm sm:text-base text-primary-custom">
            World of Children Humanitarian
          </h4>
          <p className="text-xs text-on-surface-variant leading-relaxed">
            Recognizing Benoît Duchâteau-Arminjon for building a highly resilient non-governmental organization governed 100% by local Cambodian personnel.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-surface-container shadow-sm flex flex-col items-center text-center space-y-3">
          <div className="w-16 h-16 flex items-center justify-center bg-surface-cream rounded-full border border-surface-container-high">
            <img src={IMAGES.globalTeacherPrize} alt="Global Teacher Prize" className="h-10 object-contain grayscale hover:grayscale-0 transition-all" referrerPolicy="no-referrer" />
          </div>
          <h4 className="font-headline font-bold text-sm sm:text-base text-primary-custom">
            Global Teacher Prize Finalist
          </h4>
          <p className="text-xs text-on-surface-variant leading-relaxed">
            Honoring Krousar Thmey&apos;s exceptional teacher training models, which maintain high educational standards for children with sensory impairments.
          </p>
        </div>
      </div>
    </div>
  );
}

// ==================== 4. PARTNERS ====================
export function PartnersPage({ onNavigate }: { onNavigate: (tab: string) => void }) {
  return (
    <div className="space-y-10">
      <div className="text-center max-w-xl mx-auto">
        <span className="text-royal-gold font-bold text-xs uppercase tracking-wider bg-royal-gold/10 px-3 py-1 rounded-full border border-royal-gold/20">
          Our Supporters
        </span>
        <h2 className="font-headline font-bold text-2xl sm:text-3xl text-angkor-blue mt-2">
          Partners & Institutional Sponsors
        </h2>
        <p className="text-on-surface-variant text-xs mt-1">
          Working side-by-side with global, corporate, and public allies to achieve lasting social changes.
        </p>
      </div>

      <div className="bg-white p-6 sm:p-8 rounded-3xl border border-surface-container shadow-xs">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 items-center justify-items-center">
          <div className="flex flex-col items-center p-4 border border-surface-container-high rounded-xl w-full h-24 justify-center bg-surface-cream/50">
            <img src={IMAGES.unescoLogo} alt="UNESCO" className="max-h-12 object-contain grayscale opacity-80" referrerPolicy="no-referrer" />
            <span className="text-[9px] text-gray-400 mt-2 font-medium">Global Pedagogical Advisor</span>
          </div>
          <div className="flex flex-col items-center p-4 border border-surface-container-high rounded-xl w-full h-24 justify-center bg-surface-cream/50">
            <img src={IMAGES.worldOfChildrenLogo} alt="World of Children" className="max-h-12 object-contain grayscale opacity-80" referrerPolicy="no-referrer" />
            <span className="text-[9px] text-gray-400 mt-2 font-medium">Child Protection Partner</span>
          </div>
          <div className="flex flex-col items-center p-4 border border-surface-container-high rounded-xl w-full h-24 justify-center bg-surface-cream/50">
            <span className="text-lg font-headline font-extrabold text-primary-custom tracking-tight">CIA FIRST</span>
            <span className="text-[8px] text-gray-400 mt-1 uppercase font-bold text-center">International School</span>
            <span className="text-[9px] text-gray-400 mt-2 font-medium">Reciprocal Learning Ally</span>
          </div>
          <div className="flex flex-col items-center p-4 border border-surface-container-high rounded-xl w-full h-24 justify-center bg-surface-cream/50">
            <img src={IMAGES.cambodianRoyalSeal} alt="MoEYS Cambodia" className="max-h-12 object-contain grayscale opacity-80" referrerPolicy="no-referrer" />
            <span className="text-[9px] text-gray-400 mt-2 font-medium">Ministry of Education</span>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-angkor-blue to-primary-custom text-white p-8 rounded-3xl text-center space-y-4 shadow-sm">
        <h4 className="font-headline font-bold text-lg sm:text-xl text-royal-gold">Interested in Corporate Social Responsibility (CSR)?</h4>
        <p className="text-xs text-gray-300 max-w-2xl mx-auto leading-relaxed">
          We establish tailored partnership agreements, provide quarterly narrative milestone folders, and manage clear transparent accounting audits. Connect with our administrative hub to request a partnership blueprint.
        </p>
        <button 
          onClick={() => onNavigate("get-partner")}
          className="bg-royal-gold hover:bg-royal-gold/90 text-primary-custom font-headline font-bold text-xs px-6 py-2.5 rounded-lg transition-all inline-flex items-center gap-2"
        >
          Become a Partner
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}

// ==================== 5. TRANSPARENCY ====================
export function TransparencyPage() {
  const [view, setView] = useState<"expenses" | "revenue">("expenses");

  return (
    <div className="space-y-10">
      <div className="text-center max-w-xl mx-auto">
        <span className="text-royal-gold font-bold text-xs uppercase tracking-wider bg-royal-gold/10 px-3 py-1 rounded-full border border-royal-gold/20">
          Transparency & Governance
        </span>
        <h2 className="font-headline font-bold text-2xl sm:text-3xl text-angkor-blue mt-2">
          Transparency & Accountability
        </h2>
        <p className="text-on-surface-variant text-xs mt-1">
          Our financial distribution is externally audited to guarantee high humanitarian compliance.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Graph Controller */}
        <div className="lg:col-span-7 bg-white p-6 rounded-3xl border border-surface-container shadow-xs space-y-6">
          <div className="flex items-center justify-between border-b border-surface-container-high pb-4">
            <h4 className="font-headline font-bold text-sm sm:text-base text-primary-custom flex items-center gap-1.5">
              <TrendingUp className="w-4 h-4 text-royal-gold" />
              Interactive Fund Flow (FY 2023)
            </h4>
            <div className="flex bg-surface-container p-0.5 rounded-lg border border-surface-container-high text-xs">
              <button
                onClick={() => setView("expenses")}
                className={`px-3 py-1.5 rounded-md font-bold transition-all ${view === "expenses" ? "bg-angkor-blue text-white shadow-xs" : "text-on-surface-variant hover:text-primary-custom"}`}
              >
                Expenses
              </button>
              <button
                onClick={() => setView("revenue")}
                className={`px-3 py-1.5 rounded-md font-bold transition-all ${view === "revenue" ? "bg-angkor-blue text-white shadow-xs" : "text-on-surface-variant hover:text-primary-custom"}`}
              >
                Revenue
              </button>
            </div>
          </div>

          <div className="space-y-4">
            {(view === "expenses" ? EXPENSE_BREAKDOWN : REVENUE_BREAKDOWN).map((metric) => (
              <div key={metric.category} className="space-y-1">
                <div className="flex justify-between items-center text-[11px] sm:text-xs">
                  <span className="font-semibold text-primary-custom truncate max-w-[70%]">{metric.category}</span>
                  <span className="font-bold text-royal-gold font-mono">
                    {metric.percentage}% (${metric.amountUsd.toLocaleString()} USD)
                  </span>
                </div>
                <div className="h-2 bg-surface-cream rounded-full overflow-hidden border border-surface-container-high">
                  <div 
                    style={{ width: `${metric.percentage}%` }}
                    className={`h-full rounded-full transition-all duration-700 ${view === "expenses" ? "bg-angkor-blue" : "bg-hope-green"}`}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="p-3 bg-surface-cream rounded-xl border border-royal-gold/15 text-[10px] sm:text-xs text-on-surface-variant leading-relaxed">
            <strong>Auditor Note:</strong> 100% of local operations are managed on-site by highly skilled Khmer professionals, optimizing resource allocations. Over 85% of total capital flows directly into child welfare field programs.
          </div>
        </div>

        {/* Visual Trust Card */}
        <div className="lg:col-span-5 bg-gradient-to-br from-primary-custom to-angkor-blue text-white p-6 rounded-3xl shadow-sm space-y-4">
          <div className="w-12 h-12 bg-royal-gold/15 rounded-xl flex items-center justify-center text-royal-gold border border-royal-gold/20">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <h4 className="font-headline font-bold text-base text-royal-gold">Fully Certified Compliance</h4>
          <p className="text-xs text-gray-300 leading-relaxed">
            Our accounts are certified and validated externally by independent international auditing compliance bodies. We maintain strict ledger tracking, reporting, and zero tolerance for administrative waste.
          </p>
          <div className="border-t border-white/10 pt-4 flex justify-between items-center text-[10px] text-gray-400">
            <span>External Auditor: KPMG</span>
            <span>Registered NGO Registration #289</span>
          </div>
        </div>
      </div>
    </div>
  );
}
