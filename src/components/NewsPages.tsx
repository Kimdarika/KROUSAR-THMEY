import React, { useState, useMemo } from "react";
import { 
  Search, 
  Calendar, 
  Clock, 
  User, 
  X, 
  Newspaper,
  Filter,
  TrendingUp,
  Eye,
  Bookmark,
  Share2,
  ChevronRight,
  Star
} from "lucide-react";
import { NEWS_ARTICLES, NewsArticle } from "../data";

export function NewsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeModalArticle, setActiveModalArticle] = useState<NewsArticle | null>(null);
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  // Filter categories
  const categories = ["All", "Cambodia", "Worldwide", "Milestones", "Press Release"];

  // Get category counts
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    categories.forEach(cat => {
      if (cat === "All") {
        counts[cat] = NEWS_ARTICLES.length;
      } else {
        counts[cat] = NEWS_ARTICLES.filter(a => a.category === cat).length;
      }
    });
    return counts;
  }, []);

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

  // Featured articles (first 3 if available)
  const featuredArticles = filteredArticles.slice(0, 3);
  const remainingArticles = filteredArticles.slice(3);

  return (
    <div className="space-y-10">
      {/* Header - Enhanced */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-royal-gold/10 text-royal-gold border border-royal-gold/20">
          <Newspaper className="w-3.5 h-3.5" />
          <span className="text-xs font-semibold tracking-wider uppercase">Newsroom</span>
          <span className="w-1.5 h-1.5 rounded-full bg-royal-gold animate-pulse" />
        </div>
        <h2 className="font-headline font-bold text-3xl sm:text-4xl text-angkor-blue tracking-tight">
          Stories, Updates & Milestones
        </h2>
        <p className="text-on-surface-variant text-sm leading-relaxed">
          Explore recent achievements in child welfare, sensory education, and international advocacy campaigns.
        </p>
      </div>

      {/* Search & Filter Bar - Enhanced */}
      <div className="bg-white p-6 rounded-2xl border-2 border-surface-container hover:border-royal-gold/20 transition-all duration-300 shadow-sm hover:shadow-md">
        <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
          {/* Category buttons */}
          <div className="flex flex-wrap gap-2 w-full lg:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`group px-4 py-2 rounded-xl text-xs font-headline font-bold transition-all duration-300 relative ${
                  selectedCategory === cat
                    ? "bg-gradient-to-r from-royal-gold to-amber-500 text-primary-custom shadow-lg shadow-royal-gold/25"
                    : "bg-surface-cream text-on-surface-variant hover:bg-surface-container hover:text-primary-custom hover:shadow-md"
                }`}
              >
                {cat}
                <span className={`ml-1.5 text-[9px] ${selectedCategory === cat ? 'text-primary-custom/80' : 'text-on-surface-variant/40'}`}>
                  ({categoryCounts[cat]})
                </span>
                {selectedCategory === cat && (
                  <span className="absolute -top-1 -right-1 w-2 h-2 bg-hope-green rounded-full animate-pulse" />
                )}
              </button>
            ))}
          </div>

          {/* Search input - Enhanced */}
          <div className="relative w-full lg:w-72">
            <div className={`absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none transition-colors duration-300 ${
              isSearchFocused ? 'text-royal-gold' : 'text-gray-400'
            }`}>
              <Search className="w-4 h-4" />
            </div>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onFocus={() => setIsSearchFocused(true)}
              onBlur={() => setIsSearchFocused(false)}
              placeholder="Search stories..."
              className={`w-full pl-10 pr-4 py-2.5 bg-surface-cream border-2 rounded-xl text-sm transition-all duration-300 focus:outline-none ${
                isSearchFocused 
                  ? 'border-royal-gold ring-2 ring-royal-gold/20' 
                  : 'border-surface-container-high hover:border-royal-gold/30'
              }`}
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm("")}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-royal-gold transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Results count */}
        <div className="mt-4 pt-4 border-t border-surface-container flex items-center justify-between text-xs text-on-surface-variant/60">
          <span className="flex items-center gap-2">
            <TrendingUp className="w-3.5 h-3.5 text-royal-gold" />
            {filteredArticles.length} article{filteredArticles.length !== 1 ? 's' : ''} found
          </span>
          {searchTerm && (
            <span className="text-royal-gold font-medium">
              Showing results for "{searchTerm}"
            </span>
          )}
        </div>
      </div>

      {/* Articles Grid - Enhanced */}
      {filteredArticles.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-3xl border-2 border-surface-container">
          <div className="relative w-24 h-24 mx-auto mb-4">
            <div className="absolute inset-0 bg-royal-gold/5 rounded-full blur-xl" />
            <div className="relative w-24 h-24 bg-surface-cream rounded-full flex items-center justify-center border-2 border-surface-container-high">
              <Newspaper className="w-10 h-10 text-gray-300" />
            </div>
          </div>
          <h5 className="font-headline font-bold text-xl text-primary-custom">No Articles Found</h5>
          <p className="text-sm text-on-surface-variant mt-2 max-w-sm mx-auto">
            Try adjusting your search keywords or switching to a different news category.
          </p>
          <button
            onClick={() => {
              setSearchTerm("");
              setSelectedCategory("All");
            }}
            className="mt-4 text-royal-gold font-semibold text-sm hover:underline inline-flex items-center gap-1"
          >
            Clear all filters
            <X className="w-3 h-3" />
          </button>
        </div>
      ) : (
        <div className="space-y-8">
          {/* Featured Articles Section */}
          {featuredArticles.length > 0 && !searchTerm && selectedCategory === "All" && (
            <div>
              <h3 className="font-headline font-bold text-lg text-primary-custom mb-4 flex items-center gap-2">
                <Star className="w-4 h-4 text-royal-gold fill-royal-gold/20" />
                Featured Stories
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {featuredArticles.map((article) => (
                  <div 
                    key={article.id}
                    className="group bg-white rounded-2xl border-2 border-surface-container hover:border-royal-gold/40 hover:shadow-xl transition-all duration-500 overflow-hidden cursor-pointer"
                    onClick={() => setActiveModalArticle(article)}
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={article.image} 
                        alt={article.title} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                      <div className="absolute top-3 right-3 flex gap-2">
                        <span className="bg-gradient-to-r from-royal-gold to-amber-500 text-primary-custom text-[9px] font-bold px-2.5 py-1 rounded-full shadow-lg">
                          {article.category}
                        </span>
                      </div>
                      <div className="absolute bottom-3 left-3 right-3">
                        <div className="flex gap-3 text-[10px] text-white/80 font-medium">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" /> {article.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" /> {article.readTime}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="p-5">
                      <h4 className="font-headline font-bold text-base text-primary-custom group-hover:text-royal-gold transition-colors duration-300 line-clamp-2">
                        {article.title}
                      </h4>
                      <p className="text-xs text-on-surface-variant leading-relaxed mt-2 line-clamp-2">
                        {article.summary}
                      </p>
                      <div className="mt-4 pt-4 border-t border-surface-container flex items-center justify-between">
                        <span className="text-[10px] text-on-surface-variant/60 flex items-center gap-1.5">
                          <User className="w-3 h-3" /> {article.author}
                        </span>
                        <span className="text-royal-gold font-semibold text-xs flex items-center gap-1 group-hover:gap-2 transition-all">
                          Read More
                          <ChevronRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Remaining Articles */}
          {(remainingArticles.length > 0 || searchTerm || selectedCategory !== "All") && (
            <div>
              {!searchTerm && selectedCategory === "All" && featuredArticles.length > 0 && (
                <h3 className="font-headline font-bold text-lg text-primary-custom mb-4 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-royal-gold" />
                  More Stories
                </h3>
              )}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {(searchTerm || selectedCategory !== "All" ? filteredArticles : remainingArticles).map((article) => (
                  <div 
                    key={article.id}
                    className="group bg-white rounded-2xl border-2 border-surface-container hover:border-royal-gold/40 hover:shadow-xl transition-all duration-500 overflow-hidden cursor-pointer"
                    onClick={() => setActiveModalArticle(article)}
                  >
                    <div className="relative h-44 overflow-hidden">
                      <img 
                        src={article.image} 
                        alt={article.title} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                      <span className="absolute top-3 right-3 bg-primary-custom/90 backdrop-blur-sm text-white text-[9px] font-bold px-2.5 py-1 rounded-full shadow-lg">
                        {article.category}
                      </span>
                    </div>
                    <div className="p-5">
                      <div className="flex gap-3 text-[10px] text-on-surface-variant/60 font-medium mb-2">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" /> {article.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" /> {article.readTime}
                        </span>
                      </div>
                      <h4 className="font-headline font-bold text-sm text-primary-custom group-hover:text-royal-gold transition-colors duration-300 line-clamp-2">
                        {article.title}
                      </h4>
                      <p className="text-xs text-on-surface-variant leading-relaxed mt-2 line-clamp-2">
                        {article.summary}
                      </p>
                      <div className="mt-4 pt-4 border-t border-surface-container flex items-center justify-between">
                        <span className="text-[10px] text-on-surface-variant/60 flex items-center gap-1.5">
                          <User className="w-3 h-3" /> {article.author}
                        </span>
                        <span className="text-royal-gold font-semibold text-xs flex items-center gap-1 group-hover:gap-2 transition-all">
                          Read More
                          <ChevronRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Article Detail Modal - Enhanced */}
      {activeModalArticle && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl shadow-2xl max-w-3xl w-full max-h-[90vh] flex flex-col animate-fadeIn">
            
            {/* Modal Header Cover */}
            <div className="relative h-56 sm:h-64 bg-primary-custom shrink-0 rounded-t-3xl overflow-hidden">
              <img 
                src={activeModalArticle.image} 
                alt={activeModalArticle.title} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              
              <button 
                onClick={() => setActiveModalArticle(null)}
                className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white p-2.5 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-110"
              >
                <X className="w-5 h-5" />
              </button>
              
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="inline-block bg-gradient-to-r from-royal-gold to-amber-500 text-primary-custom text-[10px] font-bold px-3 py-1 rounded-full shadow-lg mb-3">
                  {activeModalArticle.category}
                </span>
                <h3 className="font-headline font-bold text-xl sm:text-2xl leading-tight">
                  {activeModalArticle.title}
                </h3>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto flex-1 space-y-4">
              <div className="flex flex-wrap gap-4 text-xs text-on-surface-variant/60 border-b border-surface-container pb-4">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" /> {activeModalArticle.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5" /> {activeModalArticle.author}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" /> {activeModalArticle.readTime}
                </span>
              </div>
              
              <div className="bg-gradient-to-r from-royal-gold/5 to-amber-500/5 p-4 rounded-xl border border-royal-gold/10">
                <p className="font-semibold text-primary-custom text-sm leading-relaxed">
                  {activeModalArticle.summary}
                </p>
              </div>
              
              <div className="prose prose-sm max-w-none">
                <p className="text-sm text-on-surface-variant leading-relaxed whitespace-pre-line">
                  {activeModalArticle.content}
                </p>
              </div>

              {/* Share section */}
              <div className="pt-4 border-t border-surface-container flex items-center gap-3">
                <span className="text-xs text-on-surface-variant/60">Share:</span>
                <button className="p-1.5 hover:bg-surface-cream rounded-lg transition-colors text-on-surface-variant/60 hover:text-royal-gold">
                  <Share2 className="w-4 h-4" />
                </button>
                <button className="p-1.5 hover:bg-surface-cream rounded-lg transition-colors text-on-surface-variant/60 hover:text-royal-gold">
                  <Bookmark className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-surface-container bg-surface-cream/50 rounded-b-3xl flex flex-col sm:flex-row justify-between items-center gap-3">
              <span className="text-[10px] text-on-surface-variant/60 flex items-center gap-1.5">
                <Eye className="w-3 h-3" /> 
                {Math.floor(Math.random() * 1000) + 100} views
              </span>
              <button
                onClick={() => setActiveModalArticle(null)}
                className="group bg-gradient-to-r from-angkor-blue to-primary-custom hover:from-primary-custom hover:to-angkor-blue text-white font-headline font-bold text-xs px-6 py-2.5 rounded-xl shadow-md shadow-angkor-blue/25 hover:shadow-angkor-blue/40 transition-all duration-300 flex items-center gap-2"
              >
                <span>Close Article</span>
                <X className="w-3.5 h-3.5 transition-transform duration-300 group-hover:rotate-90" />
              </button>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}