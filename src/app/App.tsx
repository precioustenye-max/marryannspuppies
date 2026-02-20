import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import AvailablePuppies from './components/AvailablePuppies';
import AdoptionProcess from './components/AdoptionProcess';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <About />
        <AvailablePuppies />
        <AdoptionProcess />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
