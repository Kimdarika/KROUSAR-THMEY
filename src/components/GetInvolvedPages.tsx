import React, { useState } from "react";
import { 
  HeartHandshake, 
  CheckCircle, 
  ArrowRight, 
  MapPin, 
  ChevronUp, 
  ChevronDown, 
  Plus, 
  Minus, 
  BookMarked,
  X,
  Target,
  Globe,
  Award,
  Users,
  Building2,
  Mail,
  MessageCircle,
  Send,
  Briefcase,
  Clock,
  ShoppingBag,
  Sparkles,
  Star
} from "lucide-react";
import { BOOKS_FOR_SALE, Book } from "../data";

// ==================== UTILITY COMPONENTS ====================
const SectionBadge = ({ text, icon: Icon }: { text: string; icon?: any }) => (
  <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-royal-gold/10 text-royal-gold border border-royal-gold/20 backdrop-blur-sm">
    {Icon && <Icon className="w-3.5 h-3.5" />}
    <span className="w-1.5 h-1.5 rounded-full bg-royal-gold animate-pulse" />
    {text}
  </span>
);

const SectionHeader = ({ badge, badgeIcon, title, subtitle }: any) => (
  <div className="text-center max-w-3xl mx-auto space-y-4">
    <SectionBadge text={badge} icon={badgeIcon} />
    <h2 className="font-headline font-bold text-3xl sm:text-4xl text-angkor-blue tracking-tight">
      {title}
    </h2>
    {subtitle && (
      <p className="text-on-surface-variant text-sm leading-relaxed max-w-xl mx-auto">
        {subtitle}
      </p>
    )}
  </div>
);

// ==================== 1. BECOME A PARTNER ====================
export function BecomePartnerPage({ onSubmitSuccess }: { onSubmitSuccess: () => void }) {
  const [formData, setFormData] = useState({ orgName: "", contactName: "", email: "", proposal: "" });
  const [success, setSuccess] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.orgName || !formData.email) return;
    setSuccess(true);
    onSubmitSuccess();
    setTimeout(() => {
      setFormData({ orgName: "", contactName: "", email: "", proposal: "" });
      setSuccess(false);
    }, 5000);
  };

  const partnershipBenefits = [
    { icon: Target, title: "Custom Programs", description: "Tailored initiatives aligned with your CSR goals" },
    { icon: Globe, title: "Global Impact", description: "Make a tangible difference in Cambodia" },
    { icon: Award, title: "Recognition", description: "Public acknowledgment of your support" },
    { icon: Users, title: "Network", description: "Join a community of changemakers" }
  ];

  return (
    <div className="space-y-12">
      <SectionHeader 
        badge="Corporate & Foundations"
        badgeIcon={HeartHandshake}
        title="Become a Strategic Partner"
        subtitle="Co-design impactful programs, fund inclusive educational tools, or coordinate joint community workshops to create lasting change for Cambodia's children."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-7">
          <div className="bg-white p-8 rounded-3xl border-2 border-surface-container hover:border-royal-gold/20 transition-all duration-300 shadow-sm hover:shadow-xl">
            {success ? (
              <div className="bg-gradient-to-br from-hope-green/10 to-emerald-50/50 border-2 border-hope-green/30 p-8 rounded-2xl text-center">
                <div className="relative w-20 h-20 mx-auto mb-4">
                  <div className="absolute inset-0 bg-hope-green/20 rounded-full animate-ping" />
                  <div className="relative w-20 h-20 bg-hope-green/10 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-10 h-10 text-hope-green" />
                  </div>
                </div>
                <h5 className="font-headline font-bold text-xl text-primary-custom">Proposal Dispatched Successfully!</h5>
                <p className="text-sm text-on-surface-variant mt-2 leading-relaxed max-w-sm mx-auto">
                  Thank you. Krousar Thmey's Partnership Board will review your organization's CSR requirements 
                  and contact your representative within 48 business hours.
                </p>
                <div className="mt-4 flex items-center justify-center gap-3 text-xs text-on-surface-variant/60">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5 text-hope-green" />
                    Verified
                  </span>
                  <span className="w-px h-4 bg-surface-container-high" />
                  <span className="flex items-center gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5 text-hope-green" />
                    Confirmed
                  </span>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-xs font-bold text-primary-custom mb-1.5">
                    Organization / Foundation Name <span className="text-royal-gold">*</span>
                  </label>
                  <div className="relative">
                    <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-on-surface-variant/40" />
                    <input
                      type="text"
                      required
                      value={formData.orgName}
                      onChange={(e) => setFormData({ ...formData, orgName: e.target.value })}
                      onFocus={() => setFocusedField('orgName')}
                      onBlur={() => setFocusedField(null)}
                      placeholder="e.g. CIA First International School"
                      className={`w-full pl-10 bg-surface-cream border-2 rounded-xl p-3.5 text-sm transition-all duration-300 focus:outline-none ${
                        focusedField === 'orgName' 
                          ? 'border-royal-gold ring-2 ring-royal-gold/20' 
                          : 'border-surface-container-high hover:border-royal-gold/30'
                      }`}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-primary-custom mb-1.5">
                      Primary Representative <span className="text-royal-gold">*</span>
                    </label>
                    <div className="relative">
                      <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-on-surface-variant/40" />
                      <input
                        type="text"
                        required
                        value={formData.contactName}
                        onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                        onFocus={() => setFocusedField('contactName')}
                        onBlur={() => setFocusedField(null)}
                        placeholder="e.g. Guillaume Bertrand"
                        className={`w-full pl-10 bg-surface-cream border-2 rounded-xl p-3.5 text-sm transition-all duration-300 focus:outline-none ${
                          focusedField === 'contactName' 
                            ? 'border-royal-gold ring-2 ring-royal-gold/20' 
                            : 'border-surface-container-high hover:border-royal-gold/30'
                        }`}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-primary-custom mb-1.5">
                      Corporate Email <span className="text-royal-gold">*</span>
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-on-surface-variant/40" />
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        onFocus={() => setFocusedField('email')}
                        onBlur={() => setFocusedField(null)}
                        placeholder="e.g. partnerships@foundation.org"
                        className={`w-full pl-10 bg-surface-cream border-2 rounded-xl p-3.5 text-sm transition-all duration-300 focus:outline-none ${
                          focusedField === 'email' 
                            ? 'border-royal-gold ring-2 ring-royal-gold/20' 
                            : 'border-surface-container-high hover:border-royal-gold/30'
                        }`}
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-primary-custom mb-1.5">
                    Brief Proposal / Alignment Objectives <span className="text-royal-gold">*</span>
                  </label>
                  <div className="relative">
                    <MessageCircle className="absolute left-3 top-3 w-4 h-4 text-on-surface-variant/40" />
                    <textarea
                      rows={4}
                      required
                      value={formData.proposal}
                      onChange={(e) => setFormData({ ...formData, proposal: e.target.value })}
                      onFocus={() => setFocusedField('proposal')}
                      onBlur={() => setFocusedField(null)}
                      placeholder="Outline how your organization wishes to sponsor, volunteer, or support Krousar Thmey..."
                      className={`w-full pl-10 bg-surface-cream border-2 rounded-xl p-3.5 text-sm transition-all duration-300 focus:outline-none resize-none ${
                        focusedField === 'proposal' 
                          ? 'border-royal-gold ring-2 ring-royal-gold/20' 
                          : 'border-surface-container-high hover:border-royal-gold/30'
                      }`}
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="group w-full bg-gradient-to-r from-angkor-blue to-primary-custom hover:from-primary-custom hover:to-angkor-blue text-white font-headline font-bold text-sm py-3.5 rounded-xl shadow-lg shadow-angkor-blue/25 hover:shadow-angkor-blue/40 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <span>Send Strategic Proposal</span>
                  <Send className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>

                <p className="text-[10px] text-center text-on-surface-variant/60">
                  By submitting, you agree to our privacy policy. Your information will be kept confidential.
                </p>
              </form>
            )}
          </div>
        </div>

        <div className="lg:col-span-5 space-y-6">
          <div className="bg-gradient-to-br from-primary-custom via-angkor-blue to-primary-custom text-white p-8 rounded-3xl shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-royal-gold rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-royal-gold rounded-full blur-3xl" />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-royal-gold/5 rounded-full blur-2xl" />
            </div>
            
            <div className="relative z-10 space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-royal-gold/15 rounded-xl border-2 border-royal-gold/20 backdrop-blur-sm">
                  <HeartHandshake className="w-6 h-6 text-royal-gold" />
                </div>
                <div>
                  <h4 className="font-headline font-bold text-royal-gold text-xl">Proven CSR Frameworks</h4>
                  <p className="text-xs text-gray-300">Trusted by Global Partners Since 1991</p>
                </div>
              </div>
              
              <p className="text-sm text-gray-200 leading-relaxed">
                Sponsors can fund specific specialized primary schools, sponsor children protection units, 
                or fund digital devices. We provide verified receipts, tax deductibility, and audited progress metrics.
              </p>

              <div className="grid grid-cols-2 gap-3 pt-2">
                {partnershipBenefits.map((benefit, idx) => (
                  <div key={idx} className="bg-white/5 backdrop-blur-sm p-3 rounded-xl border border-white/10 hover:bg-white/10 transition-colors duration-300">
                    <benefit.icon className="w-4 h-4 text-royal-gold mb-1.5" />
                    <p className="text-xs font-medium text-white">{benefit.title}</p>
                    <p className="text-[10px] text-gray-400 leading-tight">{benefit.description}</p>
                  </div>
                ))}
              </div>

              <div className="border-t border-white/10 pt-4">
                <p className="text-[10px] text-gray-400">
                  Current Institutional Partners include: <span className="text-white font-medium">UNICEF, UNESCO, and more.</span>
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3">
            <div className="bg-surface-cream p-4 rounded-xl text-center border border-surface-container-high hover:border-royal-gold/30 hover:shadow-md transition-all duration-300">
              <p className="text-xl font-bold text-angkor-blue">5,000+</p>
              <p className="text-[9px] text-on-surface-variant">Children Supported</p>
            </div>
            <div className="bg-surface-cream p-4 rounded-xl text-center border border-surface-container-high hover:border-royal-gold/30 hover:shadow-md transition-all duration-300">
              <p className="text-xl font-bold text-royal-gold">15</p>
              <p className="text-[9px] text-on-surface-variant">Active Programs</p>
            </div>
            <div className="bg-surface-cream p-4 rounded-xl text-center border border-surface-container-high hover:border-royal-gold/30 hover:shadow-md transition-all duration-300">
              <p className="text-xl font-bold text-hope-green">25+</p>
              <p className="text-[9px] text-on-surface-variant">Partners</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ==================== 2. VOLUNTEER WITH US ====================
export function VolunteerPage({ onSubmitSuccess }: { onSubmitSuccess: () => void }) {
  const [formData, setFormData] = useState({ name: "", email: "", skill: "education", hours: "10", intro: "" });
  const [success, setSuccess] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setSuccess(true);
    onSubmitSuccess();
    setTimeout(() => {
      setFormData({ name: "", email: "", skill: "education", hours: "10", intro: "" });
      setSuccess(false);
    }, 5000);
  };

  const volunteerRoles = [
    { value: "education", label: "Special Education / Braille Instruction", icon: BookMarked },
    { value: "speech", label: "Speech & Language Therapy", icon: MessageCircle },
    { value: "creative", label: "Creative Arts & Dance Choreography", icon: Sparkles },
    { value: "marketing", label: "NGO Grant Writing & Marketing", icon: Target }
  ];

  return (
    <div className="space-y-12">
      <SectionHeader 
        badge="Collaborate With Us"
        badgeIcon={Users}
        title="Apply as a Volunteer & Catalyst"
        subtitle="Lend your technical expertise, language skills, or creative pedagogy to help children flourish."
      />

      <div className="max-w-2xl mx-auto">
        <div className="bg-white p-8 rounded-3xl border-2 border-surface-container hover:border-royal-gold/20 transition-all duration-300 shadow-sm hover:shadow-xl">
          {success ? (
            <div className="bg-gradient-to-br from-hope-green/10 to-emerald-50/50 border-2 border-hope-green/30 p-8 rounded-2xl text-center">
              <div className="relative w-20 h-20 mx-auto mb-4">
                <div className="absolute inset-0 bg-hope-green/20 rounded-full animate-ping" />
                <div className="relative w-20 h-20 bg-hope-green/10 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-10 h-10 text-hope-green" />
                </div>
              </div>
              <h5 className="font-headline font-bold text-xl text-primary-custom">Application Submitted Successfully!</h5>
              <p className="text-sm text-on-surface-variant mt-2 leading-relaxed">
                Thank you. Our HR coordinator will review your professional specializations and contact you within 5 working days.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-primary-custom mb-1.5">
                    Full Name <span className="text-royal-gold">*</span>
                  </label>
                  <div className="relative">
                    <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-on-surface-variant/40" />
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                      placeholder="e.g. Marie Laurent"
                      className={`w-full pl-10 bg-surface-cream border-2 rounded-xl p-3.5 text-sm transition-all duration-300 focus:outline-none ${
                        focusedField === 'name' 
                          ? 'border-royal-gold ring-2 ring-royal-gold/20' 
                          : 'border-surface-container-high hover:border-royal-gold/30'
                      }`}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-primary-custom mb-1.5">
                    Email Address <span className="text-royal-gold">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-on-surface-variant/40" />
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      placeholder="e.g. marie@domain.com"
                      className={`w-full pl-10 bg-surface-cream border-2 rounded-xl p-3.5 text-sm transition-all duration-300 focus:outline-none ${
                        focusedField === 'email' 
                          ? 'border-royal-gold ring-2 ring-royal-gold/20' 
                          : 'border-surface-container-high hover:border-royal-gold/30'
                      }`}
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-primary-custom mb-1.5">
                    Primary Specialization <span className="text-royal-gold">*</span>
                  </label>
                  <select
                    value={formData.skill}
                    onChange={(e) => setFormData({ ...formData, skill: e.target.value })}
                    className="w-full bg-surface-cream border-2 border-surface-container-high rounded-xl p-3.5 text-sm focus:outline-none focus:border-royal-gold focus:ring-2 focus:ring-royal-gold/20 transition-all duration-300"
                  >
                    {volunteerRoles.map((role) => (
                      <option key={role.value} value={role.value}>{role.label}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-primary-custom mb-1.5">
                    Available Hours <span className="text-royal-gold">*</span>
                  </label>
                  <select
                    value={formData.hours}
                    onChange={(e) => setFormData({ ...formData, hours: e.target.value })}
                    className="w-full bg-surface-cream border-2 border-surface-container-high rounded-xl p-3.5 text-sm focus:outline-none focus:border-royal-gold focus:ring-2 focus:ring-royal-gold/20 transition-all duration-300"
                  >
                    <option value="5">5 Hours (Casual Consult)</option>
                    <option value="10">10 Hours (Part-Time)</option>
                    <option value="20">20 Hours (Intensive Support)</option>
                    <option value="40">40 Hours (On-Site Internship)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-primary-custom mb-1.5">
                  Motivation & Experience <span className="text-royal-gold">*</span>
                </label>
                <div className="relative">
                  <MessageCircle className="absolute left-3 top-3 w-4 h-4 text-on-surface-variant/40" />
                  <textarea
                    rows={4}
                    required
                    value={formData.intro}
                    onChange={(e) => setFormData({ ...formData, intro: e.target.value })}
                    onFocus={() => setFocusedField('intro')}
                    onBlur={() => setFocusedField(null)}
                    placeholder="Tell us about yourself, your language proficiencies, and your interest in supporting sensory impaired kids..."
                    className={`w-full pl-10 bg-surface-cream border-2 rounded-xl p-3.5 text-sm transition-all duration-300 focus:outline-none resize-none ${
                      focusedField === 'intro' 
                        ? 'border-royal-gold ring-2 ring-royal-gold/20' 
                        : 'border-surface-container-high hover:border-royal-gold/30'
                    }`}
                  />
                </div>
              </div>

              <button
                type="submit"
                className="group w-full bg-gradient-to-r from-angkor-blue to-primary-custom hover:from-primary-custom hover:to-angkor-blue text-white font-headline font-bold text-sm py-3.5 rounded-xl shadow-lg shadow-angkor-blue/25 hover:shadow-angkor-blue/40 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <span>Submit Volunteer Application</span>
                <Send className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

// ==================== 3. CAREERS / JOB OPPORTUNITIES ====================
export function CareersPage() {
  const [expandedJobId, setExpandedJobId] = useState<string | null>(null);

  const jobs = [
    {
      id: "pedagogical-consultant",
      title: "Senior Special Education Pedagogical Consultant",
      location: "Phnom Penh HQ (with regional travel to Siem Reap & Battambang)",
      type: "Full-Time Contract (12 Months Renewable)",
      description: "Work side-by-side with Ministry of Education experts to develop high-quality tactile braille materials, evaluate inclusive learning software, and coordinate advanced training workshops for public special-needs primary educators.",
      requirements: "Master's Degree in Special Pedagogy, 5+ years of clinical/field teaching expertise, fluent English & conversational Khmer is a high asset.",
      department: "Education",
      level: "Senior"
    },
    {
      id: "senior-social-worker",
      title: "Senior Child Protection Social Worker",
      location: "Poipet Protection & Transition Center",
      type: "Permanent Full-Time",
      description: "Conduct field counseling, case management, and structured tracing of biological families for children in transitional welfare. Coordinate with provincial judicial units for child rescue and reintegration support packages.",
      requirements: "Degree in Social Work, Psychology, or Legal Advocacy, deep knowledge of local protection policies, 3+ years experience in Poipet/frontier areas.",
      department: "Social Work",
      level: "Senior"
    },
    {
      id: "it-inclusion-advisor",
      title: "Digital Access & IT Inclusion Instructor",
      location: "Kampong Cham Specialized Resource Center",
      type: "Part-Time Contract",
      description: "Instruct deaf and blind adolescents in visual screen-reading softwares, blind-touch keyboard layouts, and fundamental computer systems to support their transition into high-school and technical hospitality apprenticeships.",
      requirements: "Degree in Computer Science or specialized training, basic proficiency in Cambodian Sign Language, extreme patience.",
      department: "Technology",
      level: "Mid-Level"
    }
  ];

  return (
    <div className="space-y-12">
      <SectionHeader 
        badge="Recruitment"
        badgeIcon={Briefcase}
        title="Humanitarian Opportunities"
        subtitle="Join our dedicated team of Khmer and international specialists driving structural progress in Cambodia."
      />

      <div className="max-w-3xl mx-auto space-y-4">
        {jobs.map((job) => {
          const isExpanded = expandedJobId === job.id;
          return (
            <div 
              key={job.id} 
              className={`bg-white rounded-2xl border-2 transition-all duration-300 overflow-hidden shadow-sm hover:shadow-xl ${
                isExpanded ? 'border-royal-gold/40 shadow-xl' : 'border-surface-container hover:border-royal-gold/20'
              }`}
            >
              <button
                onClick={() => setExpandedJobId(isExpanded ? null : job.id)}
                className="w-full p-6 text-left hover:bg-surface-cream/50 transition-colors duration-300"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full ${
                        job.level === 'Senior' 
                          ? 'bg-royal-gold/10 text-royal-gold border border-royal-gold/20'
                          : 'bg-angkor-blue/10 text-angkor-blue border border-angkor-blue/20'
                      }`}>
                        {job.level}
                      </span>
                      <span className="text-[10px] font-medium text-on-surface-variant/60 uppercase tracking-wider">
                        {job.department}
                      </span>
                    </div>
                    <h4 className="font-headline font-bold text-base sm:text-lg text-primary-custom leading-tight">
                      {job.title}
                    </h4>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-on-surface-variant mt-2">
                      <span className="flex items-center gap-1.5 text-royal-gold font-medium">
                        <MapPin className="w-3.5 h-3.5" /> {job.location}
                      </span>
                      <span className="hidden sm:inline text-surface-container-high">|</span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-royal-gold/60" /> {job.type}
                      </span>
                    </div>
                  </div>
                  <div className={`p-2 rounded-full transition-all duration-300 ${
                    isExpanded ? 'bg-royal-gold/10 text-royal-gold' : 'bg-surface-cream text-on-surface-variant'
                  }`}>
                    {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </div>
              </button>

              {isExpanded && (
                <div className="border-t-2 border-surface-container bg-gradient-to-b from-surface-cream/30 to-white p-6 text-sm text-on-surface-variant space-y-5">
                  <div>
                    <h5 className="font-bold text-primary-custom uppercase tracking-wider text-xs mb-2 flex items-center gap-2">
                      <Briefcase className="w-4 h-4 text-royal-gold" />
                      Role Description
                    </h5>
                    <p className="leading-relaxed">{job.description}</p>
                  </div>
                  <div>
                    <h5 className="font-bold text-primary-custom uppercase tracking-wider text-xs mb-2 flex items-center gap-2">
                      <Award className="w-4 h-4 text-royal-gold" />
                      Key Qualifications
                    </h5>
                    <p className="leading-relaxed">{job.requirements}</p>
                  </div>
                  <div className="pt-4 border-t-2 border-surface-container flex flex-col sm:flex-row justify-between items-center gap-4">
                    <span className="text-[11px] text-on-surface-variant/60 flex items-center gap-2">
                      <Mail className="w-4 h-4 text-royal-gold" />
                      To apply, dispatch CV & motivation to: <strong className="text-primary-custom">cambodia@krousar-thmey.org</strong>
                    </span>
                    <a 
                      href={`mailto:cambodia@krousar-thmey.org?subject=Application:%20${encodeURIComponent(job.title)}`}
                      className="group bg-gradient-to-r from-angkor-blue to-primary-custom hover:from-primary-custom hover:to-angkor-blue text-white font-headline font-bold text-xs px-6 py-2.5 rounded-xl shadow-md shadow-angkor-blue/20 hover:shadow-angkor-blue/40 transition-all duration-300 flex items-center gap-2"
                    >
                      Apply Now
                      <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                    </a>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ==================== 4. BOOKS FOR SALE ====================
export function BooksForSalePage() {
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [quantity, setQuantity] = useState<number>(1);
  const [orderForm, setOrderForm] = useState({ name: "", email: "", address: "" });
  const [orderSuccess, setOrderSuccess] = useState(false);

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!orderForm.name || !orderForm.email || !orderForm.address) return;
    setOrderSuccess(true);
    setTimeout(() => {
      setSelectedBook(null);
      setQuantity(1);
      setOrderForm({ name: "", email: "", address: "" });
      setOrderSuccess(false);
    }, 4000);
  };

  return (
    <div className="space-y-12">
      <SectionHeader 
        badge="Cultural Literature"
        badgeIcon={BookMarked}
        title="Publications & Books for Sale"
        subtitle="Purchase memoirs and illustrated children books. 100% of proceeds fund specialized braille textbooks."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {BOOKS_FOR_SALE.map((book) => (
          <div key={book.id} className="group bg-white rounded-2xl border-2 border-surface-container hover:border-royal-gold/30 hover:shadow-xl transition-all duration-500 overflow-hidden">
            <div className="flex flex-col sm:flex-row">
              <div className="relative w-full sm:w-32 h-48 sm:h-auto overflow-hidden">
                <img 
                  src={book.image} 
                  alt={book.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </div>
              <div className="flex-1 p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-2xl font-bold text-royal-gold">€{book.priceEur}.00</span>
                    <span className="text-[10px] font-medium text-on-surface-variant/60 uppercase tracking-wider">
                      By {book.author}
                    </span>
                  </div>
                  <h4 className="font-headline font-bold text-base text-primary-custom group-hover:text-royal-gold transition-colors duration-300 leading-tight">
                    {book.title}
                  </h4>
                  <p className="text-xs text-on-surface-variant leading-relaxed mt-2 line-clamp-3">
                    {book.description}
                  </p>
                </div>
                <button
                  onClick={() => {
                    setSelectedBook(book);
                    setQuantity(1);
                  }}
                  className="group/btn mt-4 bg-gradient-to-r from-angkor-blue to-primary-custom hover:from-primary-custom hover:to-angkor-blue text-white font-headline font-bold text-xs px-4 py-2.5 rounded-xl shadow-md shadow-angkor-blue/20 hover:shadow-angkor-blue/40 transition-all duration-300 flex items-center justify-center gap-2 w-full sm:w-auto"
                >
                  <ShoppingBag className="w-3.5 h-3.5" />
                  Purchase Book
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Book order modal */}
      {selectedBook && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 sm:p-8 space-y-6">
              <div className="flex justify-between items-start border-b-2 border-surface-container pb-4">
                <div>
                  <h4 className="font-headline font-bold text-lg text-primary-custom">
                    Book Purchase Order
                  </h4>
                  <p className="text-xs text-on-surface-variant/60">Complete your purchase details below</p>
                </div>
                <button 
                  onClick={() => setSelectedBook(null)} 
                  className="p-2 hover:bg-surface-cream rounded-xl transition-colors duration-300"
                >
                  <X className="w-5 h-5 text-on-surface-variant/60 hover:text-primary-custom" />
                </button>
              </div>

              {orderSuccess ? (
                <div className="text-center py-8 space-y-4">
                  <div className="relative w-24 h-24 mx-auto">
                    <div className="absolute inset-0 bg-hope-green/20 rounded-full animate-ping" />
                    <div className="relative w-24 h-24 bg-hope-green/10 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-12 h-12 text-hope-green" />
                    </div>
                  </div>
                  <h5 className="font-headline font-bold text-xl text-primary-custom">Purchase Order Sent!</h5>
                  <p className="text-sm text-on-surface-variant leading-relaxed">
                    An automated billing invoice with payment/shipping routing has been successfully dispatched to: <strong className="text-primary-custom">{orderForm.email}</strong>.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmitOrder} className="space-y-5">
                  <div className="flex gap-4 bg-gradient-to-br from-surface-cream to-royal-gold/5 p-4 rounded-xl border-2 border-surface-container-high">
                    <img 
                      src={selectedBook.image} 
                      alt={selectedBook.title} 
                      className="w-16 h-20 object-cover rounded-lg shadow-md"
                      referrerPolicy="no-referrer" 
                    />
                    <div className="flex-1">
                      <h5 className="font-headline font-bold text-sm text-primary-custom leading-tight">{selectedBook.title}</h5>
                      <p className="text-xs text-on-surface-variant/60">By {selectedBook.author}</p>
                      <p className="text-sm font-bold text-royal-gold mt-1">€{selectedBook.priceEur}.00 per copy</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between bg-surface-cream p-3 rounded-xl border-2 border-surface-container-high">
                    <span className="text-sm font-bold text-primary-custom">Quantity</span>
                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="w-8 h-8 rounded-full border-2 border-surface-container-high hover:border-royal-gold hover:bg-royal-gold/5 transition-all duration-300 flex items-center justify-center"
                      >
                        <Minus className="w-3.5 h-3.5 text-on-surface-variant" />
                      </button>
                      <span className="font-bold text-lg text-primary-custom w-8 text-center">{quantity}</span>
                      <button
                        type="button"
                        onClick={() => setQuantity(quantity + 1)}
                        className="w-8 h-8 rounded-full border-2 border-surface-container-high hover:border-royal-gold hover:bg-royal-gold/5 transition-all duration-300 flex items-center justify-center"
                      >
                        <Plus className="w-3.5 h-3.5 text-on-surface-variant" />
                      </button>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-royal-gold/5 to-royal-gold/10 p-3 rounded-xl border-2 border-royal-gold/20 flex justify-between items-center">
                    <span className="text-sm font-bold text-primary-custom">Grand Total:</span>
                    <span className="text-xl font-bold text-royal-gold">€{selectedBook.priceEur * quantity}.00</span>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <label className="block text-xs font-bold text-primary-custom mb-1.5">
                        Full Name <span className="text-royal-gold">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={orderForm.name}
                        onChange={(e) => setOrderForm({ ...orderForm, name: e.target.value })}
                        placeholder="e.g. Marie Laurent"
                        className="w-full bg-surface-cream border-2 border-surface-container-high rounded-xl p-3 text-sm focus:outline-none focus:border-royal-gold focus:ring-2 focus:ring-royal-gold/20 transition-all duration-300"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-primary-custom mb-1.5">
                        Email Address <span className="text-royal-gold">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={orderForm.email}
                        onChange={(e) => setOrderForm({ ...orderForm, email: e.target.value })}
                        placeholder="e.g. marie@gmail.com"
                        className="w-full bg-surface-cream border-2 border-surface-container-high rounded-xl p-3 text-sm focus:outline-none focus:border-royal-gold focus:ring-2 focus:ring-royal-gold/20 transition-all duration-300"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-primary-custom mb-1.5">
                        Shipping Address <span className="text-royal-gold">*</span>
                      </label>
                      <textarea
                        rows={2}
                        required
                        value={orderForm.address}
                        onChange={(e) => setOrderForm({ ...orderForm, address: e.target.value })}
                        placeholder="Include city, zip, and country..."
                        className="w-full bg-surface-cream border-2 border-surface-container-high rounded-xl p-3 text-sm focus:outline-none focus:border-royal-gold focus:ring-2 focus:ring-royal-gold/20 transition-all duration-300 resize-none"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-royal-gold to-amber-500 hover:from-royal-gold/90 hover:to-amber-500/90 text-primary-custom font-headline font-bold text-sm py-3.5 rounded-xl shadow-lg shadow-royal-gold/25 hover:shadow-royal-gold/40 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    Confirm Purchase Order
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}