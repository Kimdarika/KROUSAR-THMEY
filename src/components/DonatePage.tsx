import React, { useState } from "react";
import { 
  Heart, 
  Share2, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Link, 
  CheckCircle, 
  FileText, 
  ShieldCheck, 
  HelpCircle, 
  Info,
  DollarSign,
  HeartHandshake
} from "lucide-react";

interface DonatePageProps {
  onSubmitSuccess: () => void;
}

export function DonatePage({ onSubmitSuccess }: DonatePageProps) {
  // States
  const [residency, setResidency] = useState<"france" | "switzerland" | "elsewhere">("france");
  const [frequency, setFrequency] = useState<"one-time" | "regular">("one-time");
  const [donationAmount, setDonationAmount] = useState<number>(75);
  const [customAmount, setCustomAmount] = useState<string>("");
  const [isCustomSelected, setIsCustomSelected] = useState<boolean>(false);
  
  // Share link feedback state
  const [copied, setCopied] = useState<boolean>(false);

  // Form states
  const [formData, setFormData] = useState({
    name: "",
    firstname: "",
    email: "",
    message: "",
    contactEntity: "Krousar Thmey Cambodia",
    newsletter: true
  });
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);

  // Impact explanations for amounts
  const getImpactMessage = (amount: number) => {
    if (amount <= 20) {
      return `€${amount} buys 2 specialized braille stylus and paper tablets for a blind student in Poipet.`;
    } else if (amount <= 50) {
      return `€${amount} funds 1 week of professional speech and physical therapy sessions for a deaf student.`;
    } else if (amount <= 100) {
      return `€${amount} covers a full month of nutritious, clean hot meals & primary healthcare for a rescued child.`;
    } else if (amount <= 200) {
      return `€${amount} funds the compilation and publishing of 15 Cambodian Sign Language booklets for local families.`;
    } else {
      return `€${amount} finances a full scholarship including specialized boarding, uniforms, and learning kits for 3 months.`;
    }
  };

  // Tax reduction calculation helper
  const getTaxReductionDetails = (amount: number) => {
    if (residency === "france") {
      // France 66% deduction
      const deduction = Math.round(amount * 0.66 * 100) / 100;
      const finalCost = Math.round((amount - deduction) * 100) / 100;
      return {
        rate: "66%",
        deduction,
        finalCost,
        note: "Eligible for IR tax reduction (up to 20% of your taxable income)."
      };
    } else if (residency === "switzerland") {
      // Switzerland deduction depends on cantons, but let's say average 20% direct tax deduction
      const deduction = Math.round(amount * 0.20 * 100) / 100;
      const finalCost = Math.round((amount - deduction) * 100) / 100;
      return {
        rate: "up to 20%",
        deduction,
        finalCost,
        note: "Fully recognized for public interest tax write-off in Switzerland."
      };
    }
    return null;
  };

  const handlePresetSelect = (val: number) => {
    setIsCustomSelected(false);
    setDonationAmount(val);
  };

  const handleCustomChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsCustomSelected(true);
    const val = e.target.value;
    setCustomAmount(val);
    const parsed = parseFloat(val);
    if (!isNaN(parsed) && parsed > 0) {
      setDonationAmount(parsed);
    } else {
      setDonationAmount(0);
    }
  };

  const handleShareCopy = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmitDonation = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.firstname || !formData.email) return;
    if (donationAmount <= 0) return;

    setFormSubmitted(true);
    onSubmitSuccess();
    setTimeout(() => {
      // Reset
      setFormData({
        name: "",
        firstname: "",
        email: "",
        message: "",
        contactEntity: "Krousar Thmey Cambodia",
        newsletter: true
      });
      setFormSubmitted(false);
    }, 6000);
  };

  const taxInfo = getTaxReductionDetails(donationAmount);

  return (
    <div className="space-y-12">
      {/* 1. Header Hero Panel */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="text-royal-gold font-bold text-xs uppercase tracking-wider bg-royal-gold/10 px-3 py-1 rounded-full border border-royal-gold/20">
          Make a lasting difference
        </span>
        <h2 className="font-headline font-bold text-2xl sm:text-4xl text-angkor-blue leading-tight">
          Support Our Actions for Cambodian Children
        </h2>
        <p className="text-on-surface-variant text-xs sm:text-sm leading-relaxed">
          Online donation is an easy, simple and secure solution to support Krousar Thmey’s actions in favor of Cambodian children. If you wish to make a donation, you benefit from tax deductions in France and Switzerland.
        </p>

        {/* Share Section */}
        <div className="flex items-center justify-center gap-3 pt-3">
          <span className="text-[10px] text-gray-400 uppercase font-bold tracking-wider">Share:</span>
          <button 
            onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`, "_blank")}
            className="p-2 bg-white hover:bg-surface-cream text-[#1877F2] rounded-full border border-surface-container shadow-xs transition-colors"
            title="Share on Facebook"
          >
            <Facebook className="w-3.5 h-3.5" />
          </button>
          <button 
            onClick={() => window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=Support%20Krousar%20Thmey`, "_blank")}
            className="p-2 bg-white hover:bg-surface-cream text-[#1DA1F2] rounded-full border border-surface-container shadow-xs transition-colors"
            title="Share on Twitter"
          >
            <Twitter className="w-3.5 h-3.5" />
          </button>
          <button 
            onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`, "_blank")}
            className="p-2 bg-white hover:bg-surface-cream text-[#0A66C2] rounded-full border border-surface-container shadow-xs transition-colors"
            title="Share on LinkedIn"
          >
            <Linkedin className="w-3.5 h-3.5" />
          </button>
          <button 
            onClick={handleShareCopy}
            className={`p-2 rounded-full border shadow-xs transition-all flex items-center gap-1 text-xs ${
              copied ? "bg-hope-green/10 text-hope-green border-hope-green/30" : "bg-white hover:bg-surface-cream text-primary-custom border-surface-container"
            }`}
            title="Copy page link"
          >
            <Link className="w-3.5 h-3.5" />
            {copied && <span className="text-[9px] font-bold">Copied!</span>}
          </button>
        </div>
      </div>

      {/* 2. Primary Layout Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Hand: Tax & Program Alignment, Legacy Info */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Fiscal Residency Tab Block */}
          <div className="bg-white rounded-3xl border border-surface-container shadow-sm p-6 space-y-4">
            <h4 className="font-headline font-bold text-sm text-primary-custom flex items-center gap-2">
              <FileText className="w-4 h-4 text-royal-gold" />
              Tax Deductions by Residency
            </h4>
            
            {/* Custom Tab selector */}
            <div className="grid grid-cols-3 gap-1 bg-surface-cream p-1 rounded-xl border border-surface-container-high">
              <button
                onClick={() => setResidency("france")}
                className={`py-2 text-[10px] font-bold rounded-lg transition-all ${
                  residency === "france" ? "bg-white text-primary-custom shadow-xs" : "text-on-surface-variant hover:text-primary-custom"
                }`}
              >
                France
              </button>
              <button
                onClick={() => setResidency("switzerland")}
                className={`py-2 text-[10px] font-bold rounded-lg transition-all ${
                  residency === "switzerland" ? "bg-white text-primary-custom shadow-xs" : "text-on-surface-variant hover:text-primary-custom"
                }`}
              >
                Switzerland
              </button>
              <button
                onClick={() => setResidency("elsewhere")}
                className={`py-2 text-[10px] font-bold rounded-lg transition-all ${
                  residency === "elsewhere" ? "bg-white text-primary-custom shadow-xs" : "text-on-surface-variant hover:text-primary-custom"
                }`}
              >
                Elsewhere
              </button>
            </div>

            {/* Residency Details Content */}
            <div className="text-xs text-on-surface-variant space-y-3 leading-relaxed pt-2">
              {residency === "france" && (
                <div className="space-y-3">
                  <p>
                    In France, your donation to Krousar Thmey France (recognized as being of public interest) is eligible for premium tax benefits:
                  </p>
                  
                  <div className="bg-surface-cream/70 p-3 rounded-xl border border-surface-container space-y-2">
                    <p className="font-bold text-primary-custom text-[11px]">Under association of 1901 general interest:</p>
                    <p className="text-[11px]">
                      Deduction of <strong>66% of Income Tax (IR)</strong> up to 20% of taxable income. Over-limit surplus is carried forward for 5 years.
                    </p>
                  </div>

                  <div className="bg-surface-cream/70 p-3 rounded-xl border border-surface-container space-y-2">
                    <p className="font-bold text-primary-custom text-[11px]">Under the loi Coluche:</p>
                    <p className="text-[11px]">
                      Deduction of <strong>75% of income tax</strong> capped at 530 €. Beyond that, donations are deductible up to 66% of income tax.
                    </p>
                  </div>
                  
                  <p className="text-[10px] text-gray-400 italic">
                    A tax receipt will be sent to your address in March of the year following your contribution.
                  </p>
                </div>
              )}

              {residency === "switzerland" && (
                <div className="space-y-3">
                  <p>
                    Krousar Thmey Switzerland is a tax-exempt association recognized as of public utility in Switzerland.
                  </p>
                  <p>
                    Donors with fiscal residency in Switzerland can deduct donations from corporate and personal income taxes in accordance with individual cantonal rules.
                  </p>
                  <p className="text-[11px] bg-surface-cream/70 p-3 rounded-xl border border-surface-container">
                    Generally, donations up to <strong>20% of net taxable income</strong> are fully deductible on both federal and cantonal levels.
                  </p>
                  <p className="text-[10px] text-gray-400 italic">
                    Annual tax receipts are dispatched to our Swiss partners and individual sponsors in January.
                  </p>
                </div>
              )}

              {residency === "elsewhere" && (
                <div className="space-y-3">
                  <p>
                    For international donors residing outside France or Switzerland, payments are processed securely under our global Cambodian headquarters rules.
                  </p>
                  <p>
                    Please contact your local tax authority to confirm if direct contributions to Krousar Thmey Cambodia or associated national committees qualify for local humanitarian tax benefits.
                  </p>
                  <div className="p-3 bg-royal-gold/10 text-primary-custom border border-royal-gold/20 rounded-xl flex items-start gap-2">
                    <Info className="w-4 h-4 text-royal-gold shrink-0 mt-0.5" />
                    <p className="text-[11px]">
                      We can route your donation through Transnational Giving Europe (TGE) if your country participates in cross-border giving.
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Dedicated external option (HelloAsso) */}
            <div className="pt-4 border-t border-surface-container-high space-y-3">
              <p className="text-[11px] text-on-surface-variant leading-relaxed">
                You can make a one-time or regular donation on our dedicated website, you will be redirected to our HelloAsso page:
              </p>
              <a
                href="https://www.helloasso.com/associations/krousar-thmey-france"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center bg-[#F39200] hover:bg-[#d98300] text-white text-xs font-bold py-2.5 rounded-xl transition-all shadow-xs"
              >
                Donate on HelloAsso (One-time or regular)
              </a>
            </div>

            {/* Physical Check Option */}
            <div className="pt-4 border-t border-surface-container-high space-y-2 text-xs">
              <p className="font-bold text-primary-custom text-[11px]">Prefer to pay by mail?</p>
              <p className="text-on-surface-variant">
                You can send a check payable to <strong>Krousar Thmey France</strong> at the following address:
              </p>
              <div className="bg-surface-cream p-3 rounded-xl border border-surface-container-high font-mono text-[10px] text-primary-custom">
                Krousar Thmey France<br />
                62 rue Greneta<br />
                75002 Paris
              </div>
            </div>

          </div>

          {/* Legacy & Pool of funds Card */}
          <div className="bg-gradient-to-br from-primary-custom to-angkor-blue text-white p-6 rounded-3xl shadow-sm space-y-4">
            <h4 className="font-headline font-bold text-sm text-royal-gold flex items-center gap-2">
              <HeartHandshake className="w-4 h-4" />
              Legacy & Pooling Principles
            </h4>
            
            <div className="text-xs text-gray-300 space-y-3 leading-relaxed">
              <p className="font-semibold text-white">
                Mutualisation of Donations:
              </p>
              <p>
                Krousar Thmey has the principle of not affecting the donations and to pool the funds received on all of its missions.
              </p>
              <p>
                This clear principle allows for intervention only on the basis of actual needs on the ground and not on the basis of financial considerations. Therefore, if the donations received exceed the commitments made, they will be reallocated according to the other programs.
              </p>
              <p className="text-royal-gold font-bold italic pt-1">
                On behalf of the children, we warmly thank you for your support!
              </p>
            </div>
          </div>

          {/* Audit & Confidence Statement */}
          <div className="bg-white rounded-3xl border border-surface-container shadow-sm p-6 space-y-3">
            <h4 className="font-headline font-bold text-sm text-primary-custom flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-hope-green" />
              Support Us in Confidence
            </h4>
            <p className="text-xs text-on-surface-variant leading-relaxed">
              We guarantee you that the totality of the paid sums is used at best to support the children. In this context, the entire team ensures the greatest transparency. Every year, an independent audit is conducted in Cambodia, as well as in our entities in France and Switzerland.
            </p>
          </div>

        </div>

        {/* Right Hand: Interactive Donation Wizard & Custom Form */}
        <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border border-surface-container shadow-sm space-y-6">
          <div className="border-b border-surface-container pb-4">
            <h3 className="font-headline font-bold text-lg sm:text-xl text-primary-custom">
              Make a Donation Form
            </h3>
            <p className="text-xs text-on-surface-variant mt-1">
              Select an amount, customize your message, and route your support to our regional entities.
            </p>
          </div>

          {formSubmitted ? (
            <div className="text-center py-12 space-y-4 animate-fade-in">
              <div className="w-16 h-16 bg-hope-green/10 rounded-full flex items-center justify-center text-hope-green mx-auto">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h4 className="font-headline font-bold text-lg text-primary-custom">
                Thank You For Your Kindness!
              </h4>
              <p className="text-xs text-on-surface-variant max-w-md mx-auto leading-relaxed">
                Your simulated donation of <strong className="text-royal-gold text-sm">€{donationAmount}</strong> has been registered.
                An automated mock invoice and tax statement has been sent to <span className="font-semibold text-primary-custom">{formData.email}</span>.
              </p>
              {taxInfo && (
                <div className="bg-hope-green/5 border border-hope-green/10 p-3 rounded-xl max-w-sm mx-auto text-xs text-hope-green">
                  <strong>Estimated Tax deduction:</strong> €{taxInfo.deduction} <br />
                  <span className="text-[10px] text-on-surface-variant">Actual net cost to you: €{taxInfo.finalCost}</span>
                </div>
              )}
              <p className="text-[11px] text-gray-400">
                You will be contacted shortly by {formData.contactEntity} regarding your message.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmitDonation} className="space-y-6">
              
              {/* Donation Frequency */}
              <div className="space-y-2">
                <label className="block text-xs font-bold text-primary-custom uppercase tracking-wide">
                  1. Donation Frequency
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setFrequency("one-time")}
                    className={`py-3 text-xs font-bold rounded-xl border transition-all ${
                      frequency === "one-time"
                        ? "bg-primary-custom text-white border-primary-custom"
                        : "bg-surface-cream text-on-surface-variant border-surface-container hover:bg-surface-container"
                    }`}
                  >
                    Give One-Time
                  </button>
                  <button
                    type="button"
                    onClick={() => setFrequency("regular")}
                    className={`py-3 text-xs font-bold rounded-xl border transition-all ${
                      frequency === "regular"
                        ? "bg-primary-custom text-white border-primary-custom"
                        : "bg-surface-cream text-on-surface-variant border-surface-container hover:bg-surface-container"
                    }`}
                  >
                    Give Monthly (Regular)
                  </button>
                </div>
              </div>

              {/* Donation Amount Presets */}
              <div className="space-y-3">
                <label className="block text-xs font-bold text-primary-custom uppercase tracking-wide">
                  2. Support Level / Amount
                </label>
                
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[20, 50, 100, 200].map((amount) => {
                    const isSelected = !isCustomSelected && donationAmount === amount;
                    return (
                      <button
                        key={amount}
                        type="button"
                        onClick={() => handlePresetSelect(amount)}
                        className={`py-3.5 px-2 rounded-xl text-center border font-headline font-black text-sm transition-all ${
                          isSelected
                            ? "bg-royal-gold text-primary-custom border-royal-gold shadow-xs"
                            : "bg-surface-cream border-surface-container text-primary-custom hover:bg-surface-container"
                        }`}
                      >
                        €{amount}
                      </button>
                    );
                  })}
                </div>

                {/* Custom Amount input */}
                <div className="relative">
                  <span className="absolute left-3.5 top-3 text-gray-400 text-xs font-bold">Custom (€)</span>
                  <input
                    type="number"
                    min="5"
                    value={customAmount}
                    onChange={handleCustomChange}
                    placeholder="Enter other sum (min. €5)"
                    className={`w-full pl-24 pr-4 py-3 bg-surface-cream rounded-xl text-xs font-bold focus:outline-none focus:ring-1 focus:ring-royal-gold border ${
                      isCustomSelected ? "border-royal-gold bg-white" : "border-surface-container-high"
                    }`}
                  />
                </div>

                {/* Impact Statement */}
                {donationAmount > 0 && (
                  <div className="p-3 bg-surface-cream rounded-xl border border-surface-container text-[11px] text-primary-custom italic flex gap-2 items-center">
                    <Heart className="w-3.5 h-3.5 text-royal-gold shrink-0 fill-royal-gold" />
                    <span>{getImpactMessage(donationAmount)}</span>
                  </div>
                )}

                {/* Interactive Tax statement in wizard */}
                {taxInfo && (
                  <div className="p-3 bg-hope-green/10 text-hope-green rounded-xl text-[11px] border border-hope-green/20">
                    With your tax deduction, this donation actually costs you only <strong>€{taxInfo.finalCost}</strong> (reduction rate {taxInfo.rate}).
                  </div>
                )}
              </div>

              {/* Contact Information Fields */}
              <div className="space-y-4">
                <label className="block text-xs font-bold text-primary-custom uppercase tracking-wide border-t border-surface-container pt-4">
                  3. Personal Information
                </label>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-bold text-primary-custom mb-1">
                      NOM / NAME *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Dupont"
                      className="w-full bg-surface-cream border border-surface-container-high rounded-xl p-2.5 text-xs focus:outline-none focus:ring-1 focus:ring-royal-gold"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-primary-custom mb-1">
                      PRÉNOM / FIRSTNAME *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.firstname}
                      onChange={(e) => setFormData({ ...formData, firstname: e.target.value })}
                      placeholder="e.g. Jean"
                      className="w-full bg-surface-cream border border-surface-container-high rounded-xl p-2.5 text-xs focus:outline-none focus:ring-1 focus:ring-royal-gold"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-primary-custom mb-1">
                    E-MAIL *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. jean.dupont@domain.com"
                    className="w-full bg-surface-cream border border-surface-container-high rounded-xl p-2.5 text-xs focus:outline-none focus:ring-1 focus:ring-royal-gold"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-primary-custom mb-1">
                    REDIGEZ VOTRE MESSAGE ICI / WRITE YOUR MESSAGE HERE
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="If you have specific instructions or a dedication for your contribution..."
                    className="w-full bg-surface-cream border border-surface-container-high rounded-xl p-2.5 text-xs focus:outline-none focus:ring-1 focus:ring-royal-gold"
                  />
                </div>

                {/* Destination / Contact Entity selection */}
                <div>
                  <label className="block text-[10px] font-bold text-primary-custom mb-1">
                    JE SOUHAITE CONTACTER / I WANT TO CONTACT
                  </label>
                  <select
                    value={formData.contactEntity}
                    onChange={(e) => setFormData({ ...formData, contactEntity: e.target.value })}
                    className="w-full bg-surface-cream border border-surface-container-high rounded-xl p-2.5 text-xs focus:outline-none focus:ring-1 focus:ring-royal-gold text-primary-custom font-semibold"
                  >
                    <option value="Krousar Thmey France">Krousar Thmey France Committee</option>
                    <option value="Krousar Thmey Switzerland">Krousar Thmey Switzerland Committee</option>
                    <option value="Krousar Thmey Cambodia">Krousar Thmey Cambodia (Phnom Penh HQ)</option>
                    <option value="Krousar Thmey Singapore">Krousar Thmey Singapore Committee</option>
                  </select>
                </div>

                {/* Newsletter Subscribe toggle */}
                <div className="flex items-center gap-2 pt-1">
                  <input
                    type="checkbox"
                    id="newsletter-check"
                    checked={formData.newsletter}
                    onChange={(e) => setFormData({ ...formData, newsletter: e.target.checked })}
                    className="rounded border-gray-300 text-royal-gold focus:ring-royal-gold accent-royal-gold"
                  />
                  <label htmlFor="newsletter-check" className="text-[11px] text-on-surface-variant cursor-pointer font-medium select-none">
                    Subscribe to receive all our news and special event updates
                  </label>
                </div>

              </div>

              {/* Submit button */}
              <button
                type="submit"
                className="w-full bg-angkor-blue hover:bg-primary-custom text-white font-headline font-extrabold text-xs py-3.5 rounded-xl shadow-xs transition-all flex items-center justify-center gap-2"
              >
                <Heart className="w-4 h-4 text-royal-gold fill-royal-gold" />
                <span>Simulate €{donationAmount} Donation Now</span>
              </button>

            </form>
          )}

        </div>

      </div>

    </div>
  );
}
