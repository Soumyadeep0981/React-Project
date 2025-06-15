import Navbar from "./components/Navbar"
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Eye from "./components/Eye";
import Lower from "./components/Lower";
import Review from "./components/Review";
import Foxcard from "./components/Foxcard";
import Ready from "./components/Ready";
import Footer from "./components/Footer";
import LocomotiveScroll from 'locomotive-scroll';


function  App  ()  {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className="w-full h-full">
     <Navbar />
     <Hero /> 
     <Marquee />
     <About />
     <Eye/>
     <Lower/>
    <Review />
    <Foxcard/>
    <Ready/>
    <Footer/>
    </div>
  )
}

export default App








