"use client"

import { useLanguage } from "./language-provider"
import { Building, Plane, Car, Stethoscope, ArrowRight } from "lucide-react"
import { useInView } from "react-intersection-observer"
import Link from "next/link"

export default function ServicesSection() {
  const { t } = useLanguage()
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const services = [
    {
      icon: <Building className="w-12 h-12 text-[rgb(var(--primary))]" />,
      title: t("accommodationTitle"),
      description: t("accommodationDescription"),
      link: "/services/accommodation",
    },
    {
      icon: <Plane className="w-12 h-12 text-[rgb(var(--primary))]" />,
      title: t("ticketsTransportationTitle"),
      description: t("ticketsTransportationDescription"),
      link: "/services/tickets-transportation",
    },
    {
      icon: <Stethoscope className="w-12 h-12 text-[rgb(var(--primary))]" />,
      title: t("healthServicesTitle"),
      description: t("healthServicesDescription"),
      link: "/services/health-services",
    },
    {
      icon: <Car className="w-12 h-12 text-[rgb(var(--primary))]" />,
      title: t("transfersTitle"),
      description: t("transfersDescription"),
      link: "/services/transfer-services",
    },
  ]

  return (
    <section id="services" className="section-padding bg-gray-50" ref={ref}>
      <div className="container mx-auto container-padding">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[rgb(var(--primary))]">{t("servicesTitle")}</h2>
          <p className="text-xl text-gray-600">{t("servicesSubtitle")}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Link
              href={service.link}
              key={index}
              className={`bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1 ${
                inView ? "animate-fade-in" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-[rgb(var(--secondary))]">{service.title}</h3>
              <p className="text-gray-700 mb-4">{service.description}</p>
              <span className="text-[rgb(var(--primary))] font-semibold hover:text-[rgb(var(--secondary))] transition-colors inline-flex items-center">
                Detaylı Bilgi <ArrowRight className="ml-2 h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
