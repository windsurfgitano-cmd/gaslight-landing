
"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

gsap.registerPlugin(ScrollTrigger);

export default function GaslightPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 0.8]);

  // Detectar mobile
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Smooth scroll con Lenis (simulado - requiere instalación)
  useEffect(() => {
    // Aquí iría la inicialización de Lenis
    const initSmoothScroll = () => {
      document.documentElement.style.scrollBehavior = "smooth";
    };
    initSmoothScroll();
  }, []);

  // Animaciones GSAP mejoradas
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animations con stagger
      const tl = gsap.timeline();

      tl.from(titleRef.current, {
        opacity: 0,
        y: isMobile ? 50 : 100,
        scale: 0.9,
        duration: 1.2,
        ease: "power4.out",
      })
      .from(".hero-subtitle", {
        opacity: 0,
        y: isMobile ? 30 : 50,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
      }, "-=0.6")
      .from(".hero-cta", {
        opacity: 0,
        scale: 0.8,
        duration: 0.8,
        ease: "elastic.out(1, 0.5)",
      }, "-=0.4");

      // Neon pulse mejorado
      gsap.to(".neon-pulse", {
        opacity: 0.4,
        scale: 1.1,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Parallax multi-capa
      gsap.to(".hero-bg-layer-1", {
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
        y: 200,
        opacity: 0.3,
      });

      gsap.to(".hero-bg-layer-2", {
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
        y: 100,
        opacity: 0.5,
      });

      // Cards con reveal mejorado
      gsap.from(".strain-card", {
        scrollTrigger: {
          trigger: ".strain-details",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: isMobile ? 50 : 80,
        rotateX: -15,
        stagger: 0.15,
        duration: 1,
        ease: "power3.out",
      });

      // Effects items con magnetic hover
      const effectItems = document.querySelectorAll(".effect-item");
      effectItems.forEach((item) => {
        item.addEventListener("mouseenter", () => {
          gsap.to(item, {
            scale: 1.05,
            duration: 0.3,
            ease: "power2.out",
          });
        });
        item.addEventListener("mouseleave", () => {
          gsap.to(item, {
            scale: 1,
            duration: 0.3,
            ease: "power2.out",
          });
        });
      });

      // Terpene bars con wave effect
      gsap.from(".terpene-bar", {
        scrollTrigger: {
          trigger: ".terpene-section",
          start: "top 75%",
        },
        width: 0,
        stagger: 0.1,
        duration: 1.5,
        ease: "power2.out",
      });

      // Floating elements
      gsap.to(".float-element", {
        y: -20,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.3,
      });

    });

    return () => ctx.revert();
  }, [isMobile]);

  // Intersection Observer para lazy loading
  const [effectsRef, effectsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [terpeneRef, terpeneInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="bg-neon-dark min-h-screen text-white overflow-x-hidden relative">
      {/* Animated grid background */}
      <div className="fixed inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

      {/* Floating particles */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-neon-lime rounded-full float-element"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Hero Section - Mobile First */}
      <motion.section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{ opacity, scale }}
      >
        {/* Multi-layer parallax background */}
        <div className="absolute inset-0">
          <div
            className="hero-bg-layer-1 absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(\'https://pub-b70cb36a6853407fa468c5d6dec16633.r2.dev/175774/gemini/generate_image/response/f70db9840ce629035aea44fa5d7e906c\')`,
              filter: "brightness(0.2) blur(2px)",
            }}
          />
          <div
            className="hero-bg-layer-2 absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(\'https://pub-b70cb36a6853407fa468c5d6dec16633.r2.dev/175774/gemini/generate_image/response/f70db9840ce629035aea44fa5d7e906c\')`,
              filter: "brightness(0.35)",
            }}
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-dark/60 to-neon-dark" />
        <div className="neon-pulse absolute inset-0 bg-gradient-radial from-neon-lime/20 via-transparent to-transparent" />

        <div className="relative z-10 text-center px-4 sm:px-6 max-w-6xl">
          <motion.h1
            ref={titleRef}
            className="font-display text-5xl sm:text-7xl md:text-9xl font-black mb-4 sm:mb-6 relative"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <span className="neon-text-lime animate-pulse-slow inline-block">
              GASLIGHT
            </span>
          </motion.h1>

          <motion.p 
            className="hero-subtitle text-xl sm:text-2xl md:text-3xl mb-3 sm:mb-4 text-neon-yellow font-bold tracking-wider"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            BY LIT FARM
          </motion.p>

          <motion.p 
            className="hero-subtitle text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-gray-300 max-w-2xl mx-auto px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Ilumina tu experiencia con genética premium
          </motion.p>

          <motion.button 
            className="hero-cta neon-button px-8 sm:px-12 py-4 sm:py-5 rounded-lg text-base sm:text-xl font-bold transition-all duration-300 relative overflow-hidden group touch-manipulation"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <span className="relative z-10">Shop at CULTIMED</span>
            <motion.span 
              className="absolute inset-0 bg-gradient-to-r from-neon-lime via-neon-green to-neon-yellow opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              whileHover={{ scale: 1.1 }}
            />
          </motion.button>
        </div>

        <motion.div 
          className="absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <svg className="w-6 h-6 sm:w-8 sm:h-8 text-neon-lime" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </motion.section>

      {/* Strain Details - Mobile optimized grid */}
      <section className="strain-details py-16 sm:py-24 px-4 sm:px-6 max-w-7xl mx-auto relative">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {[
            { icon: "⚡", title: "25% THC", desc: "Alta Potencia", color: "lime" },
            { icon: "🌿", title: "<1% CBD", desc: "Sativa Dominante", color: "green" },
            { icon: "💡", title: "LIT FARM", desc: "Genética Premium", color: "yellow" },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              className="strain-card neon-card group cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div 
                className={`text-neon-${item.color} text-4xl sm:text-6xl mb-4 sm:mb-6`}
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
              >
                {item.icon}
              </motion.div>
              <h3 className={`text-3xl sm:text-4xl font-black mb-3 neon-text-${item.color}`}>
                {item.title}
              </h3>
              <p className="text-gray-400 text-base sm:text-lg">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Effects Section con intersection observer */}
      <section 
        ref={effectsRef}
        className="effects-section py-16 sm:py-24 px-4 sm:px-6 bg-gradient-to-b from-neon-dark via-black to-neon-dark relative"
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            className="text-4xl sm:text-5xl md:text-6xl font-display font-black mb-12 sm:mb-16 text-center neon-text-lime"
            initial={{ opacity: 0, y: 30 }}
            animate={effectsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            Efectos Energéticos
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {["Energizante", "Creativo", "Eufórico", "Concentrado", "Motivado", "Sociable"].map((effect, idx) => (
              <AnimatePresence key={idx}>
                <motion.div
                  className="effect-item neon-card group cursor-pointer"
                  initial={{ opacity: 0, x: -70 }}
                  animate={effectsInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: idx * 0.1, duration: 0.6 }}
                  whileHover={{ x: 10, transition: { duration: 0.2 } }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="flex items-center gap-4 sm:gap-6">
                    <motion.div 
                      className="w-12 h-12 sm:w-16 sm:h-16 rounded-lg bg-gradient-to-br from-neon-lime to-neon-green flex items-center justify-center text-2xl sm:text-3xl font-black shadow-neon-lime group-hover:shadow-neon-lime-lg transition-shadow"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      ✓
                    </motion.div>
                    <span className="text-lg sm:text-2xl font-bold">{effect}</span>
                  </div>
                </motion.div>
              </AnimatePresence>
            ))}
          </div>
        </div>
      </section>

      {/* Terpene Profile - Responsive bars */}
      <section 
        ref={terpeneRef}
        className="terpene-section py-16 sm:py-24 px-4 sm:px-6 max-w-7xl mx-auto relative"
      >
        <motion.h2 
          className="text-4xl sm:text-5xl md:text-6xl font-display font-black mb-12 sm:mb-16 text-center neon-text-green"
          initial={{ opacity: 0 }}
          animate={terpeneInView ? { opacity: 1 } : {}}
        >
          Perfil de Terpenos
        </motion.h2>

        <div className="space-y-6 sm:space-y-8">
          {[
            { name: "Terpinolene", percentage: 80, color: "from-neon-lime to-neon-green" },
            { name: "Limonene", percentage: 75, color: "from-neon-yellow to-yellow-400" },
            { name: "Caryophyllene", percentage: 65, color: "from-neon-green to-green-500" },
            { name: "Pinene", percentage: 55, color: "from-lime-400 to-neon-lime" },
          ].map((terpene, idx) => (
            <motion.div 
              key={idx} 
              className="space-y-3"
              initial={{ opacity: 0, y: 20 }}
              animate={terpeneInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: idx * 0.1 }}
            >
              <div className="flex justify-between items-center">
                <span className="text-lg sm:text-2xl font-bold text-neon-lime">{terpene.name}</span>
                <motion.span 
                  className="text-base sm:text-xl text-neon-yellow font-black"
                  initial={{ scale: 0 }}
                  animate={terpeneInView ? { scale: 1 } : {}}
                  transition={{ delay: idx * 0.1 + 0.3, type: "spring" }}
                >
                  {terpene.percentage}%
                </motion.span>
              </div>
              <div className="h-4 sm:h-6 bg-black/50 rounded-full overflow-hidden border-2 border-neon-lime/30 relative">
                <motion.div
                  className={`terpene-bar h-full bg-gradient-to-r ${terpene.color} rounded-full shadow-neon-lime relative overflow-hidden`}
                  initial={{ width: 0 }}
                  animate={terpeneInView ? { width: `${terpene.percentage}%` } : {}}
                  transition={{ delay: idx * 0.1 + 0.5, duration: 1.5, ease: "easeOut" }}
                >
                  <div className="absolute inset-0 bg-white/20 animate-shimmer" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Flavors - Touch-friendly tags */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-gradient-to-b from-neon-dark to-black relative">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2 
            className="text-4xl sm:text-5xl md:text-6xl font-display font-black mb-12 sm:mb-16 neon-text-yellow"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            Sabores
          </motion.h2>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-5">
            {["Cítrico", "Herbal", "Pino", "Gas", "Limón", "Terroso"].map((flavor, idx) => (
              <motion.span
                key={idx}
                className="neon-tag cursor-pointer touch-manipulation"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                whileHover={{ scale: 1.1, rotate: 2 }}
                whileTap={{ scale: 0.95 }}
              >
                {flavor}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Magnetic button */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-neon-lime/20 via-neon-dark to-neon-dark" />
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div 
            className="neon-card-glow p-12 sm:p-16 rounded-2xl"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-4xl sm:text-5xl md:text-6xl font-display font-black mb-6 sm:mb-8 neon-text-lime"
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Enciende Tu Día
            </motion.h2>
            <p className="text-xl sm:text-2xl mb-8 sm:mb-10 text-neon-yellow font-bold">
              Disponible ahora en CULTIMED Dispensary
            </p>
            <motion.button 
              className="neon-button-large group relative overflow-hidden touch-manipulation"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Visitar CULTIMED</span>
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-neon-yellow via-neon-lime to-neon-green opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                whileHover={{ scale: 1.1 }}
              />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Footer - Mobile optimized */}
      <footer className="py-12 sm:py-16 px-4 sm:px-6 border-t border-neon-lime/20 bg-black">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-500 text-xs sm:text-sm mb-3">
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
