"use client"
import { useLanguage } from '@/context/LanguageContext'

export default function CampusGallery() {
  const { t } = useLanguage()

  const images = [
    { 
      src: '/m2.jpg', 
      span: 'md:col-span-2 md:row-span-2', 
      label: t.gallery.caption1 
    },
    { 
      src: '/m3.jpg', // Ensure you have these images in your public folder
      span: 'md:col-span-1 md:row-span-1', 
      label: t.gallery.caption2 
    },
    { 
      src: '/m4.jpg', 
      span: 'md:col-span-1 md:row-span-1', 
      label: t.gallery.caption3 
    },
  ]

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        
        {/* Header */}
        <div className="mb-16">
          <span className="text-macord-primary font-black tracking-[0.3em] uppercase text-[10px] block mb-4">
            Environment
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-macord-dark italic">
            {t.gallery.title}
          </h2>
        </div>

        {/* Bento Grid Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-2 gap-6 h-[700px]">
          {images.map((img, idx) => (
            <div 
              key={idx} 
              className={`relative overflow-hidden rounded-[2rem] group cursor-pointer ${img.span}`}
            >
              {/* Image Overlay */}
              <div className="absolute inset-0 bg-macord-dark/20 group-hover:bg-macord-dark/0 transition-all duration-700 z-10" />
              
              <img 
                src={img.src} 
                alt={img.label}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />

              {/* Caption Tag */}
              <div className="absolute bottom-8 left-8 z-20 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <span className="bg-white/90 backdrop-blur-md text-macord-dark px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest shadow-xl">
                  {img.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}