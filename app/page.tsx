
"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function GaslightPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Neon glow title animation
      gsap.from(titleRef.current, {
        opacity: 0,
        y: 100,
        duration: 1.5,
        ease: "power4.out",
      });

      gsap.from(".hero-subtitle", {
        opacity: 0,
        y: 50,
        duration: 1,
        delay: 0.4,
        ease: "power3.out",
      });

      gsap.from(".hero-cta", {
        opacity: 0,
        scale: 0.8,
        duration: 0.9,
        delay: 0.7,
        ease: "elastic.out(1, 0.5)",
      });

      // Neon pulse effect
      gsap.to(".neon-pulse", {
        opacity: 0.6,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });

      // Parallax
      gsap.to(".hero-bg", {
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
        y: 150,
        opacity: 0.4,
      });

      // Strain cards with neon flash
      gsap.from(".strain-card", {
        scrollTrigger: {
          trigger: ".strain-details",
          start: "top 80%",
        },
        opacity: 0,
        y: 80,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out",
      });

      // Effects items with neon trail
      gsap.from(".effect-item", {
        scrollTrigger: {
          trigger: ".effects-section",
          start: "top 75%",
        },
        opacity: 0,
        x: -70,
        stagger: 0.15,
        duration: 0.8,
      });

      // Terpene bars with neon glow
      gsap.from(".terpene-bar", {
        scrollTrigger: {
          trigger: ".terpene-section",
          start: "top 70%",
        },
        width: 0,
        stagger: 0.12,
        duration: 1.2,
        ease: "power2.out",
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="bg-neon-dark min-h-screen text-white overflow-x-hidden relative">
      {/* Animated grid background */}
      <div className="fixed inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        <div
          className="hero-bg absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://pub-b70cb36a6853407fa468c5d6dec16633.r2.dev/175774/gemini/generate_image/response/f70db9840ce629035aea44fa5d7e906c')`,
            filter: "brightness(0.35)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-dark/60 to-neon-dark" />
        <div className="neon-pulse absolute inset-0 bg-gradient-radial from-neon-lime/20 via-transparent to-transparent" />

        <div className="relative z-10 text-center px-6 max-w-6xl">
          <h1
            ref={titleRef}
            className="font-display text-7xl md:text-9xl font-black mb-6 relative"
          >
            <span className="neon-text-lime animate-pulse-slow">GASLIGHT</span>
          </h1>
          <p className="hero-subtitle text-2xl md:text-3xl mb-4 text-neon-yellow font-bold tracking-wider">
            BY LIT FARM
          </p>
          <p className="hero-subtitle text-lg md:text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
            Illuminate your experience with premium genetics
          </p>
          <button className="hero-cta neon-button px-12 py-5 rounded-lg text-xl font-bold transition-all duration-300 hover:scale-110 relative overflow-hidden group">
            <span className="relative z-10">Shop at CULTIMED</span>
            <span className="absolute inset-0 bg-gradient-to-r from-neon-lime via-neon-green to-neon-yellow opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-8 h-8 text-neon-lime" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Strain Details */}
      <section className="strain-details py-24 px-6 max-w-7xl mx-auto relative">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="strain-card neon-card group hover:scale-105 transition-transform duration-300">
            <div className="text-neon-lime text-6xl mb-6 group-hover:animate-spin-slow">⚡</div>
            <h3 className="text-4xl font-black mb-3 neon-text-lime">25% THC</h3>
            <p className="text-gray-400 text-lg">Alta Potencia</p>
          </div>

          <div className="strain-card neon-card group hover:scale-105 transition-transform duration-300">
            <div className="text-neon-green text-6xl mb-6 group-hover:animate-bounce">🌿</div>
            <h3 className="text-4xl font-black mb-3 neon-text-green">&lt;1% CBD</h3>
            <p className="text-gray-400 text-lg">Sativa Dominante</p>
          </div>

          <div className="strain-card neon-card group hover:scale-105 transition-transform duration-300">
            <div className="text-neon-yellow text-6xl mb-6 group-hover:animate-pulse">💡</div>
            <h3 className="text-4xl font-black mb-3 neon-text-yellow">LIT FARM</h3>
            <p className="text-gray-400 text-lg">Genética Premium</p>
          </div>
        </div>
      </section>

      {/* Effects Section */}
      <section className="effects-section py-24 px-6 bg-gradient-to-b from-neon-dark via-black to-neon-dark relative">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-6xl font-display font-black mb-16 text-center neon-text-lime">
            Efectos Energéticos
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {["Energizante", "Creativo", "Eufórico", "Concentrado", "Motivado", "Sociable"].map((effect, idx) => (
              <div
                key={idx}
                className="effect-item neon-card group cursor-pointer hover:scale-105 transition-all duration-300"
              >
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-neon-lime to-neon-green flex items-center justify-center text-3xl font-black shadow-neon-lime group-hover:shadow-neon-lime-lg">
                    ✓
                  </div>
                  <span className="text-2xl font-bold">{effect}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Terpene Profile */}
      <section className="terpene-section py-24 px-6 max-w-7xl mx-auto relative">
        <h2 className="text-6xl font-display font-black mb-16 text-center neon-text-green">
          Perfil de Terpenos
        </h2>
        <div className="space-y-8">
          {[
            { name: "Terpinolene", percentage: 80, color: "bg-gradient-to-r from-neon-lime to-neon-green" },
            { name: "Limonene", percentage: 75, color: "bg-gradient-to-r from-neon-yellow to-yellow-400" },
            { name: "Caryophyllene", percentage: 65, color: "bg-gradient-to-r from-neon-green to-green-500" },
            { name: "Pinene", percentage: 55, color: "bg-gradient-to-r from-lime-400 to-neon-lime" },
          ].map((terpene, idx) => (
            <div key={idx} className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-neon-lime">{terpene.name}</span>
                <span className="text-xl text-neon-yellow font-black">{terpene.percentage}%</span>
              </div>
              <div className="h-6 bg-black/50 rounded-full overflow-hidden border-2 border-neon-lime/30 relative">
                <div
                  className={`terpene-bar h-full ${terpene.color} rounded-full shadow-neon-lime relative overflow-hidden`}
                  style={{ width: `${terpene.percentage}%` }}
                >
                  <div className="absolute inset-0 bg-white/20 animate-shimmer" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Flavors */}
      <section className="py-24 px-6 bg-gradient-to-b from-neon-dark to-black relative">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-6xl font-display font-black mb-16 neon-text-yellow">Sabores</h2>
          <div className="flex flex-wrap justify-center gap-5">
            {["Cítrico", "Herbal", "Pino", "Gas", "Limón", "Terroso"].map((flavor, idx) => (
              <span
                key={idx}
                className="neon-tag hover:scale-110 transition-all duration-300 cursor-default"
              >
                {flavor}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-28 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-neon-lime/20 via-neon-dark to-neon-dark" />
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="neon-card-glow p-16 rounded-2xl">
            <h2 className="text-6xl font-display font-black mb-8 neon-text-lime animate-pulse-slow">
              Enciende Tu Día
            </h2>
            <p className="text-2xl mb-10 text-neon-yellow font-bold">
              Disponible ahora en CULTIMED Dispensary
            </p>
            <button className="neon-button-large group relative overflow-hidden">
              <span className="relative z-10">Visitar CULTIMED</span>
              <div className="absolute inset-0 bg-gradient-to-r from-neon-yellow via-neon-lime to-neon-green opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 border-t border-neon-lime/20 bg-black">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-500 text-sm mb-3">
            © 2025 CULTIMED Dispensary | LIT FARM | Para uso medicinal y recreacional autorizado.
          </p>
          <p className="text-gray-600 text-xs">
            Consumo responsable. Prohibida su venta a menores de edad.
          </p>
        </div>
      </footer>
    </div>
  );
}
