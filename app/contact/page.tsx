"use client"
import Navbar from '@/components/Navbar'
import { useLanguage } from '@/context/LanguageContext'
import { Phone, Mail, MapPin, MessageSquare, Instagram, Facebook, Twitter, Send } from 'lucide-react'

export default function ContactPage() {
  // Destructure t and language correctly
  const { t, language } = useLanguage()

  // Subject options translated based on current language
  const subjectOptions = language === 'en' 
    ? ['General Inquiry', 'School Tour Request', 'Saturday Programs', 'Career Opportunities']
    : ['Demande Générale', 'Visite de l’École', 'Programmes du Samedi', 'Opportunités de Carrière']

  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />

      {/* --- HEADER --- */}
      <section className="bg-macord-dark pt-44 pb-32 rounded-b-[4rem] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-size-[40px_40px]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-8 relative z-10 text-center">
          <span className="text-macord-cyan font-black tracking-[0.5em] uppercase text-[10px] block mb-4">
            {t.contact.badge}
          </span>
          <h1 className="text-6xl md:text-8xl font-black text-white italic tracking-tighter leading-none">
            {t.contact.title}
          </h1>
        </div>
      </section>

      {/* --- MAIN CONTENT --- */}
      <section className="max-w-7xl mx-auto px-8 -mt-20 mb-32 relative z-20">
        <div className="grid lg:grid-cols-12 gap-8">
          
          {/* LEFT: THE CONTACT FORM */}
          <div className="lg:col-span-7 bg-white rounded-[3.5rem] p-10 md:p-16 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.08)] border border-slate-100">
            <div className="mb-12 text-center md:text-left">
              <h2 className="text-3xl font-black text-macord-dark tracking-tight mb-2">
                {t.contact.formHeading}
              </h2>
              <p className="text-slate-400 font-light">
                {t.contact.formSub}
              </p>
            </div>

            <form className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">
                    {t.contact.labels.name}
                  </label>
                  <input type="text" className="w-full bg-slate-50 border-none rounded-2xl p-5 text-sm focus:ring-2 focus:ring-macord-cyan transition-all outline-none" placeholder={language === 'en' ? "Your name" : "Votre nom"} />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">
                    {t.contact.labels.email}
                  </label>
                  <input type="email" className="w-full bg-slate-50 border-none rounded-2xl p-5 text-sm focus:ring-2 focus:ring-macord-cyan transition-all outline-none" placeholder="email@example.com" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">
                  {t.contact.labels.subject}
                </label>
                <div className="relative">
                  <select className="w-full bg-slate-50 border-none rounded-2xl p-5 text-sm focus:ring-2 focus:ring-macord-cyan transition-all outline-none appearance-none">
                    {subjectOptions.map((opt, i) => (
                      <option key={i} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">
                  {t.contact.labels.message}
                </label>
                <textarea rows={5} className="w-full bg-slate-50 border-none rounded-2xl p-5 text-sm focus:ring-2 focus:ring-macord-cyan transition-all outline-none resize-none" placeholder={language === 'en' ? "How can we help?" : "Comment pouvons-nous vous aider ?"} />
              </div>

              <button className="w-full bg-macord-dark text-white p-6 rounded-3xl font-black uppercase tracking-[0.3em] text-xs hover:bg-macord-primary transition-all shadow-xl flex items-center justify-center gap-3 group active:scale-95">
                {t.contact.labels.send} <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>

          {/* RIGHT: THE INFO CARDS */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Contact Info Card */}
            <div className="bg-macord-primary rounded-[3rem] p-10 text-white shadow-2xl relative overflow-hidden">
              <MessageSquare className="absolute -bottom-6 -right-6 text-white/10" size={150} />
              <h3 className="text-2xl font-black italic mb-8 relative z-10">
                {t.contact.info.title}
              </h3>
              
              <div className="space-y-8 relative z-10">
                <div className="flex items-center gap-5 group">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center group-hover:bg-white/20 transition-colors">
                    <Phone size={20} className="text-macord-cyan" />
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest opacity-60">{t.contact.info.call}</p>
                    <p className="font-bold">0303 982 522</p>
                  </div>
                </div>

                <div className="flex items-center gap-5 group">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center group-hover:bg-white/20 transition-colors">
                    <Mail size={20} className="text-macord-cyan" />
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest opacity-60">{t.contact.info.email}</p>
                    <p className="font-bold">info@macordintschool.edu.gh</p>
                  </div>
                </div>

                <div className="flex items-center gap-5 group">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center group-hover:bg-white/20 transition-colors">
                    <MapPin size={20} className="text-macord-cyan" />
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest opacity-60">{t.contact.info.location}</p>
                    <p className="font-bold">{t.contact.info.address}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* LIVE MAP & SOCIAL CARD */}
            <div className="bg-white rounded-[3rem] p-10 border border-slate-100 shadow-xl overflow-hidden">
              <h3 className="text-xl font-black text-macord-dark mb-6">
                {language === 'en' ? 'Visit Our Campus' : 'Visitez notre Campus'}
              </h3>
              
              <div className="space-y-6">
                <div className="relative group rounded-[2.5rem] overflow-hidden h-64 border border-slate-100 shadow-inner bg-slate-200">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.473539126404!2d-0.1650394!3d5.673898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNcKwNDAnMjYuMCJOIDDCsDA5JzU0LjEiVw!5e0!3m2!1sen!2sgh!4v1620000000000!5m2!1sen!2sgh"
                    width="100%"
                    height="100%"
                    style={{ border: 0, filter: 'grayscale(1) contrast(1.2) opacity(0.9)' }}
                    allowFullScreen={true}
                    loading="lazy"
                    className="transition-all duration-700 group-hover:grayscale-0 group-hover:opacity-100"
                  ></iframe>
                  
                  <div className="absolute inset-0 pointer-events-none group-hover:bg-transparent transition-all duration-500 bg-macord-dark/5"></div>
                  
                  <a 
                    href="https://goo.gl/maps/XYZ" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="absolute bottom-4 right-4 bg-white text-macord-dark px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest shadow-xl flex items-center gap-2 hover:bg-macord-cyan hover:text-white transition-all active:scale-95"
                  >
                    <MapPin size={12} />
                    {t.contact.info.maps}
                  </a>
                </div>

                <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex gap-3">
                    {[Instagram, Facebook, Twitter].map((Icon, i) => (
                      <button key={i} className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-macord-dark hover:bg-macord-dark hover:text-white transition-all shadow-sm">
                        <Icon size={18} />
                      </button>
                    ))}
                  </div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                    {t.contact.info.social}
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  )
}