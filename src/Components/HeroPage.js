import "./HeroPageStyle.css";
import hero1 from "../Images/hero1.jpg";

const HeroPage = () => {
    return (
        <div className="hero-page">
            <div className="hero-img">
               <img className="Intro-Image" src={hero1} alt="IntroImg"/>
            </div>
            <div className="hero-caption">
                <h1>Your Journey Your Story</h1>
                <p>Choose your Prefered Destination</p>
                   <a href="/">
                     Tour Plan
                    </a>
            </div>
        </div>
    )
}

export default HeroPage