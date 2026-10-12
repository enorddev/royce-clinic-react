import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutStrip from './components/AboutStrip';
import Services from './components/Services';
import Plans from './components/Plans';
import Team from './components/Team';
import Reviews from './components/Reviews';
import Book from './components/Book';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <div className="grain-overlay"></div>
      <Navbar />
      <Hero />
      <AboutStrip />
      <Services />
      <Plans />
      <Team />
      <Reviews />
      <Book />
      <Contact />
      <Footer />
    </>
  );
}
