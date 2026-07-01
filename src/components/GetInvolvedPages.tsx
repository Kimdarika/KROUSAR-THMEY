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
  X 
} from "lucide-react";
import { BOOKS_FOR_SALE, Book } from "../data";

// ==================== 1. BECOME A PARTNER ====================
export function BecomePartnerPage({ onSubmitSuccess }: { onSubmitSuccess: () => void }) {
  const [formData, setFormData] = useState({ orgName: "", contactName: "", email: "", proposal: "" });
  const [success, setSuccess] = useState(false);

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

  return (
    <div className="space-y-10">
      <div className="text-center max-w-xl mx-auto">
        <span className="text-royal-gold font-bold text-xs uppercase tracking-wider bg-royal-gold/10 px-3 py-1 rounded-full border border-royal-gold/20">
          Corporate & Foundations
        </span>
        <h2 className="font-headline font-bold text-2xl sm:text-3xl text-angkor-blue mt-2">
          Become a Strategic Partner
        </h2>
        <p className="text-on-surface-variant text-xs mt-1">
          Co-design impactful programs, fund inclusive educational tools, or coordinate joint community workshops.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Partnership Proposal Form */}
        <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border border-surface-container shadow-sm">
          {success ? (
            <div className="bg-hope-green/10 border border-hope-green/30 p-6 rounded-2xl text-center text-hope-green">
              <CheckCircle className="w-12 h-12 mx-auto mb-3" />
              <h5 className="font-headline font-bold text-base">Proposal Dispatched Successfully!</h5>
              <p className="text-xs text-on-surface-variant mt-1 leading-relaxed">
                Thank you. Krousar Thmey&apos;s Partnership Board will review your organization&apos;s CSR requirements and contact your representative within 48 business hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-primary-custom mb-1">Organization / Foundation Name *</label>
                <input
                  type="text"
                  required
                  value={formData.orgName}
                  onChange={(e) => setFormData({ ...formData, orgName: e.target.value })}
                  placeholder="e.g. CIA First International School"
                  className="w-full bg-surface-cream border border-surface-container-high rounded-lg p-2.5 text-xs focus:outline-none focus:ring-1 focus:ring-royal-gold"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-primary-custom mb-1">Primary Representative *</label>
                  <input
                    type="text"
                    required
                    value={formData.contactName}
                    onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                    placeholder="e.g. Guillaume Bertrand"
                    className="w-full bg-surface-cream border border-surface-container-high rounded-lg p-2.5 text-xs focus:outline-none focus:ring-1 focus:ring-royal-gold"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-primary-custom mb-1">Corporate Email Address *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. partnerships@foundation.org"
                    className="w-full bg-surface-cream border border-surface-container-high rounded-lg p-2.5 text-xs focus:outline-none focus:ring-1 focus:ring-royal-gold"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-primary-custom mb-1">Brief Proposal / Alignment Objectives *</label>
                <textarea
                  rows={4}
                  required
                  value={formData.proposal}
                  onChange={(e) => setFormData({ ...formData, proposal: e.target.value })}
                  placeholder="Outline how your organization wishes to sponsor, volunteer, or support Krousar Thmey..."
                  className="w-full bg-surface-cream border border-surface-container-high rounded-lg p-2.5 text-xs focus:outline-none focus:ring-1 focus:ring-royal-gold"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-angkor-blue hover:bg-primary-custom text-white font-headline font-bold text-xs py-3 rounded-lg shadow-sm transition-all"
              >
                Send Strategic Proposal
              </button>
            </form>
          )}
        </div>

        {/* CSR Alignment Context */}
        <div className="lg:col-span-5 bg-gradient-to-br from-primary-custom to-angkor-blue text-white p-6 rounded-3xl shadow-sm space-y-4">
          <div className="w-10 h-10 bg-royal-gold/15 rounded-xl flex items-center justify-center text-royal-gold border border-royal-gold/25">
            <HeartHandshake className="w-5 h-5" />
          </div>
          <h4 className="font-headline font-bold text-base text-royal-gold">Proven CSR Frameworks</h4>
          <p className="text-xs text-gray-300 leading-relaxed">
            Sponsors can fund specific specialized primary schools, sponsor children protection units, or fund digital devices. We provide verified receipts, tax deductibility, and audited progress metrics.
          </p>
          <div className="border-t border-white/10 pt-4 text-[10px] text-gray-400">
            Current Institutional Partners include: UNICEF, UNESCO, and more.
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

  return (
    <div className="space-y-10">
      <div className="text-center max-w-xl mx-auto">
        <span className="text-royal-gold font-bold text-xs uppercase tracking-wider bg-royal-gold/10 px-3 py-1 rounded-full border border-royal-gold/20">
          Collaborate With Us
        </span>
        <h2 className="font-headline font-bold text-2xl sm:text-3xl text-angkor-blue mt-2">
          Apply as a Volunteer & Catalyst
        </h2>
        <p className="text-on-surface-variant text-xs mt-1">
          Lend your technical expertise, language skills, or creative pedagogy to help children flourish.
        </p>
      </div>

      <div className="max-w-2xl mx-auto bg-white p-6 sm:p-8 rounded-3xl border border-surface-container shadow-sm">
        {success ? (
          <div className="bg-hope-green/10 border border-hope-green/30 p-6 rounded-2xl text-center text-hope-green">
            <CheckCircle className="w-12 h-12 mx-auto mb-3" />
            <h5 className="font-headline font-bold text-base">Application Submitted Successfully!</h5>
            <p className="text-xs text-on-surface-variant mt-1 leading-relaxed">
              Thank you. Our HR coordinator will review your professional specializations and contact you within 5 working days.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-primary-custom mb-1">Full Name *</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Marie Laurent"
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
                  placeholder="e.g. marie@domain.com"
                  className="w-full bg-surface-cream border border-surface-container-high rounded-lg p-2.5 text-xs focus:outline-none focus:ring-1 focus:ring-royal-gold"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-primary-custom mb-1">Primary Specialization *</label>
                <select
                  value={formData.skill}
                  onChange={(e) => setFormData({ ...formData, skill: e.target.value })}
                  className="w-full bg-surface-cream border border-surface-container-high rounded-lg p-2.5 text-xs focus:outline-none focus:ring-1 focus:ring-royal-gold"
                >
                  <option value="education">Special Education / Braille Instruction</option>
                  <option value="speech">Speech & Language Therapy</option>
                  <option value="creative">Creative Arts & Dance Choreography</option>
                  <option value="marketing">NGO Grant Writing & Marketing</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-primary-custom mb-1">Available Hours / Week *</label>
                <select
                  value={formData.hours}
                  onChange={(e) => setFormData({ ...formData, hours: e.target.value })}
                  className="w-full bg-surface-cream border border-surface-container-high rounded-lg p-2.5 text-xs focus:outline-none focus:ring-1 focus:ring-royal-gold"
                >
                  <option value="5">5 Hours or less (Casual consult)</option>
                  <option value="10">10 Hours (Standard Part-Time)</option>
                  <option value="20">20 Hours (Intensive Virtual Support)</option>
                  <option value="40">40 Hours (On-Site Internship)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-primary-custom mb-1">Motivation & Experience *</label>
              <textarea
                rows={4}
                required
                value={formData.intro}
                onChange={(e) => setFormData({ ...formData, intro: e.target.value })}
                placeholder="Tell us about yourself, your language proficiencies, and your interest in supporting sensory impaired kids..."
                className="w-full bg-surface-cream border border-surface-container-high rounded-lg p-2.5 text-xs focus:outline-none focus:ring-1 focus:ring-royal-gold"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-angkor-blue hover:bg-primary-custom text-white font-headline font-bold text-xs py-3 rounded-lg shadow-sm transition-all"
            >
              Submit Volunteer Application
            </button>
          </form>
        )}
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
      requirements: "Master's Degree in Special Pedagogy, 5+ years of clinical/field teaching expertise, fluent English & conversational Khmer is a high asset."
    },
    {
      id: "senior-social-worker",
      title: "Senior Child Protection Social Worker",
      location: "Poipet Protection & Transition Center",
      type: "Permanent Full-Time",
      description: "Conduct field counseling, case management, and structured tracing of biological families for children in transitional welfare. Coordinate with provincial judicial units for child rescue and reintegration support packages.",
      requirements: "Degree in Social Work, Psychology, or Legal Advocacy, deep knowledge of local protection policies, 3+ years experience in Poipet/frontier areas."
    },
    {
      id: "it-inclusion-advisor",
      title: "Digital Access & IT Inclusion Instructor",
      location: "Kampong Cham Specialized Resource Center",
      type: "Part-Time Contract",
      description: "Instruct deaf and blind adolescents in visual screen-reading softwares, blind-touch keyboard layouts, and fundamental computer systems to support their transition into high-school and technical hospitality apprenticeships.",
      requirements: "Degree in Computer Science or specialized training, basic proficiency in Cambodian Sign Language, extreme patience."
    }
  ];

  return (
    <div className="space-y-10">
      <div className="text-center max-w-xl mx-auto">
        <span className="text-royal-gold font-bold text-xs uppercase tracking-wider bg-royal-gold/10 px-3 py-1 rounded-full border border-royal-gold/20">
          Recruitment
        </span>
        <h2 className="font-headline font-bold text-2xl sm:text-3xl text-angkor-blue mt-2">
          Humanitarian Opportunities
        </h2>
        <p className="text-on-surface-variant text-xs mt-1">
          Join our dedicated team of Khmer and international specialists driving structural progress in Cambodia.
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-4">
        {jobs.map((job) => {
          const isExpanded = expandedJobId === job.id;
          return (
            <div key={job.id} className="bg-white rounded-2xl border border-surface-container overflow-hidden shadow-xs">
              <button
                onClick={() => setExpandedJobId(isExpanded ? null : job.id)}
                className="w-full p-5 text-left flex items-center justify-between hover:bg-surface-cream transition-colors"
              >
                <div>
                  <h4 className="font-headline font-bold text-sm sm:text-base text-primary-custom leading-tight">
                    {job.title}
                  </h4>
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] text-on-surface-variant mt-1.5">
                    <span className="flex items-center gap-1 text-royal-gold font-semibold">
                      <MapPin className="w-3.5 h-3.5" /> {job.location}
                    </span>
                    <span>•</span>
                    <span className="font-semibold">{job.type}</span>
                  </div>
                </div>
                <div>
                  {isExpanded ? <ChevronUp className="w-4 h-4 text-gray-400" /> : <ChevronDown className="w-4 h-4 text-gray-400" />}
                </div>
              </button>

              {isExpanded && (
                <div className="border-t border-surface-container bg-surface-cream/50 p-5 text-xs text-on-surface-variant space-y-4">
                  <div>
                    <h5 className="font-bold text-primary-custom uppercase tracking-wider mb-1">Role Description</h5>
                    <p className="leading-relaxed">{job.description}</p>
                  </div>
                  <div>
                    <h5 className="font-bold text-primary-custom uppercase tracking-wider mb-1">Key Qualifications</h5>
                    <p className="leading-relaxed">{job.requirements}</p>
                  </div>
                  <div className="pt-3 border-t border-surface-container flex flex-col sm:flex-row justify-between items-center gap-3">
                    <span className="text-[10px] text-gray-400">To apply, dispatch CV & motivation cover sheet to: <strong>cambodia@krousar-thmey.org</strong></span>
                    <a 
                      href={`mailto:cambodia@krousar-thmey.org?subject=Application:%20${encodeURIComponent(job.title)}`}
                      className="bg-angkor-blue hover:bg-primary-custom text-white text-[11px] font-headline font-bold px-4 py-2 rounded-lg shadow-xs"
                    >
                      Apply via Email
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
    <div className="space-y-10">
      <div className="text-center max-w-xl mx-auto">
        <span className="text-royal-gold font-bold text-xs uppercase tracking-wider bg-royal-gold/10 px-3 py-1 rounded-full border border-royal-gold/20">
          Cultural Literature
        </span>
        <h2 className="font-headline font-bold text-2xl sm:text-3xl text-angkor-blue mt-2">
          Publications & Books for Sale
        </h2>
        <p className="text-on-surface-variant text-xs mt-1">
          Purchase memoirs and illustrated children books. 100% of proceeds fund specialized braille textbooks.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {BOOKS_FOR_SALE.map((book) => (
          <div key={book.id} className="bg-white rounded-2xl border border-surface-container shadow-sm p-5 flex flex-col sm:flex-row gap-5 hover:shadow-md transition-all">
            <div className="w-full sm:w-28 h-36 bg-surface-cream rounded-xl overflow-hidden shadow-xs shrink-0 flex items-center justify-center border border-surface-container-high">
              <img src={book.image} alt={book.title} className="h-full w-full object-cover" referrerPolicy="no-referrer" />
            </div>
            <div className="flex flex-col justify-between flex-grow">
              <div className="space-y-1">
                <span className="text-royal-gold font-bold text-xs">€{book.priceEur}.00</span>
                <h4 className="font-headline font-bold text-sm sm:text-base text-primary-custom leading-tight">
                  {book.title}
                </h4>
                <p className="text-[11px] text-on-surface-variant leading-relaxed line-clamp-3">
                  {book.description}
                </p>
              </div>
              <div className="pt-3 border-t border-surface-container flex items-center justify-between text-xs mt-3">
                <span className="text-[10px] text-gray-400">By {book.author}</span>
                <button
                  onClick={() => {
                    setSelectedBook(book);
                    setQuantity(1);
                  }}
                  className="bg-angkor-blue hover:bg-primary-custom text-white font-headline font-bold text-[10px] px-3 py-1.5 rounded-lg transition-all"
                >
                  Buy / Order
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Book order modal */}
      {selectedBook && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4 backdrop-blur-xs">
          <div className="bg-white rounded-3xl overflow-hidden shadow-2xl max-w-md w-full p-6 sm:p-8 space-y-4">
            <div className="flex justify-between items-center border-b border-surface-container pb-3">
              <h4 className="font-headline font-bold text-sm sm:text-base text-primary-custom">
                Book Purchase Order
              </h4>
              <button onClick={() => setSelectedBook(null)} className="p-1 text-gray-400 hover:text-on-surface">
                <X className="w-5 h-5" />
              </button>
            </div>

            {orderSuccess ? (
              <div className="text-center py-6 text-hope-green space-y-2">
                <CheckCircle className="w-12 h-12 mx-auto" />
                <h5 className="font-headline font-bold text-base">Purchase Order Sent!</h5>
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  An automated billing invoice with payment/shipping routing has been successfully dispatched to: <strong>{orderForm.email}</strong>.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmitOrder} className="space-y-4">
                <div className="flex gap-3 bg-surface-cream p-3 rounded-xl border border-surface-container-high">
                  <img src={selectedBook.image} alt={selectedBook.title} className="w-10 h-14 object-cover rounded shadow-xs" referrerPolicy="no-referrer" />
                  <div>
                    <h5 className="font-headline font-bold text-xs text-primary-custom leading-tight">{selectedBook.title}</h5>
                    <p className="text-[10px] text-gray-400 mt-0.5">By {selectedBook.author}</p>
                    <p className="text-xs font-bold text-royal-gold mt-1">€{selectedBook.priceEur}.00 per copy</p>
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-primary-custom">Select Quantity</span>
                  <div className="flex items-center gap-2.5">
                    <button
                      type="button"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-7 h-7 rounded-full border border-surface-container-high flex items-center justify-center hover:bg-surface-cream"
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="font-bold w-4 text-center">{quantity}</span>
                    <button
                      type="button"
                      onClick={() => setQuantity(quantity + 1)}
                      className="w-7 h-7 rounded-full border border-surface-container-high flex items-center justify-center hover:bg-surface-cream"
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>
                </div>

                <div className="border-t border-b border-dashed border-surface-container-high py-2 flex justify-between items-center text-xs font-bold text-primary-custom">
                  <span>Grand Total:</span>
                  <span className="text-royal-gold">€{selectedBook.priceEur * quantity}.00</span>
                </div>

                <div className="space-y-3">
                  <div>
                    <label className="block text-[10px] font-bold text-primary-custom mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={orderForm.name}
                      onChange={(e) => setOrderForm({ ...orderForm, name: e.target.value })}
                      placeholder="e.g. Marie Laurent"
                      className="w-full bg-surface-cream border border-surface-container-high rounded-lg p-2 text-xs focus:outline-none focus:ring-1 focus:ring-royal-gold"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-primary-custom mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={orderForm.email}
                      onChange={(e) => setOrderForm({ ...orderForm, email: e.target.value })}
                      placeholder="e.g. marie@gmail.com"
                      className="w-full bg-surface-cream border border-surface-container-high rounded-lg p-2 text-xs focus:outline-none focus:ring-1 focus:ring-royal-gold"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-primary-custom mb-1">Shipping Mailing Address *</label>
                    <textarea
                      rows={2}
                      required
                      value={orderForm.address}
                      onChange={(e) => setOrderForm({ ...orderForm, address: e.target.value })}
                      placeholder="Include city, zip, and country..."
                      className="w-full bg-surface-cream border border-surface-container-high rounded-lg p-2 text-xs focus:outline-none focus:ring-1 focus:ring-royal-gold"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-royal-gold text-primary-custom font-headline font-bold text-xs py-2.5 rounded-lg shadow-xs"
                >
                  Confirm Purchase Order
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
