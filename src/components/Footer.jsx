import { RevealSection } from '../hooks/useReveal';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-cream border-t border-white/10" role="contentinfo">
      {/* Final CTA Banner */}
      <div className="border-b border-white/10">
        <div className="container-custom py-16">
          <RevealSection className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-medium mb-2 tracking-tight">
                Hazır Olduğunuzda Buradayız.
              </h2>
              <p className="text-cream/50 leading-relaxed max-w-md">
                Binlerce DM cevapsız kalırken, rakipleriniz randevularını doluyor. 
                Sistemi kurmak için beklemenin maliyeti var.
              </p>
            </div>
            <a
              id="footer-cta"
              href="#randevu"
              className="flex-shrink-0 btn-accent"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                <line x1="16" y1="2" x2="16" y2="6"/>
                <line x1="8" y1="2" x2="8" y2="6"/>
                <line x1="3" y1="10" x2="21" y2="10"/>
              </svg>
              Ücretsiz Görüşme Planla
            </a>
          </RevealSection>
        </div>
      </div>

      {/* Footer Content */}
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-1 mb-4">
              <span className="font-serif text-2xl font-medium text-cream">oto.</span>
              <span className="font-serif text-2xl font-light text-cream">randevum</span>
            </div>
            <p className="text-cream/40 text-sm leading-relaxed max-w-xs">
              Güzellik salonları için 7/24 yapay zekâ otomasyonu. 
              DM'ler, randevular, hatırlatmalar — her şey otomatik.
            </p>
            <div className="flex gap-3 mt-6">
              {[
                { label: 'Instagram', href: '#', icon: (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                  </svg>
                )},
                { label: 'WhatsApp', href: '#', icon: (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
                  </svg>
                )},
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-cream/50 hover:text-cream hover:border-white/40 transition-all duration-200"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <p className="text-xs font-semibold text-cream/30 tracking-widest uppercase mb-4">Sayfalar</p>
            <ul className="space-y-3">
              {[
                { href: '#nasil-calisir', label: 'Nasıl Çalışır' },
                { href: '#ozellikler', label: 'Özellikler' },
                { href: '#sss', label: 'SSS' },
                { href: '#randevu', label: 'Randevu Al' },
              ].map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-cream/50 hover:text-cream transition-colors duration-200">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-semibold text-cream/30 tracking-widest uppercase mb-4">İletişim</p>
            <ul className="space-y-3">
              <li>
                <a href="mailto:merhaba@otorandevum.com" className="text-sm text-cream/50 hover:text-cream transition-colors duration-200">
                  merhaba@otorandevum.com
                </a>
              </li>
              <li>
                <span className="text-sm text-cream/50">Türkiye — Uzaktan Hizmet</span>
              </li>
              <li>
                <a href="#randevu" className="text-sm text-accent-light hover:text-cream transition-colors duration-200 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-light animate-pulse" />
                  Şu an aktif
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-cream/30">
            © {currentYear} Otorandevum. Tüm hakları saklıdır.
          </p>
          <div className="flex gap-6">
            {['Gizlilik Politikası', 'Kullanım Şartları'].map((link) => (
              <a key={link} href="#" className="text-xs text-cream/30 hover:text-cream/60 transition-colors duration-200">
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
