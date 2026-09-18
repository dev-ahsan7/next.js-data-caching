import React from 'react';
import ProductCard from '../components/ProductCard';

const getProducts = async () => {
  const res = await fetch('http://localhost:5000/products', {
    cache: 'force-cache',
  });
  return res.json();
};

const productsPage = async () => {
  const prdoucts = await getProducts();
  return (
    <div>
      <h2>Our Products: {prdoucts.length} </h2>
      <div className="max-w-7xl mx-auto grid grid-cols-3 gap-5">
        {prdoucts.map((product) => (
          <ProductCard key={product.id} product={product}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default productsPage;
