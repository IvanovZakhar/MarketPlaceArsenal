import AppHeader from '../../appHeader/app-header';
import CartMenu from '../../cart-menu/cart-menu';
import Footer from '../../footer/footer';
import CartProducts from '../../cartProducts/cart-products';
import arrowCategories from '../../../resources/img/ico/arrow__catalog-menu.svg';
import Feedback from '../../feedback/feedback';
 
import './cart.scss'

const Cart = ({cartItems}) => {
  console.log(cartItems)
 
    return(
        <>
        <AppHeader/>
        <main>
        <div className='container'>
            <div className='row'>
                <div className='col-left__main'>
                    <h1>Корзина(3)</h1>
                    <CartMenu/>
                </div>
                <div className='col-right__main'>
                    <ul className='categories'>
                        <li>
                            <a href='/'>Главная</a>
                        </li>
                            <img src={arrowCategories} alt='arrow__catalog-menu'/>
                        <li>
                            <a href='/'>Корзина</a>
                        </li>
                    </ul>
                    <CartProducts cartItems={cartItems}/>
                </div> 
               
            </div>
            <Feedback/> 
        </div>
        </main>
        <Footer/>
    </>
    )
}

export default Cart;