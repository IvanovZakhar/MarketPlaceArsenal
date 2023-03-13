import strip from '../../resources/img/ico/strip.svg';
import leftButton from '../../resources/img/ico/left-btn.svg';
import rightButton from '../../resources/img/ico/right-btn.svg';
import likeCard from '../../resources/img/ico/like-card.svg';
import CartCard from '../../resources/img/ico/cart-card.svg';
import grid from '../../resources/img/products/grid520.png';
import d1 from '../../resources/img/products/d1.png';
import './best-offers.scss'


const BestOffers = () => {
    return(
    <>
        <header className='head__best-offers'>
            <h2 className='text__best-offers'>Лучшие предложения</h2>
            <img src={strip} alt='strip' className='strip___best-offers'/>
            <button className='left-btn'>
                <img src={leftButton} alt='left-button'/>
            </button>
            <button className='right-btn'>
                <img src={rightButton} alt='right-button'/>
            </button>
        </header>
        <ul className='best-offers'>
            <li className='product__best-offers'>
                <img src={grid} alt='product__best-offers' className='product-img__best-offers'/>
                <h3 className='product-name__best-offers'>Решетка раздвижная 520х770</h3>
                <div className='bottom-col__best-offers'>
                    <span className='product-salary__best-offers'>2200 руб.</span>
                    <button>
                         <img src={likeCard} alt='like-card' className='product-like__best-offers'/>
                    </button>
                    <button>
                         <img src={CartCard} alt='cart-card' className='product-cart__best-offers'/>
                    </button>
                </div>
            </li>
            <li className='product__best-offers'>
                <img src={d1} alt='product__best-offers' className='product-img__best-offers'/>
                <h3 className='product-name__best-offers'>Противоугонное устройство для легкового прицепа УСИЛЕННОЕ</h3>
                <div className='bottom-col__best-offers'>
                    <span className='product-salary__best-offers'>2360 руб.</span>
                    <button>
                         <img src={likeCard} alt='like-card' className='product-like__best-offers'/>
                    </button>
                    <button>
                         <img src={CartCard} alt='cart-card' className='product-cart__best-offers'/>
                    </button>
                </div>
            </li>
            <li className='product__best-offers'>
                <img src={grid} alt='product__best-offers' className='product-img__best-offers'/>
                <h3 className='product-name__best-offers'>Решетка раздвижная 520х770</h3>
                <div className='bottom-col__best-offers'>
                    <span className='product-salary__best-offers'>2200 руб.</span>
                    <button>
                         <img src={likeCard} alt='like-card' className='product-like__best-offers'/>
                    </button>
                    <button>
                         <img src={CartCard} alt='cart-card' className='product-cart__best-offers'/>
                    </button>
                </div>
            </li>
            <li className='product__best-offers'>
                <img src={d1} alt='product__best-offers' className='product-img__best-offers'/>
                <h3 className='product-name__best-offers'>Противоугонное устройство для легкового прицепа УСИЛЕННОЕ</h3>
                <div className='bottom-col__best-offers'>
                    <span className='product-salary__best-offers'>2360 руб.</span>
                    <button>
                         <img src={likeCard} alt='like-card' className='product-like__best-offers'/>
                    </button>
                    <button>
                         <img src={CartCard} alt='cart-card' className='product-cart__best-offers'/>
                    </button>
                </div>
            </li>
        </ul>
    </>
    )
}

export default BestOffers;