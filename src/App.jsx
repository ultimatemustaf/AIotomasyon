import Header from './components/Header';
import Hero from './components/Hero';
import PainPoints from './components/PainPoints';
import Features from './components/Features';
import Calendly from './components/Calendly';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <PainPoints />
        <Features />
        <Calendly />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
