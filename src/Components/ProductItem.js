import React, { Component } from "react";
import './ProductItem.css';
import PropTypes from 'prop-types';
import { stripHtml } from 'string-strip-html';

const ProductItem = ({ product,onAddToCart }) => {

  const { result } = stripHtml(product.description);
 
  return (
    <div className="card">
      <img className="image" src={product.image?.url} alt={product.name} />
      <div className="product__info">
        <h4 className="product__name">{product.name}</h4>
        <p className="product__description">
          {/* product description stripped of html tags */}
       {result}
        </p>
        <div className="product__details">
          <p className="product__price">
            {product.price.formatted_with_symbol}
          </p>
          <button onClick={()=>onAddToCart(product)}>Add To Cart</button>
        </div>
      </div>
    </div> 
  );
};

ProductItem.propTypes = {
  product: PropTypes.object,
  onAddToCart: PropTypes.func,
};

export default ProductItem;