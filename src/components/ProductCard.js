// src/components/ProductCard.js
import React from 'react';
import { motion } from 'framer-motion';
import './ProductCard.css';

const ProductCard = ({ image, name, price }) => {
  return (
    <motion.div
      className="product-card"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.5 }}
    >
      <div className="product-image-container">
        <img src={image} alt={name} className="product-image" />
      </div>
      <div className="product-info">
        <h3>{name}</h3>
        <p>${price}</p>
      </div>
    </motion.div>
  );
};

export default ProductCard;
