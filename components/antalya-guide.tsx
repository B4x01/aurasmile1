"use client"

import { useLanguage } from "./language-provider"
import Image from "next/image"
import { useInView } from "react-intersection-observer"

export default function AntalyaGuide() {
  const { t } = useLanguage()
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const attractions = [
    {
      image: "/antalya-turquoise-beach.png",
      title: t("beachesTitle"),
      description: t("beachesDescription"),
    },
    {
      image: "/antalya-ancient-ruins.png",
      title: t("historicalSitesTitle"),
      description: t("historicalSitesDescription"),
    },
    {
      image: "/antalya-waterfall-landscape.png",
      title: t("naturalBeautiesTitle"),
      description: t("naturalBeautiesDescription"),
    },
    {
      image: "/placeholder.svg?height=600&width=800&query=Turkish cuisine and local food from Antalya",
      title: t("gastronomyTitle"),
      description: t("gastronomyDescription"),
    },
  ]

  return (
    <section id="antalya-guide" className="section-padding bg-white" ref={ref}>
      <div className="container mx-auto container-padding">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[rgb(var(--primary))]">{t("antalyaGuideTitle")}</h2>
          <p className="text-xl text-gray-600">{t("antalyaGuideSubtitle")}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {attractions.map((attraction, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all ${
                inView ? "animate-fade-in" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-64">
                <Image
                  src={attraction.image || "/placeholder.svg"}
                  alt={attraction.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-[rgb(var(--secondary))]">{attraction.title}</h3>
                <p className="text-gray-700">{attraction.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
