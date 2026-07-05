import React, { useState } from "react";
import { 
  Download, 
  FileBarChart, 
  CheckCircle, 
  Film, 
  Play, 
  Image as ImageIcon,
  FileText,
  File,
  Clock,
  Eye,
  TrendingUp,
  Shield,
  Award,
  Users,
  Globe,
  Star,
  ChevronRight
} from "lucide-react";
import { IMAGES } from "../data";
import { WordsPicturesDemo } from "./WordsPicturesDemo";

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

// ==================== 1. ANNUAL REPORTS ====================
export function AnnualReportsPage() {
  const [downloadingId, setDownloadingId] = useState<string | null>(null);
  const [downloadProgress, setDownloadProgress] = useState<number>(0);
  const [downloadedReports, setDownloadedReports] = useState<Record<string, boolean>>({});

  const reports = [
    { id: "ar-2023", year: "2023", title: "Empowering Abilities - Annual Narrative Report", size: "4.2 MB", type: "Narrative & Pedagogical Achievements" },
    { id: "fs-2023", year: "2023", title: "KPMG Audited Balance & Capital Flows Statement", size: "2.1 MB", type: "Financial Audit Report" },
    { id: "ar-2022", year: "2022", title: "Dignity in Integration - Narrative Activity Log", size: "3.9 MB", type: "Narrative & Pedagogical Achievements" },
    { id: "fs-2022", year: "2022", title: "FY 2022 External Financial Compliance Certificate", size: "1.8 MB", type: "Financial Audit Report" },
  ];

  const handleDownload = (reportId: string) => {
    if (downloadingId) return;
    setDownloadingId(reportId);
    setDownloadProgress(0);

    const interval = setInterval(() => {
      setDownloadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setDownloadingId(null);
          setDownloadedReports((prevD) => ({ ...prevD, [reportId]: true }));
          return 100;
        }
        return prev + 25;
      });
    }, 250);
  };

  // Stats
  const totalReports = reports.length;
  const downloadedCount = Object.keys(downloadedReports).filter(id => downloadedReports[id]).length;

  return (
    <div className="space-y-12">
      <SectionHeader 
        badge="Document Vault"
        badgeIcon={FileText}
        title="Annual Narrative & Financial Reports"
        subtitle="Review our public narrative metrics, educational program evaluations, and certified KPMG auditing ledgers."
      />

      {/* Stats Summary */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
        <div className="bg-white p-4 rounded-xl border-2 border-surface-container hover:border-royal-gold/30 transition-all duration-300 text-center">
          <p className="text-2xl font-bold text-angkor-blue">{totalReports}</p>
          <p className="text-[10px] text-on-surface-variant">Total Reports</p>
        </div>
        <div className="bg-white p-4 rounded-xl border-2 border-surface-container hover:border-royal-gold/30 transition-all duration-300 text-center">
          <p className="text-2xl font-bold text-royal-gold">{downloadedCount}</p>
          <p className="text-[10px] text-on-surface-variant">Downloaded</p>
        </div>
        <div className="bg-white p-4 rounded-xl border-2 border-surface-container hover:border-royal-gold/30 transition-all duration-300 text-center">
          <p className="text-2xl font-bold text-hope-green">2</p>
          <p className="text-[10px] text-on-surface-variant">Audit Reports</p>
        </div>
        <div className="bg-white p-4 rounded-xl border-2 border-surface-container hover:border-royal-gold/30 transition-all duration-300 text-center">
          <p className="text-2xl font-bold text-primary-custom">12.0</p>
          <p className="text-[10px] text-on-surface-variant">MB Total</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto space-y-4">
        {reports.map((report) => {
          const isDownloaded = downloadedReports[report.id];
          const isDownloading = downloadingId === report.id;
          
          return (
            <div 
              key={report.id} 
              className={`group bg-white rounded-2xl border-2 transition-all duration-300 p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
                isDownloaded 
                  ? 'border-hope-green/30 hover:border-hope-green/50' 
                  : 'border-surface-container hover:border-royal-gold/30 hover:shadow-lg'
              }`}
            >
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 ${
                  isDownloaded 
                    ? 'bg-hope-green/10 text-hope-green' 
                    : 'bg-angkor-blue/10 text-royal-gold group-hover:bg-royal-gold group-hover:text-white'
                }`}>
                  {isDownloaded ? (
                    <CheckCircle className="w-6 h-6" />
                  ) : (
                    <FileBarChart className="w-6 h-6" />
                  )}
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-[10px] font-bold text-royal-gold uppercase tracking-wider">
                      FY {report.year}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-surface-container-high" />
                    <span className="text-[10px] text-on-surface-variant/60">{report.type}</span>
                    {isDownloaded && (
                      <span className="text-[9px] font-bold text-hope-green bg-hope-green/10 px-2 py-0.5 rounded-full">
                        Downloaded
                      </span>
                    )}
                  </div>
                  <h4 className="font-headline font-bold text-sm sm:text-base text-primary-custom leading-tight mt-0.5 group-hover:text-royal-gold transition-colors duration-300">
                    {report.title}
                  </h4>
                  <p className="text-[10px] text-on-surface-variant/60 mt-1 flex items-center gap-2">
                    <File className="w-3 h-3" />
                    PDF Document • {report.size}
                  </p>
                </div>
              </div>

              <div className="shrink-0 pt-2 sm:pt-0">
                {isDownloading ? (
                  <div className="w-36 space-y-1.5">
                    <div className="flex justify-between text-[10px] text-on-surface-variant/60 font-medium">
                      <span>Downloading...</span>
                      <span className="text-royal-gold font-bold">{downloadProgress}%</span>
                    </div>
                    <div className="h-2 bg-surface-cream rounded-full overflow-hidden border border-surface-container-high">
                      <div 
                        style={{ width: `${downloadProgress}%` }} 
                        className="h-full bg-gradient-to-r from-royal-gold to-amber-500 rounded-full transition-all duration-300"
                      />
                    </div>
                  </div>
                ) : isDownloaded ? (
                  <span className="text-hope-green font-bold text-xs flex items-center gap-1.5 bg-hope-green/10 px-4 py-2 rounded-xl border-2 border-hope-green/25">
                    <CheckCircle className="w-4 h-4" /> Downloaded
                  </span>
                ) : (
                  <button
                    onClick={() => handleDownload(report.id)}
                    className="group/btn bg-gradient-to-r from-angkor-blue to-primary-custom hover:from-primary-custom hover:to-angkor-blue text-white font-headline font-bold text-xs px-5 py-2.5 rounded-xl shadow-md shadow-angkor-blue/20 hover:shadow-angkor-blue/40 transition-all duration-300 flex items-center gap-2"
                  >
                    <Download className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-y-0.5" />
                    Download Report
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Trust Badge */}
      <div className="max-w-3xl mx-auto bg-gradient-to-r from-royal-gold/5 to-amber-500/5 border-2 border-royal-gold/20 p-4 rounded-xl flex items-center justify-center gap-3 text-xs text-on-surface-variant">
        <Shield className="w-4 h-4 text-royal-gold" />
        <span>All reports are <strong className="text-primary-custom">externally audited</strong> and verified by KPMG</span>
        <span className="w-px h-4 bg-surface-container-high" />
        <span className="flex items-center gap-1">
          <Award className="w-3.5 h-3.5 text-royal-gold" />
          <span>NGO Registry #289</span>
        </span>
      </div>
    </div>
  );
}

// ==================== 2. MEDIA & PRESS KIT ====================
export function MediaPage() {
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);

  const pressAssets = [
    { id: "logo-pack", title: "NGO Logo Pack (.SVG & .PNG)", icon: ImageIcon, size: "2.4 MB" },
    { id: "founder-photos", title: "Founder Benoît Photo Set (HR)", icon: ImageIcon, size: "8.7 MB" },
    { id: "history-pack", title: "30-Year History Press Pack", icon: FileText, size: "3.1 MB" },
    { id: "impact-report", title: "Impact Infographics Set", icon: TrendingUp, size: "5.2 MB" }
  ];

  return (
    <div className="space-y-12">
      <SectionHeader 
        badge="Press Room"
        badgeIcon={Film}
        title="Media Gallery & Press Assets"
        subtitle="High-resolution media packets, video highlight logs, and heritage performance archives."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto">
        {/* Left column: Video player */}
        <div className="lg:col-span-7 space-y-4">
          <h3 className="font-headline font-bold text-lg text-primary-custom flex items-center gap-2">
            <Film className="w-5 h-5 text-royal-gold" /> 
            Video Showcase
          </h3>

          <div className="aspect-video rounded-3xl overflow-hidden bg-primary-custom relative shadow-2xl border-2 border-surface-container">
            {isPlayingVideo ? (
              <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-primary-custom to-angkor-blue text-white p-6 relative">
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-royal-gold rounded-full blur-3xl" />
                  <div className="absolute bottom-0 left-0 w-64 h-64 bg-royal-gold rounded-full blur-3xl" />
                </div>
                <span className="w-3 h-3 bg-red-500 rounded-full animate-ping absolute top-4 right-4"></span>
                <Film className="w-16 h-16 text-royal-gold mb-4 animate-spin-slow" />
                <h5 className="font-headline font-bold text-xl">Now Playing: Cultural Festival Highlight</h5>
                <p className="text-sm text-gray-300 mt-2 max-w-sm text-center leading-relaxed">
                  Khmer traditional dance and sign-language classes featuring our deaf and blind students
                </p>
                <button
                  onClick={() => setIsPlayingVideo(false)}
                  className="bg-white/10 hover:bg-white/20 text-white font-headline font-bold text-sm px-6 py-3 rounded-xl mt-6 transition-all duration-300 backdrop-blur-sm border border-white/10 hover:border-white/20"
                >
                  Stop Playback
                </button>
              </div>
            ) : (
              <>
                <img 
                  src={IMAGES.traditionalDance} 
                  alt="Traditional Dance Video Thumbnail" 
                  className="w-full h-full object-cover filter brightness-75 hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <button
                    onClick={() => setIsPlayingVideo(true)}
                    className="w-20 h-20 bg-gradient-to-r from-royal-gold to-amber-500 hover:from-royal-gold/90 hover:to-amber-500/90 text-primary-custom rounded-full flex items-center justify-center shadow-2xl transform hover:scale-110 transition-all duration-300 group"
                  >
                    <Play className="w-8 h-8 fill-primary-custom ml-1 group-hover:scale-110 transition-transform" />
                  </button>
                </div>
                <div className="absolute bottom-6 left-6 right-6 bg-black/60 backdrop-blur-md p-4 rounded-2xl text-white border border-white/10">
                  <p className="text-sm font-bold leading-tight">Siem Reap Specialized School Performing Arts</p>
                  <p className="text-xs text-gray-300 mt-1 flex items-center gap-4">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" /> 4 minutes
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="w-3 h-3" /> Blind percussionists
                    </span>
                  </p>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Right column: Media assets */}
        <div className="lg:col-span-5">
          <div className="bg-white p-6 rounded-3xl border-2 border-surface-container hover:border-royal-gold/20 transition-all duration-300 shadow-sm hover:shadow-lg space-y-6">
            <div className="space-y-1">
              <h4 className="font-headline font-bold text-lg text-primary-custom flex items-center gap-2">
                <ImageIcon className="w-5 h-5 text-royal-gold" />
                Press Kit Downloads
              </h4>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Verified media and identity guidelines for publications or news reports.
              </p>
            </div>

            <div className="space-y-3">
              {pressAssets.map((asset) => (
                <div 
                  key={asset.id} 
                  className="group p-4 border-2 border-surface-container-high rounded-xl hover:border-royal-gold/30 hover:shadow-md transition-all duration-300 flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-surface-cream rounded-lg group-hover:bg-royal-gold/10 transition-colors duration-300">
                      <asset.icon className="w-4 h-4 text-royal-gold" />
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-primary-custom group-hover:text-royal-gold transition-colors duration-300">
                        {asset.title}
                      </span>
                      <p className="text-[10px] text-on-surface-variant/60">{asset.size}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => alert(`Downloading ${asset.title}...`)}
                    className="group/btn text-royal-gold hover:text-amber-500 font-bold text-xs flex items-center gap-1 hover:gap-2 transition-all"
                  >
                    Download
                    <Download className="w-3 h-3 transition-transform group-hover/btn:translate-y-0.5" />
                  </button>
                </div>
              ))}
            </div>

            {/* Media Contact */}
            <div className="pt-4 border-t border-surface-container">
              <p className="text-[10px] text-on-surface-variant/60 flex items-center gap-2">
                <Globe className="w-3.5 h-3.5 text-royal-gold" />
                For media inquiries, contact: <strong className="text-primary-custom">press@krousar-thmey.org</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ==================== 3. WORDS & PICTURES APPLICATION ====================
export function WordsPicturesPage() {
  return (
    <div className="space-y-12">
      <SectionHeader 
        badge="Inclusive Tech"
        badgeIcon={Star}
        title="Words & Pictures Application"
        subtitle="Play the interactive tablet app demo we deploy inside our inclusive special education centers."
      />

      <WordsPicturesDemo />
    </div>
  );
}