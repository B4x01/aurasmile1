"use client"

import { PageHeader } from "@/components/page-header"
import Image from "next/image"
import Link from "next/link"
import { Car, Users, Shield, Clock } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export default function TransferServicesPage() {
  const { t } = useLanguage()

  return (
    <>
      <PageHeader
        title={t("transferServicesPageTitle")}
        description={t("transferServicesPageSubtitle")}
        backgroundImage="/antalya-transfer-service.png"
      />

      <section className="section-padding bg-white">
        <div className="container mx-auto container-padding">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-[rgb(var(--primary))]">{t("transferServicesTitle")}</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">{t("transferServicesDescription1")}</p>
              <p className="text-gray-700 mb-6 leading-relaxed">{t("transferServicesDescription2")}</p>
              <Link
                href="/contact"
                className="inline-block bg-[rgb(var(--primary))] hover:bg-[rgb(var(--primary))]/90 text-white font-bold py-3 px-8 rounded-md transition-all"
              >
                {t("transferServicesBookButton")}
              </Link>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image src="/airport-transfer.png" alt="Airport Transfer Service" fill className="object-cover" />
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-8 mb-16">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-[rgb(var(--secondary))]/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Car className="w-8 h-8 text-[rgb(var(--secondary))]" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[rgb(var(--primary))]">
                {t("transferServicesFeature1Title")}
              </h3>
              <p className="text-gray-700">{t("transferServicesFeature1Description")}</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-[rgb(var(--secondary))]/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-[rgb(var(--secondary))]" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[rgb(var(--primary))]">
                {t("transferServicesFeature2Title")}
              </h3>
              <p className="text-gray-700">{t("transferServicesFeature2Description")}</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-[rgb(var(--secondary))]/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-[rgb(var(--secondary))]" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[rgb(var(--primary))]">
                {t("transferServicesFeature3Title")}
              </h3>
              <p className="text-gray-700">{t("transferServicesFeature3Description")}</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-[rgb(var(--secondary))]/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-[rgb(var(--secondary))]" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[rgb(var(--primary))]">
                {t("transferServicesFeature4Title")}
              </h3>
              <p className="text-gray-700">{t("transferServicesFeature4Description")}</p>
            </div>
          </div>

          <h2 className="text-3xl font-bold mb-8 text-[rgb(var(--primary))] text-center">
            {t("transferServicesCategoriesTitle")}
          </h2>

          <div className="bg-gray-50 p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-[rgb(var(--primary))]">
              {t("transferServicesWhyChooseTitle")}
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <ul className="text-gray-700 space-y-3">
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
                    <div className="flex flex-col">
                      <span className="font-semibold text-[rgb(var(--primary))] mb-1">
                        {t("transferServicesWhyChooseItem1").split(":")[0]}
                      </span>
                      <span className="text-gray-600">{t("transferServicesWhyChooseItem1").split(":")[1]}</span>
                    </div>
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
                    <div className="flex flex-col">
                      <span className="font-semibold text-[rgb(var(--primary))] mb-1">
                        {t("transferServicesWhyChooseItem2").split(":")[0]}
                      </span>
                      <span className="text-gray-600">{t("transferServicesWhyChooseItem2").split(":")[1]}</span>
                    </div>
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
                    <div className="flex flex-col">
                      <span className="font-semibold text-[rgb(var(--primary))] mb-1">
                        {t("transferServicesWhyChooseItem3").split(":")[0]}
                      </span>
                      <span className="text-gray-600">{t("transferServicesWhyChooseItem3").split(":")[1]}</span>
                    </div>
                  </li>
                </ul>
              </div>
              <div>
                <ul className="text-gray-700 space-y-3">
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
                    <div className="flex flex-col">
                      <span className="font-semibold text-[rgb(var(--primary))] mb-1">
                        {t("transferServicesWhyChooseItem4").split(":")[0]}
                      </span>
                      <span className="text-gray-600">{t("transferServicesWhyChooseItem4").split(":")[1]}</span>
                    </div>
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
                    <div className="flex flex-col">
                      <span className="font-semibold text-[rgb(var(--primary))] mb-1">
                        {t("transferServicesWhyChooseItem5").split(":")[0]}
                      </span>
                      <span className="text-gray-600">{t("transferServicesWhyChooseItem5").split(":")[1]}</span>
                    </div>
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
                    <div className="flex flex-col">
                      <span className="font-semibold text-[rgb(var(--primary))] mb-1">
                        {t("transferServicesWhyChooseItem6").split(":")[0]}
                      </span>
                      <span className="text-gray-600">{t("transferServicesWhyChooseItem6").split(":")[1]}</span>
                    </div>
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
