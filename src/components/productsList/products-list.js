import React, { useState } from 'react';
import useCounter from '../../hooks/useCounter';
import openLink from './openLink';

import arrowSort from '../../resources/img/ico/arrow-sort.svg';
import likeCard from '../../resources/img/ico/like-card.svg';
import CartCard from '../../resources/img/ico/cart-card.svg';
import ProductCounter from './productCounter';
import Categories from './categories';
import './products-list.scss';

const ProductsList = ({ product }) => {
  const [visibleProducts, setVisibleProducts] = useState(9);
  const { cartItems, handleAddToCart, handleRemoveFromCart } = useCounter();
    
  const showMoreProducts = () => {
    setVisibleProducts(prevVisibleProducts => prevVisibleProducts + 9);
  };

  const elemProducts =   product.slice(0, visibleProducts).map(item => {
        const {
          annotation,
          article,
          name_of_product,
          main_photo_link,
          price_rubles,
          price_before_discount,
          url,
        } = item;
     


        return (
          <li key={article} className="product">
            <img src={main_photo_link} alt={name_of_product} onClick={() => openLink(item)} />
            <div className="about-product">
              <h2 onClick={() => openLink(item)}>{name_of_product}</h2>
              <div className="text__about-product" onClick={() => openLink(item)}>
                {annotation}
                <div></div>
              </div>
            </div>
            <div className='panel-product'>
              <div className='price-product'>
                <h3>Цена</h3>
                <span className='before-price'>{price_before_discount ? `${price_before_discount} ₽` : null} </span>
                <span className='after-price'>{price_rubles} ₽</span>
              </div>
              <div className='added-panel'>
                <button >
                  <img src={likeCard} alt='like-product' className='like-product' />
                </button>
                <button >
                  <img src={CartCard} alt='cart-product' className='cart-product' />
                </button>
              </div>
              <ProductCounter
                item={item}
                cartItems={cartItems}
                handleAddToCart={handleAddToCart}
                handleRemoveFromCart={handleRemoveFromCart}
              />
            </div>
          </li>
        );
      })
 

  const showMoreButton =
    product && visibleProducts < product.length ? (
      <button className='show-more__btn' onClick={showMoreProducts}>Показать еще</button>
    ) : null;

  return (
    <div className="products-list">
      <Categories categories={product ? product[0].categories : null} />
      <div className='sort_catalog-pages-head'>
        <div>
          По цене
          <img src={arrowSort} alt='arrow-sort' />
        </div>
        <div>
          По популярности
          <img src={arrowSort} alt='arrow-sort' />
        </div>
      </div>
      <ul className="products">
        {elemProducts}
      </ul>
      {showMoreButton}
    </div>
  );
};

export default ProductsList;
