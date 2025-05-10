"use client"

import { useLanguage } from "./language-provider"
import Image from "next/image"

export default function Hero() {
  const { t } = useLanguage()

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image src="/antalya-beach.png" alt="Antalya Beach" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-black/30 z-10"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-20 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">{t("heroTitle")}</h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto animate-slide-up">{t("heroSubtitle")}</p>
        <a
          href="#contact"
          className="inline-block bg-[rgb(var(--secondary))] hover:bg-[rgb(var(--secondary))]/90 text-white font-bold py-3 px-8 rounded-full transition-all transform hover:scale-105 animate-slide-up"
        >
          {t("heroButton")}
        </a>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  )
}
