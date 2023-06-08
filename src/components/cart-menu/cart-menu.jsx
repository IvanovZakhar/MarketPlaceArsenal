import './cart-menu.scss'
import { Link } from 'react-router-dom';
const CartMenu = () => {
    return(
        <>
            <ul className="cart-menu">
                {/* <li><Link to="#">Заказы</Link></li> */}
                <li><Link to="/cart">Корзина</Link></li>
                <li><Link to="/favourites">Избранное</Link></li>
                {/* <li><Link to="#">Настройки профиля</Link></li>
                <li><Link to="#">Информация</Link></li> */}
            </ul>
        </>
    )
}

export default CartMenu;