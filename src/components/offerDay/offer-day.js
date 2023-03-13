import likeCard from '../../resources/img/ico/like-offer.svg';
import CartCard from '../../resources/img/ico/cart-offer.svg';
import grid from '../../resources/img/products/grid520.png';
import './offer-day.scss'

const OfferDay = () => {
    return(
        <div className='offer-day'>
            <h2>Предложение дня</h2>
            <div className='product__offer-day'>
                <img src={grid} alt='product__offer-day' className='product-img__offer-day'/>
                <h3 className='product-name__offer-day'>Решетка раздвижная 520х770</h3>
                <div className='bottom-col__offer-day'>
                    <div className='salary'>
                        <span className='product-salary__offer-day'>2200 руб.</span>
                        <span className='product-salary-action__offer-day'>1990 руб.</span>
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
    )
}

export default OfferDay;