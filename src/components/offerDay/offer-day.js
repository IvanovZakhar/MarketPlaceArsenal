import likeCard from '../../resources/img/ico/like-offer.svg';
import CartCard from '../../resources/img/ico/cart-offer.svg'; 
import { useState, useEffect } from 'react';
import useFavourites from '../../hooks/useFavourites'
import useCounter from '../../hooks/useCounter';
import { ClipLoader } from 'react-spinners';
import openLink from '../productsList/openLink';
import likeCard__active from '../../resources/img/ico/like-card__active.svg'
import CartCard__active from '../../resources/img/ico/cart-card__active.svg'; 
import './offer-day.scss'

const OfferDay = ({randomItem}) => { 
 
     const result = randomItem ? randomItem.map((item, i) =>{
        return(
            <div className='offer-day' key={i}>
            <h2>Предложение дня</h2>
            <div className='product__offer-day'>
                <img src={item.main_photo_link} alt={item.name_of_product} className='product-img__offer-day' onClick={() => openLink(item)}/>
                <h3 className='product-name__offer-day' onClick={() => openLink(item)}>{item.name_of_product}</h3>
                <div className='bottom-col__offer-day'>
                    <div className='salary'>
                        <span className='product-salary__offer-day'>{item.price_before_discount ? `${item.price_before_discount} руб`:  null}</span>
                        <span className='product-salary-action__offer-day'>{item.price_rubles} руб.</span>
                    </div>
   
                </div>
            </div>
        </div> 
        )
     }) :     
        <ClipLoader 
        color="#FFB701"   
        cssOverride={{
        width: '70px',
        height: '70px',
        marginLeft: '70px',
        marginTop: '200px' 
            }} />  

    return(result)
}

export default OfferDay;