import React, { useState } from "react";
import {
  Users,
  BookOpen,
  HeartHandshake,
  Newspaper,
  FileBarChart,
  Globe,
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  Home
} from "lucide-react";
import { NavigationCategory, NavigationItem } from "../types";
import { IMAGES } from "../data";

export const NAVIGATION_CATEGORIES: NavigationCategory[] = [
  {
    title: "Who We Are",
    icon: Users,
    prefix: "who-",
    items: [
      { id: "who-presentation", label: "Presentation & Vision" },
      { id: "who-history", label: "Our History Timeline" },
      { id: "who-awards", label: "Awards & Honors" },
      { id: "who-partners", label: "Partners & Sponsors" },
      { id: "who-transparency", label: "Transparency & Governance" }
    ]
  },
  {
    title: "Our Programs",
    icon: BookOpen,
    prefix: "prog-",
    items: [
      { id: "prog-child", label: "Child Welfare" },
      { id: "prog-education", label: "Education (Deaf or Blind)" },
      { id: "prog-culture", label: "Cultural Preservation" }
    ]
  },
  {
    title: "Get Involved",
    icon: HeartHandshake,
    prefix: "get-",
    items: [
      { id: "get-donate", label: "Donate Now" },
      { id: "get-partner", label: "Become a Partner" },
      { id: "get-volunteer", label: "Volunteer With Us" },
      { id: "get-jobs", label: "Job Opportunities in KH" },
      { id: "get-books", label: "Books for Sale" }
    ]
  },
  {
    title: "News & Press",
    icon: Newspaper,
    prefix: "news",
    items: [],
    id: "news" // Direct Tab link
  },
  {
    title: "Resources",
    icon: FileBarChart,
    prefix: "res-",
    items: [
      { id: "res-reports", label: "Annual Reports Vault" },
      { id: "res-media", label: "Media & Press Kit" },
      { id: "res-words-pictures", label: "Words & Pictures App" }
    ]
  },
  {
    title: "Contact",
    icon: Globe,
    prefix: "con-",
    items: [
      { id: "con-cambodia", label: "Cambodia (HQ)" },
      { id: "con-france", label: "France Committee" },
      { id: "con-singapore", label: "Singapore Committee" },
      { id: "con-switzerland", label: "Switzerland Committee" }
    ]
  }
];

interface HeaderProps {
  activeTab: string;
  onTabChange: (tabId: string) => void;
}

export function Header({ activeTab, onTabChange }: HeaderProps) {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileExpandedCat, setMobileExpandedCat] = useState<string | null>(null);

  const handleLinkClick = (id: string) => {
    onTabChange(id);
    setActiveDropdown(null);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Helper to check if a category is currently active based on current activeTab
  const isCategoryActive = (cat: NavigationCategory) => {
    if (cat.id && activeTab === cat.id) return true;
    return cat.items.some((item) => item.id === activeTab);
  };

  return (
    <div className="w-full sticky top-0 z-50">
      {/* Premium Utility top bar */}
      <div className="hidden md:flex w-full bg-primary-custom text-[10px] text-white/85 font-headline font-semibold py-2 px-6 lg:px-12 justify-between items-center border-b border-white/10 shrink-0">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5">
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-hope-green animate-pulse"></span>
            🇰🇭 Headquarters: Phnom Penh, Cambodia
          </span>
          <span className="text-white/20">|</span>
          <span>Regional Committees: France • Switzerland • Singapore</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-royal-gold uppercase tracking-wider font-extrabold">Est. 1991 • 100% Cambodian Directed NGO</span>
          <span className="text-white/20">|</span>
          <span className="text-white">Tax Deductible in FR & CH</span>
        </div>
      </div>

      <header className="w-full bg-white/95 backdrop-blur-md border-b border-surface-container-high transition-all">
        <div className="w-full px-4 sm:px-8 lg:px-12">
          <div className="flex justify-between items-center h-20">
            
            {/* Logo with Krousar Thmey Image */}
            <button 
              onClick={() => handleLinkClick("who-presentation")}
              className="flex items-center gap-3.5 text-left group"
            >
              <div className="h-12 w-auto flex items-center">
                <img 
                  src="https://krousar-thmey.org/wp-content/uploads/2017/07/logo-kt-horizontal-downsize.png"
                  alt="Krousar Thmey Logo" 
                  className="h-full w-auto object-contain filter group-hover:brightness-105 transition-all duration-300"
                  referrerPolicy="no-referrer"
                />
              </div>
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-2 h-full">
              {NAVIGATION_CATEGORIES.map((category) => {
                const isDirect = category.items.length === 0;
                const isActive = isCategoryActive(category);

                if (isDirect) {
                  return (
                    <button
                      key={category.title}
                      onClick={() => handleLinkClick(category.id || "")}
                      className={`px-4 py-2 rounded-xl text-xs font-headline font-bold transition-all flex items-center gap-1.5 ${isActive
                        ? "bg-angkor-blue text-white shadow-xs"
                        : "text-on-surface-variant hover:text-primary-custom hover:bg-surface-cream"
                        }`}
                    >
                      <category.icon className="w-4 h-4" />
                      <span>{category.title}</span>
                    </button>
                  );
                }

                return (
                  <div
                    key={category.title}
                    className="relative h-full flex items-center"
                    onMouseEnter={() => setActiveDropdown(category.title)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button
                      className={`px-4 py-2 rounded-xl text-xs font-headline font-bold transition-all flex items-center gap-1.5 cursor-pointer ${isActive
                        ? "bg-angkor-blue/10 text-primary-custom border border-angkor-blue/10"
                        : "text-on-surface-variant hover:text-primary-custom hover:bg-surface-cream border border-transparent"
                        }`}
                    >
                      <category.icon className="w-4 h-4 text-royal-gold shrink-0" />
                      <span>{category.title}</span>
                      <ChevronDown className="w-3.5 h-3.5 opacity-60 shrink-0" />
                    </button>

                    {/* Dropdown Menu block */}
                    {activeDropdown === category.title && (
                      <div className="absolute top-[80%] left-0 w-64 bg-white rounded-2xl border border-surface-container shadow-2xl py-3.5 z-50 animate-fade-in-down transition-all">
                        <div className="px-4 pb-2 mb-2 border-b border-surface-container text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                          {category.title} Section
                        </div>
                        {category.items.map((item) => (
                          <button
                            key={item.id}
                            onClick={() => handleLinkClick(item.id)}
                            className={`w-full px-4 py-3 text-left text-xs font-headline font-semibold flex items-center justify-between transition-colors ${activeTab === item.id
                              ? "bg-royal-gold/15 text-primary-custom border-l-4 border-royal-gold font-bold"
                              : "text-on-surface-variant hover:bg-surface-cream hover:text-primary-custom"
                              }`}
                          >
                            <span>{item.label}</span>
                            <ChevronRight className="w-3 h-3 opacity-30" />
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>

            {/* Quick Action Buttons & Mobile Trigger */}
            <div className="flex items-center gap-2.5">

              <div className="hidden sm:flex items-center bg-surface-cream border border-surface-container-high rounded-xl px-2 py-1.5">
                <div id="google_translate_element"></div>
              </div>

      
              <button
                onClick={() => handleLinkClick("get-donate")}
                className="hidden sm:inline-flex bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-headline font-extrabold text-xs px-5 py-2.5 rounded-xl transition-all shadow-md hover:shadow-lg active:scale-95 cursor-pointer"
              >
                Donate Now
              </button>


              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2.5 rounded-xl bg-surface-cream border border-surface-container-high hover:bg-surface-container text-primary-custom"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed top-20 inset-0 z-40 bg-white border-t border-surface-container-high overflow-y-auto px-4 py-6 space-y-4">
          <span className="text-[10px] uppercase font-bold text-gray-400 block pb-2 border-b border-surface-container-high">
            Main Site Navigation (Accordion)
          </span>

          <div className="space-y-2">
            {NAVIGATION_CATEGORIES.map((category) => {
              const isDirect = category.items.length === 0;
              const isExpanded = mobileExpandedCat === category.title;
              const isActive = isCategoryActive(category);

              if (isDirect) {
                return (
                  <button
                    key={category.title}
                    onClick={() => handleLinkClick(category.id || "")}
                    className={`w-full p-3 rounded-xl font-headline font-bold text-xs flex items-center gap-3 ${isActive
                      ? "bg-angkor-blue text-white"
                      : "bg-surface-cream text-on-surface-variant hover:text-primary-custom border border-surface-container-high"
                      }`}
                  >
                    <category.icon className="w-4 h-4" />
                    <span>{category.title}</span>
                  </button>
                );
              }

              return (
                <div key={category.title} className="space-y-1">
                  <button
                    onClick={() => setMobileExpandedCat(isExpanded ? null : category.title)}
                    className={`w-full p-3 rounded-xl font-headline font-bold text-xs flex items-center justify-between ${isActive
                      ? "bg-angkor-blue/15 text-primary-custom"
                      : "bg-surface-cream text-on-surface-variant border border-surface-container-high"
                      }`}
                  >
                    <div className="flex items-center gap-3">
                      <category.icon className="w-4 h-4" />
                      <span>{category.title}</span>
                    </div>
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isExpanded ? "rotate-180" : ""}`} />
                  </button>

                  {isExpanded && (
                    <div className="pl-4 space-y-1 py-1">
                      {category.items.map((item) => (
                        <button
                          key={item.id}
                          onClick={() => handleLinkClick(item.id)}
                          className={`w-full p-2.5 rounded-lg text-left text-xs font-headline font-semibold flex justify-between items-center ${activeTab === item.id
                            ? "bg-royal-gold/15 text-primary-custom font-bold border-l-2 border-royal-gold"
                            : "text-on-surface-variant hover:bg-surface-cream"
                            }`}
                        >
                          <span>{item.label}</span>
                          <ChevronRight className="w-3 h-3 opacity-40" />
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <button
            onClick={() => handleLinkClick("get-donate")}
            className="w-full bg-angkor-blue hover:bg-primary-custom text-white font-headline font-extrabold text-xs py-3 rounded-xl text-center block shadow-xs mb-2"
          >
            Donate Now (Secure)
          </button>

          <div className="w-full bg-surface-cream border border-surface-container-high rounded-xl py-2 px-3 text-center text-xs text-on-surface-variant font-headline font-semibold">
            🌐 Language: EN / KH
          </div>
        </div>
      )}
    </div>
  );
}

// ==================== 3. CONTEXTUAL SIDEBAR ====================
interface SidebarProps {
  activeTab: string;
  onTabChange: (tabId: string) => void;
}

export function PageSidebar({ activeTab, onTabChange }: SidebarProps) {
  // Find which category the current activeTab belongs to
  const activeCategory = NAVIGATION_CATEGORIES.find((cat) =>
    cat.items.some((item) => item.id === activeTab)
  );

  if (!activeCategory || activeCategory.items.length <= 1) return null;

  return (
    <aside className="bg-white p-5 rounded-3xl border border-surface-container shadow-xs space-y-4">
      <div className="flex items-center gap-2 pb-3 border-b border-surface-container-high">
        <activeCategory.icon className="w-4 h-4 text-royal-gold" />
        <h5 className="font-headline font-bold text-xs uppercase tracking-wider text-primary-custom">
          {activeCategory.title}
        </h5>
      </div>

      <nav className="space-y-1 flex flex-col">
        {activeCategory.items.map((item) => {
          const isSelected = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => {
                onTabChange(item.id);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className={`w-full p-2.5 rounded-lg text-left text-xs font-headline font-semibold flex justify-between items-center transition-colors ${isSelected
                ? "bg-primary-custom text-white font-bold"
                : "text-on-surface-variant hover:bg-surface-cream hover:text-primary-custom"
                }`}
            >
              <span>{item.label}</span>
              <ChevronRight className={`w-3 h-3 ${isSelected ? "text-royal-gold" : "opacity-30"}`} />
            </button>
          );
        })}
      </nav>
    </aside>
  );
}