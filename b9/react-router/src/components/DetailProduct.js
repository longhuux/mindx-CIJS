
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const DetailProduct = () => {
  const { productsId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const mockApiData = {
      id: productsId,
      name: `Product ${productsId}`,
      cost: Math.floor(Math.random() * 100),
      description: `Description for Product ${productsId}`,
    };

    setProduct(mockApiData);
  }, [productsId]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Product Details</h2>
      <p>Name: {product.name}</p>
      <p>Cost: {product.cost}</p>
      <p>Description: {product.description}</p>
    </div>
  );
};

export default DetailProduct;
