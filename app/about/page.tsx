"use client"

import { PageHeader } from "@/components/page-header"
import Image from "next/image"
import { useLanguage } from "@/components/language-provider"

export default function AboutPage() {
  const { t } = useLanguage()

  return (
    <>
      <PageHeader
        title={t("aboutPageTitle")}
        description={t("aboutPageSubtitle")}
        backgroundImage="/antalya-tourists.png"
      />

      <section className="section-padding bg-white">
        <div className="container mx-auto container-padding">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-[rgb(var(--primary))]">Aura Smile Studio</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">{t("aboutPageDescription1")}</p>
              <p className="text-gray-700 mb-6 leading-relaxed">{t("aboutPageDescription2")}</p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image src="/antalya-tourists.png" alt="Happy tourists in Antalya" fill className="object-cover" />
            </div>
          </div>

          <div className="mt-16">
            <h2 className="text-3xl font-bold mb-6 text-[rgb(var(--primary))] text-center">
              {t("aboutPageMissionValuesTitle")}
            </h2>
            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <div className="bg-gray-50 p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-[rgb(var(--secondary))]">{t("aboutMission")}</h3>
                <p className="text-gray-700">{t("aboutPageMissionText")}</p>
              </div>
              <div className="bg-gray-50 p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-[rgb(var(--secondary))]">{t("aboutValues")}</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>
                    <span className="font-semibold">{t("aboutPageValueQuality")}:</span>{" "}
                    {t("aboutPageValueQualityText")}
                  </li>
                  <li>
                    <span className="font-semibold">{t("aboutPageValueReliability")}:</span>{" "}
                    {t("aboutPageValueReliabilityText")}
                  </li>
                  <li>
                    <span className="font-semibold">{t("aboutPageValueCustomer")}:</span>{" "}
                    {t("aboutPageValueCustomerText")}
                  </li>
                  <li>
                    <span className="font-semibold">{t("aboutPageValueSustainability")}:</span>{" "}
                    {t("aboutPageValueSustainabilityText")}
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
