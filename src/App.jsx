import { useState } from 'react';
import { RevealSection } from './hooks/useReveal';

function MinimalHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-6 bg-transparent">
      <div className="container-custom flex items-center justify-center">
        <a href="#" className="group flex items-center gap-1 no-underline" aria-label="Otorandevum Ana Sayfa">
          <span className="font-serif text-2xl font-medium text-charcoal tracking-tight">
            oto.
          </span>
          <span className="font-serif text-2xl font-light text-charcoal tracking-tight">
            randevum
          </span>
        </a>
      </div>
    </header>
  );
}

function VideoPlayer() {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="relative w-full rounded-2xl overflow-hidden border border-border bg-white shadow-2xl shadow-charcoal/5 transition-all duration-300 hover:shadow-charcoal/10 h-full flex flex-col">
      <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal/90 to-charcoal-soft/95 flex flex-col items-center justify-center">
          <div className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `repeating-linear-gradient(45deg, #C4A882 0, #C4A882 1px, transparent 0, transparent 50%)`,
              backgroundSize: '24px 24px'
            }}
          />
          
          <div className="relative z-10 text-center px-8">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 text-cream/80 text-xs tracking-widest uppercase mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-light animate-pulse" />
              Tanıtım Videosu
            </div>

            <button
              id="play-video-btn"
              onClick={() => setPlaying(true)}
              className="group w-16 h-16 md:w-20 md:h-20 bg-white/15 hover:bg-white/25 border border-white/30 hover:border-white/50 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 transition-all duration-300 hover:scale-110 backdrop-blur-sm"
              aria-label="Videoyu Oynat"
            >
              <svg className="w-6 h-6 md:w-8 md:h-8 text-white ml-1" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </button>

            <h3 className="font-serif text-white text-lg md:text-2xl font-medium mb-2">
              5 Dakikalık Sunum
            </h3>
            <p className="text-white/60 text-xs md:text-sm">
              Otorandevum'un salonunuza nasıl değer kattığını izleyin
            </p>
          </div>
        </div>
      </div>
      <div className="p-6 md:p-8 flex-grow flex flex-col justify-center bg-white text-center">
        <h4 className="font-serif text-xl font-medium text-charcoal mb-4">Sistem Nasıl Çalışıyor?</h4>
        <div className="grid grid-cols-3 gap-4 divide-x divide-border">
          <div className="flex flex-col items-center">
            <span className="text-2xl mb-2">⚡</span>
            <span className="text-xs font-semibold text-charcoal">Hızlı Kurulum</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-2xl mb-2">🤖</span>
            <span className="text-xs font-semibold text-charcoal">Yapay Zekâ</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-2xl mb-2">📈</span>
            <span className="text-xs font-semibold text-charcoal">Artan Ciro</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function CalendlyWidget() {
  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-border shadow-2xl shadow-charcoal/5 h-full flex flex-col">
      <div 
        className="calendly-inline-widget w-full flex-grow flex flex-col" 
        style={{ minHeight: '650px' }}
      >
        <div className="flex-grow bg-cream flex flex-col items-center justify-center p-8 text-center">
          <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-charcoal flex items-center justify-center mb-6">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
              <line x1="16" y1="2" x2="16" y2="6"/>
              <line x1="8" y1="2" x2="8" y2="6"/>
              <line x1="3" y1="10" x2="21" y2="10"/>
            </svg>
          </div>
          
          <h3 className="font-serif text-xl md:text-2xl font-medium text-charcoal mb-3">
            Ücretsiz Görüşme Planla
          </h3>
          <p className="text-muted text-xs md:text-sm leading-relaxed mb-6 max-w-xs">
            Calendly bağlantınızı ekledikten sonra bu alan interaktif randevu takvimine dönüşecek.
          </p>

          <div className="w-full max-w-xs bg-white rounded-xl border border-border overflow-hidden shadow-sm">
             <div className="bg-charcoal text-cream px-4 py-3 flex items-center justify-between">
                <span className="text-sm font-medium mx-auto">Ekim 2026</span>
             </div>
             <div className="p-4 border-b border-border">
                <div className="grid grid-cols-7 gap-1 text-center mb-2">
                  {['Pt', 'Sa', 'Ça', 'Pe', 'Cu', 'Ct', 'Pz'].map(d => (
                    <span key={d} className="text-xs text-muted font-medium py-1">{d}</span>
                  ))}
                </div>
                <div className="grid grid-cols-7 gap-1 text-center">
                  {Array.from({ length: 14 }).map((_, i) => (
                    <div key={i} className="text-xs py-1.5 text-border-dark">
                      {i + 1}
                    </div>
                  ))}
                </div>
             </div>
             <div className="p-4 bg-cream/30 text-xs text-muted font-medium">
                Takvim Yükleniyor...
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#F9F8F6] flex flex-col font-sans">
      <MinimalHeader />
      
      <main className="flex-grow pt-28 pb-16 flex items-center justify-center">
        <div className="container-custom w-full max-w-6xl">
          
          <div className="max-w-3xl mx-auto text-center mb-12">
            <RevealSection>
              <div className="inline-flex items-center gap-2 border border-border bg-white/80 backdrop-blur-sm text-charcoal text-xs font-medium tracking-widest uppercase px-4 py-1.5 rounded-full mb-6 shadow-sm">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent">
                  <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                  <path d="M2 17l10 5 10-5"/>
                  <path d="M2 12l10 5 10-5"/>
                </svg>
                Güzellik Salonlarına Özel
              </div>
            </RevealSection>
            
            <RevealSection delay={1}>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.1] tracking-tight text-charcoal mb-5 text-balance">
                Salonunuzu Büyütmek İçin{' '}
                <span className="italic text-accent">İnsan Hatalarına</span>{' '}
                Son Verin.
              </h1>
            </RevealSection>
            
            <RevealSection delay={2}>
              <p className="text-base md:text-lg text-muted max-w-2xl mx-auto leading-relaxed font-light">
                7/24 randevu alan, DM'lere yanıt veren ve no-show'ları sıfıra indiren yapay zekâ altyapısı. Aşağıdan sunumu izleyin ve görüşmenizi planlayın.
              </p>
            </RevealSection>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            <RevealSection delay={3} className="h-full">
              <VideoPlayer />
            </RevealSection>
            
            <RevealSection delay={4} className="h-full">
              <CalendlyWidget />
            </RevealSection>
          </div>

        </div>
      </main>
    </div>
  );
}
