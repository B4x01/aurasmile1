"use client"

import { PageHeader } from "@/components/page-header"
import Image from "next/image"
import Link from "next/link"
import { useLanguage } from "@/components/language-provider"

export default function HealthServicesPage() {
  const { t } = useLanguage()

  return (
    <>
      <PageHeader
        title={t("healthServicesPageTitle")}
        description={t("healthServicesPageSubtitle")}
        backgroundImage="/medical-bg.png"
      />

      <section className="section-padding bg-white">
        <div className="container mx-auto container-padding">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image src="/dental-operation-room.png" alt="Dental Operation Room" fill className="object-cover" />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6 text-[rgb(var(--primary))]">{t("healthServicesTitle")}</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">{t("healthServicesDescription1")}</p>
              <p className="text-gray-700 mb-6 leading-relaxed">{t("healthServicesDescription2")}</p>
              <Link
                href="/contact"
                className="inline-block bg-[rgb(var(--primary))] hover:bg-[rgb(var(--primary))]/90 text-white font-bold py-3 px-8 rounded-md transition-all"
              >
                {t("healthServicesContactButton")}
              </Link>
            </div>
          </div>

          <div className="mt-16">
            <h2 className="text-3xl font-bold mb-8 text-[rgb(var(--primary))] text-center">
              {t("healthServicesOperationAreaTitle")}
            </h2>
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="relative h-[300px] rounded-lg overflow-hidden shadow-xl">
                <Image src="/dental-operation-room.png" alt="Dental Operation Room" fill className="object-cover" />
              </div>
              <div className="relative h-[300px] rounded-lg overflow-hidden shadow-xl">
                <Image src="/aesthetic-clinic.png" alt="Aesthetic Clinic" fill className="object-cover" />
              </div>
            </div>
            <p className="text-gray-700 text-center mb-8">{t("healthServicesOperationAreaDescription")}</p>
          </div>
        </div>
      </section>
    </>
  )
}
