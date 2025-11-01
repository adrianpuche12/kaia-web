'use client';

import React, { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import Button from '../ui/Button';
import LanguageSwitcher from './LanguageSwitcher';

const Navbar = () => {
  const t = useTranslations('nav');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { label: t('home'), href: 'hero' },
    { label: t('features'), href: 'how-it-works' },
    { label: t('techStack'), href: 'tech-stack' },
    { label: t('stats'), href: 'stats' },
    { label: t('releases'), href: 'releases' },
    { label: t('changelog'), href: 'changelog' },
    { label: t('faq'), href: 'faq' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/60 backdrop-blur-xl backdrop-saturate-150 shadow-lg border-b border-white/20'
          : 'bg-white/5 backdrop-blur-md'
      }`}
      style={{
        boxShadow: isScrolled
          ? '0 4px 6px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(255, 255, 255, 0.1) inset'
          : 'none'
      }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="/"
            className="flex items-center cursor-pointer"
          >
            <span
              className={`text-2xl md:text-3xl font-bold transition-colors ${
                isScrolled ? 'text-primary' : 'text-white'
              }`}
            >
              Kaia
            </span>
            <span
              className={`ml-2 text-sm inline transition-colors ${
                isScrolled ? 'text-gray-600' : 'text-white/80'
              }`}
            >
              Su asistente ideal
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className={`text-sm font-medium transition-colors ${
                  isScrolled
                    ? 'text-gray-900 hover:text-primary'
                    : 'text-white hover:text-white/80'
                }`}
              >
                {link.label}
              </button>
            ))}

            <LanguageSwitcher variant={isScrolled ? 'dark' : 'light'} />

            <Button
              size="sm"
              className="bg-tertiary hover:bg-tertiary-dark"
              onClick={() => scrollToSection('releases')}
            >
              {t('download')}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2"
          >
            <svg
              className={`w-6 h-6 transition-colors ${
                isScrolled ? 'text-primary' : 'text-white'
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white/60 backdrop-blur-xl backdrop-saturate-150 shadow-lg rounded-lg mt-2 py-4 border border-white/20">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className={`block w-full text-left px-4 py-3 text-sm font-medium transition-colors ${
                  isScrolled
                    ? 'text-gray-900 hover:text-primary hover:bg-white/30'
                    : 'text-white hover:text-white/80 hover:bg-white/10'
                }`}
              >
                {link.label}
              </button>
            ))}
            <div className="px-4 pt-2 pb-2 border-t border-gray-200 mt-2">
              <div className="flex justify-center">
                <LanguageSwitcher variant="dark" />
              </div>
            </div>
            <div className="px-4 pt-2">
              <Button
                size="sm"
                className="w-full bg-tertiary hover:bg-tertiary-dark"
                onClick={() => {
                  scrollToSection('releases');
                  setIsMobileMenuOpen(false);
                }}
              >
                {t('download')}
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
