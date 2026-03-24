"use client"
import Navbar from '@/components/Navbar'
import { useLanguage } from '@/context/LanguageContext'
import { BookOpen, Globe, Award, Rocket, CheckCircle2, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function CurriculumPage() {
  const stages = [
    {
      title: "Early Years / Maternelle",
      age: "Ages 2 - 5",
      desc: "Sensory-based bilingual immersion. We focus on social-emotional growth and linguistic foundations in both French and English.",
      points: ["Montessori-inspired Play", "Phonetics & Vocabulary", "Motor Skills Mastery"],
      color: "border-macord-cyan"
    },
    {
      title: "Primary / Élémentaire",
      age: "Ages 6 - 11",
      desc: "The core of our dual-pathway. Students follow the Cambridge Primary Science & Math alongside French Language Arts.",
      points: ["Cambridge Pathway", "Bilingual Literacy", "Mental Math Integration"],
      color: "border-macord-primary"
    },
    {
      title: "Junior High / Collège",
      age: "Ages 12 - 15",
      desc: "Preparing global citizens for international certifications (IGCSE & Brevet) with advanced technical electives.",
      points: ["Global Perspectives", "A.R.C (AI & Robotics)", "German Proficiency"],
      color: "border-macord-dark"
    }
  ]

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* --- HERO: THE ACADEMIC VISION --- */}
      <section className="bg-macord-dark pt-44 pb-32 rounded-b-[4rem] relative overflow-hidden text-center lg:text-left">
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <h1 className="text-5xl md:text-8xl font-black text-white italic tracking-tighter leading-none mb-12">
            The Dual <br/> Curriculum.
          </h1>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {[
              { icon: Globe, title: "Bilingual Mastery", text: "Total fluency in French and English." },
              { icon: Award, title: "Dual Standards", text: "Cambridge & French National Accreditation." },
              { icon: Rocket, title: "Future Ready", text: "Integrated Tech & Coding for every student." },
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
          {stages.map((stage, idx) => (
            <div key={idx} className="flex flex-col lg:flex-row gap-12 items-center group">
              <div className="lg:w-1/3 text-center lg:text-right">
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-macord-cyan mb-2 block">{stage.age}</span>
                <h2 className="text-3xl font-black text-macord-dark italic">{stage.title}</h2>
              </div>
              
              <div className={`lg:w-2/3 p-10 md:p-14 rounded-[3.5rem] bg-slate-50 border-l-8 ${stage.color} group-hover:bg-white group-hover:shadow-2xl transition-all duration-500`}>
                <p className="text-slate-500 font-light leading-relaxed mb-8 text-lg">{stage.desc}</p>
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
    </main>
  )
}