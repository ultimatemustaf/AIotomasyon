import { useState, useEffect } from 'react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#nasil-calisir', label: 'Nasıl Çalışır' },
    { href: '#ozellikler', label: 'Özellikler' },
    { href: '#sss', label: 'SSS' },
  ];

  return (
    <header
      className={`nav-header fixed top-0 left-0 right-0 z-50 py-5 transition-all duration-500 ${
        scrolled
          ? 'bg-cream/95 backdrop-blur-xl shadow-sm shadow-charcoal/5'
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="group flex items-center gap-1 no-underline" aria-label="Otorandevum Ana Sayfa">
          <span className="font-serif text-2xl font-medium text-charcoal tracking-tight">
            oto.
          </span>
          <span className="font-serif text-2xl font-light text-charcoal tracking-tight">
            randevum
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Ana Navigasyon">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted hover:text-charcoal transition-colors duration-200 font-medium tracking-wide"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a
            id="header-cta"
            href="#randevu"
            className="btn-primary text-xs tracking-widest uppercase"
          >
            Takvimden Gün Seç
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          id="mobile-menu-toggle"
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menüyü Aç/Kapat"
          aria-expanded={mobileOpen}
        >
          <span className={`block w-6 h-0.5 bg-charcoal transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-charcoal transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-charcoal transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-400 ${mobileOpen ? 'max-h-80' : 'max-h-0'}`}>
        <div className="container-custom py-6 border-t border-border mt-4 flex flex-col gap-4 bg-cream/98 backdrop-blur-xl">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-charcoal font-medium py-2 border-b border-border/50 last:border-0"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#randevu"
            className="btn-primary justify-center mt-2 text-xs tracking-widest uppercase"
            onClick={() => setMobileOpen(false)}
          >
            Takvimden Gün Seç
          </a>
        </div>
      </div>
    </header>
  );
}
