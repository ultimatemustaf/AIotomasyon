import { RevealSection } from '../hooks/useReveal';

const painPoints = [
  {
    number: '01',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"/>
        <path d="M12 8V12"/>
        <path d="M12 16H12.01"/>
      </svg>
    ),
    title: '"Ben Zaten Mesajlara Bakıyorum"',
    subtitle: 'Kaybettiğiniz 3 Şey',
    description: 'Makyaj yapılırken, müşteriyle konuşurken veya gece 23:00\'te gelen o DM\'e bakamadığınızda — o müşteri rakibinize gidiyor.',
    bullets: [
      'Cevapsız her mesaj ortalama 1,200₺ kaybedilen randevudur',
      'Potansiyel müşteriniz 3 dakika içinde cevap alamazsa ayrılıyor',
      'Gece saatleri %40 daha fazla DM geliyor — siz uyurken',
    ],
    tag: 'Fırsat Kaybı',
    tagColor: 'bg-red-50 text-red-600 border-red-100',
  },
  {
    number: '02',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    title: 'Personel Bağımlılığını Sıfırlamak',
    subtitle: 'Büyümenin Önündeki Duvar',
    description: 'Resepsiyonist işe alıyorsunuz, eğitiyorsunuz, müşteri tabanını tanıtıyorsunuz — sonra o çalışan kendi salonunu açıyor ve müşterilerinizi de götürüyor.',
    bullets: [
      'Ortalama resepsiyonist 14 ay sonra ayrılıyor',
      'Müşteri verisi çalışana değil sisteme ait olmalı',
      'İnsan hataları randevu çakışmalarına sebep olur',
    ],
    tag: 'Kritik Risk',
    tagColor: 'bg-amber-50 text-amber-600 border-amber-100',
  },
  {
    number: '03',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
    title: 'Gece 23:00\'teki Müşteri Adayı',
    subtitle: 'Anında Randevuya Dönüştürme',
    description: 'Güzellik hizmetleri impulsif kararlarla satın alınır. O anlık ilgiyi yakalamak için 24 saat beklemenin lüksü yok.',
    bullets: [
      'Mesai saati dışı gelen taleplerin %67\'si yanıt almadan kapanır',
      'Anında yanıt veren salonlar 5x daha fazla randevu alır',
      'Otomasyon sistemi hiç yorulmadan, hiç izin almadan çalışır',
    ],
    tag: 'Büyüme Fırsatı',
    tagColor: 'bg-emerald-50 text-emerald-600 border-emerald-100',
  },
];

export default function PainPoints() {
  return (
    <section id="nasil-calisir" className="py-24 lg:py-32 bg-white border-t border-border" aria-labelledby="pain-heading">
      <div className="container-custom">
        {/* Section Header */}
        <RevealSection className="max-w-2xl mb-16">
          <div className="badge mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            Büyüme İkilemi
          </div>
          <h2 id="pain-heading" className="section-subheading mb-4">
            "Ben Zaten Mesajlara Bakıyorum" Diyen Salonların{' '}
            <span className="italic text-accent">Kaçırdığı</span>{' '}3 Şey
          </h2>
          <p className="text-muted leading-relaxed">
            Büyümek istiyorsunuz ama sisteminiz büyümenizi desteklemiyor. 
            İşte sizi geri tutan üç kritik boşluk.
          </p>
        </RevealSection>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {painPoints.map((point, index) => (
            <RevealSection key={index} delay={index + 1}>
              <div className="group relative bg-cream border border-border rounded-2xl p-8 h-full hover:shadow-2xl hover:shadow-charcoal/6 transition-all duration-500 hover:-translate-y-1">
                {/* Number */}
                <span className="font-serif text-8xl font-bold text-border absolute top-4 right-6 leading-none select-none">
                  {point.number}
                </span>

                {/* Tag */}
                <div className={`inline-flex items-center gap-1.5 border text-xs font-medium px-3 py-1.5 rounded-full mb-6 ${point.tagColor}`}>
                  {point.tag}
                </div>

                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-charcoal/5 flex items-center justify-center mb-6 text-charcoal group-hover:bg-accent group-hover:text-white transition-all duration-300">
                  {point.icon}
                </div>

                {/* Content */}
                <h3 className="font-serif text-xl font-medium text-charcoal mb-1 leading-snug">
                  {point.title}
                </h3>
                <p className="text-xs text-accent font-medium tracking-widest uppercase mb-4">
                  {point.subtitle}
                </p>
                <p className="text-sm text-muted leading-relaxed mb-6">
                  {point.description}
                </p>

                {/* Bullet Points */}
                <ul className="space-y-3">
                  {point.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm">
                      <span className="mt-1 flex-shrink-0 w-4 h-4 rounded-full border-2 border-accent/40 flex items-center justify-center">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                      </span>
                      <span className="text-charcoal/80 leading-snug">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>
  );
}
