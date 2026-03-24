"use client"
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import { useLanguage } from '@/context/LanguageContext'
import { ArrowRight, Cpu, Brain, CheckCircle2, ShieldCheck, Globe, Star } from 'lucide-react'
import CampusGallery from '@/components/CampusGallery';

export default function MacordHome() {
  const { t, language } = useLanguage()

  return (
    <main className="min-h-screen bg-white selection:bg-macord-cyan selection:text-white">
      <Navbar />
      <Hero />

      {/* --- SECTION 1: THE BILINGUAL PILLAR (Balanced White/Grey) --- */}
      <section className="py-32 bg-slate-50/50 relative overflow-hidden">
        {/* Subtle Decorative Text in Background */}
        <div className="absolute top-20 right-[-5%] text-[15rem] font-black text-slate-100/50 select-none pointer-events-none italic uppercase">
          Macord
        </div>

        <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-24 items-center relative z-10">
          <div className="relative group">
            {/* The Image Container with a "White-Pop" Border */}
            <div className="rounded-[3.5rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.12)] relative bg-white p-4">
              <img 
                src="/m1.jpg" 
                alt="Academic Excellence" 
                className="w-full h-[650px] object-cover rounded-[2.5rem] transition-transform duration-1000 group-hover:scale-105" 
              />
              <div className="absolute inset-0 rounded-[2.5rem] ring-1 ring-inset ring-black/5"></div>
            </div>
            
            {/* Floating Glass Badge - Refined for White Architecture */}
            <div className="absolute -bottom-10 -right-10 bg-macord-dark text-white p-10 rounded-[3rem] shadow-2xl hidden xl:block border border-white/10 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-macord-cyan/20 rounded-2xl flex items-center justify-center">
                  <Star className="text-macord-cyan" size={24} fill="currentColor" />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-macord-cyan">Accredited</p>
                  <p className="font-black italic">Global Standards</p>
                </div>
              </div>
              <p className="text-xs text-slate-400 max-w-[180px] leading-relaxed font-medium">
                {t.stats.curriculum}
              </p>
            </div>
          </div>
          
          <div className="space-y-12">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-macord-primary/10 px-4 py-2 rounded-xl">
                <ShieldCheck size={16} className="text-macord-primary" />
                <span className="text-macord-primary text-[10px] font-black uppercase tracking-[0.3em]">
                  The Macord Advantage
                </span>
              </div>
              
              <h2 className="text-5xl md:text-7xl font-black text-macord-dark leading-[0.95] tracking-tighter">
                {language === 'en' ? 'A Fusion of' : 'Une Fusion d\''} <br/> 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-macord-primary to-macord-cyan italic">
                  {language === 'en' ? 'Global Excellence' : 'Excellence Mondiale'}
                </span>
              </h2>
              <p className="text-slate-500 text-xl font-light leading-relaxed max-w-lg border-l-2 border-slate-200 pl-6">
                {t.hero.subtitle}
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-10">
              <div className="p-8 bg-white rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-shadow">
                <div className="w-10 h-10 bg-macord-cyan/10 rounded-xl flex items-center justify-center mb-4">
                  <CheckCircle2 className="text-macord-primary" size={20} />
                </div>
                <h4 className="font-bold text-macord-dark text-lg mb-2">
                  {language === 'en' ? 'Personalized' : 'Approche'}
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed">{t.stats.ratio}</p>
              </div>
              <div className="p-8 bg-white rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-shadow">
                <div className="w-10 h-10 bg-macord-cyan/10 rounded-xl flex items-center justify-center mb-4">
                  <Globe className="text-macord-primary" size={20} />
                </div>
                <h4 className="font-bold text-macord-dark text-lg mb-2">
                  {language === 'en' ? 'Bilingual' : 'Bilingue'}
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed">{t.stats.bilingual}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* --- SECTION 2: THE CAMPUS GALLERY (The Dark Reveal) --- */}
      <section className="bg-macord-dark pt-32 pb-10 rounded-t-[5rem] -mt-20 relative z-20 shadow-[0_-50px_100px_rgba(0,0,0,0.3)]">
        <div className="max-w-7xl mx-auto px-8 mb-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="text-macord-cyan font-black tracking-[0.5em] uppercase text-[10px]">Campus Environment</span>
              <h2 className="text-4xl md:text-6xl font-black text-white italic tracking-tighter mt-4">Built for Inspiration.</h2>
            </div>
            <p className="text-slate-400 max-w-xs text-sm mb-2">Our modern white campus architecture provides a clean, distraction-free space for cognitive growth.</p>
          </div>
        </div>
        <CampusGallery />
      </section>

      {/* --- SECTION 3: SATURDAY EXCELLENCE (Modern Grid) --- */}
      <section className="bg-macord-dark py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:32px_32px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-24">
            <h2 className="text-5xl md:text-6xl font-black text-white italic tracking-tighter mb-6">{t.nav.saturdays}</h2>
            <div className="h-1 w-20 bg-macord-cyan mx-auto mb-6"></div>
            <p className="text-slate-400 text-lg font-light leading-relaxed">{t.saturdays.description}</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              { id: 'arc', icon: Cpu, color: 'text-macord-cyan' },
              { id: 'ucmas', icon: Brain, color: 'text-macord-primary' },
              { id: 'german', icon: Globe, color: 'text-macord-cyan' }
            ].map((prog) => {
              const Icon = prog.icon;
              const content = t.programs[prog.id as keyof typeof t.programs];
              return (
                <Link key={prog.id} href="/saturdays" className="group bg-white/5 border border-white/10 p-12 rounded-[3rem] hover:bg-white transition-all duration-700 block hover:-translate-y-3">
                  <div className="flex justify-between items-start mb-12">
                    <div className={`w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center group-hover:bg-macord-dark/5 transition-colors`}>
                      <Icon className={`${prog.color} transition-transform duration-500 group-hover:scale-110`} size={32} />
                    </div>
                    <ArrowRight className="text-white/20 group-hover:text-macord-primary transition-colors -rotate-45 group-hover:rotate-0" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-macord-dark mb-4 transition-colors">
                    {content.title}
                  </h3>
                  <p className="text-slate-400 group-hover:text-slate-600 leading-relaxed mb-10 transition-colors text-sm">
                    {content.desc}
                  </p>
                  <span className="text-macord-cyan font-black group-hover:text-macord-primary transition-colors text-[10px] uppercase tracking-widest">
                    {t.saturdays.viewDetails}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* --- SECTION 4: REFINED CTA (The "Luminous" Finish) --- */}
      <section className="py-40 bg-white relative">
        <div className="max-w-6xl mx-auto px-8 relative z-10">
          <div className="bg-macord-primary rounded-[5rem] p-12 md:p-24 text-center text-white shadow-[0_50px_100px_rgba(30,64,175,0.4)] relative overflow-hidden">
            {/* Visual Flare */}
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-macord-cyan/30 rounded-full blur-[100px]"></div>
            
            <h2 className="text-5xl md:text-8xl font-black mb-10 relative z-10 tracking-tighter leading-tight">
              {language === 'en' ? 'Start Your' : 'Commencez Votre'} <br/> 
              <span className="italic opacity-80 underline decoration-macord-cyan underline-offset-8">Legacy.</span>
            </h2>
            
            <p className="text-white/80 text-xl md:text-2xl mb-12 max-w-2xl mx-auto font-light relative z-10">
              {language === 'en' 
                ? 'Join a community where bilingual excellence meets modern architectural inspiration.'
                : 'Rejoignez une communauté où l\'excellence bilingue rencontre l\'inspiration architecturale moderne.'
              }
            </p>
            
            <Link href="/admissions" className="relative z-10 inline-block">
              <button className="bg-white text-macord-dark px-16 py-7 rounded-2xl font-black uppercase tracking-widest text-[11px] hover:bg-macord-dark hover:text-white transition-all shadow-2xl active:scale-95 hover:px-20">
                {t.hero.cta}
              </button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}