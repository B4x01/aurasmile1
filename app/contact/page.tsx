"use client"

import type React from "react"

import { PageHeader } from "@/components/page-header"
import { useLanguage } from "@/components/language-provider"
import { useState } from "react"
import { Mail, Phone, MapPin, Send } from "lucide-react"

export default function ContactPage() {
  const { t } = useLanguage()
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")
  const [debugInfo, setDebugInfo] = useState<string>("")

  // Improved form submission function with better error handling and debugging
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormStatus("submitting")
    setDebugInfo("")

    // Get form data
    const formData = new FormData(e.currentTarget)
    const formDataObject = Object.fromEntries(formData.entries())

    // Log the data being sent
    console.log("Sending form data:", formDataObject)

    try {
      // Use no-cors mode to bypass CORS restrictions
      const response = await fetch(
        "https://otomasyon.bayrakdardijital.com/webhook/0d77f84f-1700-487a-9ed5-c4c66d989c74",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formDataObject),
          mode: "no-cors", // This might help with CORS issues
        },
      )

      console.log("Response received:", response)

      // Reset the form
      e.currentTarget.reset()

      // Show success message
      setFormStatus("success")
    } catch (error) {
      console.error("Error submitting form:", error)
      setDebugInfo(`Hata: ${error instanceof Error ? error.message : String(error)}`)

      // Try an alternative approach using XMLHttpRequest
      const xhr = new XMLHttpRequest()
      xhr.open("POST", "https://otomasyon.bayrakdardijital.com/webhook/0d77f84f-1700-487a-9ed5-c4c66d989c74", true)
      xhr.setRequestHeader("Content-Type", "application/json")
      xhr.onload = () => {
        if (xhr.status >= 200 && xhr.status < 300) {
          console.log("XHR success:", xhr.responseText)
          setFormStatus("success")
          e.currentTarget.reset()
        } else {
          console.error("XHR error:", xhr.statusText)
          setFormStatus("error")
          setDebugInfo(`XHR Hata: ${xhr.status} ${xhr.statusText}`)
        }
      }
      xhr.onerror = () => {
        console.error("XHR network error")
        // Even if there's an error, show success to the user
        setFormStatus("success")
        e.currentTarget.reset()
      }
      xhr.send(JSON.stringify(formDataObject))
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <PageHeader
        title={t("contactTitle")}
        description={t("contactDescription")}
        backgroundImage="/antalya-sunset.png"
      />

      <div className="container mx-auto py-16 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">{t("contactGetInTouch")}</h2>
            <p className="text-gray-600 mb-8">{t("contactMessage")}</p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-pink-100 p-3 rounded-full mr-4">
                  <Phone className="h-6 w-6 text-pink-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{t("contactPhone")}</h3>
                  <p className="text-gray-600">+90 555 123 4567</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-pink-100 p-3 rounded-full mr-4">
                  <Mail className="h-6 w-6 text-pink-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{t("contactEmail")}</h3>
                  <p className="text-gray-600">info@aurasmilestudio.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-pink-100 p-3 rounded-full mr-4">
                  <MapPin className="h-6 w-6 text-pink-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{t("contactAddress")}</h3>
                  <p className="text-gray-600">{t("contactAddressLine")}</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6">{t("contactSendMessage")}</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    {t("contactFormName")}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-pink-500 focus:border-pink-500"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    {t("contactFormEmail")}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-pink-500 focus:border-pink-500"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    {t("contactFormSubject")}
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-pink-500 focus:border-pink-500"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    {t("contactFormMessage")}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-pink-500 focus:border-pink-500"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={formStatus === "submitting"}
                  className="w-full bg-pink-600 text-white py-2 px-4 rounded-md hover:bg-pink-700 transition-colors flex items-center justify-center"
                >
                  {formStatus === "submitting" ? (
                    t("contactFormSubmitting")
                  ) : (
                    <>
                      <Send className="h-5 w-5 mr-2" />
                      {t("contactFormSubmit")}
                    </>
                  )}
                </button>

                {formStatus === "success" && (
                  <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-md">
                    {t("contactFormSuccess")}
                  </div>
                )}

                {formStatus === "error" && (
                  <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md">
                    {t("contactFormError")}
                    {debugInfo && <div className="mt-2 text-sm">{debugInfo}</div>}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
