'use client';

import React, { useState, useEffect } from 'react';

const SplashScreen = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [showLogo, setShowLogo] = useState(false);
  const [showText, setShowText] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [showParticles, setShowParticles] = useState(false);

  useEffect(() => {
    // Verificar si ya vimos el splash (solo mostrarlo una vez por sesión)
    const hasSeenSplash = sessionStorage.getItem('hasSeenSplash');

    if (hasSeenSplash) {
      setIsVisible(false);
      return;
    }

    // Secuencia de animaciones más dramática
    const logoTimer = setTimeout(() => setShowLogo(true), 200);
    const particlesTimer = setTimeout(() => setShowParticles(true), 800);
    const textTimer = setTimeout(() => setShowText(true), 1200);
    const buttonTimer = setTimeout(() => setShowButton(true), 2000);

    return () => {
      clearTimeout(logoTimer);
      clearTimeout(particlesTimer);
      clearTimeout(textTimer);
      clearTimeout(buttonTimer);
    };
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    sessionStorage.setItem('hasSeenSplash', 'true');
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden">
      {/* Fondo con gradiente Kaia animado */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#4F46E5] via-[#7C3AED] to-[#4F46E5] animate-gradient-shift"></div>

      {/* Overlay con efecto de resplandor */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>

      {/* Grid pattern futurista */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
                         linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }}></div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center px-4 md:px-8 max-w-4xl mx-auto text-center">

        {/* Logo Kaia - Aparece con explosión dramática */}
        <div
          className={`transition-all duration-1500 transform ${
            showLogo
              ? 'opacity-100 scale-100 translate-y-0 rotate-0'
              : 'opacity-0 scale-0 -translate-y-20 rotate-12'
          }`}
        >
          <div className="relative">
            {/* Glow effect detrás del logo */}
            <div className={`absolute -inset-8 bg-white/30 rounded-full blur-3xl transition-opacity duration-1000 ${showLogo ? 'opacity-100' : 'opacity-0'}`}></div>

            {/* Container del logo con efecto de cristal */}
            <div className="relative bg-white/30 backdrop-blur-xl rounded-2xl md:rounded-[3rem] px-8 py-6 md:px-16 md:py-10 lg:px-20 lg:py-12 mb-8 md:mb-12 border-2 border-white/50 shadow-[0_0_50px_rgba(255,255,255,0.3)]">
              {/* Shine effect */}
              <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transition-all duration-1000 ${showLogo ? 'translate-x-full' : '-translate-x-full'}`}></div>

              <h1 className="relative text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] font-black text-white tracking-wider drop-shadow-2xl" style={{
                textShadow: '0 0 40px rgba(255,255,255,0.5), 0 0 80px rgba(255,255,255,0.3)'
              }}>
                KAIA
              </h1>
            </div>

            {/* Partículas que explotan desde el logo */}
            {showParticles && (
              <>
                {[...Array(12)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-2 h-2 md:w-3 md:h-3 bg-white rounded-full animate-particle-explosion"
                    style={{
                      top: '50%',
                      left: '50%',
                      animationDelay: `${i * 0.05}s`,
                      '--angle': `${i * 30}deg`,
                      '--distance': '150px'
                    } as React.CSSProperties}
                  ></div>
                ))}
              </>
            )}
          </div>
        </div>

        {/* Texto de bienvenida - Aparece con efecto revelación */}
        <div
          className={`transition-all duration-1200 transform ${
            showText
              ? 'opacity-100 translate-y-0 blur-0'
              : 'opacity-0 translate-y-10 blur-sm'
          }`}
        >
          <div className="mb-6 md:mb-8">
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-white/90 font-light mb-2 md:mb-4 tracking-wide leading-relaxed px-4 animate-pulse-slow">
              Bienvenido al futuro en
            </p>
            <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white font-black tracking-tight px-4" style={{
              textShadow: '0 0 30px rgba(255,255,255,0.4)'
            }}>
              Asistentes Inteligentes
            </p>
          </div>

          {/* Línea decorativa animada */}
          <div className={`mx-auto w-24 md:w-40 h-1 bg-gradient-to-r from-transparent via-white to-transparent transition-all duration-1000 ${showText ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`}></div>
        </div>

        {/* Botón para cerrar - Aparece con efecto magnético */}
        <div
          className={`mt-12 md:mt-20 transition-all duration-1000 transform ${
            showButton
              ? 'opacity-100 translate-y-0 scale-100'
              : 'opacity-0 translate-y-10 scale-90'
          }`}
        >
          <button
            onClick={handleClose}
            className="group relative inline-flex items-center gap-2 sm:gap-3 md:gap-4 px-6 py-3 sm:px-8 sm:py-4 md:px-12 md:py-5 lg:px-14 lg:py-6 rounded-xl sm:rounded-2xl bg-white text-[#4F46E5] font-bold text-base sm:text-lg md:text-xl hover:scale-110 transition-all duration-500 shadow-[0_0_60px_rgba(255,255,255,0.6)] hover:shadow-[0_0_100px_rgba(255,255,255,0.8)] active:scale-95 overflow-hidden"
          >
            {/* Animated background */}
            <div className="absolute inset-0 bg-gradient-to-r from-white via-gray-100 to-white animate-shimmer"></div>

            {/* Glow rings */}
            <div className="absolute inset-0 rounded-2xl ring-4 ring-white/50 group-hover:ring-8 group-hover:ring-white/30 transition-all duration-500"></div>
            <div className="absolute inset-0 rounded-2xl animate-ping-slow opacity-0 group-hover:opacity-20 bg-white"></div>

            <span className="relative z-10 tracking-wide">EXPLORAR KAIA</span>

            <svg
              className="relative z-10 w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 transform group-hover:translate-x-2 transition-all duration-500 group-hover:scale-125"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={3}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>

            {/* Sparkles */}
            {showButton && (
              <>
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-white rounded-full animate-sparkle-1"></div>
                <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-white rounded-full animate-sparkle-2"></div>
              </>
            )}
          </button>

          {/* Hint con animación */}
          <p className="mt-4 sm:mt-6 md:mt-8 text-xs sm:text-sm md:text-base text-white/80 font-light animate-bounce-slow">
            ↓ Tu nueva experiencia te espera ↓
          </p>
        </div>
      </div>

      {/* Efectos decorativos mejorados */}
      <div className="absolute top-10 left-10 md:top-20 md:left-20 w-40 h-40 md:w-64 md:h-64 bg-white/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-10 right-10 md:bottom-20 md:right-20 w-48 h-48 md:w-80 md:h-80 bg-white/15 rounded-full blur-3xl animate-float-delayed"></div>
      <div className="absolute top-1/3 right-1/4 w-32 h-32 md:w-48 md:h-48 bg-white/10 rounded-full blur-2xl animate-pulse-slow"></div>
      <div className="absolute bottom-1/3 left-1/4 w-24 h-24 md:w-40 md:h-40 bg-white/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '1s' }}></div>

      {/* Rayos de luz que irradian del centro */}
      {showLogo && (
        <>
          <div className="absolute top-1/2 left-1/2 w-1 h-full bg-gradient-to-b from-white/30 via-white/10 to-transparent -translate-x-1/2 -translate-y-1/2 rotate-45 animate-fade-in"></div>
          <div className="absolute top-1/2 left-1/2 w-1 h-full bg-gradient-to-b from-white/30 via-white/10 to-transparent -translate-x-1/2 -translate-y-1/2 -rotate-45 animate-fade-in" style={{ animationDelay: '0.2s' }}></div>
          <div className="absolute top-1/2 left-1/2 w-full h-1 bg-gradient-to-r from-white/30 via-white/10 to-transparent -translate-x-1/2 -translate-y-1/2 animate-fade-in" style={{ animationDelay: '0.1s' }}></div>
          <div className="absolute top-1/2 left-1/2 w-full h-1 bg-gradient-to-l from-white/30 via-white/10 to-transparent -translate-x-1/2 -translate-y-1/2 animate-fade-in" style={{ animationDelay: '0.3s' }}></div>
        </>
      )}

      {/* Estilos de animación en el componente */}
      <style jsx>{`
        @keyframes gradient-shift {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) scale(1);
          }
          50% {
            transform: translateY(-30px) scale(1.1);
          }
        }

        @keyframes float-delayed {
          0%, 100% {
            transform: translateY(0px) scale(1);
          }
          50% {
            transform: translateY(-40px) scale(1.15);
          }
        }

        @keyframes particle-explosion {
          0% {
            opacity: 1;
            transform: translate(-50%, -50%) rotate(var(--angle)) translateX(0);
          }
          100% {
            opacity: 0;
            transform: translate(-50%, -50%) rotate(var(--angle)) translateX(var(--distance));
          }
        }

        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.9;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.02);
          }
        }

        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes shimmer {
          0% {
            background-position: -200% center;
          }
          100% {
            background-position: 200% center;
          }
        }

        @keyframes ping-slow {
          75%, 100% {
            transform: scale(1.5);
            opacity: 0;
          }
        }

        @keyframes sparkle-1 {
          0%, 100% {
            opacity: 0;
            transform: scale(0);
          }
          50% {
            opacity: 1;
            transform: scale(1.5);
          }
        }

        @keyframes sparkle-2 {
          0%, 100% {
            opacity: 0;
            transform: scale(0);
          }
          50% {
            opacity: 1;
            transform: scale(1.5);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-gradient-shift {
          background-size: 200% 200%;
          animation: gradient-shift 8s ease infinite;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 7s ease-in-out infinite;
        }

        .animate-particle-explosion {
          animation: particle-explosion 1.5s ease-out forwards;
        }

        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }

        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }

        .animate-shimmer {
          background-size: 200% auto;
          animation: shimmer 3s linear infinite;
        }

        .animate-ping-slow {
          animation: ping-slow 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }

        .animate-sparkle-1 {
          animation: sparkle-1 2s ease-in-out infinite;
        }

        .animate-sparkle-2 {
          animation: sparkle-2 2s ease-in-out infinite 0.5s;
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default SplashScreen;
