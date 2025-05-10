"use client"

import Image from "next/image"
import Link from "next/link"
import { Phone, ArrowRight } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export default function Home() {
  const { t } = useLanguage()

  return (
    <>
      {/* Hero Section - Modern Style */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image src="/antalya-sunset.png" alt="Antalya Sunset" fill priority className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent z-10"></div>
        </div>

        {/* Hero Content */}
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 relative z-20">
          <div className="text-white animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">{t("homeHeroTitle")}</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-xl">{t("homeHeroDescription")}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="btn btn-primary btn-lg rounded-md transform hover:scale-105 inline-flex items-center"
              >
                {t("homeContactButton")} <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/services/health-services"
                className="btn btn-white btn-lg rounded-md transform hover:scale-105"
              >
                {t("homeServicesButton")}
              </Link>
            </div>
          </div>

          {/* Info Card */}
          <div className="bg-[rgb(var(--primary))] text-white p-8 rounded-xl shadow-xl animate-slide-up">
            <h2 className="text-2xl font-bold mb-4">{t("homeInfoCardTitle")}</h2>
            <p className="mb-6">{t("homeInfoCardDescription")}</p>
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-white/20 p-3 rounded-full">
                <Phone className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="text-sm text-white/80">{t("homeCallUs")}</p>
                <a href="tel:+905321234567" className="text-xl font-bold hover:underline">
                  +90 532 123 45 67
                </a>
              </div>
            </div>
            <Link
              href="https://wa.me/905321234567"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary btn-md rounded-md w-full block text-center"
            >
              {t("homeWhatsAppButton")}
            </Link>
          </div>
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

      {/* About Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[rgb(var(--primary))]">{t("homeAboutTitle")}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t("homeAboutDescription")}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative h-80 rounded-xl overflow-hidden shadow-xl transform transition-all hover:scale-105">
              <Image src="/antalya-turquoise-beach.png" alt="Antalya Turquoise Beach" fill className="object-cover" />
            </div>
            <div className="relative h-80 rounded-xl overflow-hidden shadow-xl transform transition-all hover:scale-105">
              <Image src="/antalya-aerial.png" alt="Antalya Aerial View" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[rgb(var(--primary))]">{t("homeServicesTitle")}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t("homeServicesSubtitle")}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* VIP Transfer Card */}
            <Link href="/services/transfer-services" className="group">
              <div className="bg-white rounded-xl overflow-hidden shadow-lg transition-all hover:shadow-xl">
                <div className="relative h-48">
                  <Image
                    src="/vip-transfer.png"
                    alt="VIP Transfer"
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-[rgb(var(--primary))]">{t("homeTransferTitle")}</h3>
                  <p className="text-gray-600 mb-4">{t("homeTransferDescription")}</p>
                  <span className="text-[rgb(var(--secondary))] font-semibold flex items-center">
                    {t("homeMoreInfo")} <ArrowRight className="ml-2 h-4 w-4" />
                  </span>
                </div>
              </div>
            </Link>

            {/* Accommodation Card */}
            <Link href="/services/accommodation" className="group">
              <div className="bg-white rounded-xl overflow-hidden shadow-lg transition-all hover:shadow-xl">
                <div className="relative h-48">
                  <Image
                    src="/luxury-hotel.png"
                    alt="Konaklama"
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-[rgb(var(--primary))]">{t("homeAccommodationTitle")}</h3>
                  <p className="text-gray-600 mb-4">{t("homeAccommodationDescription")}</p>
                  <span className="text-[rgb(var(--secondary))] font-semibold flex items-center">
                    {t("homeMoreInfo")} <ArrowRight className="ml-2 h-4 w-4" />
                  </span>
                </div>
              </div>
            </Link>

            {/* Health Services Card */}
            <Link href="/services/health-services" className="group">
              <div className="bg-[rgb(var(--primary))] rounded-xl overflow-hidden shadow-lg transition-all hover:shadow-xl">
                <div className="relative h-48">
                  <Image
                    src="/aesthetic-clinic.png"
                    alt="Sağlık Hizmetleri"
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">{t("homeHealthTitle")}</h3>
                  <p className="mb-4">{t("homeHealthDescription")}</p>
                  <span className="text-white font-semibold flex items-center">
                    {t("homeMoreInfo")} <ArrowRight className="ml-2 h-4 w-4" />
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-gray-100 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <Image src="/antalya-panorama.png" alt="Antalya Panorama" fill className="object-cover" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="bg-white p-8 rounded-xl shadow-lg animate-fade-in">
              <div className="bg-[rgb(var(--secondary))]/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-[rgb(var(--secondary))]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[rgb(var(--primary))]">{t("homeMissionTitle")}</h3>
              <p className="text-gray-700 mb-4">{t("homeMissionDescription1")}</p>
              <p className="text-gray-700">{t("homeMissionDescription2")}</p>
            </div>

            {/* Vision */}
            <div className="bg-white p-8 rounded-xl shadow-lg animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="bg-[rgb(var(--secondary))]/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-[rgb(var(--secondary))]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[rgb(var(--primary))]">{t("homeVisionTitle")}</h3>
              <p className="text-gray-700 mb-4">{t("homeVisionDescription1")}</p>
              <p className="text-gray-700">{t("homeVisionDescription2")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[rgb(var(--primary))]">{t("homeContactCTATitle")}</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">{t("homeContactCTADescription")}</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="btn btn-primary btn-lg rounded-md transform hover:scale-105">
              {t("homeContactFormButton")}
            </Link>
            <a
              href="tel:+905321234567"
              className="btn btn-outline btn-lg rounded-md transform hover:scale-105 flex items-center justify-center"
            >
              <Phone className="mr-2 h-5 w-5" /> +90 532 123 45 67
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
