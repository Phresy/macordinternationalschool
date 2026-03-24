"use client"
import { useLanguage } from '@/context/LanguageContext'

export default function LangSwitcher() {
  const { lang, setLang } = useLanguage()

  return (
    <div className="flex items-center gap-2 bg-white/5 backdrop-blur-md border border-white/10 p-1 rounded-full">
      <button 
        onClick={() => setLang('en')}
        className={`px-4 py-1.5 rounded-full text-[10px] font-black tracking-widest transition-all ${
          lang === 'en' ? 'bg-macord-primary text-white shadow-lg' : 'text-slate-400 hover:text-white'
        }`}
      >
        EN
      </button>
      <button 
        onClick={() => setLang('fr')}
        className={`px-4 py-1.5 rounded-full text-[10px] font-black tracking-widest transition-all ${
          lang === 'fr' ? 'bg-macord-primary text-white shadow-lg' : 'text-slate-400 hover:text-white'
        }`}
      >
        FR
      </button>
    </div>
  )
}