import plus from '../../resources/img/ico/plus.svg';
import minus from '../../resources/img/ico/minus.svg';
import React from 'react';
import { Link } from 'react-router-dom';

const ProductCounter = ({ item, cartItems, handleAddToCart, handleRemoveFromCart }) => {
  const cartItem = cartItems.find((cartItem) => cartItem.article === item.article);
  const quantity = cartItem ? cartItem.quantity : 0;

  const handleIncrement = () => {
    handleAddToCart(item);
  };

  const handleDecrement = () => {
    handleRemoveFromCart(item);
  };    

  return (
    <>
      <div className='count-product'>
        <button onClick={handleDecrement}>
          <img src={minus} alt='minus-product' className='minus-product' />
        </button>
        <span className='count'>{quantity}</span>
        <button onClick={handleIncrement}>
          <img src={plus} alt='plus-product' className='plus-product' />
        </button>
      </div>
      
    </>
  );
};

export default ProductCounter;
