import { RevealSection } from '../hooks/useReveal';

const features = [
  {
    step: '01',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>
    ),
    title: 'Lead Capture & 7/24 DM Bot',
    subtitle: 'Asla Müşteri Kaçırmayın',
    description: 'Instagram DM ve WhatsApp\'tan gelen her mesaja saniyeler içinde kişiselleştirilmiş yanıt. Müşteri adayını sıcakken yakala.',
    details: [
      'Otomatik karşılama ve hizmet bilgilendirmesi',
      'Soru-cevap akışıyla müşteriyi ön eleme',
      'Fiyat, süre ve uygun tarih sorgulaması',
      'CRM\'e otomatik müşteri kaydı',
    ],
    accent: 'from-violet-500/10 to-purple-500/5',
    accentBorder: 'border-violet-200',
    stepColor: 'text-violet-300',
  },
  {
    step: '02',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
        <line x1="16" y1="2" x2="16" y2="6"/>
        <line x1="8" y1="2" x2="8" y2="6"/>
        <line x1="3" y1="10" x2="21" y2="10"/>
      </svg>
    ),
    title: 'Otomatik Randevu & WhatsApp Teyit',
    subtitle: 'Sorunsuz Booking Deneyimi',
    description: 'Müşteri uygun saatini seçince sistem otomatik olarak takvime işler, WhatsApp üzerinden kişisel teyit mesajı gönderir.',
    details: [
      'Calendly entegrasyonu ile anlık takvim yönetimi',
      'WhatsApp Business API ile teyit mesajı',
      'Çift taraflı takvim senkronizasyonu',
      'Hizmet bazlı süre ve kaynak yönetimi',
    ],
    accent: 'from-emerald-500/10 to-teal-500/5',
    accentBorder: 'border-emerald-200',
    stepColor: 'text-emerald-300',
  },
  {
    step: '03',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
        <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
      </svg>
    ),
    title: 'No-Show Azaltma & Hatırlatma Akışı',
    subtitle: 'Boş Koltuk Bırakmayın',
    description: 'Akıllı hatırlatma sistemiyle no-show oranını dramatik biçimde düşürün. Müşteri gelemeyeceğini söylediğinde anında alternatif bul.',
    details: [
      '24 saat önce otomatik hatırlatma',
      '2 saat önce son hatırlatma',
      'İptal halinde waitlist\'ten otomatik atama',
      'No-show geçmişi takibi ve müşteri puanlama',
    ],
    accent: 'from-amber-500/10 to-orange-500/5',
    accentBorder: 'border-amber-200',
    stepColor: 'text-amber-300',
  },
];

export default function Features() {
  return (
    <section id="ozellikler" className="py-24 lg:py-32 bg-cream" aria-labelledby="features-heading">
      <div className="container-custom">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 items-end">
          <RevealSection>
            <div className="badge mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              Sistem Özellikleri
            </div>
            <h2 id="features-heading" className="section-subheading">
              Müşteri Yolculuğunun{' '}
              <span className="italic text-accent">Her Adımında</span>{' '}
              Yanınızda
            </h2>
          </RevealSection>
          <RevealSection delay={1}>
            <p className="text-muted leading-relaxed text-lg">
              İlk DM'den randevu teyidine, hatırlatmadan yeniden aktivasyona — 
              tüm süreci otomatik ve kişisel hissettirecek şekilde yönetiyoruz.
            </p>
            <div className="divider" />
            <div className="flex items-center gap-4 text-sm text-muted">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>7/24 Aktif</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-accent" />
                <span>Türkçe Dil Desteği</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-violet-400" />
                <span>Kişiselleştirilebilir</span>
              </div>
            </div>
          </RevealSection>
        </div>

        {/* Features */}
        <div className="space-y-8">
          {features.map((feature, index) => (
            <RevealSection key={index} delay={index % 3 + 1}>
              <div className={`group relative bg-white border ${feature.accentBorder} rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-charcoal/5 transition-all duration-500`}>
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.accent} opacity-50`} />
                
                <div className="relative grid grid-cols-1 md:grid-cols-2 gap-0">
                  {/* Left: Main Content */}
                  <div className="p-8 lg:p-10 border-b md:border-b-0 md:border-r border-current/10">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-14 h-14 rounded-xl bg-charcoal flex items-center justify-center text-white flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                        {feature.icon}
                      </div>
                      <div>
                        <span className={`font-serif text-4xl font-bold ${feature.stepColor} leading-none`}>
                          {feature.step}
                        </span>
                      </div>
                    </div>

                    <h3 className="font-serif text-2xl font-medium text-charcoal mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-xs text-accent font-semibold tracking-widest uppercase mb-4">
                      {feature.subtitle}
                    </p>
                    <p className="text-muted leading-relaxed">
                      {feature.description}
                    </p>
                  </div>

                  {/* Right: Details */}
                  <div className="p-8 lg:p-10">
                    <p className="text-xs font-semibold text-charcoal tracking-widest uppercase mb-5">
                      Ne Yapılıyor?
                    </p>
                    <ul className="space-y-4">
                      {feature.details.map((detail, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="mt-1 w-5 h-5 rounded-full bg-charcoal flex items-center justify-center flex-shrink-0">
                            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                              <polyline points="20 6 9 17 4 12"/>
                            </svg>
                          </div>
                          <span className="text-sm text-charcoal/80 leading-relaxed">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </RevealSection>
          ))}
        </div>

        {/* Bottom CTA */}
        <RevealSection className="mt-16 text-center">
          <div className="inline-flex flex-col items-center gap-4 bg-charcoal text-cream rounded-2xl px-8 py-8 max-w-lg mx-auto">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
              </svg>
            </div>
            <p className="font-serif text-xl font-medium text-center">
              Sistemi Salonunuza Özel Kuralım
            </p>
            <p className="text-cream/60 text-sm text-center leading-relaxed">
              Instagram hesabınızı, WhatsApp hattınızı ve hizmet menünüzü baz alarak 
              kişiselleştirilmiş bir sistem kuruyoruz.
            </p>
            <a href="#randevu" className="btn-primary bg-white text-charcoal hover:bg-cream text-xs tracking-widest uppercase">
              Ücretsiz Görüşme Planla
            </a>
          </div>
        </RevealSection>
      </div>
    </section>
  );
}
