"use client"

import { useLanguage } from '@/context/LanguageContext'
import { ArrowRight, ShieldCheck, GraduationCap, Globe, Sparkles } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Hero() {
  const { t } = useLanguage()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen lg:min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-macord-dark via-macord-dark/85 to-black/60 z-[1]" />
        <img 
          src="/macord.jpg" 
          className="w-full h-full object-cover scale-105 transition-transform duration-[20s] hover:scale-110" 
          alt="Macord International School Campus"
        />
        {/* Enhanced gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-macord-dark via-macord-dark/70 to-transparent z-[2]" />
        <div className="absolute inset-0 bg-gradient-to-t from-macord-dark/30 via-transparent to-transparent z-[2]" />
      </div>

      <div className={`relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20 lg:py-0 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-4xl space-y-8 lg:space-y-10">
          
          {/* Premium Status Badge */}
          <div className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-xl border border-white/10 px-5 py-3 rounded-full shadow-xl">
            <Sparkles className="text-macord-cyan" size={16} />
            <span className="text-white text-[11px] sm:text-xs font-medium uppercase tracking-wider">
              {t.admission?.status || "PREMIER BILINGUAL INSTITUTION"}
            </span>
          </div>

          {/* Main Title */}
          <div className="space-y-5 lg:space-y-6">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.1] lg:leading-[1.1]">
              <span className="block">
                {t.language === 'en' ? 'Nurturing' : 'Cultiver'}
              </span>
              <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-macord-cyan via-white to-macord-primary">
                {t.hero?.title?.split(' ').slice(1).join(' ') || "Bilingual Excellence"}
              </span>
            </h1>
            
            <p className="text-slate-200 text-base sm:text-lg md:text-xl max-w-2xl leading-relaxed">
              {t.hero?.subtitle || "A premier French National and British Cambridge curriculum school providing a safe and serene environment in Madina."}
            </p>
          </div>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link 
              href="/admissions" 
              className="group relative bg-gradient-to-r from-macord-primary to-macord-cyan hover:from-macord-cyan hover:to-macord-primary text-white px-8 sm:px-10 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-macord-primary/30 hover:-translate-y-0.5 overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
              {t.hero?.cta || "Apply for Admission"} 
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              href="/curriculum" 
              className="bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 sm:px-10 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-3 hover:scale-105"
            >
              <GraduationCap size={18} />
              {t.nav?.curriculum || "Our Curriculum"}
            </Link>
          </div>

          {/* Premium Trust Indicators */}
          <div className="flex flex-wrap gap-6 pt-8 border-t border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-macord-cyan/10 flex items-center justify-center">
                <Globe className="text-macord-cyan" size={16} />
              </div>
              <span className="text-white/80 text-sm">French & British</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-macord-cyan/10 flex items-center justify-center">
                <ShieldCheck className="text-macord-cyan" size={16} />
              </div>
              <span className="text-white/80 text-sm">Cambridge Certified</span>
            </div>
          </div>
        </div>
      </div>

      {/* Add custom animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  )
}