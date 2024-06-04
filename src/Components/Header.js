import React, { useState } from "react";
import { Link,NavLink } from "react-router-dom";
import './Header.css';
import FAR from './images/FAR.jpeg';

const Header = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
    onSearch(e.target.value);
  };
  return(
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid headnav menu">
  <a className="navbar-brand " href="#">
          <img src={FAR} className="ecomicon" alt=""></img>

        </a>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <li class="nav-item menu-items">
      
      <NavLink to="/"  aria-current="page">Home</NavLink>
    
          </li>
        <li class="nav-item menu-items">
      
    <NavLink to="/products"  aria-current="page">Products</NavLink>
  
        </li>
        <li class="nav-item menu-items">
       
       <NavLink to="/cart"  aria-current="page">Cart</NavLink>
      
           </li>
           <li class="nav-item menu-items">
       
       <NavLink to="/about"  aria-current="page">AboutUs</NavLink>
      
           </li>
           <li class="nav-item menu-items">
       
       <NavLink to="/contact"  aria-current="page">ContactUs</NavLink>
      
           </li>
        <li class="nav-item dropdown menu-items">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           Prime Membership
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action1</a></li>
            <li><a class="dropdown-item" href="#">Action2</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item menu-items">
          <a class="nav-link " aria-current="page">Orders</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
      <input
        type="text"
        placeholder="Search Products"
        value={searchQuery}
       onChange={handleSearchInputChange}
      />
      <button>Search</button>
      </form>
    </div>
  </div>
</nav>)

}



export default Header;