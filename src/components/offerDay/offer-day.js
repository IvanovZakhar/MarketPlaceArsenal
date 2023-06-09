import likeCard from '../../resources/img/ico/like-offer.svg';
import CartCard from '../../resources/img/ico/cart-offer.svg'; 
import { useState, useEffect } from 'react';
import { ClipLoader } from 'react-spinners';
import './offer-day.scss'

const OfferDay = ({randomItem, loading}) => {
    const [state, setState] = useState() 
    useEffect(()=> {
        const { main_photo_link, name_of_product, price_rubles, price_before_discount } = randomItem;
        console.log(main_photo_link)
        setState(           
             <>
            <div className='offer-day'>
                <h2>Предложение дня</h2>
                <div className='product__offer-day'>
                    <img src={main_photo_link} alt={name_of_product} className='product-img__offer-day'/>
                    <h3 className='product-name__offer-day'>{name_of_product}</h3>
                    <div className='bottom-col__offer-day'>
                        <div className='salary'>
                            <span className='product-salary__offer-day'>{price_before_discount} руб.</span>
                            <span className='product-salary-action__offer-day'>{price_rubles} руб.</span>
                        </div>
                        <button>
                            <img src={likeCard} alt='like-card' className='product-like__offer-day'/>
                        </button>
                        <button>
                            <img src={CartCard} alt='cart-card' className='product-cart__offer-day'/>
                        </button>
                    </div>
                </div>
            </div> 
        </>)
    }, [randomItem]) 
    return(<>{loading ? 'загрузка' : state}</>
        

    )
}

export default OfferDay;