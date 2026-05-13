import { setRequestLocale } from 'next-intl/server';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Image from 'next/image';

const galleryImages = [
  { src: '/images/blue_sapphire.png', alt: 'Blue Sapphire', span: 'col-span-2 row-span-2' },
  { src: '/images/ruby.png', alt: 'Ruby', span: 'col-span-1 row-span-1' },
  { src: '/images/hero_gems_background.png', alt: 'Collection', span: 'col-span-1 row-span-2' },
  { src: '/images/mining.png', alt: 'Mining', span: 'col-span-2 row-span-1' },
  { src: '/images/blue_sapphire.png', alt: 'Sapphire Detail', span: 'col-span-1 row-span-1' },
  { src: '/images/ruby.png', alt: 'Ruby Detail', span: 'col-span-1 row-span-1' },
];

export default async function GalleryPage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main className="bg-luxury-black min-h-screen">
      <Navbar />
      
      <section className="pt-40 pb-20">
        <div className="container mx-auto px-6 text-center">
          <span className="text-gold text-[10px] uppercase tracking-[0.4em] mb-4 inline-block">Visual Brilliance</span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-8">Our Gallery</h1>
          <p className="text-white/60 max-w-2xl mx-auto text-lg font-light leading-relaxed">
            A window into the world of AgraniGems. From raw earth to refined brilliance.
          </p>
        </div>
      </section>

      <section className="pb-32">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-3 gap-6 h-[1000px]">
            {galleryImages.map((img, i) => (
              <div key={i} className={`relative rounded-3xl overflow-hidden group border border-white/5 ${img.span}`}>
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-luxury-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <span className="text-white border border-white/20 px-6 py-2 rounded-full text-xs uppercase tracking-widest backdrop-blur-md">
                    View Image
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
