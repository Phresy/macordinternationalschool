"use client"
import { useLanguage } from '@/context/LanguageContext'
import { MapPin, Phone, Mail, Instagram, Linkedin, Facebook, ArrowUpRight } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
  const { t, language } = useLanguage()

  return (
    <footer className="bg-macord-dark text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          
          {/* 1. BRAND STORY */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-black tracking-tighter mb-2">MACORD</h2>
              <p className="text-[10px] tracking-[0.3em] uppercase font-bold text-macord-cyan">
                International School
              </p>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed font-light">
              {language === 'en' 
                ? "Nurturing bilingual excellence through a unique blend of British and French curricula. Developing global leaders from the heart of Madina."
                : "Cultiver l'excellence bilingue grâce à un mélange unique de programmes britanniques et français. Former des leaders mondiaux au cœur de Madina."}
            </p>
            <div className="flex gap-4">
              {[Instagram, Linkedin, Facebook].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-macord-primary hover:border-transparent transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* 2. QUICK LINKS */}
          <div className="space-y-8">
            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-macord-cyan">Sitemap</h4>
            <ul className="space-y-4 text-slate-400 text-sm font-medium">
              <li>
                <Link href="/" className="hover:text-white cursor-pointer transition-colors flex items-center gap-2 group">
                  {t.nav?.home} <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-all" />
                </Link>
              </li>
              <li>
                <Link href="/curriculum" className="hover:text-white cursor-pointer transition-colors flex items-center gap-2 group">
                  {t.nav?.curriculum} <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-all" />
                </Link>
              </li>
              <li>
                <Link href="/admissions" className="hover:text-white cursor-pointer transition-colors flex items-center gap-2 group">
                  {t.nav?.admissions} <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-all" />
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white cursor-pointer transition-colors flex items-center gap-2 group">
                  {t.nav?.contact} <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-all" />
                </Link>
              </li>
            </ul>
          </div>

          {/* 3. CONTACT INFO */}
          <div className="space-y-8">
            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-macord-cyan">Connect</h4>
            <div className="space-y-6">
              <div className="flex items-start gap-4 group">
                <div className="mt-1 text-macord-cyan"><Phone size={18} /></div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">
                    {language === 'en' ? 'Call Us' : 'Appelez-nous'}
                  </p>
                  <p className="text-sm font-bold">0303 982 522</p>
                </div>
              </div>
              <div className="flex items-start gap-4 group">
                <div className="mt-1 text-macord-cyan"><Mail size={18} /></div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">Email</p>
                  <p className="text-sm font-bold">info@macordintschool.edu.gh</p>
                </div>
              </div>
            </div>
          </div>

          {/* 4. LOCATION & GPS */}
          <div className="space-y-8">
            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-macord-cyan">Location</h4>
            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <div className="flex items-start gap-4 mb-4">
                <MapPin className="text-macord-cyan shrink-0" size={18} />
                <p className="text-sm leading-relaxed text-slate-300">
                  Firestone, Madina. <br />
                  Accra, Ghana.
                </p>
              </div>
              <div className="py-3 px-4 bg-macord-primary/20 border border-macord-primary/30 rounded-lg text-center">
                <p className="text-[10px] font-black uppercase tracking-widest text-macord-cyan mb-1">
                   {language === 'en' ? 'Digital Address' : 'Adresse Numérique'}
                </p>
                <p className="font-mono text-sm font-bold tracking-tighter">GM-018-8460</p>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest text-center md:text-left">
            © 2026 Macord International School. {language === 'en' ? 'All Rights Reserved.' : 'Tous Droits Réservés.'}
          </p>
          <div className="flex gap-8 text-[10px] font-bold uppercase tracking-widest text-slate-500">
            <a href="#" className="hover:text-white transition-colors">
               {language === 'en' ? 'Privacy Policy' : 'Politique de Confidentialité'}
            </a>
            <a href="#" className="hover:text-white transition-colors">
               {language === 'en' ? 'Terms of Service' : 'Conditions d\'Utilisation'}
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}