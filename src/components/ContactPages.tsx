import React, { useState } from "react";
import { 
  MapPin, 
  Mail, 
  CheckCircle, 
  Globe, 
  HelpCircle,
  Clock
} from "lucide-react";
import { WORLD_WIDE_HUBS, IMAGES } from "../data";

interface ContactProps {
  country: string;
  onSubmitSuccess: () => void;
}

export function ContactHubPage({ country, onSubmitSuccess }: ContactProps) {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [success, setSuccess] = useState(false);

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

  return (
    <div className="space-y-10">
      {/* Header */}
      <div className="text-center max-w-xl mx-auto">
        <span className="text-royal-gold font-bold text-xs uppercase tracking-wider bg-royal-gold/10 px-3 py-1 rounded-full border border-royal-gold/20">
          Global Committees
        </span>
        <h2 className="font-headline font-bold text-2xl sm:text-3xl text-angkor-blue mt-2">
          Contact Krousar Thmey {country}
        </h2>
        <p className="text-on-surface-variant text-xs mt-1">
          Coordinate sponsorships, request educational files, or send local volunteer requests.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Contact info card */}
        <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-3xl border border-surface-container shadow-xs space-y-6">
          <div className="space-y-4">
            <span className="text-[10px] uppercase font-extrabold text-royal-gold bg-royal-gold/10 px-2.5 py-0.5 rounded tracking-wider">
              {hub.country.includes("Cambodia") ? "Executive HQ" : "Fundraising Hub"}
            </span>
            <h3 className="font-headline font-bold text-lg text-primary-custom">
              {hub.country} Office
            </h3>
            <p className="text-xs text-on-surface-variant leading-relaxed">
              {hub.role}
            </p>
          </div>

          <div className="space-y-4 pt-4 border-t border-surface-container text-xs text-on-surface-variant">
            <div className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-royal-gold shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-primary-custom">Mailing Address</p>
                <p className="mt-0.5">{hub.address}</p>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <Mail className="w-4 h-4 text-royal-gold shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-primary-custom">Inbound Email</p>
                <a href={`mailto:${hub.email}`} className="text-angkor-blue hover:underline font-semibold">{hub.email}</a>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <Clock className="w-4 h-4 text-royal-gold shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-primary-custom">Representative</p>
                <p className="mt-0.5">{hub.contactName}</p>
              </div>
            </div>
          </div>

          <div className="p-4 bg-surface-cream rounded-2xl border border-surface-container-high text-[11px] text-on-surface-variant leading-relaxed space-y-1.5">
            <strong className="text-primary-custom flex items-center gap-1">
              <HelpCircle className="w-3.5 h-3.5 text-royal-gold" /> Tax Credit Information
            </strong>
            <p>
              Donations made directly to Krousar Thmey committees in Europe qualify fully for local tax deductions. Registered billing statements will be dispatched instantly upon receipt of bank transfers.
            </p>
          </div>
        </div>

        {/* Messaging Form */}
        <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border border-surface-container shadow-sm">
          {success ? (
            <div className="bg-hope-green/10 border border-hope-green/30 p-6 rounded-2xl text-center text-hope-green">
              <CheckCircle className="w-12 h-12 mx-auto mb-3" />
              <h5 className="font-headline font-bold text-base">Message Dispatched!</h5>
              <p className="text-xs text-on-surface-variant mt-1 leading-relaxed">
                Thank you for connecting with our {country} desk. An administrative representative has registered your query and will reply within 48 business hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <h4 className="font-headline font-bold text-base text-primary-custom mb-2">Direct Correspondence Box</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-primary-custom mb-1">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Chan Sophea"
                    className="w-full bg-surface-cream border border-surface-container-high rounded-lg p-2.5 text-xs focus:outline-none focus:ring-1 focus:ring-royal-gold"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-primary-custom mb-1">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. sophea@gmail.com"
                    className="w-full bg-surface-cream border border-surface-container-high rounded-lg p-2.5 text-xs focus:outline-none focus:ring-1 focus:ring-royal-gold"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-primary-custom mb-1">Subject Matter</label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="e.g. Private sponsorship procedures"
                  className="w-full bg-surface-cream border border-surface-container-high rounded-lg p-2.5 text-xs focus:outline-none focus:ring-1 focus:ring-royal-gold"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-primary-custom mb-1">Message Details *</label>
                <textarea
                  rows={5}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Type details of your request or supportive feedback..."
                  className="w-full bg-surface-cream border border-surface-container-high rounded-lg p-2.5 text-xs focus:outline-none focus:ring-1 focus:ring-royal-gold"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-angkor-blue hover:bg-primary-custom text-white font-headline font-bold text-xs py-3 rounded-lg shadow-sm transition-all"
              >
                Dispatch Secure Inquiry
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
