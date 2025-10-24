'use client';

import React, { useState, useEffect } from 'react';
import Button from '../ui/Button';
import { DOWNLOAD_LINKS } from '@/lib/constants';

const Navbar = () => {
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
    { label: 'Inicio', href: 'hero' },
    { label: 'Características', href: 'features' },
    { label: 'Tecnología', href: 'tech-stack' },
    { label: 'Estadísticas', href: 'stats' },
    { label: 'Roadmap', href: 'changelog' },
    { label: 'FAQ', href: 'faq' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div
            onClick={() => scrollToSection('hero')}
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
              className={`ml-2 text-sm hidden sm:inline transition-colors ${
                isScrolled ? 'text-gray-600' : 'text-white/80'
              }`}
            >
              Su asistente ideal
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isScrolled ? 'text-gray-900' : 'text-white'
                }`}
              >
                {link.label}
              </button>
            ))}

            <Button
              size="sm"
              className="bg-tertiary hover:bg-tertiary-dark"
              onClick={() => window.open(DOWNLOAD_LINKS.apkDirect, '_blank')}
            >
              Descargar
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2"
          >
            <svg
              className={`w-6 h-6 transition-colors ${
                isScrolled ? 'text-foreground' : 'text-white'
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
          <div className="md:hidden bg-white shadow-lg rounded-lg mt-2 py-4">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="block w-full text-left px-4 py-3 text-sm font-medium text-gray-900 hover:bg-muted transition-colors"
              >
                {link.label}
              </button>
            ))}
            <div className="px-4 pt-4">
              <Button
                size="sm"
                className="w-full bg-tertiary hover:bg-tertiary-dark"
                onClick={() => {
                  window.open(DOWNLOAD_LINKS.apkDirect, '_blank');
                  setIsMobileMenuOpen(false);
                }}
              >
                Descargar
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
