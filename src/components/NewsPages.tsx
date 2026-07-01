import React, { useState, useMemo } from "react";
import { 
  Search, 
  Calendar, 
  Clock, 
  User, 
  X, 
  Newspaper 
} from "lucide-react";
import { NEWS_ARTICLES, NewsArticle } from "../data";

export function NewsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeModalArticle, setActiveModalArticle] = useState<NewsArticle | null>(null);

  // Filter categories
  const categories = ["All", "Cambodia", "Worldwide", "Milestones", "Press Release"];

  // Filter articles based on search & category
  const filteredArticles = useMemo(() => {
    return NEWS_ARTICLES.filter((article) => {
      const matchesCategory = selectedCategory === "All" || article.category === selectedCategory;
      const matchesSearch = 
        article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.content.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <div className="space-y-10">
      {/* Header */}
      <div className="text-center max-w-xl mx-auto">
        <span className="text-royal-gold font-bold text-xs uppercase tracking-wider bg-royal-gold/10 px-3 py-1 rounded-full border border-royal-gold/20">
          Newsroom
        </span>
        <h2 className="font-headline font-bold text-2xl sm:text-3xl text-angkor-blue mt-2">
          Stories, Updates & Milestones
        </h2>
        <p className="text-on-surface-variant text-xs mt-1">
          Explore recent achievements in child welfare, sensory education, and international advocacy campaigns.
        </p>
      </div>

      {/* Search & Filter Bar */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-white p-4 rounded-2xl border border-surface-container shadow-xs">
        {/* Category buttons */}
        <div className="flex flex-wrap gap-1.5 w-full md:w-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-headline font-bold transition-all ${
                selectedCategory === cat
                  ? "bg-royal-gold text-primary-custom"
                  : "bg-surface-cream text-on-surface-variant hover:bg-surface-container hover:text-primary-custom"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search input */}
        <div className="relative w-full md:w-72">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search stories..."
            className="w-full bg-surface-cream border border-surface-container-high rounded-xl py-2 pl-9 pr-4 text-xs focus:outline-none focus:ring-1 focus:ring-royal-gold"
          />
          <Search className="w-4 h-4 text-gray-400 absolute left-3 top-2.5" />
        </div>
      </div>

      {/* Articles Grid */}
      {filteredArticles.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-3xl border border-surface-container">
          <Newspaper className="w-12 h-12 text-gray-300 mx-auto mb-3" />
          <h5 className="font-headline font-bold text-primary-custom text-base">No Articles Found</h5>
          <p className="text-xs text-on-surface-variant mt-1 max-w-sm mx-auto">
            Try adjusting your search keywords or switching to a different news category.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map((article) => (
            <div 
              key={article.id}
              className="bg-white rounded-2xl border border-surface-container overflow-hidden shadow-xs hover:shadow-md hover:border-royal-gold/50 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="h-44 bg-gray-100 overflow-hidden relative">
                  <img 
                    src={article.image} 
                    alt={article.title} 
                    className="w-full h-full object-cover hover:scale-105 transition-all duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <span className="absolute top-3 right-3 bg-primary-custom text-white text-[9px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">
                    {article.category}
                  </span>
                </div>
                <div className="p-5 space-y-2">
                  <div className="flex gap-3 text-[10px] text-gray-400 font-bold">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" /> {article.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" /> {article.readTime}
                    </span>
                  </div>
                  <h4 className="font-headline font-bold text-sm sm:text-base text-primary-custom leading-tight line-clamp-2">
                    {article.title}
                  </h4>
                  <p className="text-xs text-on-surface-variant leading-relaxed line-clamp-3">
                    {article.summary}
                  </p>
                </div>
              </div>
              
              <div className="px-5 pb-5 pt-3 border-t border-surface-container-high flex justify-between items-center mt-3">
                <span className="text-[10px] text-gray-400 font-semibold truncate max-w-[60%] flex items-center gap-1">
                  <User className="w-3 h-3 shrink-0" /> By {article.author}
                </span>
                <button
                  onClick={() => setActiveModalArticle(article)}
                  className="text-angkor-blue hover:text-royal-gold font-headline font-bold text-xs"
                >
                  Read Story
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Article Detail Modal */}
      {activeModalArticle && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4 backdrop-blur-xs overflow-y-auto">
          <div className="bg-white rounded-3xl overflow-hidden shadow-2xl max-w-2xl w-full max-h-[85vh] flex flex-col">
            
            {/* Modal Header Cover */}
            <div className="h-48 bg-primary-custom relative shrink-0">
              <img 
                src={activeModalArticle.image} 
                alt={activeModalArticle.title} 
                className="w-full h-full object-cover opacity-60"
                referrerPolicy="no-referrer"
              />
              <button 
                onClick={() => setActiveModalArticle(null)}
                className="absolute top-4 right-4 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full backdrop-blur-xs transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
              <div className="absolute bottom-4 left-5 right-5 text-white">
                <span className="bg-royal-gold text-primary-custom text-[9px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">
                  {activeModalArticle.category}
                </span>
                <h3 className="font-headline font-bold text-lg sm:text-xl mt-1.5 leading-tight">
                  {activeModalArticle.title}
                </h3>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto space-y-4 text-xs text-on-surface-variant leading-relaxed">
              <div className="flex gap-4 text-[10px] text-gray-400 font-bold border-b border-surface-container pb-3">
                <span>Published: {activeModalArticle.date}</span>
                <span>•</span>
                <span>Author: {activeModalArticle.author}</span>
                <span>•</span>
                <span>Read Time: {activeModalArticle.readTime}</span>
              </div>
              <p className="font-semibold text-primary-custom text-sm">
                {activeModalArticle.summary}
              </p>
              <p className="whitespace-pre-line">
                {activeModalArticle.content}
              </p>
            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-surface-container bg-surface-cream text-right shrink-0">
              <button
                onClick={() => setActiveModalArticle(null)}
                className="bg-angkor-blue hover:bg-primary-custom text-white font-headline font-bold text-xs px-4 py-2 rounded-lg transition-colors"
              >
                Close Article
              </button>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}
