 
import likeCard from '../../resources/img/ico/like-card.svg';
import CartCard from '../../resources/img/ico/cart-card.svg';  
import openLink from '../productsList/openLink';
import useFavourites from '../../hooks/useFavourites'
import useCounter from '../../hooks/useCounter';
import likeCard__active from '../../resources/img/ico/like-card__active.svg'
import CartCard__active from '../../resources/img/ico/cart-card__active.svg'; 
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import { ClipLoader } from 'react-spinners';
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./best-offers.scss";

// import required modules
import { Pagination, Navigation } from "swiper";
import { useEffect, useState } from 'react';

export default function BestOffers({randomItemsSix, loading}) {  
    const { favourites, toggleFavourite } = useFavourites();
    const { cartItems, handleToggleCart } = useCounter();



    const elemSlides = randomItemsSix.map((item, i) => {
        const { main_photo_link, name_of_product, price_rubles } = item
        const handleToggleFavourite = () => {
            toggleFavourite(item);
          };
          
        const isFavourite = (elem) => {return elem.some((favourite) => favourite.article === item.article)}
        return(
            <SwiperSlide key={i}> 
                <img src={main_photo_link} alt={name_of_product} className='product-img__best-offers' onClick={() => openLink(item)}/>
                <h3 className='product-name__best-offers' onClick={() => openLink(item)}>{name_of_product}</h3>
                <div className='bottom-col__best-offers'>
                    <span className='product-salary__best-offers'>{price_rubles} руб.</span>
                    <button onClick={handleToggleFavourite}>
                            <img src={isFavourite(favourites) ? likeCard__active : likeCard} alt='like-card' className='product-like__best-offers'/>
                    </button>
                    <button onClick={() => handleToggleCart(item)}>
                            <img src={isFavourite(cartItems) ? CartCard__active : CartCard} alt='cart-card' className='product-cart__best-offers'/>
                    </button>
                </div> 
            </SwiperSlide>
        )
    })


  return (
    <>
            <header className='head__best-offers'>
            <h2 className='text__best-offers'>Лучшие предложения</h2> 
 
        </header>
        {   loading ?    
            <ClipLoader 
                        color="#FFB701"   
                        cssOverride={{
                        width: '100px',
                        height: '100px',
                        marginLeft: '400px',
                        marginTop: '50px' 
                    }} /> :
            <Swiper 
                    slidesPerView={3}
                    centeredSlides={false}
                    spaceBetween={30}
                    pagination={{
                        type: "fraction",
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                    >
                { elemSlides}
            </Swiper> 
        }

 
    </>
  );
}
