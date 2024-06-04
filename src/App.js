import React, { useState, useEffect } from "react";
import commerce from "./lib/commerce";
import './App.css';
import ProductsList from "./Components/ProductList";
import Header from "./Components/Header";
import CartPage from "./Components/CartPage";
import {Routes,Route,Link } from "react-router-dom";
import AboutUs from "./Components/Aboutus";
import ContactUs from "./Components/Contactus";
import Home from "./Components/Home";


const App = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetchProducts(); 
  }, []);
  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };

  
  const fetchProducts = () => {
    commerce.products.list().then((products) => {
      setProducts(products.data);
      setFilteredProducts(products.data); 
    }).catch((error) => {
      console.log('There was an error fetching the products', error)
    });
  }
  

  const handleSearch = (query) => {
    if (query.trim() === "") {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(product => product.name.toLowerCase().includes(query.toLowerCase()));
      setFilteredProducts(filtered);
    }
  };



  return (
   
      <div className="app">
        <Header onSearch={handleSearch} />
        <Routes>
          <Route path="/products" element={ <ProductsList products={filteredProducts} onAddToCart={handleAddToCart} />}/>
            <Route path="/cart" element={<CartPage cart={cart}/>}/>
            <Route path="/about" element={<AboutUs/>}/>
            <Route path="/contact" element={<ContactUs/>}/>
            <Route path="/" element={<Home/>}/>
          </Routes>
      </div>
  )
};

export default App;