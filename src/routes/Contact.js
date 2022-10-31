
import ContactForm from '../Components/ContactForm'
import Footer from '../Components/Footer'
import Hero from '../Components/Hero'
import Navbar from '../Components/Navbar'
import contact from "../Images/contact.avif"

const Contact = () => {
  return (
    <div>
        <Navbar />
        <Hero  title="CONTACT." img={contact} />
        <ContactForm />
        <Footer />
    </div>
  )
}

export default Contact;