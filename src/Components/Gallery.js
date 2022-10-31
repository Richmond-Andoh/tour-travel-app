import "./GalleryStyle.css";

import g1 from "../Images/g1.webp"
import g2 from "../Images/g2.jpg"
import g3 from "../Images/g3.jpg"
import g4 from "../Images/g4.jpg"
import g5 from "../Images/g5.jpg"
import g6 from "../Images/g6.webp"

const Gallery = () => {
  return (
    <div className="my-5">
        <h1 className="text-center fw-bolder mt-5 mb-4">Our Gallery</h1>
        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
                <div className="carousel-item active g-item">
                <img src={g1} class="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item g-item">
                <img src={g2} class="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item g-item">
                <img src={g3} class="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item g-item">
                <img src={g4} class="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item g-item">
                <img src={g5} class="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item g-item">
                 <img src={g6} class="d-block w-100" alt="..." />
                 
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    </div>
  )
}

export default Gallery