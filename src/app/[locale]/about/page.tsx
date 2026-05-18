import { setRequestLocale } from 'next-intl/server';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Image from 'next/image';
import { ShieldCheck, Award, Zap, Heart } from 'lucide-react';

interface AboutPageProps {
  params: {
    locale: string;
  };
}

// Translations object directly in the file
const translations = {
  en: {
    hero: {
      tagline: "The Story of AgraniGems",
      title: "Pioneering Ceylon Brilliance",
      description: "Founded on the principles of trust and excellence, AgraniGems has grown from a boutique family business into a leading global exporter of premium Sri Lankan gemstones."
    },
    garnet: {
      tagline: "Garnet Specialists",
      title: "Masters of Premium Garnet Processing",
      description1: "AgraniGems is internationally recognized for its expertise in processing and exporting high-quality natural Garnet gemstones sourced from the mineral-rich lands of Sri Lanka.",
      description2: "Our skilled craftsmen combine traditional gemstone techniques with modern precision technology to enhance the brilliance, clarity, and deep natural color of every Garnet stone.",
      description3: "From raw gemstone selection to final polishing, every stage is handled with exceptional attention to detail to ensure world-class quality for global markets.",
      stats: {
        processed: "10K+",
        processedLabel: "Garnets Processed",
        countries: "25+",
        countriesLabel: "Export Countries",
        natural: "100%",
        naturalLabel: "Natural Stones"
      },
      imageAlt: "Premium Garnet Gemstones",
      badge: "Signature Expertise",
      imageTitle: "Natural Sri Lankan Garnets"
    },
    legacy: {
      title: "Bringing the Soul of the Earth to You",
      description1: "Sri Lanka, historically known as Serendib, has been the source of the world's most famous sapphires. At AgraniGems, we carry forward this legacy with a modern approach to global export.",
      description2: "Our journey begins in the rich soils of Ratnapura and Elahera, where our geologists and mining experts identify high-potential deposits. We believe that a gemstone is more than just a mineral; it is a piece of history that has been millions of years in the making.",
      imageAlt: "Our Team of Experts",
      stats: {
        founded: "1998",
        foundedLabel: "Year Founded",
        natural: "100%",
        naturalLabel: "Natural Gems"
      }
    },
    values: {
      title: "Our Core Values",
      authenticity: {
        title: "Authenticity",
        description: "Every gemstone we export is 100% natural and accompanied by internationally recognized laboratory certifications."
      },
      excellence: {
        title: "Excellence",
        description: "We adhere to the highest standards of gemstone selection, ensuring only the most exceptional pieces reach our clients."
      },
      innovation: {
        title: "Innovation",
        description: "Combining traditional Sri Lankan expertise with modern geological technology for superior gemstone evaluation."
      },
      ethics: {
        title: "Ethics",
        description: "Our mining and sourcing practices are strictly ethical, supporting local communities and environmental conservation."
      }
    },
    certified: {
      title: "Certified By Leading Labs"
    }
  },
  fr: {
    hero: {
      tagline: "L'Histoire d'AgraniGems",
      title: "Pionnier de l'Éclat Ceylanais",
      description: "Fondée sur les principes de confiance et d'excellence, AgraniGems est passée d'une entreprise familiale de boutique à un leader mondial de l'exportation de pierres précieuses sri-lankaises de qualité supérieure."
    },
    garnet: {
      tagline: "Spécialistes du Grenat",
      title: "Maîtres du Traitement des Grenats Premium",
      description1: "AgraniGems est internationalement reconnue pour son expertise dans le traitement et l'exportation de grenats naturels de haute qualité provenant des terres riches en minéraux du Sri Lanka.",
      description2: "Nos artisans qualifiés combinent les techniques traditionnelles de taille des pierres précieuses avec la technologie de précision moderne pour améliorer l'éclat, la clarté et la couleur naturelle profonde de chaque pierre de grenat.",
      description3: "De la sélection des pierres brutes au polissage final, chaque étape est traitée avec une attention exceptionnelle aux détails pour garantir une qualité mondiale pour les marchés internationaux.",
      stats: {
        processed: "10K+",
        processedLabel: "Grenats Traités",
        countries: "25+",
        countriesLabel: "Pays d'Exportation",
        natural: "100%",
        naturalLabel: "Pierres Naturelles"
      },
      imageAlt: "Grenats Premium",
      badge: "Expertise Signature",
      imageTitle: "Grenats Naturels du Sri Lanka"
    },
    legacy: {
      title: "Apporter l'Âme de la Terre à Vous",
      description1: "Le Sri Lanka, historiquement connu sous le nom de Serendib, a été la source des saphirs les plus célèbres du monde. Chez AgraniGems, nous perpétuons cet héritage avec une approche moderne de l'exportation mondiale.",
      description2: "Notre voyage commence dans les sols riches de Ratnapura et Elahera, où nos géologues et experts miniers identifient les gisements à fort potentiel. Nous croyons qu'une pierre précieuse est plus qu'un simple minéral ; c'est un morceau d'histoire qui a mis des millions d'années à se former.",
      imageAlt: "Notre Équipe d'Experts",
      stats: {
        founded: "1998",
        foundedLabel: "Année de Création",
        natural: "100%",
        naturalLabel: "Gemmes Naturelles"
      }
    },
    values: {
      title: "Nos Valeurs Fondamentales",
      authenticity: {
        title: "Authenticité",
        description: "Chaque pierre précieuse que nous exportons est 100% naturelle et accompagnée de certifications de laboratoire internationalement reconnues."
      },
      excellence: {
        title: "Excellence",
        description: "Nous adhérons aux normes les plus élevées de sélection des pierres précieuses, garantissant que seules les pièces les plus exceptionnelles parviennent à nos clients."
      },
      innovation: {
        title: "Innovation",
        description: "Combiner l'expertise traditionnelle sri-lankaise avec la technologie géologique moderne pour une évaluation supérieure des pierres précieuses."
      },
      ethics: {
        title: "Éthique",
        description: "Nos pratiques d'extraction et d'approvisionnement sont strictement éthiques, soutenant les communautés locales et la conservation de l'environnement."
      }
    },
    certified: {
      title: "Certifié par les Principaux Laboratoires"
    }
  },
  de: {
    hero: {
      tagline: "Die Geschichte von AgraniGems",
      title: "Wegweisender Ceylon-Glanz",
      description: "Gegründet auf den Prinzipien von Vertrauen und Exzellenz, ist AgraniGems von einem kleinen Familienunternehmen zu einem führenden globalen Exporteur hochwertiger srilankischer Edelsteine gewachsen."
    },
    garnet: {
      tagline: "Granat-Spezialisten",
      title: "Meister der Premium-Granatverarbeitung",
      description1: "AgraniGems ist international anerkannt für seine Expertise in der Verarbeitung und dem Export hochwertiger natürlicher Granat-Edelsteine aus den mineralreichen Gebieten Sri Lankas.",
      description2: "Unsere erfahrenen Handwerker kombinieren traditionelle Edelsteintechniken mit moderner Präzisionstechnologie, um den Glanz, die Klarheit und die tiefe natürliche Farbe jedes Granatsteins zu verbessern.",
      description3: "Von der Auswahl der Rohsteine bis zur endgültigen Politur wird jede Phase mit außergewöhnlicher Liebe zum Detail behandelt, um Weltklassequalität für globale Märkte zu gewährleisten.",
      stats: {
        processed: "10K+",
        processedLabel: "Granate Verarbeitet",
        countries: "25+",
        countriesLabel: "Exportländer",
        natural: "100%",
        naturalLabel: "Natursteine"
      },
      imageAlt: "Premium Granat-Edelsteine",
      badge: "Signature-Expertise",
      imageTitle: "Natürliche Sri Lanka Granate"
    },
    legacy: {
      title: "Die Seele der Erde zu Ihnen Bringen",
      description1: "Sri Lanka, historisch bekannt als Serendib, war die Quelle der berühmtesten Saphire der Welt. Bei AgraniGems führen wir dieses Erbe mit einem modernen Ansatz für den globalen Export fort.",
      description2: "Unsere Reise beginnt in den reichen Böden von Ratnapura und Elahera, wo unsere Geologen und Bergbauexperten vielversprechende Lagerstätten identifizieren. Wir glauben, dass ein Edelstein mehr als nur ein Mineral ist; es ist ein Stück Geschichte, das Millionen von Jahren in der Entstehung ist.",
      imageAlt: "Unser Expertenteam",
      stats: {
        founded: "1998",
        foundedLabel: "Gründungsjahr",
        natural: "100%",
        naturalLabel: "Natur-Edelsteine"
      }
    },
    values: {
      title: "Unsere Kernwerte",
      authenticity: {
        title: "Authentizität",
        description: "Jeder Edelstein, den wir exportieren, ist 100% natürlich und wird von international anerkannten Laborzertifikaten begleitet."
      },
      excellence: {
        title: "Exzellenz",
        description: "Wir halten uns an die höchsten Standards der Edelsteinauswahl und stellen sicher, dass nur die außergewöhnlichsten Stücke unsere Kunden erreichen."
      },
      innovation: {
        title: "Innovation",
        description: "Kombination traditioneller srilankischer Expertise mit moderner geologischer Technologie für eine überlegene Edelsteinbewertung."
      },
      ethics: {
        title: "Ethik",
        description: "Unsere Abbaupraktiken sind streng ethisch, unterstützen lokale Gemeinschaften und den Umweltschutz."
      }
    },
    certified: {
      title: "Zertifiziert von Führenden Laboren"
    }
  }
};

export default async function AboutPage({ params }: AboutPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  // Ensure locale is valid, fallback to English
  const validLocale = locale === 'fr' || locale === 'de' ? locale : 'en';
  const t = translations[validLocale];

  const values = [
    {
      icon: <ShieldCheck className="w-8 h-8 text-amber-500" />,
      title: t.values.authenticity.title,
      description: t.values.authenticity.description
    },
    {
      icon: <Award className="w-8 h-8 text-amber-500" />,
      title: t.values.excellence.title,
      description: t.values.excellence.description
    },
    {
      icon: <Zap className="w-8 h-8 text-amber-500" />,
      title: t.values.innovation.title,
      description: t.values.innovation.description
    },
    {
      icon: <Heart className="w-8 h-8 text-amber-500" />,
      title: t.values.ethics.title,
      description: t.values.ethics.description
    }
  ];

  const certifiedLabs = ['GIA', 'GIC', 'NGJA', 'EGL', 'GRS'];

  return (
    <main className="bg-[#050505] min-h-screen">
      <Navbar />

      {/* Hero Header */}
      <section className="relative pt-40 pb-10 overflow-hidden min-h-[80vh] flex items-center">

        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/about-hero-bg.png"
            alt="AgraniGems About Hero Background"
            fill
            priority
            className="object-cover"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-luxury-black/70" />

          {/* Luxury Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/40" />
        </div>

        {/* Content */}
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <span className="text-gold text-[10px] uppercase tracking-[0.4em] mb-4 inline-block">
              The Story of AgraniGems
            </span>

            <h1 className="text-5xl md:text-8xl font-serif font-bold text-white mb-12">
              Pioneering Ceylon Brilliance
            </h1>

            <p className="text-white/70 text-xl md:text-2xl font-light leading-relaxed mb-16 max-w-2xl">
              Founded on the principles of trust and excellence, AgraniGems has
              grown from a boutique family business into a leading global exporter
              of premium Sri Lankan gemstones.
            </p>
          </div>
        </div>
      </section>

      {/* Garnet Specialization Section */}
      <section className="py-10 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-red-950/10 to-transparent" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

            {/* Text Content */}
            <div>
              <span className="text-amber-500 text-[10px] uppercase tracking-[0.4em] mb-4 inline-block">
                {t.garnet.tagline}
              </span>

              <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-8 leading-tight">
                {t.garnet.title}
              </h2>

              <div className="space-y-6 text-white/60 text-lg leading-relaxed">
                <p>{t.garnet.description1}</p>
                <p>{t.garnet.description2}</p>
                <p>{t.garnet.description3}</p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 mt-12">
                <div>
                  <h4 className="text-amber-500 text-3xl font-serif font-bold mb-1">
                    {t.garnet.stats.processed}
                  </h4>
                  <p className="text-white/40 uppercase tracking-widest text-[10px]">
                    {t.garnet.stats.processedLabel}
                  </p>
                </div>

                <div>
                  <h4 className="text-amber-500 text-3xl font-serif font-bold mb-1">
                    {t.garnet.stats.countries}
                  </h4>
                  <p className="text-white/40 uppercase tracking-widest text-[10px]">
                    {t.garnet.stats.countriesLabel}
                  </p>
                </div>

                <div>
                  <h4 className="text-amber-500 text-3xl font-serif font-bold mb-1">
                    {t.garnet.stats.natural}
                  </h4>
                  <p className="text-white/40 uppercase tracking-widest text-[10px]">
                    {t.garnet.stats.naturalLabel}
                  </p>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden group">
              <Image
                src="/images/garnet-specialist.png"
                alt={t.garnet.imageAlt}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/80 to-transparent" />

              <div className="absolute bottom-8 left-8">
                <span className="text-amber-500 uppercase tracking-[0.3em] text-[10px]">
                  {t.garnet.badge}
                </span>

                <h3 className="text-white text-3xl font-serif font-bold mt-2">
                  {t.garnet.imageTitle}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image & Text Section */}
      <section className="py-24 bg-white/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden group">
              <Image
                src="/images/team.png"
                alt={t.legacy.imageAlt}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/80 to-transparent" />
            </div>
            <div>
              <h2 className="text-4xl font-serif font-bold text-white mb-8 leading-tight">
                {t.legacy.title}
              </h2>
              <div className="space-y-6 text-white/60 text-lg leading-relaxed">
                <p>{t.legacy.description1}</p>
                <p>{t.legacy.description2}</p>
              </div>

              <div className="grid grid-cols-2 gap-8 mt-12">
                <div>
                  <h4 className="text-amber-500 text-3xl font-serif font-bold mb-1">
                    {t.legacy.stats.founded}
                  </h4>
                  <p className="text-white/40 uppercase tracking-widest text-[10px]">
                    {t.legacy.stats.foundedLabel}
                  </p>
                </div>
                <div>
                  <h4 className="text-amber-500 text-3xl font-serif font-bold mb-1">
                    {t.legacy.stats.natural}
                  </h4>
                  <p className="text-white/40 uppercase tracking-widest text-[10px]">
                    {t.legacy.stats.naturalLabel}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
              {t.values.title}
            </h2>
            <div className="w-20 h-1 bg-amber-500 mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, i) => (
              <div key={i} className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-amber-500/30 transition-all duration-500 group text-center">
                <div className="mb-6 flex justify-center group-hover:scale-110 transition-transform duration-500">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-widest">{value.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-24 border-t border-white/5">
        <div className="container mx-auto px-6 text-center">
          <span className="text-white/30 uppercase tracking-[0.3em] text-[10px] mb-12 block">
            {t.certified.title}
          </span>
          <div className="flex flex-wrap justify-center items-center gap-16 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
            {certifiedLabs.map((lab, i) => (
              <span key={i} className="text-4xl font-bold font-serif text-white">{lab}</span>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}