import React from 'react'
import Destination from '../Components/Destination';
import HeroPage from '../Components/HeroPage';
import Navbar from '../Components/Navbar'
import Trip from '../Components/Trip';
import Info from '../Components/Info';
import Footer from '../Components/Footer';
import Gallery from '../Components/Gallery';

const Home = () => {
  return (
    <div>
        <Navbar />
        <HeroPage />
        <Destination />
        <Trip />
        <Info />
        <Gallery />
        <Footer />
    </div>
  )
}

export default Home;