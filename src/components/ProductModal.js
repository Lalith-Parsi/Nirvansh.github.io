// src/components/ProductModal.js
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import './ProductModal.css';

const ProductModal = ({ product, onClose }) => {
  // Close modal when clicking outside the modal content
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (event.target.classList.contains('modal-backdrop')) {
        onClose();
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [onClose]);

  return (
    <motion.div
      className="modal-backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="modal-content"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0 }}
        transition={{ duration: 0.3 }}
      >
        <button onClick={onClose} className="close-btn">X</button>
        <img src={product.image} alt={product.name} />
        <h2>{product.name}</h2>
        <p>${product.price}</p>
        <p>{product.description}</p> {/* Dynamic description */}
      </motion.div>
    </motion.div>
  );
};

export default ProductModal;
