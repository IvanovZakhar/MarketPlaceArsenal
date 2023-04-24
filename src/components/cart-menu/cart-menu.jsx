import './cart-menu.scss'

const CartMenu = () => {
    return(
        <>
            <ul className="cart-menu">
                <li><a href="#">Заказы</a></li>
                <li><a href="#">Корзина</a></li>
                <li><a href="#">Избранное</a></li>
                <li><a href="#">Настройки профиля</a></li>
                <li><a href="#">Информация</a></li>
            </ul>
        </>
    )
}

export default CartMenu;