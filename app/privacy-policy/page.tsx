"use client"

import { PageHeader } from "@/components/page-header"
import Link from "next/link"
import { useLanguage } from "@/components/language-provider"

export default function PrivacyPolicyPage() {
  const { t } = useLanguage()

  return (
    <>
      <PageHeader title={t("footerPrivacy")} description={t("footerPrivacy")} backgroundImage="/antalya-sunset.png" />

      <section className="section-padding bg-white">
        <div className="container mx-auto container-padding">
          <div className="prose max-w-none">
            <h2 className="text-2xl font-bold mb-6 text-[rgb(var(--primary))]">Gizlilik Politikası</h2>

            <p className="mb-4">Son güncelleme tarihi: {new Date().toLocaleDateString("tr-TR")}</p>

            <p className="mb-4">
              Aura Smile Studio olarak, kişisel verilerinizin gizliliğini korumak en önemli önceliklerimizden biridir.
              Bu Gizlilik Politikası, web sitemizi ziyaret ettiğinizde veya hizmetlerimizi kullandığınızda kişisel
              verilerinizin nasıl toplandığını, kullanıldığını ve korunduğunu açıklamaktadır.
            </p>

            <h3 className="text-xl font-semibold mb-3 text-[rgb(var(--secondary))]">Toplanan Bilgiler</h3>
            <p className="mb-4">Sizden aldığımız bilgiler şunları içerebilir:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Ad, soyad, e-posta adresi, telefon numarası gibi iletişim bilgileri</li>
              <li>Rezervasyon yaparken sağladığınız seyahat tarihleri, konaklama tercihleri gibi bilgiler</li>
              <li>Web sitemizi kullanırken otomatik olarak toplanan çerezler ve kullanım verileri</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 text-[rgb(var(--secondary))]">Bilgilerin Kullanımı</h3>
            <p className="mb-4">Topladığımız bilgileri aşağıdaki amaçlarla kullanıyoruz:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Talep ettiğiniz hizmetleri sağlamak ve rezervasyonlarınızı yönetmek</li>
              <li>Size özel teklifler ve bilgiler sunmak</li>
              <li>Hizmetlerimizi geliştirmek ve iyileştirmek</li>
              <li>Yasal yükümlülüklerimizi yerine getirmek</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 text-[rgb(var(--secondary))]">Bilgilerin Paylaşımı</h3>
            <p className="mb-4">
              Kişisel bilgilerinizi, hizmetlerimizi sağlamak için gerekli olan üçüncü taraf hizmet sağlayıcılarla
              (oteller, transfer şirketleri vb.) paylaşabiliriz. Bu üçüncü tarafların bilgilerinizi gizli tutması ve
              sadece belirtilen amaçlar için kullanması gerekmektedir.
            </p>

            <h3 className="text-xl font-semibold mb-3 text-[rgb(var(--secondary))]">Güvenlik</h3>
            <p className="mb-4">
              Kişisel verilerinizi korumak için uygun teknik ve organizasyonel önlemler alıyoruz. Ancak, internet
              üzerinden hiçbir veri iletiminin %100 güvenli olmadığını unutmayın.
            </p>

            <h3 className="text-xl font-semibold mb-3 text-[rgb(var(--secondary))]">Haklarınız</h3>
            <p className="mb-4">
              Kişisel verilerinizle ilgili olarak erişim, düzeltme, silme ve işlemeyi sınırlandırma haklarına
              sahipsiniz. Bu haklarınızı kullanmak için bizimle iletişime geçebilirsiniz.
            </p>

            <h3 className="text-xl font-semibold mb-3 text-[rgb(var(--secondary))]">İletişim</h3>
            <p className="mb-4">
              Gizlilik politikamızla ilgili sorularınız veya talepleriniz için aşağıdaki iletişim bilgilerini
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
