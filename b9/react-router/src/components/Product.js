import React, { useState, useEffect } from 'react';
import {Routes, Route, Link, Outlet} from 'react-router-dom'



const Product = () => {
  const mockProducts = [
    { name: 'Product 1', cost: '$100', description: 'Description 1' },
    { name: 'Product 2', cost: '$200', description: 'Description 2' },
 ];

  return (
    <div>
      <h1>ProductListComponent</h1>
      <div>
        {mockProducts.map((product, index) => (
          <div >
            <li >
              <Link to={`/products/${index + 1}`}> {product.name}</Link>
            </li>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
