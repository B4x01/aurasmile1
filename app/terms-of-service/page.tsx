"use client"

import { PageHeader } from "@/components/page-header"
import Link from "next/link"
import { useLanguage } from "@/components/language-provider"

export default function TermsOfServicePage() {
  const { t } = useLanguage()

  return (
    <>
      <PageHeader title={t("footerTerms")} description={t("footerTerms")} backgroundImage="/antalya-sunset.png" />

      <section className="section-padding bg-white">
        <div className="container mx-auto container-padding">
          <div className="prose max-w-none">
            <h2 className="text-2xl font-bold mb-6 text-[rgb(var(--primary))]">Kullanım Koşulları</h2>

            <p className="mb-4">Son güncelleme tarihi: {new Date().toLocaleDateString("tr-TR")}</p>

            <p className="mb-4">
              Aura Smile Studio web sitesini kullanarak, aşağıdaki kullanım koşullarını kabul etmiş olursunuz. Lütfen bu
              koşulları dikkatlice okuyun.
            </p>

            <h3 className="text-xl font-semibold mb-3 text-[rgb(var(--secondary))]">Hizmet Kullanımı</h3>
            <p className="mb-4">
              Web sitemizi ve hizmetlerimizi kullanırken, tüm geçerli yasalara ve düzenlemelere uymayı kabul edersiniz.
              Web sitemizi yasadışı veya yetkisiz amaçlar için kullanmak yasaktır.
            </p>

            <h3 className="text-xl font-semibold mb-3 text-[rgb(var(--secondary))]">Rezervasyonlar ve Ödemeler</h3>
            <p className="mb-4">
              Sitemiz üzerinden yapılan rezervasyonlar, ilgili hizmet sağlayıcıların müsaitlik durumuna bağlıdır.
              Rezervasyon onaylandıktan sonra, belirtilen ödeme koşullarına uymanız gerekmektedir.
            </p>
            <p className="mb-4">
              Ödeme bilgileriniz güvenli bir şekilde işlenir ve sadece rezervasyon işlemleriniz için kullanılır.
            </p>

            <h3 className="text-xl font-semibold mb-3 text-[rgb(var(--secondary))]">İptal ve Değişiklik Politikası</h3>
            <p className="mb-4">
              Rezervasyon iptalleri ve değişiklikleri, ilgili hizmet sağlayıcının politikalarına tabidir. İptal ve
              değişiklik koşulları, rezervasyon sırasında size bildirilecektir.
            </p>

            <h3 className="text-xl font-semibold mb-3 text-[rgb(var(--secondary))]">Fikri Mülkiyet</h3>
            <p className="mb-4">
              Web sitemizdeki tüm içerik (metin, grafikler, logolar, görseller vb.) fikri mülkiyet haklarıyla
              korunmaktadır ve Aura Smile Studio'ya veya lisans verenlere aittir. Bu içeriği önceden yazılı izin almadan
              kopyalamak, dağıtmak veya kullanmak yasaktır.
            </p>

            <h3 className="text-xl font-semibold mb-3 text-[rgb(var(--secondary))]">Sorumluluk Sınırlaması</h3>
            <p className="mb-4">
              Web sitemizi kullanımınızdan kaynaklanan doğrudan, dolaylı, tesadüfi veya sonuç olarak ortaya çıkan
              zararlardan sorumlu değiliz. Hizmetlerimizle ilgili tüm riskleri siz üstlenirsiniz.
            </p>

            <h3 className="text-xl font-semibold mb-3 text-[rgb(var(--secondary))]">Değişiklikler</h3>
            <p className="mb-4">
              Bu kullanım koşullarını herhangi bir zamanda değiştirme hakkını saklı tutarız. Değişiklikler web sitemizde
              yayınlandıktan sonra geçerli olacaktır. Web sitemizi kullanmaya devam ederek, güncellenmiş koşulları kabul
              etmiş olursunuz.
            </p>

            <h3 className="text-xl font-semibold mb-3 text-[rgb(var(--secondary))]">İletişim</h3>
            <p className="mb-4">
              Kullanım koşullarımızla ilgili sorularınız veya endişeleriniz için aşağıdaki iletişim bilgilerini
              kullanabilirsiniz:
            </p>
            <p className="mb-4">
              E-posta: info@aurasmilestudio.com
              <br />
              Telefon: +90 242 123 4567
            </p>

            <div className="mt-8">
              <Link href="/" className="btn btn-primary">
                Ana Sayfaya Dön
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
