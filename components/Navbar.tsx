"use client"
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useLanguage } from '@/context/LanguageContext'
import { Menu, X, Globe, LayoutGrid, BookOpen, Calendar, Phone, ArrowRight, Home } from 'lucide-react'

export default function Navbar() {
  const { t, language, setLanguage } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  // UPDATED: Now using the translation object (t) for names
  const navLinks = [
    { name: t.nav.home, href: '/', icon: <Home size={20} /> },
    { name: t.nav.curriculum, href: '/curriculum', icon: <BookOpen size={20} /> },
    { name: t.nav.admissions, href: '/admissions', icon: <LayoutGrid size={20} /> },
    { name: t.nav.contact, href: '/contact', icon: <Phone size={20} /> },
  ]

  return (
    <nav className={`fixed w-full z-[100] transition-all duration-500 ${
      scrolled ? 'py-3' : 'py-6 md:py-8'
    }`}>
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className={`relative flex items-center justify-between px-4 md:px-8 py-3 md:py-4 rounded-[2rem] transition-all duration-500 ${
          scrolled || isOpen ? 'bg-white/95 backdrop-blur-xl shadow-lg border border-slate-200/50' : 'bg-transparent'
        }`}>
          
          {/* LOGO AREA */}
          <Link href="/" className="flex items-center gap-2 md:gap-3 group shrink-0" onClick={() => setIsOpen(false)}>
            <img src="/logo.png" alt="Macord Logo" className="h-8 md:h-10 w-auto object-contain transition-transform group-hover:scale-110" />
            <span className={`font-black tracking-tighter text-lg md:text-2xl transition-colors duration-500 ${
              scrolled || isOpen ? 'text-macord-dark' : 'text-white'
            }`}>
              MACORD
            </span>
          </Link>

          {/* DESKTOP MENU - Bilingual Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className={`text-[10px] font-black uppercase tracking-[0.2em] transition-all hover:-translate-y-0.5 ${
                  scrolled ? 'text-slate-500 hover:text-macord-primary' : 'text-white/80 hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* ACTION AREA */}
          <div className="flex items-center gap-2 md:gap-4 relative z-[120]">
            <button 
              onClick={() => setLanguage(language === 'en' ? 'fr' : 'en')}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-xl font-black text-[9px] md:text-xs transition-all active:scale-95 shadow-sm ${
                scrolled || isOpen 
                  ? 'bg-macord-dark text-white' 
                  : 'bg-white text-macord-dark hover:bg-macord-cyan hover:text-white'
              }`}
            >
              <Globe size={13} className={language === 'fr' ? 'text-macord-cyan' : ''} />
              <span>{(language || 'en').toUpperCase()}</span>
            </button>

            <button 
              onClick={() => setIsOpen(!isOpen)}
              className={`lg:hidden p-2 rounded-xl transition-colors active:scale-90 ${
                scrolled || isOpen ? 'text-macord-dark bg-slate-100' : 'text-white bg-white/10'
              }`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE BENTO MENU - Bilingual Links */}
      <div className={`fixed inset-0 bg-slate-50 z-[-1] transition-all duration-700 lg:hidden overflow-y-auto ${
        isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      }`}>
        <div className="min-h-full pt-32 pb-10 px-6 flex flex-col">
          <div className="grid grid-cols-2 gap-3 md:gap-4 flex-grow">
            {navLinks.map((link, idx) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`p-6 md:p-8 rounded-[2.5rem] flex flex-col justify-between transition-all active:scale-95 shadow-sm border border-slate-100 ${
                  idx === 0 
                    ? 'bg-macord-primary text-white col-span-2' 
                    : 'bg-white text-macord-dark'
                }`}
              >
                <div className={`w-10 h-10 md:w-12 md:h-12 rounded-2xl flex items-center justify-center mb-4 ${
                  idx === 0 ? 'bg-white/20' : 'bg-slate-50'
                }`}>
                  {link.icon}
                </div>
                <span className="font-black uppercase tracking-[0.2em] text-[9px] md:text-[10px]">{link.name}</span>
              </Link>
            ))}
            
            {/* CTA CARD - Bilingual */}
            <Link 
              href="/admissions"
              onClick={() => setIsOpen(false)}
              className="col-span-2 bg-macord-dark p-6 rounded-[2.5rem] flex items-center justify-between group active:scale-95 transition-all mt-2"
            >
              <div className="space-y-1">
                <span className="text-macord-cyan font-black uppercase text-[9px] tracking-widest block opacity-70">
                  {t.language === 'en' ? 'Enroll 2026' : 'Inscriptions 2026'}
                </span>
                <span className="text-white font-bold text-lg">
                  {t.admission.ctaShort}
                </span>
              </div>
              <div className="w-10 h-10 bg-macord-cyan rounded-full flex items-center justify-center">
                <ArrowRight className="text-macord-dark" size={18} />
              </div>
            </Link>
          </div>
          
          <div className="mt-8 text-center border-t border-slate-200 pt-6">
            <p className="text-slate-400 text-[9px] uppercase tracking-[0.3em] font-black">
              Firestone, Madina — Accra, Ghana
            </p>
          </div>
        </div>
      </div>
    </nav>
  )
}