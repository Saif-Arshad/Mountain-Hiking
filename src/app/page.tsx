'use client'
import '../Styles/Home.scss'
import Whyus from '../SubHome/Whyus';
export default function Home() {
  return (
    <>
    <div className="home">
      <div className="img-div">
        <h1>Adventure Begins Here</h1>
          <p>Choose from thousands of Organized Adventures

</p>
<button>Check out </button>
        
      </div>
      <div className="testimonail">
                      <div >
<img src="https://pakistantravelplaces.com/wp-content/uploads/2018/12/Destinations-1.png" alt="Destinations icon" width="80" height="80" title="Destinations-1"/>
<h3 >50+ Destinations</h3>
                            </div>
                            <div>
<img src="https://pakistantravelplaces.com/wp-content/uploads/2018/12/Best-Price-Guaranteed-1.png" alt="Best-Price-Guaranteed" width="80" height="80" title="Best-Price-Guaranteed-1"/>
<h3>Best Price Guaranteed</h3>
</div>
                            <div>
<img src="https://pakistantravelplaces.com/wp-content/uploads/2018/12/100-Customer-Satisfaction-1.png" alt="100-Customer-Satisfaction" width="80" height="80" title="100-Customer-Satisfaction-1"/>
<h3 >Eco Friendly Tourism</h3>
</div>
                            <div>
<img src="https://pakistantravelplaces.com/wp-content/uploads/2018/12/Super-Fast-Booking-1.png" alt="Super-Fast-Booking" width="80" height="80" title="Super-Fast-Booking-1"/>
<h3 >Super Fast Booking</h3>
          </div>
      </div>
    </div>
    <Whyus/>
    </>
  );
}
