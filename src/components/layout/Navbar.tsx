'use client';

import { useState, useEffect } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { Link, usePathname, useRouter } from '@/i18n/routing';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';
import Image from 'next/image';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function Navbar() {
  const t = useTranslations('Navbar');
  const locale = useLocale();
  const isEnglish = locale === 'en';

  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: t('home'), href: '/' },
    { name: t('about'), href: '/about' },
    { name: t('gems'), href: '/gems' },
    { name: t('garnet'), href: '/garnets' },
    { name: t('history'), href: '/history' },
    { name: t('events'), href: '/events' },
    { name: t('gallery'), href: '/gallery' },
    { name: t('contact'), href: '/contact' },
  ];

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'fr', name: 'Français' },
    { code: 'de', name: 'Deutsch' },
    { code: 'es', name: 'Español' },
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
        <Link href="/" className="flex items-center gap-2 group shrink-0">
          <motion.div
            whileHover={{ rotate: 15 }}
            className="w-20 h-10 flex items-center justify-center"
          >
            <Image
              src="/images/logo3.png"
              alt="Agrani Gems Logo"
              width={60}
              height={40}
              quality={100}
              className="bg-transparent"
            />
          </motion.div>

          <div className="flex flex-col">
            <motion.span
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className={cn(
                'text-2xl font-serif font-bold tracking-widest leading-none transition-all duration-500',
                scrolled
                  ? 'bg-gradient-to-r from-blue-700 via-blue-400 to-emerald-400 bg-clip-text text-transparent drop-shadow-sm'
                  : 'bg-gradient-to-r from-blue-300 via-blue-300 to-emerald-300 bg-clip-text text-transparent'
              )}
            >
              AGRANI
            </motion.span>

            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className={cn(
                'text-[10px] tracking-[0.3em] uppercase transition-all duration-500 bg-gradient-to-r from-teal-400/80 to-blue-400/80 bg-clip-text text-transparent',
                scrolled ? 'opacity-100' : 'opacity-90'
              )}
            >
              Gems Sri Lanka
            </motion.span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center justify-center flex-1 gap-4 xl:gap-6 px-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href as any}
              className={cn(
                'uppercase transition-all duration-300 relative group whitespace-nowrap',
                isEnglish
                  ? 'text-sm tracking-widest'
                  : 'text-[11px] tracking-[0.12em]',
                pathname === link.href
                  ? 'text-teal-400'
                  : 'text-white/80 hover:text-teal-300'
              )}
            >
              {link.name}

              <span
                className={cn(
                  'absolute -bottom-1 left-0 w-0 h-[1.5px] bg-gradient-to-r from-teal-400 to-blue-500 transition-all duration-300 group-hover:w-full',
                  pathname === link.href && 'w-full'
                )}
              />
            </Link>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-5 shrink-0">
          {/* Language Dropdown */}
          <div className="relative group">
            <button className="flex items-center gap-2 text-white/80 hover:text-teal-300 transition-colors text-sm uppercase tracking-wider whitespace-nowrap">
              <Globe className="w-4 h-4" />
              {locale.toUpperCase()}
              <ChevronDown className="w-3 h-3" />
            </button>

            <div className="absolute right-0 top-full mt-4 bg-luxury-black/95 border border-white/10 rounded-lg p-2 min-w-[140px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 backdrop-blur-lg">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() =>
                    router.replace(pathname, {
                      locale: lang.code as any,
                    })
                  }
                  className={cn(
                    'w-full text-left px-4 py-2 text-sm rounded-md transition-colors',
                    locale === lang.code
                      ? 'text-teal-300 bg-white/5'
                      : 'text-white/80 hover:bg-white/5 hover:text-teal-300'
                  )}
                >
                  {lang.name}
                </button>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <Link
            href="/contact"
            className="px-5 py-2 bg-gradient-to-r from-teal-600/20 to-blue-600/20 border border-teal-500/50 text-teal-300 rounded-full text-xs uppercase tracking-widest hover:from-teal-500 hover:to-blue-600 hover:text-white hover:border-transparent transition-all duration-500 shadow-[0_0_15px_rgba(20,184,166,0.2)] whitespace-nowrap"
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
            className="lg:hidden absolute top-full left-0 right-0 bg-luxury-black/95 border-b border-white/10 p-6 flex flex-col gap-6 backdrop-blur-lg"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href as any}
                onClick={() => setIsOpen(false)}
                className={cn(
                  'uppercase whitespace-nowrap transition-colors',
                  isEnglish
                    ? 'text-lg tracking-widest'
                    : 'text-base tracking-[0.12em]',
                  pathname === link.href
                    ? 'text-teal-400'
                    : 'text-white/80 hover:text-teal-300'
                )}
              >
                {link.name}
              </Link>
            ))}

            {/* Mobile Languages */}
            <div className="flex gap-4 pt-6 border-t border-white/10">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    router.replace(pathname, {
                      locale: lang.code as any,
                    });
                    setIsOpen(false);
                  }}
                  className={cn(
                    'text-sm transition-colors',
                    locale === lang.code
                      ? 'text-teal-300'
                      : 'text-white/60 hover:text-teal-300'
                  )}
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