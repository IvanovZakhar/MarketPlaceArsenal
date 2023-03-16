import grid from '../../resources/img/products/grid520.png';
import d1 from '../../resources/img/products/d1.png';
import plus from '../../resources/img/ico/plus.svg';
import minus from '../../resources/img/ico/minus.svg';
import './cart-products.scss'


const CartProducts = () => {
    return(
        <>
            <ul className="cart-products">
                <li className='product'>
                    <img src={grid} className='product-photo' alt='product'/>
                    <div className='about-product'>
                        <h2>Решетка раздвижная 520х770</h2>
                        <span>3180 г.</span>
                    </div>
                    
                    <div className='count-product'>
                        <button>
                                <img src={minus} alt='minus-product' className='minus-product'/>
                        </button>
                        <span className='count'>1</span>
                        <button>
                                <img src={plus} alt='plus-product' className='plus-product'/>
                        </button>
                    </div>
                    <div className='price-product'>
                        <span className='before-price'>3000 ₽</span>
                        <span className='after-price'>2200 ₽</span>
                    </div>
                    
                </li>
                <li className='product'>
                    <img src={d1} className='product-photo' alt='product'/>
                    <div className='about-product'>
                        <h2>Противоугонное устройство для легкового прицепа</h2>
                        <span>3180 г.</span>
                    </div>
                    
                    <div className='count-product'>
                        <button>
                                <img src={minus} alt='minus-product' className='minus-product'/>
                        </button>
                        <span className='count'>1</span>
                        <button>
                                <img src={plus} alt='plus-product' className='plus-product'/>
                        </button>
                    </div>
                    <div className='price-product'>
                        <span className='before-price'>3000 ₽</span>
                        <span className='after-price'>2360 ₽</span>
                    </div>
                    
                </li>
                <li className='product'>
                    <img src={grid} className='product-photo' alt='product'/>
                    <div className='about-product'>
                        <h2>Решетка раздвижная 520х770</h2>
                        <span>3180 г.</span>
                    </div>
                    
                    <div className='count-product'>
                        <button>
                                <img src={minus} alt='minus-product' className='minus-product'/>
                        </button>
                        <span className='count'>1</span>
                        <button>
                                <img src={plus} alt='plus-product' className='plus-product'/>
                        </button>
                    </div>
                    <div className='price-product'>
                        <span className='before-price'>3000 ₽</span>
                        <span className='after-price'>2200 ₽</span>
                    </div>
                    
                </li>
                <li className='product'>
                    <img src={d1} className='product-photo' alt='product'/>
                    <div className='about-product'>
                        <h2>Противоугонное устройство для легкового прицепа</h2>
                        <span>3180 г.</span>
                    </div>
                    
                    <div className='count-product'>
                        <button>
                                <img src={minus} alt='minus-product' className='minus-product'/>
                        </button>
                        <span className='count'>1</span>
                        <button>
                                <img src={plus} alt='plus-product' className='plus-product'/>
                        </button>
                    </div>
                    <div className='price-product'>
                        <span className='before-price'>3000 ₽</span>
                        <span className='after-price'>2360 ₽</span>
                    </div>
                    
                </li>
                <li className="total">
                    <div className="total-price">
                        <h3>Итого:</h3>
                        <span>14 572 ₽</span>
                    </div>
                    <span className="weight-order">Вес заказа........................................................................................................................................................................................125кг</span>
                    <span className="weight-order">Объём заказа.....................................................................................................................................................................................3м</span>
                </li>
                <li>
                    <button className='get-order'>Оформить заказ</button>
                </li>
            </ul>
            
        </>
    )
}

export default CartProducts;