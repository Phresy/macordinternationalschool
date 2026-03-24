"use client"
import React, { createContext, useContext, useState, useMemo } from 'react'

// 1. Define the translations
const translations = {
  en: {
    nav: { 
      home: 'Home', 
      curriculum: 'Curriculum', 
      saturdays: 'Saturdays', 
      admissions: 'Admissions', 
      contact: 'Contact Us',
      programs: 'Programs' // Add this line
    },
    hero: { 
      title: 'Nurturing Bilingual Excellence', 
      subtitle: 'A premier French National and British Cambridge curriculum school providing a safe and serene environment in Madina.',
      cta: 'Apply for Admission',
      badge: 'The Future of Bilingual Excellence'
    },
    admission: { 
      status: 'Admissions 2026 • Now Ongoing',
      ctaShort: 'Apply Now',
      title: 'Join the Family'
    },
    curriculum: {
      title: 'The Dual Curriculum.',
      subtitle: 'Ages 2 - 15',
      description: 'Preparing global citizens through a unique blend of French and British academic standards.',
      stages: {
        early: {
          title: 'Early Years / Maternelle',
          age: 'Ages 2 - 5',
          desc: 'Sensory-based bilingual immersion. We focus on social-emotional growth and linguistic foundations.',
          points: ["Montessori-inspired Play", "Phonetics & Vocabulary", "Motor Skills Mastery"]
        },
        primary: {
          title: 'Primary / Élémentaire',
          age: 'Ages 6 - 11',
          desc: 'The core of our dual-pathway. Students follow Cambridge Science & Math alongside French Language Arts.',
          points: ["Cambridge Pathway", "Bilingual Literacy", "Mental Math Integration"]
        },
        jhs: {
          title: 'Junior High / Collège',
          age: 'Ages 12 - 15',
          desc: 'Preparing for international certifications (IGCSE & Brevet) with advanced technical electives.',
          points: ["Global Perspectives", "A.R.C (AI & Robotics)", "German Proficiency"]
        }
      }
    },
    saturdays: {
      title: 'The Saturday Accelerators.',
      subtitle: 'Extra-Curricular Mastery',
      description: 'Intensive programs designed to give your child a competitive edge. Open to all students.',
      viewDetails: 'View Full Details'
    },
    contact: {
      badge: 'Get in Touch',
      title: 'Let’s Connect.',
      formHeading: 'Send a Message',
      formSub: 'Have a specific question? Drop us a line.',
      labels: {
        name: 'Full Name',
        email: 'Email Address',
        subject: 'Subject',
        message: 'Your Message',
        send: 'Send Message'
      },
      info: {
        title: 'Direct Contact',
        call: 'Call Us',
        email: 'Email Us',
        location: 'Location',
        address: 'Firestone, Madina - Accra',
        social: 'Social Discovery',
        maps: 'Open in Maps'
      }
    },
    gallery: {
      title: 'Our Campus',
      subtitle: 'A serene and stimulating environment designed for excellence.',
      caption1: 'Modern Learning Spaces',
      caption2: 'Innovation & Tech Labs',
      caption3: 'Serene Madina Campus'
    },
    stats: {
      ratio: '15:1 Student-Teacher Ratio',
      bilingual: '100% Bilingual Immersion',
      curriculum: 'Dual Global Curriculum'
    },
    programs: {
      arc: { 
        title: 'A.R.C Classes', 
        subtitle: 'AI, Robotics & Coding',
        desc: 'AI, Robotics, and Coding for the next generation of innovators.',
        longDesc: 'Our A.R.C program introduces students to the fundamentals of logic and engineering.',
        features: ['Python & Scratch Coding', 'Robotic Kit Assembly', 'AI Ethics & Logic']
      },
      ucmas: { 
        title: 'UCMAS Abacus', 
        subtitle: 'Mental Arithmetic',
        desc: 'Universal Concept Mental Arithmetic System for brain development.',
        longDesc: 'UCMAS is a globally recognized program that uses the abacus to boost brain power.',
        features: ['Mental Math Agility', 'Enhanced Concentration', 'Photographic Memory Skills']
      },
      german: { 
        title: 'German Language', 
        subtitle: 'International Language',
        desc: 'Intensive proficiency courses for global academic and career opportunities.',
        longDesc: 'Our German program offers students a pathway to European education.',
        features: ['A1-B2 Proficiency Levels', 'Study Abroad Guidance', 'Conversational Fluency']
      }
    }
  },
  fr: {
    nav: { 
      home: 'Accueil', 
      curriculum: 'Programme', 
      saturdays: 'Samedis', 
      admissions: 'Inscriptions', 
      contact: 'Contact',
      programs: 'Programmes' // Add this line
    },
    hero: { 
      title: 'Cultiver l’Excellence Bilingue', 
      subtitle: 'Une école d’excellence à Madina combinant les programmes British Cambridge et French National.',
      cta: 'Postuler pour l’admission',
      badge: "L'avenir de l'excellence bilingue"
    },
    admission: { 
      status: 'Inscriptions 2026 • En cours',
      ctaShort: 'Postuler',
      title: 'Rejoindre la Famille'
    },
    curriculum: {
      title: 'Le Double Programme.',
      subtitle: '2 à 15 ans',
      description: 'Former des citoyens du monde grâce à un mélange unique de standards académiques français et britanniques.',
      stages: {
        early: {
          title: 'Maternelle',
          age: '2 - 5 ans',
          desc: 'Immersion bilingue basée sur les sens. Nous nous concentrons sur la croissance socio-émotionnelle.',
          points: ["Jeu inspiré de Montessori", "Phonétique et Vocabulaire", "Maîtrise de la motricité"]
        },
        primary: {
          title: 'Élémentaire',
          age: '6 - 11 ans',
          desc: 'Le cœur de notre double voie. Les élèves suivent Cambridge Science & Math avec le Français.',
          points: ["Parcours Cambridge", "Littératie bilingue", "Intégration du calcul mental"]
        },
        jhs: {
          title: 'Collège',
          age: '12 - 15 ans',
          desc: 'Préparation aux certifications internationales (IGCSE & Brevet) avec options techniques.',
          points: ["Perspectives mondiales", "A.R.C (IA et robotique)", "Maîtrise de l'allemand"]
        }
      }
    },
    saturdays: {
      title: 'Accélérateurs du Samedi.',
      subtitle: 'Maîtrise Extra-Scolaire',
      description: 'Programmes intensifs conçus pour donner à votre enfant un avantage compétitif. Ouvert à tous.',
      viewDetails: 'Voir les détails'
    },
    contact: {
      badge: 'Contactez-nous',
      title: 'Restons Connectés.',
      formHeading: 'Envoyer un message',
      formSub: 'Une question ? Écrivez-nous et nous vous répondrons.',
      labels: {
        name: 'Nom Complet',
        email: 'Adresse E-mail',
        subject: 'Sujet',
        message: 'Votre Message',
        send: 'Envoyer le Message'
      },
      info: {
        title: 'Contact Direct',
        call: 'Appelez-nous',
        email: 'Email',
        location: 'Localisation',
        address: 'Firestone, Madina - Accra',
        social: 'Découverte Sociale',
        maps: 'Ouvrir Google Maps'
      }
    },
    gallery: {
      title: 'Notre Campus',
      subtitle: 'Un environnement serein et stimulant conçu pour l’excellence.',
      caption1: 'Espaces d’apprentissage modernes',
      caption2: 'Laboratoires d’innovation',
      caption3: 'Campus Serein de Madina'
    },
    stats: {
      ratio: 'Ratio 15:1 Élève-Enseignant',
      bilingual: 'Immersion 100% Bilingue',
      curriculum: 'Double Programme Mondial'
    },
    programs: {
      arc: { 
        title: 'Classes A.R.C', 
        subtitle: 'IA, Robotique & Codage',
        desc: 'IA, Robotique et Codage pour la prochaine génération d’innovateurs.',
        longDesc: 'Notre programme A.R.C initie les étudiants aux fondamentaux de la logique.',
        features: ['Codage Python & Scratch', 'Assemblage de Kits Robotiques', 'Logique et Éthique de l’IA']
      },
      ucmas: { 
        title: 'UCMAS Abacus', 
        subtitle: 'Calcul Mental',
        desc: 'Système universel de calcul mental pour le développement cérébral.',
        longDesc: 'Le programme UCMAS utilise le boulier pour stimuler les capacités cérébrales.',
        features: ['Agilité en Calcul Mental', 'Concentration Améliorée', 'Mémoire Photographique']
      },
      german: { 
        title: 'Allemand', 
        subtitle: 'Langue Internationale',
        desc: 'Cours intensifs pour des opportunités académiques et professionnelles mondiales.',
        longDesc: 'Notre programme d’allemand offre aux étudiants une voie vers l’éducation européenne.',
        features: ['Niveaux A1 à B2', 'Orientation Études à l’Étranger', 'Fluidité Conversationnelle']
      }
    }
  }
}

// 2. Types
export type LanguageType = 'en' | 'fr';
type TranslationSchema = typeof translations.en;

interface LanguageContextType {
  language: LanguageType;
  setLanguage: (lang: LanguageType) => void;
  t: TranslationSchema;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

// 3. Provider Component
export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<LanguageType>('en')
  
  // useMemo prevents unnecessary re-renders of the whole app
  const t = useMemo(() => translations[language], [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

// 4. Hook
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}