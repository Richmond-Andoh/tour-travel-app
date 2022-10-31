import AboutSession from '../Components/AboutSession';
import Footer from '../Components/Footer';
import Hero from '../Components/Hero';
import Navbar from '../Components/Navbar';

import hero from "../Images/hero.jpg";

const About = () => {
  return (
    <div>
      
        <Hero title="ABOUT." img={hero}/>
        <AboutSession />
        <Footer />
        <Navbar />
    </div>
  )
}

export default About;