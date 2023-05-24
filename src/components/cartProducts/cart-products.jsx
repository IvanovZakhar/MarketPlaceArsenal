// import ProductCounter from '../productsList/productCounter';
// import useCounter from '../../hooks/useCounter';
 
// import './cart-products.scss'


// const CartProducts = () => {
//     const {cartItems, handleAddToCart, handleRemoveFromCart} = useCounter();  
 
 
//     const productsCarts = cartItems.map((item, i) => {
//         const {main_photo_link, name_of_product, price_before_discount, price_rubles, weight_in_packaging_g} = item
//         return(
//             <li className='product' key={i}>
//             <img src={main_photo_link} className='product-photo' alt={name_of_product}/>
//             <div className='about-product'>
//                 <h2>{name_of_product}</h2>
//                 <span>{weight_in_packaging_g} г.</span>
//             </div>
            
//             <ProductCounter
//                 item={item}
//                 cartItems={cartItems}
//                 handleAddToCart={handleAddToCart}
//                 handleRemoveFromCart={handleRemoveFromCart}
//               />
//             <div className='price-product'>
//                 <span className='before-price'>{price_before_discount} ₽</span>
//                 <span className='after-price'>{price_rubles} ₽</span>
//             </div>
            
//         </li>
//         )
//     })
    
//     return(
//         <>
//             <ul className="cart-products">
//                 {productsCarts[0] ? productsCarts : <h2>Корзина пуста</h2>}
   
//                 <li className="total">
//                     <div className="total-price">
//                         <h3>Итого:</h3>
//                         <span>14 572 ₽</span>
//                     </div>
//                     <span className="weight-order">Вес заказа........................................................................................................................................................................................125кг</span>
//                     <span className="weight-order">Объём заказа.....................................................................................................................................................................................3м</span>
//                 </li>
//                 <li>
//                     <button className='get-order'>Оформить заказ</button>
//                 </li>
//             </ul>
            
//         </>
//     )
// }

// export default CartProducts;

import React from 'react';
import ProductCounter from '../productsList/productCounter';
import useCounter from '../../hooks/useCounter';
import { useContext } from 'react';
import { CartContext } from '../app/CartContext';
import './cart-products.scss';

const CartProducts = () => {
 
    const {  cartItems, handleAddToCart, handleRemoveFromCart } = useContext(CartContext);
     
  const productsCarts = cartItems.map((item, i) => {
    const { main_photo_link, name_of_product, price_before_discount, price_rubles, weight_in_packaging_g } = item;
    return (
      <li className='product' key={i}>
        <img src={main_photo_link} className='product-photo' alt={name_of_product} />
        <div className='about-product'>
          <h2>{name_of_product}</h2>
          <span>{weight_in_packaging_g} г.</span>
        </div>

        <ProductCounter
          item={item}
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
            <span>14 572 ₽</span>
          </div>
          <span className='weight-order'>
            Вес заказа........................................................................................................................................................................................125кг
          </span>
          <span className='weight-order'>
            Объём заказа.....................................................................................................................................................................................3м
          </span>
        </li>
        <li>
          <button className='get-order'>Оформить заказ</button>
        </li>
      </ul>
    </>
  );
};

export default CartProducts;
