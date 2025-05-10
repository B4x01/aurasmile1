"use client"

import { PageHeader } from "@/components/page-header"
import Image from "next/image"
import Link from "next/link"
import { useLanguage } from "@/components/language-provider"

export default function AccommodationPage() {
  const { t } = useLanguage()

  return (
    <>
      <PageHeader
        title={t("accommodationPageTitle")}
        description={t("accommodationPageSubtitle")}
        backgroundImage="/luxury-hotel-room.png"
      />

      <section className="section-padding bg-white">
        <div className="container mx-auto container-padding">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-[rgb(var(--primary))]">{t("accommodationServicesTitle")}</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">{t("accommodationServicesDescription1")}</p>
              <p className="text-gray-700 mb-6 leading-relaxed">{t("accommodationServicesDescription2")}</p>
              <Link
                href="/contact"
                className="inline-block bg-[rgb(var(--primary))] hover:bg-[rgb(var(--primary))]/90 text-white font-bold py-3 px-8 rounded-md transition-all"
              >
                {t("accommodationBookButton")}
              </Link>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image src="/luxury-hotel-room.png" alt="Luxury Hotel Room" fill className="object-cover" />
            </div>
          </div>

          <h2 className="text-3xl font-bold mb-8 text-[rgb(var(--primary))] text-center">
            {t("accommodationOptionsTitle")}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all">
              <div className="relative h-64">
                <Image src="/antalya-luxury-hotel-pool.png" alt="Luxury Hotels" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-[rgb(var(--secondary))]">
                  {t("accommodationLuxuryTitle")}
                </h3>
                <p className="text-gray-700 mb-4">{t("accommodationLuxuryDescription")}</p>
                <Link
                  href="/contact"
                  className="text-[rgb(var(--primary))] font-semibold hover:text-[rgb(var(--secondary))] transition-colors"
                >
                  {t("accommodationMoreInfoButton")} →
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all">
              <div className="relative h-64">
                <Image src="/antalya-boutique-hotel.png" alt="Boutique Hotels" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-[rgb(var(--secondary))]">
                  {t("accommodationBoutiqueTitle")}
                </h3>
                <p className="text-gray-700 mb-4">{t("accommodationBoutiqueDescription")}</p>
                <Link
                  href="/contact"
                  className="text-[rgb(var(--primary))] font-semibold hover:text-[rgb(var(--secondary))] transition-colors"
                >
                  {t("accommodationMoreInfoButton")} →
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all">
              <div className="relative h-64">
                <Image
                  src="/all-inclusive-resort-antalya.png"
                  alt="All-Inclusive Resorts"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-[rgb(var(--secondary))]">
                  {t("accommodationAllInclusiveTitle")}
                </h3>
                <p className="text-gray-700 mb-4">{t("accommodationAllInclusiveDescription")}</p>
                <Link
                  href="/contact"
                  className="text-[rgb(var(--primary))] font-semibold hover:text-[rgb(var(--secondary))] transition-colors"
                >
                  {t("accommodationMoreInfoButton")} →
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all">
              <div className="relative h-64">
                <Image src="/antalya-city-apartment.png" alt="Apartments" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-[rgb(var(--secondary))]">
                  {t("accommodationApartmentsTitle")}
                </h3>
                <p className="text-gray-700 mb-4">{t("accommodationApartmentsDescription")}</p>
                <Link
                  href="/contact"
                  className="text-[rgb(var(--primary))] font-semibold hover:text-[rgb(var(--secondary))] transition-colors"
                >
                  {t("accommodationMoreInfoButton")} →
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all">
              <div className="relative h-64">
                <Image src="/budget-friendly-hotel-antalya.png" alt="Budget Hotels" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-[rgb(var(--secondary))]">
                  {t("accommodationBudgetTitle")}
                </h3>
                <p className="text-gray-700 mb-4">{t("accommodationBudgetDescription")}</p>
                <Link
                  href="/contact"
                  className="text-[rgb(var(--primary))] font-semibold hover:text-[rgb(var(--secondary))] transition-colors"
                >
                  {t("accommodationMoreInfoButton")} →
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all">
              <div className="relative h-64">
                <Image src="/luxury-villa-antalya.png" alt="Villas" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-[rgb(var(--secondary))]">
                  {t("accommodationVillasTitle")}
                </h3>
                <p className="text-gray-700 mb-4">{t("accommodationVillasDescription")}</p>
                <Link
                  href="/contact"
                  className="text-[rgb(var(--primary))] font-semibold hover:text-[rgb(var(--secondary))] transition-colors"
                >
                  {t("accommodationMoreInfoButton")} →
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-16 bg-gray-50 p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-[rgb(var(--primary))]">{t("accommodationWhyBookTitle")}</h2>
            <ul className="space-y-3 text-gray-700">
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
                <span className="text-gray-600">{t("accommodationWhyBookReason1")}</span>
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
                <span className="text-gray-600">{t("accommodationWhyBookReason2")}</span>
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
                <span className="text-gray-600">{t("accommodationWhyBookReason3")}</span>
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
                <span className="text-gray-600">{t("accommodationWhyBookReason4")}</span>
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
                <span className="text-gray-600">{t("accommodationWhyBookReason5")}</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}
