import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import BusinessSegments from './components/sections/BusinessSegments'
import SolarSection from './components/sections/SolarSection'
import WhyChooseUs from './components/sections/WhyChooseUs'
import ProcessTimeline from './components/sections/ProcessTimeline'
import ContactCTA from './components/sections/ContactCTA'
import LocationMap from './components/sections/LocationMap'
import FloatingWhatsApp from './components/ui/FloatingWhatsApp'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <BusinessSegments />
        <SolarSection />
        <WhyChooseUs />
        <ProcessTimeline />
        <LocationMap />
        <ContactCTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}
