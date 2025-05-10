"use client"

import { useLanguage } from "./language-provider"
import Image from "next/image"
import { useInView } from "react-intersection-observer"

export default function AboutSection() {
  const { t } = useLanguage()
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="about" className="section-padding bg-white" ref={ref}>
      <div className="container mx-auto container-padding">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[rgb(var(--primary))]">{t("aboutTitle")}</h2>
          <p className="text-xl text-gray-600">{t("aboutSubtitle")}</p>
        </div>

        <div className={`grid md:grid-cols-2 gap-8 items-center ${inView ? "animate-fade-in" : "opacity-0"}`}>
          <div>
            <p className="text-gray-700 mb-6 leading-relaxed">{t("aboutDescription")}</p>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2 text-[rgb(var(--secondary))]">{t("aboutMission")}</h3>
              <p className="text-gray-700">{t("aboutMissionText")}</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2 text-[rgb(var(--secondary))]">{t("aboutValues")}</h3>
              <p className="text-gray-700">{t("aboutValuesText")}</p>
            </div>
          </div>

          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
            <Image src="/antalya-tourists.png" alt="Happy tourists in Antalya" fill className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}
