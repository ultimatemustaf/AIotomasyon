import { RevealSection } from './hooks/useReveal';

function MinimalHeader() {
  return (
    <header className="py-6 bg-transparent">
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

function SimpleFooter() {
  return (
    <footer className="py-8 bg-transparent border-t border-border/40 mt-12">
      <div className="container-custom flex items-center justify-center text-center">
        <p className="text-sm text-muted">
          &copy; {new Date().getFullYear()} Otorandevum. Tüm hakları saklıdır.
        </p>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#F9F8F6] flex flex-col font-sans">
      <MinimalHeader />
      
      <main className="flex-grow pt-12 pb-16 flex items-center justify-center">
        <div className="container-custom w-full max-w-3xl flex flex-col items-center">
          
          {/* Title Section */}
          <div className="w-full text-center mb-12">
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
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.2] tracking-tight text-charcoal mb-5 text-balance">
                Salonunuzu Büyütmek İçin{' '}
                <span className="italic text-accent">İnsan Hatalarına</span>{' '}
                Son Verin.
              </h1>
            </RevealSection>
            
            <RevealSection delay={2}>
              <p className="text-base md:text-lg text-muted max-w-2xl mx-auto leading-[1.6] font-light">
                7/24 randevu alan, DM'lere yanıt veren ve no-show'ları sıfıra indiren yapay zekâ altyapısı. Aşağıdan sunumu izleyin ve görüşmenizi planlayın.
              </p>
            </RevealSection>
          </div>

          {/* YouTube VSL Section */}
          <RevealSection delay={3} className="w-full mb-16">
            <div className="w-full bg-white rounded-2xl overflow-hidden border border-border shadow-2xl shadow-charcoal/5">
              <div className="relative w-full aspect-video">
                <iframe 
                  src="https://www.youtube.com/embed/YOUR_YOUTUBE_VIDEO_ID" 
                  title="YouTube video player" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-full"
                ></iframe>
              </div>
            </div>
          </RevealSection>
          
          {/* Calendly Widget Section */}
          <RevealSection delay={4} className="w-full">
            <div className="w-full bg-white rounded-2xl overflow-hidden border border-border shadow-2xl shadow-charcoal/5 min-h-[700px]">
              <iframe 
                src="https://calendly.com/fkonur2/check-up-gorusmesi?hide_landing_page_details=1&hide_gdpr_banner=1"
                width="100%"
                height="100%"
                frameBorder="0"
                className="w-full min-h-[700px]"
                title="Calendly Randevu Al"
              ></iframe>
            </div>
          </RevealSection>

        </div>
      </main>

      <SimpleFooter />
    </div>
  );
}
