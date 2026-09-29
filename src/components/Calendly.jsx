import { RevealSection } from '../hooks/useReveal';

export default function Calendly() {
  return (
    <section id="randevu" className="py-24 lg:py-32 bg-charcoal text-cream" aria-labelledby="calendly-heading">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left: Content */}
          <div>
            <RevealSection>
              <div className="badge border-white/20 bg-white/10 text-cream/70 mb-6 backdrop-blur-none">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                  <line x1="16" y1="2" x2="16" y2="6"/>
                  <line x1="8" y1="2" x2="8" y2="6"/>
                  <line x1="3" y1="10" x2="21" y2="10"/>
                </svg>
                Ücretsiz Danışmanlık
              </div>
            </RevealSection>

            <RevealSection delay={1}>
              <h2 id="calendly-heading" className="font-serif text-4xl md:text-5xl font-medium leading-[1.1] mb-6 tracking-tight">
                Ücretsiz 15 Dakikalık{' '}
                <span className="italic text-accent-light">Strateji Görüşmesi</span>{' '}
                Planlayın
              </h2>
            </RevealSection>

            <RevealSection delay={2}>
              <p className="text-cream/60 text-lg leading-relaxed mb-8">
                Okul veya mesai saatlerinize takılmadan, sizin için en uygun zamanı seçin. 
                Görüşmede salonunuza özel büyüme planını birlikte çıkaracağız.
              </p>
            </RevealSection>

            {/* What to expect */}
            <RevealSection delay={3}>
              <div className="space-y-4 mb-8">
                {[
                  {
                    icon: '🎯',
                    title: 'Salonunuza Özel Analiz',
                    desc: 'Mevcut süreçlerinizi inceleyip otomasyon fırsatlarını tespit ediyoruz',
                  },
                  {
                    icon: '💡',
                    title: 'Hızlı Kazanım Planı',
                    desc: 'İlk 30 günde hangi metriklerde iyileşme bekleneceğini paylaşıyoruz',
                  },
                  {
                    icon: '🔒',
                    title: 'Taahhüt Yok, Baskı Yok',
                    desc: 'Sizi yönlendiriyoruz; karar tamamen size ait',
                  },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 border border-white/10 rounded-xl hover:border-white/20 hover:bg-white/5 transition-all duration-300">
                    <span className="text-2xl flex-shrink-0">{item.icon}</span>
                    <div>
                      <p className="font-medium text-cream mb-0.5">{item.title}</p>
                      <p className="text-sm text-cream/50">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </RevealSection>

            {/* Trust badges */}
            <RevealSection delay={4}>
              <div className="flex flex-wrap gap-3">
                {['Tamamen Ücretsiz', 'Sadece 15 Dakika', 'Online Toplantı'].map((badge, i) => (
                  <span key={i} className="flex items-center gap-1.5 text-xs text-cream/50 border border-white/10 rounded-full px-3 py-1.5">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    {badge}
                  </span>
                ))}
              </div>
            </RevealSection>
          </div>

          {/* Right: Calendly Widget */}
          <RevealSection delay={2}>
            <div className="bg-white rounded-2xl overflow-hidden shadow-2xl shadow-black/30">
              {/* Calendly iframe - replace with actual link */}
              <div 
                className="calendly-inline-widget" 
                style={{ minWidth: '100%', height: '650px' }}
              >
                {/* Placeholder UI when Calendly link is not configured */}
                <div className="h-full bg-cream flex flex-col items-center justify-center p-8 text-center">
                  <div className="w-16 h-16 rounded-2xl bg-charcoal flex items-center justify-center mb-6">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                      <line x1="16" y1="2" x2="16" y2="6"/>
                      <line x1="8" y1="2" x2="8" y2="6"/>
                      <line x1="3" y1="10" x2="21" y2="10"/>
                    </svg>
                  </div>
                  
                  <h3 className="font-serif text-2xl font-medium text-charcoal mb-3">
                    Randevu Takvimi
                  </h3>
                  <p className="text-muted text-sm leading-relaxed mb-6 max-w-xs">
                    Calendly bağlantınızı ekledikten sonra bu alan interaktif randevu takvimine dönüşecek.
                  </p>

                  {/* Calendar Visual Mock */}
                  <div className="w-full max-w-xs bg-white rounded-xl border border-border overflow-hidden shadow-sm">
                    {/* Calendar Header */}
                    <div className="bg-charcoal text-cream px-4 py-3 flex items-center justify-between">
                      <button className="text-cream/60 hover:text-cream transition-colors">←</button>
                      <span className="text-sm font-medium">Ekim 2026</span>
                      <button className="text-cream/60 hover:text-cream transition-colors">→</button>
                    </div>
                    {/* Calendar Grid */}
                    <div className="p-4">
                      <div className="grid grid-cols-7 gap-1 text-center mb-2">
                        {['Pt', 'Sa', 'Ça', 'Pe', 'Cu', 'Ct', 'Pz'].map(d => (
                          <span key={d} className="text-xs text-muted font-medium py-1">{d}</span>
                        ))}
                      </div>
                      <div className="grid grid-cols-7 gap-1 text-center">
                        {Array.from({ length: 35 }, (_, i) => {
                          const day = i - 1;
                          const isToday = day === 14;
                          const isAvailable = [3,5,7,8,10,12,14,15,17,19,21,22].includes(day);
                          const isEmpty = day <= 0 || day > 31;
                          return (
                            <div
                              key={i}
                              className={`
                                text-xs py-1.5 rounded-lg cursor-pointer transition-colors
                                ${isEmpty ? '' : isToday ? 'bg-accent text-white font-semibold' : isAvailable ? 'hover:bg-accent/10 text-charcoal' : 'text-border-dark'}
                              `}
                            >
                              {!isEmpty && day}
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Time Slots */}
                    <div className="border-t border-border p-4">
                      <p className="text-xs text-muted font-medium mb-3 tracking-widest uppercase">Uygun Saatler</p>
                      <div className="grid grid-cols-2 gap-2">
                        {['10:00', '11:00', '14:00', '15:00', '16:00', '17:00'].map(t => (
                          <button
                            key={t}
                            className="text-xs border border-border rounded-lg py-2 hover:border-accent hover:text-accent hover:bg-accent/5 transition-all duration-200"
                          >
                            {t}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  <p className="text-xs text-muted/60 mt-4">
                    Takvim entegrasyonu için Calendly URL\'nizi girin
                  </p>
                </div>
              </div>
            </div>
          </RevealSection>
        </div>
      </div>
    </section>
  );
}
