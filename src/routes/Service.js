
import Footer from '../Components/Footer'
import Gallery from '../Components/Gallery'
import Hero from '../Components/Hero'
import Navbar from '../Components/Navbar'
import ServiceVid from '../Components/ServiceVid'
import Trip from '../Components/Trip'
import serviceImg from "../Images/serviceImg.jpeg"

const Service = () => {
  return (
    <div>
        <Navbar />
        <Hero title="OUR SERVICES" img={serviceImg}/>
        <Gallery />
        <Trip />
        <ServiceVid />
        <Footer />
    </div>
  )
}

export default Service