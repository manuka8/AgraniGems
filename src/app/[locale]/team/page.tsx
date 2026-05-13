import { setRequestLocale } from 'next-intl/server';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Image from 'next/image';
import { Globe, MessageCircle, Mail } from 'lucide-react';

const team = [
  {
    name: 'Don Manuka',
    role: 'Founder & CEO',
    bio: 'With over 30 years of experience in the gem industry, Don leads AgraniGems with a passion for Ceylon sapphires.',
    image: '/images/team.png'
  },
  {
    name: 'Dr. Sarah Perera',
    role: 'Chief Gemologist',
    bio: 'A certified GIA gemologist with expertise in identifying rare inclusions and stone origin.',
    image: '/images/team.png'
  },
  {
    name: 'Anura Kumara',
    role: 'Mining Operations Lead',
    bio: 'Oversees our sustainable mining pits in Ratnapura, ensuring ethical practices and safety.',
    image: '/images/team.png'
  },
  {
    name: 'Elena Rossi',
    role: 'Global Sales Director',
    bio: 'Based in Geneva, Elena connects our finest collections with luxury jewelry houses across Europe.',
    image: '/images/team.png'
  }
];

export default async function TeamPage({
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
          <span className="text-gold text-[10px] uppercase tracking-[0.4em] mb-4 inline-block">The Experts</span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-8">Meet Our Team</h1>
          <p className="text-white/60 max-w-2xl mx-auto text-lg font-light leading-relaxed">
            Our team comprises industry veterans, certified gemologists, and dedicated professionals committed to excellence.
          </p>
        </div>
      </section>

      <section className="pb-32">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, i) => (
              <div key={i} className="group relative bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:border-gold/30 transition-all duration-500">
                <div className="relative aspect-[3/4] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-transparent to-transparent opacity-80" />
                </div>
                
                <div className="p-6 relative">
                  <h3 className="text-xl font-serif font-bold text-white mb-1 group-hover:text-gold transition-colors">{member.name}</h3>
                  <p className="text-gold text-[10px] uppercase tracking-widest mb-4">{member.role}</p>
                  <p className="text-white/50 text-sm leading-relaxed mb-6 line-clamp-3">
                    {member.bio}
                  </p>
                  
                  <div className="flex gap-4">
                    <a href="#" className="text-white/30 hover:text-gold transition-colors"><Globe className="w-4 h-4" /></a>
                    <a href="#" className="text-white/30 hover:text-gold transition-colors"><MessageCircle className="w-4 h-4" /></a>
                    <a href="#" className="text-white/30 hover:text-gold transition-colors"><Mail className="w-4 h-4" /></a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="py-24 bg-white/5 border-y border-white/5">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-serif font-bold text-white mb-8">Want to join our global network?</h2>
          <button className="px-10 py-4 bg-transparent border border-gold text-gold rounded-full font-bold uppercase tracking-widest hover:bg-gold hover:text-luxury-black transition-all">
            Contact Partnerships
          </button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
