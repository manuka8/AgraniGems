import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { Globe, MessageCircle, Link as LinkIcon, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const t = useTranslations('Navbar');

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-luxury-black border-t border-white/5 pt-20 pb-10 overflow-hidden relative">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 blur-[150px] -mr-64 -mt-64 rounded-full" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-accent/10 blur-[100px] -ml-32 -mb-32 rounded-full" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Brand Column */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gold rounded-lg flex items-center justify-center">
                <span className="text-luxury-black font-bold text-xl italic">A</span>
              </div>
              <span className="text-2xl font-serif font-bold text-gold tracking-widest leading-none">AGRANI</span>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed">
              Exporters of the finest gemstones from Sri Lanka. We bring the brilliance of Ceylon to the world with integrity and passion.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-gold hover:text-luxury-black transition-all">
                <Globe className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-gold hover:text-luxury-black transition-all">
                <MessageCircle className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-gold hover:text-luxury-black transition-all">
                <LinkIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-serif text-lg mb-8">Navigation</h4>
            <ul className="flex flex-col gap-4">
              <li><Link href="/about" className="text-white/60 hover:text-gold transition-colors">{t('about')}</Link></li>
              <li><Link href="/gems" className="text-white/60 hover:text-gold transition-colors">{t('gems')}</Link></li>
              <li><Link href="/history" className="text-white/60 hover:text-gold transition-colors">{t('history')}</Link></li>
              <li><Link href="/gallery" className="text-white/60 hover:text-gold transition-colors">{t('gallery')}</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-serif text-lg mb-8">Contact Us</h4>
            <ul className="flex flex-col gap-6">
              <li className="flex gap-4">
                <MapPin className="w-5 h-5 text-gold shrink-0" />
                <span className="text-white/60 text-sm">53/6, Κ.Ε. Perera Road, Thalwatta Gonawala,<br />Sri Lanka</span>
              </li>
              <li className="flex gap-4">
                <Phone className="w-5 h-5 text-gold shrink-0" />
                <span className="text-white/60 text-sm">+94 112 907 125</span>
              </li>
              <li className="flex gap-4">
                <Phone className="w-5 h-5 text-gold shrink-0" />
                <div className="flex flex-col">
                  <span className="text-gold text-[11px] uppercase tracking-widest font-semibold">
                    Hotline
                  </span>
                  <a
                    href="tel:+94771155511"
                    className="text-white text-sm font-medium hover:text-gold transition-colors"
                  >
                    +94 771 155 511
                  </a>
                </div>
              </li>
              <li className="flex gap-4">
                <Mail className="w-5 h-5 text-gold shrink-0" />
                <span className="text-white/60 text-sm">info@agranigems.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-serif text-lg mb-8">Newsletter</h4>
            <p className="text-white/60 text-sm mb-6">Subscribe to receive updates on our latest collections.</p>
            <form className="relative">
              <input
                type="email"
                placeholder="Your email"
                className="w-full bg-white/5 border border-white/10 rounded-full py-3 px-6 text-sm focus:outline-none focus:border-gold transition-colors"
              />
              <button className="absolute right-1 top-1 bottom-1 bg-gold text-luxury-black px-6 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-white transition-colors">
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-xs uppercase tracking-widest">
            © {currentYear} AGRANIGEMS. All rights reserved.
          </p>
          <div className="flex gap-8">
            <Link href="/privacy" className="text-white/40 text-xs hover:text-gold transition-colors uppercase tracking-widest">Privacy Policy</Link>
            <Link href="/terms" className="text-white/40 text-xs hover:text-gold transition-colors uppercase tracking-widest">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
