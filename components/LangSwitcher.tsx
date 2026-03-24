"use client"
import { useLanguage } from '@/context/LanguageContext'

export default function LangSwitcher() {
  // FIXED: Updated destructured names to match your context (language, setLanguage)
  const { language, setLanguage } = useLanguage()

  return (
    <div className="flex items-center gap-1.5 bg-white/5 backdrop-blur-md border border-white/10 p-1.5 rounded-full shadow-2xl">
      <button 
        onClick={() => setLanguage('en')}
        className={`px-5 py-2 rounded-full text-[10px] font-black tracking-widest transition-all duration-300 uppercase active:scale-95 ${
          language === 'en' 
            ? 'bg-macord-primary text-white shadow-[0_0_20px_rgba(var(--macord-primary-rgb),0.3)]' 
            : 'text-slate-400 hover:text-white hover:bg-white/5'
        }`}
      >
        EN
      </button>
      
      <button 
        onClick={() => setLanguage('fr')}
        className={`px-5 py-2 rounded-full text-[10px] font-black tracking-widest transition-all duration-300 uppercase active:scale-95 ${
          language === 'fr' 
            ? 'bg-macord-primary text-white shadow-[0_0_20px_rgba(var(--macord-primary-rgb),0.3)]' 
            : 'text-slate-400 hover:text-white hover:bg-white/5'
        }`}
      >
        FR
      </button>
    </div>
  )
}