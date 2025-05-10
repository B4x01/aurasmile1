"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { useLanguage } from "./language-provider"
import { Menu, X, ChevronDown, Globe } from "lucide-react"

export default function Header() {
  const { language, setLanguage, t } = useLanguage()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false)
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)

    const handleClickOutside = (e: MouseEvent) => {
      if (isLangMenuOpen && !(e.target as Element).closest(".lang-selector")) {
        setIsLangMenuOpen(false)
      }
    }
    document.addEventListener("click", handleClickOutside)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      document.removeEventListener("click", handleClickOutside)
    }
  }, [isLangMenuOpen])

  const toggleServices = (e: React.MouseEvent) => {
    e.stopPropagation()
    setIsServicesOpen(!isServicesOpen)
  }

  const toggleLangMenu = (e: React.MouseEvent) => {
    e.stopPropagation()
    setIsLangMenuOpen(!isLangMenuOpen)
  }

  // Map language codes to their names
  const languageNames = {
    tr: "Türkçe",
    en: "English",
    de: "Deutsch",
  }

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-white py-4 shadow-sm"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image src="/aura-smile-logo.webp" alt="Aura Smile Studio" width={180} height={50} className="h-12 w-auto" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-gray-800 hover:text-[rgb(var(--secondary))] transition-colors font-medium">
            {t("home")}
          </Link>

          {/* Services Dropdown */}
          <div className="dropdown relative group">
            <button className="flex items-center text-gray-800 group-hover:text-[rgb(var(--secondary))] transition-colors font-medium">
              {t("services")} <ChevronDown className="ml-1 h-4 w-4" />
            </button>
            <div className="dropdown-content mt-2 absolute left-0 min-w-[200px] bg-white shadow-lg rounded-md overflow-hidden z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <Link href="/services/accommodation" className="dropdown-item">
                {t("accommodation")}
              </Link>
              <Link href="/services/tickets-transportation" className="dropdown-item">
                {t("ticketsTransportation")}
              </Link>
              <Link href="/services/health-services" className="dropdown-item">
                {t("healthServices")}
              </Link>
              <Link href="/services/transfer-services" className="dropdown-item">
                {t("transferServices")}
              </Link>
            </div>
          </div>

          <Link
            href="/antalya-guide"
            className="text-gray-800 hover:text-[rgb(var(--secondary))] transition-colors font-medium"
          >
            {t("antalyaGuide")}
          </Link>

          <Link
            href="/about"
            className="text-gray-800 hover:text-[rgb(var(--secondary))] transition-colors font-medium"
          >
            {t("about")}
          </Link>

          <Link
            href="/contact"
            className="text-gray-800 hover:text-[rgb(var(--secondary))] transition-colors font-medium"
          >
            {t("contact")}
          </Link>

          {/* Language Selector */}
          <div className="relative ml-4">
            <button
              onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
              className="flex items-center space-x-1 bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-full text-sm font-medium transition-colors"
              aria-expanded={isLanguageDropdownOpen}
              aria-haspopup="true"
            >
              <span>{language === "en" ? "🇬🇧 EN" : language === "de" ? "🇩🇪 DE" : "🇹🇷 TR"}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-4 w-4 transition-transform ${isLanguageDropdownOpen ? "rotate-180" : ""}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {isLanguageDropdownOpen && (
              <div
                className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg py-1 z-50 border border-gray-100 animate-in fade-in slide-in-from-top-5 duration-200"
                onMouseLeave={() => setIsLanguageDropdownOpen(false)}
              >
                <button
                  onClick={() => {
                    setLanguage("en")
                    setIsLanguageDropdownOpen(false)
                  }}
                  className={`flex items-center w-full px-4 py-2 text-left text-sm hover:bg-gray-100 ${language === "en" ? "bg-gray-50 text-pink-600 font-medium" : "text-gray-700"}`}
                >
                  <span className="mr-2">🇬🇧</span> English
                  {language === "en" && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-auto"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </button>
                <button
                  onClick={() => {
                    setLanguage("de")
                    setIsLanguageDropdownOpen(false)
                  }}
                  className={`flex items-center w-full px-4 py-2 text-left text-sm hover:bg-gray-100 ${language === "de" ? "bg-gray-50 text-pink-600 font-medium" : "text-gray-700"}`}
                >
                  <span className="mr-2">🇩🇪</span> Deutsch
                  {language === "de" && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-auto"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </button>
                <button
                  onClick={() => {
                    setLanguage("tr")
                    setIsLanguageDropdownOpen(false)
                  }}
                  className={`flex items-center w-full px-4 py-2 text-left text-sm hover:bg-gray-100 ${language === "tr" ? "bg-gray-50 text-pink-600 font-medium" : "text-gray-700"}`}
                >
                  <span className="mr-2">🇹🇷</span> Türkçe
                  {language === "tr" && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-auto"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </button>
              </div>
            )}
          </div>

          <Link
            href="https://wa.me/905321234567"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-md rounded-full"
          >
            WHATSAPP
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-2">
          {/* Mobile Language Selector */}
          <div className="lang-selector relative mr-2">
            <button
              onClick={toggleLangMenu}
              className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              aria-label="Select language"
            >
              <Globe className="w-5 h-5 text-[rgb(var(--primary))]" />
            </button>

            {isLangMenuOpen && (
              <div className="absolute right-0 mt-2 py-2 w-40 bg-white rounded-md shadow-xl z-50">
                <button
                  onClick={() => {
                    setLanguage("tr")
                    setIsLangMenuOpen(false)
                  }}
                  className={`w-full text-left px-4 py-2 text-sm ${
                    language === "tr"
                      ? "bg-[rgb(var(--primary))]/10 text-[rgb(var(--primary))] font-medium"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  Türkçe
                </button>
                <button
                  onClick={() => {
                    setLanguage("en")
                    setIsLangMenuOpen(false)
                  }}
                  className={`w-full text-left px-4 py-2 text-sm ${
                    language === "en"
                      ? "bg-[rgb(var(--primary))]/10 text-[rgb(var(--primary))] font-medium"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  English
                </button>
                <button
                  onClick={() => {
                    setLanguage("de")
                    setIsLangMenuOpen(false)
                  }}
                  className={`w-full text-left px-4 py-2 text-sm ${
                    language === "de"
                      ? "bg-[rgb(var(--primary))]/10 text-[rgb(var(--primary))] font-medium"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  Deutsch
                </button>
              </div>
            )}
          </div>

          <button className="text-gray-800" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white w-full py-4 px-4 shadow-lg">
          <nav className="flex flex-col space-y-4">
            <Link
              href="/"
              className="text-gray-800 hover:text-[rgb(var(--secondary))] transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("home")}
            </Link>

            {/* Mobile Services Dropdown */}
            <div>
              <button
                onClick={toggleServices}
                className="flex items-center justify-between w-full text-gray-800 hover:text-[rgb(var(--secondary))] transition-colors font-medium"
              >
                {t("services")}
                <ChevronDown className={`h-4 w-4 transition-transform ${isServicesOpen ? "rotate-180" : ""}`} />
              </button>
              <div className={`mobile-dropdown-content pl-4 ${isServicesOpen ? "open" : ""}`}>
                <Link
                  href="/services/accommodation"
                  className="block py-2 text-gray-700 hover:text-[rgb(var(--secondary))]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t("accommodation")}
                </Link>
                <Link
                  href="/services/tickets-transportation"
                  className="block py-2 text-gray-700 hover:text-[rgb(var(--secondary))]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t("ticketsTransportation")}
                </Link>
                <Link
                  href="/services/health-services"
                  className="block py-2 text-gray-700 hover:text-[rgb(var(--secondary))]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t("healthServices")}
                </Link>
                <Link
                  href="/services/transfer-services"
                  className="block py-2 text-gray-700 hover:text-[rgb(var(--secondary))]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t("transferServices")}
                </Link>
              </div>
            </div>

            <Link
              href="/antalya-guide"
              className="text-gray-800 hover:text-[rgb(var(--secondary))] transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("antalyaGuide")}
            </Link>

            <Link
              href="/about"
              className="text-gray-800 hover:text-[rgb(var(--secondary))] transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("about")}
            </Link>

            <Link
              href="/contact"
              className="text-gray-800 hover:text-[rgb(var(--secondary))] transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("contact")}
            </Link>

            <Link
              href="https://wa.me/905321234567"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-md rounded-full text-center"
            >
              WHATSAPP
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
