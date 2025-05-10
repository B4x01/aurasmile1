"use client"

import { PageHeader } from "@/components/page-header"
import Image from "next/image"
import Link from "next/link"
import { useLanguage } from "@/components/language-provider"

export default function AntalyaGuidePage() {
  const { t } = useLanguage()

  return (
    <>
      <PageHeader
        title={t("antalyaGuidePageTitle")}
        description={t("antalyaGuidePageSubtitle")}
        backgroundImage="/antalya-panorama.png"
      />

      <section className="section-padding bg-white">
        <div className="container mx-auto container-padding">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-[rgb(var(--primary))]">{t("antalyaGuideTitle")}</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">{t("antalyaGuidePageDescription1")}</p>
              <p className="text-gray-700 mb-6 leading-relaxed">{t("antalyaGuidePageDescription2")}</p>
              <Link
                href="/contact"
                className="inline-block bg-[rgb(var(--primary))] hover:bg-[rgb(var(--primary))]/90 text-white font-bold py-3 px-8 rounded-md transition-all"
              >
                {t("antalyaGuidePageContactButton")}
              </Link>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image src="/antalya-panorama.png" alt="Antalya Panorama" fill className="object-cover" />
            </div>
          </div>

          <h2 className="text-3xl font-bold mb-8 text-[rgb(var(--primary))] text-center">
            {t("antalyaGuidePageExploreTitle")}
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all">
              <div className="relative h-64">
                <Image src="/antalya-beaches.png" alt="Antalya Beaches" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-[rgb(var(--secondary))]">{t("beachesTitle")}</h3>
                <p className="text-gray-700 mb-4">{t("antalyaGuidePageBeachesDescription")}</p>
                <ul className="text-gray-700 space-y-2 mb-4">
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-[rgb(var(--secondary))] mr-2 mt-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>{t("antalyaGuidePageBeachesItem1")}</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-[rgb(var(--secondary))] mr-2 mt-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>{t("antalyaGuidePageBeachesItem2")}</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-[rgb(var(--secondary))] mr-2 mt-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>{t("antalyaGuidePageBeachesItem3")}</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all">
              <div className="relative h-64">
                <Image
                  src="/antalya-historical-sites.png"
                  alt="Antalya Historical Sites"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-[rgb(var(--secondary))]">{t("historicalSitesTitle")}</h3>
                <p className="text-gray-700 mb-4">{t("antalyaGuidePageHistoricalDescription")}</p>
                <ul className="text-gray-700 space-y-2 mb-4">
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-[rgb(var(--secondary))] mr-2 mt-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>{t("antalyaGuidePageHistoricalItem1")}</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-[rgb(var(--secondary))] mr-2 mt-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>{t("antalyaGuidePageHistoricalItem2")}</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-[rgb(var(--secondary))] mr-2 mt-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>{t("antalyaGuidePageHistoricalItem3")}</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all">
              <div className="relative h-64">
                <Image
                  src="/antalya-natural-beauties.png"
                  alt="Antalya Natural Beauties"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-[rgb(var(--secondary))]">{t("naturalBeautiesTitle")}</h3>
                <p className="text-gray-700 mb-4">{t("antalyaGuidePageNaturalDescription")}</p>
                <ul className="text-gray-700 space-y-2 mb-4">
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-[rgb(var(--secondary))] mr-2 mt-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>{t("antalyaGuidePageNaturalItem1")}</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-[rgb(var(--secondary))] mr-2 mt-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>{t("antalyaGuidePageNaturalItem2")}</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-[rgb(var(--secondary))] mr-2 mt-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>{t("antalyaGuidePageNaturalItem3")}</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all">
              <div className="relative h-64">
                <Image src="/antalya-gastronomy.png" alt="Antalya Gastronomy" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-[rgb(var(--secondary))]">{t("gastronomyTitle")}</h3>
                <p className="text-gray-700 mb-4">{t("antalyaGuidePageGastronomyDescription")}</p>
                <ul className="text-gray-700 space-y-2 mb-4">
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-[rgb(var(--secondary))] mr-2 mt-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>{t("antalyaGuidePageGastronomyItem1")}</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-[rgb(var(--secondary))] mr-2 mt-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>{t("antalyaGuidePageGastronomyItem2")}</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-[rgb(var(--secondary))] mr-2 mt-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>{t("antalyaGuidePageGastronomyItem3")}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
