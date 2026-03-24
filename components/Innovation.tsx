"use client"
import Link from 'next/link'
import { useLanguage } from '@/context/LanguageContext'
import { Cpu, Brain, Globe, ArrowRight } from 'lucide-react'

export default function Innovation() {
  const { t, lang } = useLanguage()

  const programs = [
    {
      id: 'arc',
      icon: <Cpu size={32} className="text-macord-cyan" />,
      title: t.programs.arc.title,
      desc: t.programs.arc.desc,
      tag: "STEM"
    },
    {
      id: 'ucmas',
      icon: <Brain size={32} className="text-macord-gold" />,
      title: t.programs.ucmas.title,
      desc: t.programs.ucmas.desc,
      tag: "Mental Math"
    },
    {
      id: 'german',
      icon: <Globe size={32} className="text-white" />,
      title: t.programs.german.title,
      desc: t.programs.german.desc,
      tag: "Global"
    }
  ]

  return (
    <section className="bg-macord-dark py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((item) => (
            <Link 
              key={item.id} 
              href={`/programs/${item.id}`}
              className="group bg-white/5 border border-white/10 p-12 rounded-[2.5rem] hover:bg-white transition-all duration-500 hover:-translate-y-2 block"
            >
              <div className="flex justify-between items-start mb-12">
                <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center group-hover:bg-macord-primary/10 transition-colors">
                  {item.icon}
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest text-white/30 group-hover:text-macord-primary/40">
                  {item.tag}
                </span>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-white group-hover:text-macord-dark transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-400 group-hover:text-slate-600 leading-relaxed font-light text-sm">
                  {item.desc}
                </p>
              </div>

              <div className="mt-10 flex items-center gap-2 text-macord-cyan font-black text-[10px] uppercase tracking-[0.2em] group-hover:text-macord-primary transition-all">
                Learn More <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}