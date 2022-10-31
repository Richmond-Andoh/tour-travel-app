import "./TripStyle.css";
import trip2 from "../Images/trip2.jpg"
import trip1 from "../Images/trip1.jpg"
import trip3 from "../Images/trip3.webp"
import trip6 from "../Images/trip6.jpg"
import trip5 from "../Images/trip5.jpg"
import trip4 from "../Images/trip4.jpg"

const Trip = () => {
  return (
    <div className="container my-5 fw-bolder">
        <h1 className="text-center">Recent Trips</h1>
        <p className="text-center">You can discover special places with the help of Google Map</p>
        <div className="row mt-4">
            <div className="col-sm-4">
                <div class="wrapper d-flex align-items-center justify-content-center">
                   <div class="card">
                        <div class="img-container position-relative w-100 h-100">
                            <img src={trip1} alt=".." />
                            <img src={trip2} alt=".." />
                        </div>
                        <div class="box w-100 h-100 position-absolute d-flex align-items-center justify-content-center">
                            <div class="inner-content d-flex flex-column align-content-center justify-content-center">
                                <div class="h3 mx-1">Trip in Los Angeles <span class="fas fa-heart text-danger"></span></div>
                                <p class="px-3 mt-3">
                                Looking for a “Day in LA” tour? You’ve
                                 come to the right place! However, day 
                                 tours of LA are anything but identical.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 

            <div className="col-sm-4">
                <div class="wrapper d-flex align-items-center justify-content-center">
                   <div class="card">
                        <div class="img-container position-relative w-100 h-100">
                            <img src={trip3} alt=".." />
                            <img src={trip4} alt=".." />
                        </div>
                        <div class="box w-100 h-100 position-absolute d-flex align-items-center justify-content-center">
                            <div class="inner-content d-flex flex-column align-content-center justify-content-center">
                                <div class="h3 mx-1">Trips in Malaysia <span class="fas fa-heart text-danger"></span></div>
                                <p class="px-3 mt-3">
                                Malaysia is a Southeast Asian 
                                country occupying parts of the Malay 
                                Peninsula and the island of Borneo. It's known
                                 for its beaches, rainforests. 
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-sm-4">
                <div class="wrapper d-flex align-items-center justify-content-center">
                   <div class="card">
                        <div class="img-container position-relative w-100 h-100">
                            <img src={trip5} alt=".." />
                            <img src={trip6} alt=".." />
                        </div>
                        <div class="box w-100 h-100 position-absolute d-flex align-items-center justify-content-center">
                            <div class="inner-content d-flex flex-column align-content-center justify-content-center">
                                <div class="h2 m-0 text-center">Trips in Indonesia<span class="fas fa-heart text-danger"></span></div>
                                <p class="px-3 mt-3 text-center">
                                Indonesia, officially the Republic of 
                                Indonesia, is a country in Southeast Asia
                                 and Oceania between the Indian and Pacific
                                  oceans.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Trip;