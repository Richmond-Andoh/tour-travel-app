import "./HeroStyle.css";

const Hero = (props) => {
  return (
    <div className="hero">
        <div className="hero-img">
            <img className="Intro-Image" src={props.img} alt="HeroImg"/>
        </div>
        <div className="hero-caption">
            <h1>{props.title}</h1>
        </div>
    </div>
  )
}

export default Hero;