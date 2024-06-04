
import React from 'react';
import PropTypes from 'prop-types';
import './ProductItem.css';
import './ProductList.css'

const CartPage = ({ cart }) => {
  if (!cart) {
    return <div>No items in the cart</div>;
  }

  return (
    <div>
      <h2>Cart Items</h2>
     <div className="comm-prod-list">
        {cart.map((item) => (
          <div className="card">
          <img className="image" src={item.image?.url} alt={item.name} />
          <div>{item.name}</div>
          <p className="product__price">
            {item.price.formatted_with_symbol}
          </p>
          </div>
        ))}</div>
      
    </div>
  );
};

CartPage.propTypes = {
  cart: PropTypes.array,
};

export default CartPage;







