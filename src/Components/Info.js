import "./InfoStyle.css";

const Info = () => {
  return (
    <div>
        <div className='info text-center'>
            <h2 className='py-2'>A Lit bit more about Richy's Travelling and Tour</h2>
            <p>Here's why people prefer Richy Travelling and Tour</p>
            <div className="container">
                <div className='row py-4'>
                <div className='col-sm-4'>
                   <h4>Get the best deals</h4>
                   <p>  We search and compare real-time prices on flights, hotels and cars so you can find the cheapest,
                      quickest and best travel deals
                    </p>
                  
                </div>
                <div className='col-sm-4'>
                    <h4>Best deals</h4>
                    <p>
                    We search all corners of the internet – from major booking sites to individual hotel websites – so you can easily compare the best deals on hotels worldwide
                    </p>
                </div>
                <div className='col-sm-4'>
                    <h4>Guest ratings</h4>
                    <p>
                    Hotel photos and star ratings don’t tell you everything. We search across the major booking and hotel sites and collect guest reviews posted online so that you can get the full story
                    </p>
                </div>
                </div>
             </div>
        </div>
    </div>
  )
}

export default Info;