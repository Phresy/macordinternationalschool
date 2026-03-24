"use client"
import { useParams, useRouter } from 'next/navigation'
import { useLanguage } from '@/context/LanguageContext'
import Navbar from '@/components/Navbar'
import Link from 'next/link'
import { CheckCircle2, Calendar, Users, Globe2, ArrowLeft, ChevronRight } from 'lucide-react'

export default function ProgramDetail() {
  const params = useParams()
  const router = useRouter()
  const { t } = useLanguage()
  
  const programId = params.id as keyof typeof t.programs
  const content = t.programs[programId]

  if (!content) return (
    <div className="h-screen flex flex-col items-center justify-center bg-macord-dark text-white">
      <h1 className="text-2xl font-black mb-4">PROGRAM NOT FOUND</h1>
      <button onClick={() => router.push('/')} className="text-macord-cyan font-bold flex items-center gap-2">
        <ArrowLeft size={18} /> Return Home
      </button>
    </div>
  )

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* 1. BREADCRUMBS & NAVIGATION */}
      <div className="bg-macord-dark pt-32 pb-6 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-8 flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-white/40">
          <Link href="/" className="hover:text-macord-cyan transition-colors">Home</Link>
          <ChevronRight size={12} />
          <span className="text-macord-cyan">Saturday Programs</span>
          <ChevronRight size={12} />
          <span className="text-white">{content.title}</span>
        </div>
      </div>

      {/* 2. DYNAMIC HERO */}
      <section className="relative py-24 bg-macord-dark overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-macord-primary/10 -skew-x-12 translate-x-1/4" />
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <button 
            onClick={() => router.back()}
            className="group flex items-center gap-2 text-macord-cyan mb-10 font-black text-[10px] uppercase tracking-[0.2em] hover:text-white transition-colors"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> 
            Back to Home
          </button>
          
          <h1 className="text-6xl md:text-8xl font-black text-white leading-none tracking-tighter mb-10">
            {content.title}
          </h1>
          <p className="text-slate-400 text-xl md:text-2xl max-w-3xl font-light leading-relaxed">
            {content.desc}
          </p>
        </div>
      </section>

      {/* 3. CONTENT GRID */}
      <section className="py-24 max-w-7xl mx-auto px-8 grid lg:grid-cols-12 gap-16">
        <div className="lg:col-span-8 space-y-12">
          <div className="space-y-6">
            <h2 className="text-3xl font-black text-macord-dark uppercase tracking-tight italic">Program Overview</h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              {content.longDesc}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {content.features.map((feature: string, i: number) => (
              <div key={i} className="flex items-center gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-100 group hover:border-macord-primary/30 transition-colors">
                <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center">
                  <CheckCircle2 className="text-macord-primary" size={20} />
                </div>
                <span className="font-bold text-macord-dark text-sm">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 4. ENROLLMENT SIDEBAR */}
        <div className="lg:col-span-4">
          <div className="sticky top-32 bg-macord-dark p-10 rounded-[3rem] text-white shadow-2xl border border-white/10">
            <h3 className="text-2xl font-black mb-8">Enrollment</h3>
            
            <div className="space-y-6 mb-10">
              {[
                { label: 'Schedule', val: 'Saturdays', icon: <Calendar size={18}/> },
                { label: 'Ages', val: '6 - 16 Years', icon: <Users size={18}/> },
                { label: 'Location', val: 'Firestone, Madina', icon: <Globe2 size={18}/> }
              ].map((info, idx) => (
                <div key={idx} className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5">
                  <div className="text-macord-cyan">{info.icon}</div>
                  <div>
                    <p className="text-[9px] uppercase text-slate-500 font-bold tracking-widest">{info.label}</p>
                    <p className="font-bold text-sm">{info.val}</p>
                  </div>
                </div>
              ))}
            </div>

            <button className="w-full bg-macord-primary hover:bg-macord-cyan text-white py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-[10px] transition-all shadow-xl hover:-translate-y-1 active:scale-95">
              Secure a Spot
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}