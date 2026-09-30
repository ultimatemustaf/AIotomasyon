import { RevealSection } from './hooks/useReveal';

function MinimalHeader() {
  return (
    <header className="py-6 bg-transparent">
      <div className="container-custom flex items-center justify-between">
        <a href="#" className="group flex items-center gap-1 no-underline" aria-label="Otorandevum Ana Sayfa">
          <span className="font-serif text-2xl font-medium text-charcoal tracking-tight">
            oto.
          </span>
          <span className="font-serif text-2xl font-light text-charcoal tracking-tight">
            randevum
          </span>
        </a>
        
        {/* Live Badge */}
        <div className="inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-700 text-xs font-semibold px-3 py-1.5 rounded-full border border-emerald-500/20">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          7/24 Kesintisiz Sistem
        </div>
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
      
      <main className="flex-grow pt-8 pb-16 flex items-center justify-center">
        <div className="container-custom w-full max-w-4xl flex flex-col items-center">
          
          {/* Badge / Small Pill Section */}
          <div className="w-full text-center mb-8">
            <RevealSection>
              <div className="inline-flex items-center gap-2 border border-border bg-white/80 backdrop-blur-sm text-charcoal text-xs md:text-sm font-semibold tracking-wide px-5 py-2.5 rounded-full shadow-sm">
                SONRAKİ AŞAMA: 4 DAKİKALIK SUNUMU İZLEYİN VE RANDEVUNUZU OLUŞTURUN
              </div>
            </RevealSection>
          </div>

          {/* YouTube VSL Section */}
          <RevealSection delay={1} className="w-full mb-12">
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
          <RevealSection delay={2} className="w-full">
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
