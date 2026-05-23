import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import BusinessSegments from './components/sections/BusinessSegments'
import WhyChooseUs from './components/sections/WhyChooseUs'
import ProcessTimeline from './components/sections/ProcessTimeline'
import ContactCTA from './components/sections/ContactCTA'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <BusinessSegments />
        <WhyChooseUs />
        <ProcessTimeline />
        <ContactCTA />
      </main>
      <Footer />
    </>
  )
}
