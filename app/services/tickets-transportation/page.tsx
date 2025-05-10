"use client"

import { PageHeader } from "@/components/page-header"
import { useLanguage } from "@/components/language-provider"
import Image from "next/image"
import { Check } from "lucide-react"

export default function TicketsTransportationPage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-white">
      <PageHeader
        title={t("ticketsTransportationTitle")}
        description={t("ticketsTransportationDescription1")}
        backgroundImage="/tourist-attractions.png"
      />

      <div className="container mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-12">{t("ticketsTransportationOptionsTitle")}</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Flight Tickets */}
          <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col h-full">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mr-4">
                <Image
                  src="/airport-transfer.png"
                  alt={t("ticketsTransportationAirTitle")}
                  width={40}
                  height={40}
                  className="text-pink-500"
                />
              </div>
              <h3 className="text-2xl font-bold">{t("ticketsTransportationAirTitle")}</h3>
            </div>
            <p className="text-gray-600 mb-6">{t("ticketsTransportationAirDescription")}</p>
            <ul className="space-y-3 mt-auto">
              <li className="flex items-center">
                <Check className="h-5 w-5 text-pink-500 mr-2" />
                <span>{t("ticketsTransportationAirFeature1")}</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-pink-500 mr-2" />
                <span>{t("ticketsTransportationAirFeature2")}</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-pink-500 mr-2" />
                <span>{t("ticketsTransportationAirFeature3")}</span>
              </li>
            </ul>
          </div>

          {/* Bus Tickets */}
          <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col h-full">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mr-4">
                <Image
                  src="/airport-transfer.png"
                  alt={t("ticketsTransportationBusTitle")}
                  width={40}
                  height={40}
                  className="text-pink-500"
                />
              </div>
              <h3 className="text-2xl font-bold">{t("ticketsTransportationBusTitle")}</h3>
            </div>
            <p className="text-gray-600 mb-6">{t("ticketsTransportationBusDescription")}</p>
            <ul className="space-y-3 mt-auto">
              <li className="flex items-center">
                <Check className="h-5 w-5 text-pink-500 mr-2" />
                <span>{t("ticketsTransportationBusFeature1")}</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-pink-500 mr-2" />
                <span>{t("ticketsTransportationBusFeature2")}</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-pink-500 mr-2" />
                <span>{t("ticketsTransportationBusFeature3")}</span>
              </li>
            </ul>
          </div>

          {/* Ferry/Boat Tours */}
          <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col h-full">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mr-4">
                <Image
                  src="/airport-transfer.png"
                  alt={t("ticketsTransportationBoatTitle")}
                  width={40}
                  height={40}
                  className="text-pink-500"
                />
              </div>
              <h3 className="text-2xl font-bold">{t("ticketsTransportationBoatTitle")}</h3>
            </div>
            <p className="text-gray-600 mb-6">{t("ticketsTransportationBoatDescription")}</p>
            <ul className="space-y-3 mt-auto">
              <li className="flex items-center">
                <Check className="h-5 w-5 text-pink-500 mr-2" />
                <span>{t("ticketsTransportationBoatFeature1")}</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-pink-500 mr-2" />
                <span>{t("ticketsTransportationBoatFeature2")}</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-pink-500 mr-2" />
                <span>{t("ticketsTransportationBoatFeature3")}</span>
              </li>
            </ul>
          </div>

          {/* Train Tickets */}
          <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col h-full">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mr-4">
                <Image
                  src="/airport-transfer.png"
                  alt={t("ticketsTransportationTrainTitle")}
                  width={40}
                  height={40}
                  className="text-pink-500"
                />
              </div>
              <h3 className="text-2xl font-bold">{t("ticketsTransportationTrainTitle")}</h3>
            </div>
            <p className="text-gray-600 mb-6">{t("ticketsTransportationTrainDescription")}</p>
            <ul className="space-y-3 mt-auto">
              <li className="flex items-center">
                <Check className="h-5 w-5 text-pink-500 mr-2" />
                <span>{t("ticketsTransportationTrainFeature1")}</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-pink-500 mr-2" />
                <span>{t("ticketsTransportationTrainFeature2")}</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-pink-500 mr-2" />
                <span>{t("ticketsTransportationTrainFeature3")}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-12">{t("ticketsTransportationSpecialTitle")}</h2>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <p className="text-gray-600 text-center max-w-3xl mx-auto">
              {t("ticketsTransportationSpecialDescription")}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
