import React, { useState } from "react";
import { 
  Download, 
  FileBarChart, 
  CheckCircle, 
  Film, 
  Play, 
  Image as ImageIcon 
} from "lucide-react";
import { IMAGES } from "../data";
import { WordsPicturesDemo } from "./WordsPicturesDemo";

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

  return (
    <div className="space-y-10">
      <div className="text-center max-w-xl mx-auto">
        <span className="text-royal-gold font-bold text-xs uppercase tracking-wider bg-royal-gold/10 px-3 py-1 rounded-full border border-royal-gold/20">
          Document Vault
        </span>
        <h2 className="font-headline font-bold text-2xl sm:text-3xl text-angkor-blue mt-2">
          Annual Narrative & Financial Reports
        </h2>
        <p className="text-on-surface-variant text-xs mt-1">
          Review our public narrative metrics, educational program evaluations, and certified KPMG auditing ledgers.
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-4">
        {reports.map((report) => (
          <div key={report.id} className="bg-white rounded-2xl border border-surface-container p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-angkor-blue/10 rounded-xl flex items-center justify-center text-angkor-blue shrink-0">
                <FileBarChart className="w-5 h-5 text-royal-gold" />
              </div>
              <div>
                <span className="text-[10px] font-bold text-royal-gold uppercase tracking-wider">FY {report.year} — {report.type}</span>
                <h4 className="font-headline font-bold text-sm sm:text-base text-primary-custom leading-tight mt-0.5">
                  {report.title}
                </h4>
                <p className="text-[10px] text-gray-400 mt-1">PDF Document • {report.size}</p>
              </div>
            </div>

            <div className="shrink-0 pt-2 sm:pt-0">
              {downloadingId === report.id ? (
                <div className="w-32 space-y-1">
                  <div className="flex justify-between text-[10px] text-gray-400 font-bold">
                    <span>Downloading...</span>
                    <span>{downloadProgress}%</span>
                  </div>
                  <div className="h-1.5 bg-surface-cream rounded-full overflow-hidden border border-surface-container-high">
                    <div style={{ width: `${downloadProgress}%` }} className="h-full bg-royal-gold transition-all duration-300" />
                  </div>
                </div>
              ) : downloadedReports[report.id] ? (
                <span className="text-hope-green font-bold text-xs flex items-center gap-1.5 bg-hope-green/10 px-3 py-1.5 rounded-lg border border-hope-green/25">
                  <CheckCircle className="w-4 h-4" /> Downloaded
                </span>
              ) : (
                <button
                  onClick={() => handleDownload(report.id)}
                  className="bg-angkor-blue hover:bg-primary-custom text-white font-headline font-bold text-xs px-4 py-2 rounded-lg flex items-center gap-1.5 transition-all shadow-xs"
                >
                  <Download className="w-3.5 h-3.5" /> Download Report
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ==================== 2. MEDIA & PRESS KIT ====================
export function MediaPage() {
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);

  return (
    <div className="space-y-10">
      <div className="text-center max-w-xl mx-auto">
        <span className="text-royal-gold font-bold text-xs uppercase tracking-wider bg-royal-gold/10 px-3 py-1 rounded-full border border-royal-gold/20">
          Press Room
        </span>
        <h2 className="font-headline font-bold text-2xl sm:text-3xl text-angkor-blue mt-2">
          Media Gallery & Press Assets
        </h2>
        <p className="text-on-surface-variant text-xs mt-1">
          High-resolution media packets, video highlight logs, and heritage performance archives.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-5xl mx-auto">
        {/* Left column: Video player */}
        <div className="lg:col-span-7 space-y-4">
          <h3 className="font-headline font-bold text-base text-primary-custom flex items-center gap-1.5">
            <Film className="w-4 h-4 text-royal-gold" /> Video Showcase: Performing Arts & Braille Classes
          </h3>

          <div className="aspect-video rounded-3xl overflow-hidden bg-primary-custom relative shadow border border-surface-container-high">
            {isPlayingVideo ? (
              <div className="w-full h-full flex flex-col items-center justify-center bg-black text-white p-6 relative">
                <span className="w-3 h-3 bg-red-600 rounded-full animate-ping absolute top-4 right-4"></span>
                <Film className="w-12 h-12 text-royal-gold mb-3 animate-spin duration-3000" />
                <h5 className="font-headline font-bold text-sm">Streaming Krousar Thmey Cultural Festival Highlight...</h5>
                <p className="text-[11px] text-gray-400 mt-1 max-w-xs text-center leading-relaxed">
                  (Simulated High-Definition video playback showcasing Khmer traditional dance and sign-language classes).
                </p>
                <button
                  onClick={() => setIsPlayingVideo(false)}
                  className="bg-white/10 hover:bg-white/20 text-white font-headline font-bold text-xs px-4 py-2 rounded-lg mt-6 transition-colors"
                >
                  Stop Playback
                </button>
              </div>
            ) : (
              <>
                <img 
                  src={IMAGES.traditionalDance} 
                  alt="Traditional Dance Video Thumbnail" 
                  className="w-full h-full object-cover filter brightness-75"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <button
                    onClick={() => setIsPlayingVideo(true)}
                    className="w-16 h-16 bg-royal-gold hover:bg-royal-gold/90 text-primary-custom rounded-full flex items-center justify-center shadow-lg transform hover:scale-105 transition-all"
                  >
                    <Play className="w-7 h-7 fill-primary-custom ml-1" />
                  </button>
                </div>
                <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-xs p-3 rounded-xl text-white">
                  <p className="text-xs font-bold leading-tight">Siem Reap Specialized School Performing Arts</p>
                  <p className="text-[10px] text-gray-300 mt-0.5">Length: 4 minutes • Featuring blind percussionists</p>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Right column: Media assets */}
        <div className="lg:col-span-5 bg-white p-6 rounded-3xl border border-surface-container shadow-xs space-y-6">
          <div className="space-y-1">
            <h4 className="font-headline font-bold text-base text-primary-custom">Press Kit Downloads</h4>
            <p className="text-xs text-on-surface-variant leading-relaxed">
              Verified media and identity guidelines for publications or news reports.
            </p>
          </div>

          <div className="space-y-3">
            <div className="p-3 border border-surface-container-high rounded-xl flex items-center justify-between text-xs hover:bg-surface-cream transition-colors">
              <span className="font-semibold text-primary-custom">NGO Logo Pack (.SVG &amp; .PNG)</span>
              <button
                onClick={() => alert("Downloading Krousar Thmey vector files...")}
                className="text-angkor-blue hover:underline font-bold"
              >
                Download
              </button>
            </div>
            <div className="p-3 border border-surface-container-high rounded-xl flex items-center justify-between text-xs hover:bg-surface-cream transition-colors">
              <span className="font-semibold text-primary-custom">Founder Benoît Photo Set (HR)</span>
              <button
                onClick={() => alert("Downloading high-resolution photos...")}
                className="text-angkor-blue hover:underline font-bold"
              >
                Download
              </button>
            </div>
            <div className="p-3 border border-surface-container-high rounded-xl flex items-center justify-between text-xs hover:bg-surface-cream transition-colors">
              <span className="font-semibold text-primary-custom">30-Year History Press Pack</span>
              <button
                onClick={() => alert("Downloading press release archives...")}
                className="text-angkor-blue hover:underline font-bold"
              >
                Download
              </button>
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
    <div className="space-y-10">
      <div className="text-center max-w-xl mx-auto">
        <span className="text-royal-gold font-bold text-xs uppercase tracking-wider bg-royal-gold/10 px-3 py-1 rounded-full border border-royal-gold/20">
          Inclusive Tech
        </span>
        <h2 className="font-headline font-bold text-2xl sm:text-3xl text-angkor-blue mt-2">
          Words &amp; Pictures Application
        </h2>
        <p className="text-on-surface-variant text-xs mt-1">
          Play the interactive tablet app demo we deploy inside our inclusive special education centers.
        </p>
      </div>

      <WordsPicturesDemo />
    </div>
  );
}
