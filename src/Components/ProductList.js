import React from 'react';

import ProductItem from './ProductItem';
import './ProductList.css';

const ProductsList = ({ products,onAddToCart }) => {

    return (
        <div className="products comm-prod-list" id="products">
            { products.map((product) => (
                <ProductItem
                    key={product.id}
                    product={product}
                    onAddToCart={onAddToCart}
                />
            ))}
        </div>
    );
};



export default ProductsList;