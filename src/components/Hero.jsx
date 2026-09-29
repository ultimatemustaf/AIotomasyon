import { useState } from 'react';
import { RevealSection } from '../hooks/useReveal';

function VideoPlayer() {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="relative w-full rounded-2xl overflow-hidden border border-border bg-white shadow-2xl shadow-charcoal/8">
      {/* 16:9 Ratio Container */}
      <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal/90 to-charcoal-soft/95 flex flex-col items-center justify-center">
          {/* Decorative Pattern */}
          <div className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `repeating-linear-gradient(45deg, #C4A882 0, #C4A882 1px, transparent 0, transparent 50%)`,
              backgroundSize: '24px 24px'
            }}
          />
          
          {/* Content */}
          <div className="relative z-10 text-center px-8">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 text-cream/80 text-xs tracking-widest uppercase mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-light animate-pulse" />
              Tanıtım Videosu
            </div>

            {/* Play Button */}
            <button
              id="play-video-btn"
              onClick={() => setPlaying(true)}
              className="group w-20 h-20 bg-white/15 hover:bg-white/25 border border-white/30 hover:border-white/50 rounded-full flex items-center justify-center mx-auto mb-6 transition-all duration-300 hover:scale-110 backdrop-blur-sm"
              aria-label="Videoyu Oynat"
            >
              <svg className="w-8 h-8 text-white ml-1" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </button>

            <h3 className="font-serif text-white text-xl md:text-2xl font-medium mb-2">
              5 Dakikalık Sunum
            </h3>
            <p className="text-white/60 text-sm">
              Otorandevum'un salonunuza nasıl değer kattığını izleyin
            </p>
          </div>
        </div>
      </div>

      {/* Bullet Points Below Video */}
      <div className="grid grid-cols-3 divide-x divide-border border-t border-border">
        {[
          { icon: '⚡', text: '5 Dakika Yeterli', sub: 'Sistemin tamamı' },
          { icon: '🎯', text: 'Somut Örnekler', sub: 'Gerçek salon vakaları' },
          { icon: '📈', text: 'ROI Hesabı', sub: 'Geri dönüş analizi' },
        ].map((item, i) => (
          <div key={i} className="flex flex-col items-center text-center p-4 hover:bg-cream/50 transition-colors duration-200">
            <span className="text-xl mb-1">{item.icon}</span>
            <span className="text-xs font-semibold text-charcoal">{item.text}</span>
            <span className="text-xs text-muted mt-0.5">{item.sub}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="hero-gradient min-h-screen pt-32 pb-20 flex items-center" aria-labelledby="hero-heading">
      <div className="container-custom w-full">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <RevealSection className="flex justify-center mb-8">
            <div className="badge">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent">
                <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                <path d="M2 17l10 5 10-5"/>
                <path d="M2 12l10 5 10-5"/>
              </svg>
              Güzellik Salonları İçin Yapay Zekâ Otomasyonu
            </div>
          </RevealSection>

          {/* Main Heading */}
          <RevealSection delay={1} className="text-center mb-6">
            <h1 id="hero-heading" className="section-heading text-balance">
              Salonunuzu Büyütmek İçin Artık{' '}
              <span className="italic text-accent">Birine Güvenmek,</span>
              <br className="hidden md:block" />
              {' '}Müşteri Kaybetme Riski Almak{' '}
              <span className="relative inline-block">
                Zorunda Değilsiniz.
                <span className="absolute -bottom-1 left-0 right-0 h-px bg-accent/40" />
              </span>
            </h1>
          </RevealSection>

          {/* Subheading */}
          <RevealSection delay={2} className="text-center mb-10">
            <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto leading-relaxed font-light">
              7/24 DM'lere yanıt veren, randevuları takvime işleyen ve{' '}
              <strong className="text-charcoal font-medium">no-show'ları sıfıra indiren</strong>{' '}
              dijital altyapı.
            </p>
          </RevealSection>

          {/* CTAs */}
          <RevealSection delay={3} className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a
              id="hero-primary-cta"
              href="#randevu"
              className="btn-accent"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                <line x1="16" y1="2" x2="16" y2="6"/>
                <line x1="8" y1="2" x2="8" y2="6"/>
                <line x1="3" y1="10" x2="21" y2="10"/>
              </svg>
              Ücretsiz Strateji Görüşmesi
            </a>
            <a
              id="hero-secondary-cta"
              href="#nasil-calisir"
              className="btn-outline"
            >
              Nasıl Çalışır?
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 9l6 6 6-6"/>
              </svg>
            </a>
          </RevealSection>

          {/* Social Proof Strip */}
          <RevealSection delay={4} className="flex flex-wrap items-center justify-center gap-6 mb-16 text-sm text-muted">
            {[
              { value: '7/24', label: 'Kesintisiz Çalışma' },
              { value: '%100', label: 'DM Yanıt Oranı' },
              { value: '0', label: 'No-Show Hedef' },
            ].map((stat, i) => (
              <div key={i} className="flex items-center gap-2">
                {i > 0 && <span className="w-1 h-1 rounded-full bg-border-dark hidden sm:block" />}
                <span className="font-serif font-semibold text-charcoal text-base">{stat.value}</span>
                <span>{stat.label}</span>
              </div>
            ))}
          </RevealSection>

          {/* VSL Video Player */}
          <RevealSection delay={2}>
            <VideoPlayer />
          </RevealSection>
        </div>
      </div>
    </section>
  );
}
