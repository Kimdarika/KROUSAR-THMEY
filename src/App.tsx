import React, { useState } from "react";
import { 
  CheckCircle, 
  MapPin, 
  Mail, 
  Users, 
  BookOpen, 
  HeartHandshake, 
  Newspaper, 
  FileBarChart, 
  Globe 
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

// Types
import { NavigationCategory, NavigationItem } from "./types";

// Data
import { IMAGES } from "./data";

// Components
import { Header } from "./components/Navigation";
import { PresentationPage, HistoryPage, AwardsPage, PartnersPage, TransparencyPage } from "./components/WhoWeArePages";
import { ChildWelfarePage, EducationPage, CulturePage } from "./components/ProgramsPages";
import { BecomePartnerPage, VolunteerPage, CareersPage, BooksForSalePage } from "./components/GetInvolvedPages";
import { DonatePage } from "./components/DonatePage";
import { NewsPage } from "./components/NewsPages";
import { AnnualReportsPage, MediaPage, WordsPicturesPage } from "./components/ResourcesPages";
import { ContactHubPage } from "./components/ContactPages";

export default function App() {
  const [activeTab, setActiveTab] = useState<string>("who-presentation");
  const [globalInquirySuccess, setGlobalInquirySuccess] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);

  // Success handler for child components
  const triggerGlobalInquiryNotification = () => {
    setGlobalInquirySuccess(true);
    setTimeout(() => {
      setGlobalInquirySuccess(false);
    }, 4000);
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setNewsletterSuccess(true);
    setTimeout(() => {
      setNewsletterEmail("");
      setNewsletterSuccess(false);
    }, 4000);
  };

  // Render proper subpage content block based on activeTab state
  const renderContent = () => {
    switch (activeTab) {
      // Who we are dropdown pages
      case "who-presentation":
        return <PresentationPage onNavigate={setActiveTab} />;
      case "who-history":
        return <HistoryPage />;
      case "who-awards":
        return <AwardsPage />;
      case "who-partners":
        return <PartnersPage onNavigate={setActiveTab} />;
      case "who-transparency":
        return <TransparencyPage />;

      // Our programs dropdown pages
      case "prog-child":
        return <ChildWelfarePage onNavigate={setActiveTab} />;
      case "prog-education":
        return <EducationPage />;
      case "prog-culture":
        return <CulturePage />;

      // Get involved dropdown pages
      case "get-donate":
        return <DonatePage onSubmitSuccess={triggerGlobalInquiryNotification} />;
      case "get-partner":
        return <BecomePartnerPage onSubmitSuccess={triggerGlobalInquiryNotification} />;
      case "get-volunteer":
        return <VolunteerPage onSubmitSuccess={triggerGlobalInquiryNotification} />;
      case "get-jobs":
        return <CareersPage />;
      case "get-books":
        return <BooksForSalePage />;

      // News direct tab
      case "news":
        return <NewsPage />;

      // Resources dropdown pages
      case "res-reports":
        return <AnnualReportsPage />;
      case "res-media":
        return <MediaPage />;
      case "res-words-pictures":
        return <WordsPicturesPage />;

      // Contact dropdown pages
      case "con-cambodia":
        return <ContactHubPage country="Cambodia" onSubmitSuccess={triggerGlobalInquiryNotification} />;
      case "con-france":
        return <ContactHubPage country="France" onSubmitSuccess={triggerGlobalInquiryNotification} />;
      case "con-singapore":
        return <ContactHubPage country="Singapore" onSubmitSuccess={triggerGlobalInquiryNotification} />;
      case "con-switzerland":
        return <ContactHubPage country="Switzerland" onSubmitSuccess={triggerGlobalInquiryNotification} />;

      default:
        return <PresentationPage onNavigate={setActiveTab} />;
    }
  };

  return (
    <div className="min-h-screen bg-surface-cream text-on-surface flex flex-col justify-between selection:bg-royal-gold/30 antialiased font-sans">
      
      {/* GLOBAL DROPDOWN HEADER */}
      <Header activeTab={activeTab} onTabChange={setActiveTab} />

      {/* MAIN LAYOUT */}
      <main className="flex-grow py-12">
        <div className="w-full px-4 sm:px-8 lg:px-12">
          
          <div className="w-full">
            
            {/* Main Interactive Stage */}
            <div className="space-y-8 w-full">
              
              {/* Global Inquiry Notification Overlay banner */}
              <AnimatePresence>
                {globalInquirySuccess && (
                  <motion.div 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="bg-hope-green text-white p-4 rounded-2xl flex items-center gap-3 shadow-md border border-white/15"
                  >
                    <CheckCircle className="w-5 h-5 shrink-0" />
                    <span className="text-xs font-headline font-semibold">Your dossier has been logged. Representatives at our corresponding regional desk have been notified!</span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Page Section Render */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                >
                  {renderContent()}
                </motion.div>
              </AnimatePresence>

            </div>

          </div>

        </div>
      </main>

      {/* FOOTER WIDGET */}
      <footer className="bg-primary-custom text-white border-t border-white/10 pt-16 pb-8" id="footer-container">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          
          {/* Column 1: Brand details */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 bg-white/10 rounded-lg p-1.5">
                <img 
                  src={IMAGES.cambodianRoyalSeal} 
                  alt="Krousar Thmey mini seal" 
                  className="w-full h-full object-contain filter brightness-110"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h4 className="font-headline font-bold text-base text-white tracking-wide">
                KROUSAR THMEY
              </h4>
            </div>
            <p className="text-gray-400 text-xs leading-relaxed max-w-xs">
              The first Cambodian foundation for underprivileged children, providing education for deaf or blind youngsters, safe sheltering welfare, and cultural preservation since 1991.
            </p>
            <div className="text-xs text-gray-500 pt-2">
              <p>© {new Date().getFullYear()} Krousar Thmey Association.</p>
              <p className="mt-0.5">All Rights Reserved. 100% Cambodian Directed.</p>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="md:col-span-2 space-y-3">
            <h5 className="font-headline font-bold text-xs uppercase text-royal-gold tracking-wider">
              Navigation
            </h5>
            <ul className="text-xs text-gray-400 space-y-2">
              <li>
                <button onClick={() => { setActiveTab("who-presentation"); window.scrollTo({top: 0, behavior: 'smooth'}); }} className="hover:text-white hover:underline text-left">
                  Presentation
                </button>
              </li>
              <li>
                <button onClick={() => { setActiveTab("who-history"); window.scrollTo({top: 0, behavior: 'smooth'}); }} className="hover:text-white hover:underline text-left">
                  Our Timeline
                </button>
              </li>
              <li>
                <button onClick={() => { setActiveTab("who-transparency"); window.scrollTo({top: 0, behavior: 'smooth'}); }} className="hover:text-white hover:underline text-left">
                  Transparency
                </button>
              </li>
              <li>
                <button onClick={() => { setActiveTab("news"); window.scrollTo({top: 0, behavior: 'smooth'}); }} className="hover:text-white hover:underline text-left">
                  News &amp; Stories
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Get Involved */}
          <div className="md:col-span-2 space-y-3">
            <h5 className="font-headline font-bold text-xs uppercase text-royal-gold tracking-wider">
              Get Involved
            </h5>
            <ul className="text-xs text-gray-400 space-y-2">
              <li>
                <button onClick={() => { setActiveTab("get-donate"); window.scrollTo({top: 0, behavior: 'smooth'}); }} className="hover:text-white hover:underline text-left font-bold text-royal-gold">
                  Donate Now
                </button>
              </li>
              <li>
                <button onClick={() => { setActiveTab("get-volunteer"); window.scrollTo({top: 0, behavior: 'smooth'}); }} className="hover:text-white hover:underline text-left">
                  Volunteer With Us
                </button>
              </li>
              <li>
                <button onClick={() => { setActiveTab("get-jobs"); window.scrollTo({top: 0, behavior: 'smooth'}); }} className="hover:text-white hover:underline text-left">
                  Job Opportunities
                </button>
              </li>
              <li>
                <button onClick={() => { setActiveTab("get-books"); window.scrollTo({top: 0, behavior: 'smooth'}); }} className="hover:text-white hover:underline text-left">
                  Bookstore Catalog
                </button>
              </li>
              <li>
                <button onClick={() => { setActiveTab("con-cambodia"); window.scrollTo({top: 0, behavior: 'smooth'}); }} className="hover:text-white hover:underline text-left">
                  Sponsorship Info
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter Sign-up */}
          <div className="md:col-span-4 space-y-3">
            <h5 className="font-headline font-bold text-xs uppercase text-royal-gold tracking-wider">
              Subscribe to Newsletter
            </h5>
            <p className="text-xs text-gray-400 leading-normal">
              Get monthly updates on family reintegration achievements, new book publications, and special-needs student events directly in your inbox.
            </p>
            {newsletterSuccess ? (
              <div className="text-xs text-hope-green bg-hope-green/10 border border-hope-green/20 p-3 rounded-lg flex items-center gap-1.5 font-bold">
                <CheckCircle className="w-4 h-4 shrink-0" />
                <span>Subscription successful! Thank you.</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
                <input
                  type="email"
                  required
                  placeholder="e.g. you@domain.com"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:ring-1 focus:ring-royal-gold w-full"
                />
                <button
                  type="submit"
                  className="bg-royal-gold hover:bg-royal-gold/90 text-primary-custom font-headline font-bold text-xs px-4 py-2 rounded-lg shrink-0 transition-colors cursor-pointer"
                >
                  Join
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Bottom Bar with Cambodia Accents */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[11px] text-gray-500">
            Registered Non-Governmental Association under Cambodian Royal Decrees since 1991. Headquartered in Phnom Penh, Cambodia.
          </p>
          <div className="flex gap-3 text-xs text-gray-400 font-headline font-semibold">
            <span className="text-royal-gold font-bold">គ្រួសារថ្មី - គ្រួសារនៃសេចក្តីសង្ឃឹម</span>
          </div>
        </div>
      </footer>

    </div>
  );
}
