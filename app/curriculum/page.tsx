"use client"
import Navbar from '@/components/Navbar'
import { useLanguage } from '@/context/LanguageContext'
import { Globe, Award, Rocket, CheckCircle2 } from 'lucide-react'

export default function CurriculumPage() {
  const { t } = useLanguage()

  // Helper to apply the correct brand colors to the roadmap cards
  const stageColors = [
    "border-macord-cyan",
    "border-macord-primary",
    "border-macord-dark"
  ]

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* --- HERO: THE ACADEMIC VISION --- */}
      <section className="bg-macord-dark pt-44 pb-32 rounded-b-[4rem] relative overflow-hidden text-center lg:text-left">
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <h1 className="text-5xl md:text-8xl font-black text-white italic tracking-tighter leading-none mb-12">
            {t.curriculum.title.split(' ').map((word, i) => (
              <span key={i} className={i === 1 ? "text-macord-cyan" : ""}>
                {word}{" "}
                {i === 0 && <br className="hidden md:block"/>}
              </span>
            ))}
          </h1>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {[
              { 
                icon: Globe, 
                title: t.language === 'en' ? "Bilingual Mastery" : "Maîtrise Bilingue", 
                text: t.stats.bilingual 
              },
              { 
                icon: Award, 
                title: t.language === 'en' ? "Dual Standards" : "Doubles Standards", 
                text: t.stats.curriculum 
              },
              { 
                icon: Rocket, 
                title: t.language === 'en' ? "Future Ready" : "Prêt pour l'Avenir", 
                text: t.programs.arc.desc 
              },
            ].map((item, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-md p-8 rounded-[2.5rem] border border-white/10">
                <item.icon className="text-macord-cyan mb-6" size={32} />
                <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm font-light">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- THE ROADMAP --- */}
      <section className="py-32 max-w-5xl mx-auto px-8">
        <div className="space-y-20">
          {/* We turn the dictionary object into an array to map through it */}
          {Object.values(t.curriculum.stages).map((stage, idx) => (
            <div key={idx} className="flex flex-col lg:flex-row gap-12 items-center group">
              <div className="lg:w-1/3 text-center lg:text-right">
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-macord-cyan mb-2 block">
                  {stage.age}
                </span>
                <h2 className="text-3xl font-black text-macord-dark italic">
                  {stage.title}
                </h2>
              </div>
              
              <div className className={`lg:w-2/3 p-10 md:p-14 rounded-[3.5rem] bg-slate-50 border-l-8 ${stageColors[idx]} group-hover:bg-white group-hover:shadow-2xl transition-all duration-500`}>
                <p className="text-slate-500 font-light leading-relaxed mb-8 text-lg">
                  {stage.desc}
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {stage.points.map((p, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm font-bold text-macord-dark">
                      <CheckCircle2 className="text-macord-cyan" size={16} /> {p}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- QUICK CTA --- */}
      <section className="pb-32 text-center">
         <p className="text-slate-400 font-black uppercase tracking-[0.4em] text-[10px] mb-8">
           {t.admission.status}
         </p>
         <button className="bg-macord-primary text-white px-12 py-6 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-macord-dark transition-all shadow-xl">
           {t.hero.cta}
         </button>
      </section>
    </main>
  )
}