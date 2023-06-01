
import { useState } from 'react';
import openLink from '../productsList/openLink';
import ProductCounter from '../productsList/productCounter'; 
import useCounter from '../../hooks/useCounter';
import likeCard__active from '../../resources/img/ico/like-card__active.svg';
import likeCard from '../../resources/img/ico/like-card.svg';
import CartCard from '../../resources/img/ico/cart-card.svg';
import React from 'react';    
import './favourites-products.scss';

const FavouritesProducts = ({favourites, toggleFavourite}) => {
  const [visibleProducts, setVisibleProducts] = useState(9);
  const { cartItems, handleAddToCart, handleRemoveFromCart } = useCounter();
  const [sortOption, setSortOption] = useState(''); 
  const showMoreProducts = () => {
    setVisibleProducts((prevVisibleProducts) => prevVisibleProducts + 9);
  };

  const handleSortChange = (event) => {
    const selectedSortOption = event.target.value;
    setSortOption(selectedSortOption);
  };

  const getSortedProducts = () => {
    let sortedProducts = [...favourites];

    if (sortOption === 'priceAsc') {
      sortedProducts.sort((a, b) => a.price_rubles - b.price_rubles);
    } else if (sortOption === 'priceDesc') {
      sortedProducts.sort((a, b) => b.price_rubles - a.price_rubles);
    } else if (sortOption === 'nameAsc') {
      sortedProducts.sort((a, b) => a.name_of_product.localeCompare(b.name_of_product));
    }

    return sortedProducts;
  };

  const sortedProducts = getSortedProducts();

  const visibleSortedProducts = sortedProducts.slice(0, visibleProducts);

  const elemProducts = visibleSortedProducts.map((item) => {
        const {
          annotation,
          article,
          name_of_product,
          main_photo_link,
          price_rubles,
          price_before_discount 
        } = item;
     

        const handleToggleFavourite = () => {
          toggleFavourite(item);
        };
        const isFavourite = favourites.some((favourite) => favourite.article === item.article);

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
                <button onClick={handleToggleFavourite }>
                  <img src={ isFavourite ? likeCard__active :likeCard} alt='like-product' className='like-product' />
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
  });

  const showMoreButton =
  favourites && visibleProducts < sortedProducts.length ? (
    <button className="show-more__btn" onClick={showMoreProducts}>
      Показать еще
    </button>
  ) : null; 
  return (
    <div className="products-list"> 
      <div className="sort_catalog-pages-head">
        <div>
         
          <select value={sortOption} onChange={handleSortChange}>
            <option value="">Выберите фильтр</option>
            <option value="priceAsc">По возрастанию</option>
            <option value="priceDesc">По убыванию</option>
            <option value="nameAsc">По наименованию</option> 
          </select> 
        </div> 
      </div>
      <ul className="products">{elemProducts}</ul>
        {showMoreButton}
    </div>
  );
  
};

export default FavouritesProducts;


const getTotalWeght = (items) => {
    let resTotal = items.reduce((sum, item) => sum + item.weight_in_packaging_g * item.quantity, 0);
    resTotal =  Math.round(resTotal /= 1000)
    return resTotal
}

const getTotalSum = (items) => {
    return items.reduce((sum, item) => sum + item.price_rubles * item.quantity, 0);
}

const getTotalVolume = (items) => {
    const res = items.reduce((sum, item) =>  sum + ((item.width_in_packaging_mm / 1000) * (item.height_in_packaging_mm / 1000) * (item.length_in_packaging_mm / 1000)) * item.quantity, 0);
    
    return String(res) 
}