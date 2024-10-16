// src/components/Shop.js
import React, { useState } from 'react';
import ProductCard from './ProductCard';
import ProductModal from './ProductModal';
import './Shop.css';

const products = [
  {
    image: '/images/diamondring.png',
    name: 'Diamond Ring',
    price: 1200,
    description: 'This stunning diamond ring is crafted with the highest quality materials.',
  },
  {
    image: '/images/necklace.png',
    name: 'Gold Necklace',
    price: 1800,
    description: 'A luxurious gold necklace that adds an elegant touch to any outfit.',
  },
  {
    image: '/images/bracelet.png',
    name: 'Silver Bracelet',
    price: 900,
    description: 'A timeless silver bracelet designed to complement any jewelry collection.',
  },
  {
    image: '/images/pearlearrings.png',
    name: 'Pearl Earrings',
    price: 1400,
    description: 'Elegant pearl earrings that bring grace and beauty to any occasion.',
  },
  {
    image: '/images/emeraldring.png',
    name: 'Emerald Ring',
    price: 2500,
    description: 'A rare emerald ring with intricate detailing for a luxurious touch.',
  },
  {
    image: '/images/bracelet.png',
    name: 'Platinum Bracelet',
    price: 3000,
    description: 'A sophisticated platinum bracelet that offers a modern, chic look.',
  },
  {
    image: '/images/Necklace.png',
    name: 'Diamond Necklace',
    price: 5000,
    description: 'A dazzling diamond necklace that shines with elegance and beauty.',
  },
  {
    image: '/images/pearlearrings.png',
    name: 'Hoop Earrings',
    price: 600,
    description: 'Simple yet stylish hoop earrings, perfect for daily wear or special events.',
  },
];

function Shop() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const openModal = (product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="shop-page">
      <h2>Featured Jewelry</h2>
      <div className="product-grid">
        {products.map((product, index) => (
          <div key={index} onClick={() => openModal(product)}>
            <ProductCard
              image={product.image}
              name={product.name}
              price={product.price}
            />
          </div>
        ))}
      </div>

      {selectedProduct && (
        <ProductModal product={selectedProduct} onClose={closeModal} />
      )}
    </div>
  );
}

export default Shop;
