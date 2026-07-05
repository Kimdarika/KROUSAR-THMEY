import React, { useState } from "react";
import { 
  MapPin, 
  Mail, 
  CheckCircle, 
  Globe, 
  HelpCircle,
  Clock,
  Phone,
  Building2,
  Users,
  Send,
  MessageCircle,
  Shield,
  Award,
  Star,
  ChevronRight
} from "lucide-react";
import { WORLD_WIDE_HUBS, IMAGES } from "../data";

interface ContactProps {
  country: string;
  onSubmitSuccess: () => void;
}

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

export function ContactHubPage({ country, onSubmitSuccess }: ContactProps) {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [success, setSuccess] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  // Find matching hub from data
  const hub = WORLD_WIDE_HUBS.find((h) => h.country.toLowerCase().includes(country.toLowerCase())) || WORLD_WIDE_HUBS[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSuccess(true);
    onSubmitSuccess();
    setTimeout(() => {
      setFormData({ name: "", email: "", subject: "", message: "" });
      setSuccess(false);
    }, 5000);
  };

  // Quick contact stats
  const contactStats = [
    { icon: Globe, label: "Global Offices", value: "5" },
    { icon: Users, label: "Team Members", value: "200+" },
    { icon: Clock, label: "Response Time", value: "< 48hrs" },
    { icon: Award, label: "Trust Rating", value: "A+" }
  ];

  return (
    <div className="space-y-12">
      {/* Header Section */}
      <SectionHeader 
        badge="Global Committees"
        badgeIcon={Globe}
        title={`Contact Krousar Thmey ${country}`}
        subtitle="Coordinate sponsorships, request educational files, or send local volunteer requests."
      />

      {/* Quick Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
        {contactStats.map((stat, idx) => (
          <div key={idx} className="bg-white p-4 rounded-xl border-2 border-surface-container hover:border-royal-gold/30 hover:shadow-md transition-all duration-300 text-center">
            <div className="inline-flex p-2 bg-royal-gold/10 rounded-lg mb-2">
              <stat.icon className="w-4 h-4 text-royal-gold" />
            </div>
            <p className="text-xl font-bold text-primary-custom">{stat.value}</p>
            <p className="text-[9px] text-on-surface-variant">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Contact info card - Enhanced */}
        <div className="lg:col-span-5">
          <div className="bg-white p-8 rounded-3xl border-2 border-surface-container hover:border-royal-gold/20 transition-all duration-300 shadow-sm hover:shadow-xl space-y-6">
            {/* Office Badge */}
            <div className="flex items-center gap-3">
              <span className="text-[10px] uppercase font-extrabold text-royal-gold bg-royal-gold/10 px-3 py-1 rounded-lg tracking-wider border border-royal-gold/20">
                {hub.country.includes("Cambodia") ? "🏛️ Executive HQ" : "🌍 Fundraising Hub"}
              </span>
              {hub.country.includes("Cambodia") && (
                <span className="text-[9px] font-bold text-hope-green bg-hope-green/10 px-2 py-0.5 rounded-full">
                  Headquarters
                </span>
              )}
            </div>

            <div>
              <h3 className="font-headline font-bold text-2xl text-primary-custom flex items-center gap-2">
                <Building2 className="w-5 h-5 text-royal-gold" />
                {hub.country} Office
              </h3>
              <p className="text-sm text-on-surface-variant leading-relaxed mt-2">
                {hub.role}
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4 pt-4 border-t-2 border-surface-container">
              <div className="group flex items-start gap-3 p-3 rounded-xl hover:bg-surface-cream transition-colors duration-300">
                <div className="p-2 bg-royal-gold/10 rounded-lg group-hover:bg-royal-gold group-hover:text-white transition-all duration-300">
                  <MapPin className="w-4 h-4 text-royal-gold group-hover:text-white" />
                </div>
                <div>
                  <p className="text-xs font-bold text-primary-custom">Mailing Address</p>
                  <p className="text-xs text-on-surface-variant mt-0.5 leading-relaxed">{hub.address}</p>
                </div>
              </div>

              <div className="group flex items-start gap-3 p-3 rounded-xl hover:bg-surface-cream transition-colors duration-300">
                <div className="p-2 bg-royal-gold/10 rounded-lg group-hover:bg-royal-gold group-hover:text-white transition-all duration-300">
                  <Mail className="w-4 h-4 text-royal-gold group-hover:text-white" />
                </div>
                <div>
                  <p className="text-xs font-bold text-primary-custom">Inbound Email</p>
                  <a 
                    href={`mailto:${hub.email}`} 
                    className="text-xs text-angkor-blue hover:text-royal-gold font-semibold hover:underline transition-colors duration-300"
                  >
                    {hub.email}
                  </a>
                </div>
              </div>

              <div className="group flex items-start gap-3 p-3 rounded-xl hover:bg-surface-cream transition-colors duration-300">
                <div className="p-2 bg-royal-gold/10 rounded-lg group-hover:bg-royal-gold group-hover:text-white transition-all duration-300">
                  <Users className="w-4 h-4 text-royal-gold group-hover:text-white" />
                </div>
                <div>
                  <p className="text-xs font-bold text-primary-custom">Representative</p>
                  <p className="text-xs text-on-surface-variant mt-0.5">{hub.contactName}</p>
                </div>
              </div>
            </div>

            {/* Tax Info Card */}
            <div className="bg-gradient-to-br from-royal-gold/5 to-amber-500/5 border-2 border-royal-gold/20 p-4 rounded-2xl">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-royal-gold/10 rounded-lg">
                  <Shield className="w-4 h-4 text-royal-gold" />
                </div>
                <div>
                  <p className="text-xs font-bold text-primary-custom flex items-center gap-1">
                    <HelpCircle className="w-3.5 h-3.5 text-royal-gold" /> 
                    Tax Credit Information
                  </p>
                  <p className="text-[11px] text-on-surface-variant leading-relaxed mt-1">
                    Donations made directly to Krousar Thmey committees in Europe qualify fully for local tax deductions. Registered billing statements will be dispatched instantly upon receipt of bank transfers.
                  </p>
                </div>
              </div>
            </div>

            {/* Office Hours */}
            <div className="flex items-center gap-2 text-xs text-on-surface-variant/60 pt-2 border-t border-surface-container">
              <Clock className="w-3.5 h-3.5 text-royal-gold" />
              <span>Office Hours: Mon-Fri 8:00 AM - 5:00 PM (local time)</span>
            </div>
          </div>
        </div>

        {/* Messaging Form - Enhanced */}
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
                <h5 className="font-headline font-bold text-xl text-primary-custom">Message Dispatched!</h5>
                <p className="text-sm text-on-surface-variant mt-2 leading-relaxed max-w-sm mx-auto">
                  Thank you for connecting with our {country} desk. An administrative representative has registered your query and will reply within 48 business hours.
                </p>
                <div className="mt-4 flex items-center justify-center gap-3 text-xs text-on-surface-variant/60">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5 text-hope-green" />
                    Received
                  </span>
                  <span className="w-px h-4 bg-surface-container-high" />
                  <span className="flex items-center gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5 text-hope-green" />
                    Processing
                  </span>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="flex items-center gap-2 mb-2">
                  <MessageCircle className="w-5 h-5 text-royal-gold" />
                  <h4 className="font-headline font-bold text-lg text-primary-custom">Direct Correspondence</h4>
                  <span className="ml-auto text-[10px] text-on-surface-variant/60">* Required fields</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-primary-custom mb-1.5">
                      Your Full Name <span className="text-royal-gold">*</span>
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
                        placeholder="e.g. Chan Sophea"
                        className={`w-full pl-10 bg-surface-cream border-2 rounded-xl p-3 text-sm transition-all duration-300 focus:outline-none ${
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
                        placeholder="e.g. sophea@gmail.com"
                        className={`w-full pl-10 bg-surface-cream border-2 rounded-xl p-3 text-sm transition-all duration-300 focus:outline-none ${
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
                    Subject Matter
                  </label>
                  <div className="relative">
                    <MessageCircle className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-on-surface-variant/40" />
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      onFocus={() => setFocusedField('subject')}
                      onBlur={() => setFocusedField(null)}
                      placeholder="e.g. Private sponsorship procedures"
                      className={`w-full pl-10 bg-surface-cream border-2 rounded-xl p-3 text-sm transition-all duration-300 focus:outline-none ${
                        focusedField === 'subject' 
                          ? 'border-royal-gold ring-2 ring-royal-gold/20' 
                          : 'border-surface-container-high hover:border-royal-gold/30'
                      }`}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-primary-custom mb-1.5">
                    Message Details <span className="text-royal-gold">*</span>
                  </label>
                  <div className="relative">
                    <MessageCircle className="absolute left-3 top-3 w-4 h-4 text-on-surface-variant/40" />
                    <textarea
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      placeholder="Type details of your request or supportive feedback..."
                      className={`w-full pl-10 bg-surface-cream border-2 rounded-xl p-3 text-sm transition-all duration-300 focus:outline-none resize-none ${
                        focusedField === 'message' 
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
                  <span>Dispatch Secure Inquiry</span>
                  <Send className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>

                <p className="text-[10px] text-center text-on-surface-variant/60">
                  Your information is secure and will only be used to respond to your inquiry.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}