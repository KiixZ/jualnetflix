import './index.css';
import { useEffect } from 'react';
import Pricing from './components/Pricing';
import Navbar from './components/Navbar';
import About from './components/About';
import Hero from './components/Hero';
// import Testimonials from './components/Testimonials';
import FAQ from './components/Faq';
import Footer from './components/Footer';
// import './App.css';

function App() {
  useEffect(() => {
    document.title = 'Tempat Jual Netflix Murah Terpercaya - REVS STORE';
    document.description  = 'Temukan berbagai paket Netflix yang tersedia di situs kami. Dapatkan harga terbaik dan nikmati streaming film dan acara TV terbaik di dunia hanya dengan beberapa klik saja.'
  }, []);
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Pricing/>
      {/* <Testimonials/> */}
      <FAQ/>
      <Footer/>
    </div>
  );
}

export default App;
