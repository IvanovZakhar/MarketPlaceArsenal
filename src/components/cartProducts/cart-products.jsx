
import React from 'react';
import openLink from '../productsList/openLink';
import ProductCounter from '../productsList/productCounter'; 
import ModalAddress from '../modal/modalAddress';
import ModalOrder from '../modal/modalOrder';
import useAddress from '../../hooks/useAddress';
import WidgetHandler from '../widget/widjetHandler';
import './cart-products.scss';

const CartProducts = ({ cartItems, handleAddToCart, handleRemoveFromCart, removeAllCart }) => {
    const { address, handleAddToAddress} = useAddress();
    const totalSum = getTotalSum(cartItems)
    const totalWeght = getTotalWeght(cartItems)
    const totalVolume =  getTotalVolume(cartItems).slice(0, 4)
 
  const productsCarts = cartItems.map((cart, i) => {
    const { main_photo_link, name_of_product, price_before_discount, price_rubles, weight_in_packaging_g } = cart;
    return (
      <li className='product' key={i}>
        <img src={main_photo_link} className='product-photo' alt={name_of_product} onClick={() => openLink(cart)}/>
        <div className='about-product' onClick={() => openLink(cart)}>
          <h2 className='name_product'>{name_of_product}</h2>
          <span>{weight_in_packaging_g} г.</span>
        </div>

        <ProductCounter
          item={cart}
          cartItems={cartItems}
          handleAddToCart={handleAddToCart}
          handleRemoveFromCart={handleRemoveFromCart}
        />
        <div className='price-product'>
          <span className='before-price'>{price_before_discount} ₽</span>
          <span className='after-price'>{price_rubles} ₽</span>
        </div>
      </li>
    );
  });

  return (
   
        <>
        <ul className='cart-products'>
            {productsCarts.length ? (
            productsCarts
            ) : (
            <h2>Корзина пуста</h2>
            )}
            

            
            <li className='total'>
            <div className='total-price'>
                <h3>Итого:</h3>
                <span>{totalSum} ₽</span>
            </div>
            <span className='weight-order'>
                Вес заказа........................................................................................................................................................................................{totalWeght}кг
            </span>
            <span className='weight-order'>
                Объём заказа.................................................................................................................................................................................{totalVolume}м
            </span>
            </li>
        
                <li className='address-delivery'>
                        <h4>Адрес и номер телефона</h4>
                        <ModalAddress  address={address} handleAddToAddress={handleAddToAddress}/>
                     
                </li>
                {/* <WidgetHandler /> */}
                    <ModalOrder product={cartItems} address={address} removeAllCart={removeAllCart}/>
            
        </ul>
        </>
   
  );
};

export default CartProducts;


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