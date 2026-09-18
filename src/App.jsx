import Nav from './components/Nav'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Manifesto from './components/Manifesto'
import Experience from './components/Experience'
import Micro from './components/Micro'
import Instructors from './components/Instructors'
import Pricing from './components/Pricing'
import Prep from './components/Prep'
import Booking from './components/Booking'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Manifesto />
        <Experience />
        <Micro />
        <Instructors />
        <Pricing />
        <Prep />
        <Booking />
      </main>
      <Footer />
    </>
  )
}
