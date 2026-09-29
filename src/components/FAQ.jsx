import { useState } from 'react';
import { RevealSection } from '../hooks/useReveal';

const faqs = [
  {
    id: 'faq-1',
    question: '"Bot müşterilerime soğuk gelir mi?"',
    answer: 'Hayır — ve bunu garanti ediyoruz. Botumuz sizin ses tonunuzda, sizin salonunuzun kültürüne uygun konuşur. "Merhaba, Salon X ekibinden yazıyoruz!" gibi bir karşılama değil; "Merhaba Ayşe hanım, nasıl yardımcı olabilirim?" diyebilen, kişisel hissettiren bir sistem kuruyoruz. Müşterileriniz fark etmez; fark ederse de takdir eder.',
  },
  {
    id: 'faq-2',
    question: '"Var olan Instagram / WhatsApp hesabıma zarar verir mi?"',
    answer: 'Kesinlikle hayır. Resmi Meta ve WhatsApp Business API altyapısını kullanıyoruz. Hesabınız ban veya kısıtlama riskiyle karşılaşmaz. Aksine, sistematik ve düzenli mesajlaşma yapısı hesabınızın güvenilirliğini artırır. Mevcut takipçi kitleniz, sohbet geçmişiniz ve hesap verileriniz tamamen korunur.',
  },
  {
    id: 'faq-3',
    question: '"Kurulum ne kadar sürer?"',
    answer: 'Strateji görüşmesinden itibaren ortalama 7-14 iş günü içinde sisteminiz canlıya geçer. Bu süreçte sizden yalnızca birkaç saat talep ediyoruz: hizmetlerinizi anlatmanız, sık sorulan soruları paylaşmanız ve mesajlaşma tonunuzu belirlememize yardım etmeniz yeterli. Gerisi tamamen bizde.',
  },
  {
    id: 'faq-4',
    question: '"Bu sistem sadece büyük salonlara mı uygun?"',
    answer: 'Tam tersi. Tek kişilik stüdyolardan 5 çalışanlı salonlara kadar en büyük avantajı küçük ve orta ölçekli işletmeler elde ediyor. Çünkü büyük salonlar resepsiyoniste ödeyebilir; siz bu sistemi kurarak aynı kapasiteyi çok daha düşük maliyetle elde ediyorsunuz.',
  },
  {
    id: 'faq-5',
    question: '"Teknik bilgim olmadan yönetebilir miyim?"',
    answer: 'Evet. Sistemin günlük yönetimi sıfır teknik bilgi gerektiriyor. Hizmet menünüzü değiştirmek, tatil günleri ayarlamak veya fiyatları güncellemek için WhatsApp\'tan bize yazmanız yeterli. Arka planda her şeyi biz yönetiyoruz.',
  },
  {
    id: 'faq-6',
    question: '"Ay ay ücret mi ödüyorum?"',
    answer: 'Evet, aylık sabit bir servis bedeli var. Kurulum ücreti bir kez alınır, sonrasında aylık işletim ücreti uygulanır. Görüşmemizde salonunuzun büyüklüğüne ve ihtiyacınıza göre özelleştirilmiş fiyatlandırmayı konuşacağız. Çoğu salon ilk ay içinde bu bedeli geri kazanıyor.',
  },
];

export default function FAQ() {
  const [openId, setOpenId] = useState(null);

  const toggleFaq = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="sss" className="py-24 lg:py-32 bg-white border-t border-border" aria-labelledby="faq-heading">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left: Header */}
          <div className="lg:col-span-4">
            <RevealSection>
              <div className="lg:sticky lg:top-32">
                <div className="badge mb-6">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  Sık Sorulan Sorular
                </div>
                <h2 id="faq-heading" className="section-subheading mb-4">
                  Aklınızdaki{' '}
                  <span className="italic text-accent">Soru</span>{' '}
                  Burada
                </h2>
                <p className="text-muted leading-relaxed mb-8">
                  Salonunuz için yapay zekâ otomasyonunu düşünürken aklınıza takılan sorulara dürüst ve net cevaplar veriyoruz.
                </p>
                <a
                  id="faq-cta"
                  href="#randevu"
                  className="btn-outline text-xs tracking-widest uppercase"
                >
                  Sorunuzu Bize Sorun
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </a>
              </div>
            </RevealSection>
          </div>

          {/* Right: FAQ Items */}
          <div className="lg:col-span-8">
            <div className="divide-y divide-border">
              {faqs.map((faq, index) => {
                const isOpen = openId === faq.id;
                return (
                  <RevealSection key={faq.id} delay={(index % 3) + 1}>
                    <div className="py-6">
                      <button
                        id={faq.id}
                        onClick={() => toggleFaq(faq.id)}
                        className="w-full flex items-start justify-between gap-4 text-left group"
                        aria-expanded={isOpen}
                        aria-controls={`${faq.id}-content`}
                      >
                        <span className={`font-medium text-base leading-snug transition-colors duration-200 ${isOpen ? 'text-accent' : 'text-charcoal group-hover:text-accent'}`}>
                          {faq.question}
                        </span>
                        <span className={`flex-shrink-0 w-8 h-8 rounded-full border border-border flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-charcoal border-charcoal' : 'group-hover:border-charcoal'}`}>
                          <svg
                            width="14" height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke={isOpen ? 'white' : 'currentColor'}
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className={`transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}
                          >
                            <line x1="12" y1="5" x2="12" y2="19"/>
                            <line x1="5" y1="12" x2="19" y2="12"/>
                          </svg>
                        </span>
                      </button>

                      {/* Accordion content using CSS grid trick */}
                      <div
                        id={`${faq.id}-content`}
                        role="region"
                        aria-labelledby={faq.id}
                        className={`faq-content ${isOpen ? 'open' : ''}`}
                      >
                        <div className="faq-inner">
                          <p className="text-muted leading-relaxed pt-4 text-sm">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  </RevealSection>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
