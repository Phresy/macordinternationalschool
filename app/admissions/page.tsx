"use client"
import Navbar from '@/components/Navbar'
import { useLanguage } from '@/context/LanguageContext'
import { Send, Clock, MapPin, Phone } from 'lucide-react'

export default function AdmissionsPage() {
  // Destructure t and language correctly from the context
  const { t, language } = useLanguage()

  // Dynamic steps based on current language
  const steps = language === 'en' 
    ? ['Inquiry', 'Visit', 'Assessment', 'Enroll']
    : ['Demande', 'Visite', 'Évaluation', 'Inscription']

  // Grade options for the dropdown
  const gradeOptions = language === 'en'
    ? ['Preschool / Nursery', 'Primary School', 'Junior High', 'Saturday Programs Only']
    : ['Maternelle / Crèche', 'École Primaire', 'Collège', 'Programmes du Samedi Uniquement']

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <div className="flex flex-col lg:flex-row min-h-screen">
        
        {/* LEFT SIDE: THE VIBE */}
        <div className="lg:w-5/12 relative h-100 lg:h-screen lg:sticky lg:top-0">
          <img 
            src="/m1.jpg" 
            alt="Macord Campus Life" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-macord-dark/60 backdrop-blur-[2px] flex flex-col justify-end p-12">
            <span className="text-macord-cyan font-black tracking-[0.4em] uppercase text-[10px] mb-4">
              {/* FIXED: t.language -> language */}
              {language === 'en' ? 'Join the 2026 Cohort' : 'Rejoignez la Promotion 2026'}
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-white italic tracking-tighter leading-none mb-6">
              {t.admission.title.split(' ').map((word, i) => (
                <span key={i} className="block">{word}</span>
              ))}
            </h1>
            <p className="text-slate-300 font-light max-w-sm leading-relaxed">
              {/* FIXED: t.language -> language */}
              {language === 'en' 
                ? 'Experience a blend of British rigor and French elegance in the heart of Madina.'
                : 'Découvrez l\'alliance de la rigueur britannique et de l\'élégance française au cœur de Madina.'
              }
            </p>
          </div>
        </div>

        {/* RIGHT SIDE: THE FORM & PROCESS */}
        <div className="lg:w-7/12 pt-32 pb-20 px-8 md:px-20 bg-slate-50/50">
          <div className="max-w-2xl mx-auto">
            
            {/* Step Indicators */}
            <div className="flex items-center gap-4 mb-16 overflow-x-auto pb-4 no-scrollbar">
              {steps.map((step, i) => (
                <div key={step} className="flex items-center gap-3 shrink-0">
                  <span className={`w-8 h-8 rounded-full flex items-center justify-center font-black text-[10px] ${
                    i === 0 ? 'bg-macord-primary text-white' : 'bg-white text-slate-400 border border-slate-200'
                  }`}>
                    0{i + 1}
                  </span>
                  <span className={`text-[10px] font-black uppercase tracking-widest ${
                    i === 0 ? 'text-macord-dark' : 'text-slate-400'
                  }`}>
                    {step}
                  </span>
                  {i < 3 && <div className="w-8 h-px bg-slate-200 mx-2" />}
                </div>
              ))}
            </div>

            <section className="bg-white rounded-[3rem] p-10 md:p-16 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] border border-slate-100">
              <h2 className="text-3xl font-black text-macord-dark mb-2 tracking-tight">
                {t.admission.title}
              </h2>
              <p className="text-slate-400 text-sm mb-12">
                {t.admission.status}
              </p>

              <form className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">
                      {t.contact.labels.name}
                    </label>
                    <input type="text" placeholder="John Doe" className="w-full bg-slate-50 border-none rounded-2xl p-4 text-sm focus:ring-2 focus:ring-macord-primary transition-all outline-none" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">
                      {/* FIXED: t.language -> language */}
                      {language === 'en' ? 'Phone Number' : 'Numéro de Téléphone'}
                    </label>
                    <input type="tel" placeholder="+233..." className="w-full bg-slate-50 border-none rounded-2xl p-4 text-sm focus:ring-2 focus:ring-macord-primary transition-all outline-none" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">
                    {/* FIXED: t.language -> language */}
                    {language === 'en' ? "Student's Current Grade" : "Niveau Actuel de l'Élève"}
                  </label>
                  <select className="w-full bg-slate-50 border-none rounded-2xl p-4 text-sm focus:ring-2 focus:ring-macord-primary transition-all appearance-none outline-none">
                    {gradeOptions.map((opt, i) => (
                      <option key={i} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">
                    {/* FIXED: t.language -> language */}
                    {t.contact.labels.message} ({language === 'en' ? 'Optional' : 'Optionnel'})
                  </label>
                  <textarea rows={4} placeholder={language === 'en' ? "Any specific requirements?" : "Des besoins spécifiques ?"} className="w-full bg-slate-50 border-none rounded-2xl p-4 text-sm focus:ring-2 focus:ring-macord-primary transition-all outline-none" />
                </div>

                <button className="w-full bg-macord-dark text-white p-6 rounded-2xl font-black uppercase tracking-[0.3em] text-xs hover:bg-macord-primary transition-all shadow-xl flex items-center justify-center gap-3 group active:scale-95">
                  {t.hero.cta} <Send size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </section>

            {/* Quick Contact Info */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
               <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-macord-cyan/10 rounded-xl flex items-center justify-center shrink-0">
                    <MapPin className="text-macord-primary" size={18} />
                  </div>
                  <div>
                    <h4 className="font-bold text-macord-dark text-xs uppercase tracking-widest">
                      {/* FIXED: t.language -> language */}
                      {language === 'en' ? 'Visit Us' : 'Visite'}
                    </h4>
                    <p className="text-slate-400 text-xs mt-1">Firestone, Madina</p>
                  </div>
               </div>
               <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-macord-cyan/10 rounded-xl flex items-center justify-center shrink-0">
                    <Phone className="text-macord-primary" size={18} />
                  </div>
                  <div>
                    <h4 className="font-bold text-macord-dark text-xs uppercase tracking-widest">
                      {t.contact.info.call}
                    </h4>
                    <p className="text-slate-400 text-xs mt-1">0303 982 522</p>
                  </div>
               </div>
               <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-macord-cyan/10 rounded-xl flex items-center justify-center shrink-0">
                    <Clock className="text-macord-primary" size={18} />
                  </div>
                  <div>
                    <h4 className="font-bold text-macord-dark text-xs uppercase tracking-widest">
                      {/* FIXED: t.language -> language */}
                      {language === 'en' ? 'Hours' : 'Heures'}
                    </h4>
                    <p className="text-slate-400 text-xs mt-1">Mon - Fri: 8am - 4pm</p>
                  </div>
               </div>
            </div>

          </div>
        </div>
      </div>
    </main>
  )
}