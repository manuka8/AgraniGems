'use client';

import { gems } from '@/data/gems';
import GemCard from '@/components/gems/GemCard';
import { motion } from 'framer-motion';
import { Link } from '@/i18n/routing';
import { useLocale } from 'next-intl';

// Translations for the component
const translations = {
  en: {
    badge: "Masterpiece Collection",
    title: "Exquisite Ceylon Gems",
    description: "Experience the brilliance of genuine Sri Lankan gemstones, ethically sourced and masterfully cut by our artisans.",
    button: "View Full Collection"
  },
  fr: {
    badge: "Collection Chef-d'œuvre",
    title: "Saphirs Exquis de Ceylan",
    description: "Découvrez l'éclat des pierres précieuses authentiques du Sri Lanka, issues de sources éthiques et taillées avec maîtrise par nos artisans.",
    button: "Voir la Collection Complète"
  },
  de: {
    badge: "Meisterwerk Kollektion",
    title: "Exquisite Ceylon-Edelsteine",
    description: "Erleben Sie die Brillanz authentischer Sri Lanka-Edelsteine, ethisch beschafft und meisterhaft von unseren Handwerkern geschliffen.",
    button: "Gesamte Kollektion Ansehen"
  },
  es: {
    badge: "Colección Obra Maestra",
    title: "Exquisitas Gemas de Ceilán",
    description: "Experimente el brillo de las auténticas piedras preciosas de Sri Lanka, de origen ético y cortadas con maestría por nuestros artesanos.",
    button: "Ver Colección Completa"
  }
};

export default function FeaturedGems() {
  const featured = gems.slice(0, 4);
  const locale = useLocale() as 'en' | 'fr' | 'de' | 'es';
  const t = translations[locale];

  return (
    <section className="py-20 bg-luxury-black relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-luxury-black to-luxury-black pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-gold text-[10px] uppercase tracking-[0.4em] mb-4 inline-block">
            {t.badge}
          </span>
          <h2 className="text-xl md:text-6xl font-serif font-bold text-white mb-6">
            {t.title}
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg font-light leading-relaxed">
            {t.description}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featured.map((gem, index) => (
            <motion.div
              key={gem.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
            >
              <GemCard gem={gem} />
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link
            href="/gems"
            className="inline-flex items-center gap-2 px-8 py-3 border border-gold/50 text-gold rounded-full hover:bg-gold hover:text-luxury-black transition-all duration-300 font-bold uppercase tracking-widest text-xs"
          >
            {t.button}
          </Link>
        </div>
      </div>
    </section>
  );
}