import './DestinationStyle.css'
import dubai1 from "../Images/dubai1.jpg";
import dubai2 from "../Images/dubai2.jpg";
import cali1 from "../Images/cali1.jpg";
import cali2 from "../Images/cali2.jpg"
import paris1 from "../Images/paris1.jpg"
import paris2 from "../Images/paris2.jpg"

const Destination = () => {
  return (
        <div class="container">
             <h1 className='fw-bolder mt-5 text-center'>Popular Destination</h1>
             <p className='fw-bolder text-center'>Travelling gives you the opportunity to see and learn new things within a time frame</p>
            <div class="row mt-5 destination">
                <div class="col-sm-6 mt-5">
                    <div className='container dubai-text'>
                        <h2 className='des1-heading'>DUBAI</h2>
                        <p className='des1-text'>
                            Dubai is an ultramodern city that has 
                            it all: golden beaches, world-class dining,
                            and gorgeous hotels. Since the Travelers' 
                            Choice Awards are based on reviews of places
                            to go, stay and things to do in destinations,
                            to rank as the world's best means a destination
                            has obtained stellar traveler reviews across all of 
                            its tourism sectors," Reid said.
                        </p>
                    </div>
                </div>
                <div class="col-sm-6">
                    <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active ca-item">
                                <img src={dubai1} className="d-block w-100" alt="..." />
                            </div>
                            <div class="carousel-item ca-item">
                                <img src={dubai2} className="d-block w-100" alt="..." />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row mt-5 pt-4">
                <div class="col-sm-6">
                    <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active ca-item">
                                <img src={cali1} className="d-block w-100" alt="..." />
                            </div>
                            <div class="carousel-item ca-item">
                                <img src={cali2} className="d-block w-100" alt="..." />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 mt-5 container">
                    <h2 className='des1-heading'>CALIFORNIA</h2>
                    <p className='des1-text'>
                    California City is a city located in 
                    northern Antelope Valley in Kern County,
                     California, United States. It is 100 miles 
                     (160 km) north of the city of Los Angeles, 
                     and the population was 14,120 at the 2010 census.
                      Covering 203.63 square miles (527.4 km2), 
                      California City has the third-largest 
                      land area of any city in the state of
                       California, and is the largest city by land area in 
                    California that is not a county seat.
                    </p>
                </div>
            </div>

            <div class="row mt-5">
                <div class="col-sm-6 mt-5">
                    <h2 className='fw-bolder'>PARIS CITY</h2>
                    <p className=''>
                    Paris (French pronunciation: "​paʁi" (listen)) 
                    is the capital and most populous city of France,
                     with an estimated population of 2,165,423 residents
                      in 2019 in an area of more than 105 km² (41 sq mi),
                      [4] making it the 34th most densely populated city 
                      in the world in 2020.[5] Since the 17th century,
                       Paris has been one of the world's major centres
                        of finance, diplomacy, commerce, fashion, 
                        gastronomy, and science. 
                   
                    </p>
                </div>
                <div class="col-sm-6">
                    <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active ca-item">
                                <img src={paris1} className="d-block w-100" alt="..."/>
                            </div>
                            <div class="carousel-item ca-item">
                                <img src={paris2} className="d-block w-100" alt="..."/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        
  )
}

export default Destination