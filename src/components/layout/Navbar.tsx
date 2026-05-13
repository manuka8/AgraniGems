'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { Link, usePathname, useRouter } from '@/i18n/routing';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function Navbar() {
  const t = useTranslations('Navbar');
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('home'), href: '/' },
    { name: t('about'), href: '/about' },
    { name: t('gems'), href: '/gems' },
    { name: t('history'), href: '/history' },
    { name: t('events'), href: '/events' },
    { name: t('team'), href: '/team' },
    { name: t('gallery'), href: '/gallery' },
    { name: t('contact'), href: '/contact' },
  ];

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'fr', name: 'Français' },
    { code: 'de', name: 'Deutsch' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        scrolled 
          ? 'bg-luxury-black/80 backdrop-blur-lg border-b border-white/10 py-3' 
          : 'bg-transparent py-6'
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <motion.div 
            whileHover={{ rotate: 15 }}
            className="w-10 h-10 bg-gold rounded-lg flex items-center justify-center shadow-gold"
          >
            <span className="text-luxury-black font-bold text-xl italic">A</span>
          </motion.div>
          <div className="flex flex-col">
            <span className={cn(
              "text-2xl font-serif font-bold tracking-widest leading-none",
              scrolled ? "text-gold" : "text-white"
            )}>
              AGRANI
            </span>
            <span className="text-[10px] tracking-[0.3em] uppercase text-white/70">Gems Sri Lanka</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href as any}
              className={cn(
                'text-sm uppercase tracking-widest transition-colors duration-300 hover:text-gold relative group',
                pathname === link.href ? 'text-gold' : 'text-white/80'
              )}
            >
              {link.name}
              <span className={cn(
                "absolute -bottom-1 left-0 w-0 h-[1px] bg-gold transition-all duration-300 group-hover:w-full",
                pathname === link.href && "w-full"
              )} />
            </Link>
          ))}
        </div>

        {/* Actions */}
        <div className="hidden lg:flex items-center gap-6">
          <div className="relative group">
            <button className="flex items-center gap-2 text-white/80 hover:text-gold transition-colors text-sm uppercase tracking-wider">
              <Globe className="w-4 h-4" />
              <ChevronDown className="w-3 h-3" />
            </button>
            <div className="absolute right-0 top-full mt-4 bg-luxury-black/95 border border-white/10 rounded-lg p-2 min-w-[120px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => router.replace(pathname, { locale: lang.code as any })}
                  className="w-full text-left px-4 py-2 text-sm text-white/80 hover:bg-white/5 hover:text-gold rounded-md"
                >
                  {lang.name}
                </button>
              ))}
            </div>
          </div>
          <Link 
            href="/contact" 
            className="px-6 py-2 border border-gold text-gold rounded-full text-xs uppercase tracking-widest hover:bg-gold hover:text-luxury-black transition-all duration-300"
          >
            Inquire
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden absolute top-full left-0 right-0 bg-luxury-black/95 border-b border-white/10 p-6 flex flex-col gap-6"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href as any}
                onClick={() => setIsOpen(false)}
                className={cn(
                  'text-lg uppercase tracking-widest',
                  pathname === link.href ? 'text-gold' : 'text-white/80'
                )}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex gap-4 pt-6 border-t border-white/10">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    router.replace(pathname, { locale: lang.code as any });
                    setIsOpen(false);
                  }}
                  className="text-sm text-white/60 hover:text-gold"
                >
                  {lang.code.toUpperCase()}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
