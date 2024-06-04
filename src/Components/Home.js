import './Home.css'

import aa from './images/aa.jpg';
import ab from './images/ab.jpg';
import ac from './images/ac.jpg';
import ad from './images/ad.jpg';
import wishlist from './images/wishlist.png';
import profile from './images/profile.jpeg';
import alex from './images/alex.jpg';
import amaz from './images/amaz.jpg';
import book from './images/book.jpg';
import daily from './images/daily.jpg';
import elec from './images/elec.jpg';
import mob from './images/mob.jpg';
import tv from './images/tv.jpg';
import fash from './images/fash.jpg';


function Home() {
    return ( 
<>
        <nav className="navbar navbar-expand-lg bg-body-tertiary homenav">
        <div className="container-fluid homenav">
        
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <a className="nav-link active navtext" aria-current="page" href="#">
                <img class="d-block w-100 wishlist" src={profile} alt=""/>
                </a></li>
              <li className="nav-item">
                <a className="nav-link active navtext" aria-current="page" href="#">
                <img class="d-block w-100 wishlist" src={wishlist} alt=""/>
                </a>
              </li>
            
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle navtext" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
               Categories
                </a>
                <ul className="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li><hr class="dropdown-divider"/></li>
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle navtext" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Brands
                </a>
                <ul className="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li><hr class="dropdown-divider"/></li>
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link navtext" aria-current="page" href="#">Prime Member</a>
              </li>
              <li className="nav-item">
                <a className="nav-link navtext" aria-current="page" href="#">Orders</a>
              </li>
             
            </ul>
            
          </div>
        </div>
      </nav>


        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100 carosalimg" src={aa}alt="First slide"/>
    </div>
    <div class="carousel-item carosalimg">
      <img class="d-block w-100" src={ac} alt="Second slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100 carosalimg" src={ad} alt="Third slide"/>
    </div>
    <div class="carousel-item carosalimg">
      <img class="d-block w-100" src={ab} alt="Forth slide"/>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
<div className="offers">

<img className="offerimg" src={elec} alt=""/>
<img className="offerimg" src={daily} alt=""/>
<img  className="offerimg"  src={mob} alt=""/>
<img className="offerimg"  src={alex} alt=""/>
<img className="offerimg"  src={book} alt=""/>
<img className="offerimg" src={amaz} alt=""/>
<img className="offerimg"  src={fash} alt=""/>






</div>


</>
     );

}

export default Home;