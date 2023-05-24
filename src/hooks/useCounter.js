import { useEffect, useState } from "react";


const useCounter = () => {

  
    const [cartItems, setCartItems] = useState([]);
    // Загрузка корзины из localStorage при загрузке компонента
    useEffect(() => {
        
        const cartItemsData = localStorage.cartItems;
        if (cartItemsData) {
        setCartItems(JSON.parse(cartItemsData));
        }
    }, []);

  
  // Сохранение корзины в localStorage при изменении
  useEffect(() => {
     
    localStorage.cartItems = JSON.stringify(cartItems)
    console.log('counter')
    console.log(cartItems)
  }, [cartItems]);
  console.log(JSON.parse(localStorage.cartItems))
  

  const handleAddToCart = (item) => {
    const updatedCartItems = [...cartItems];
    const index = updatedCartItems.findIndex((cartItem) => cartItem.article === item.article);

    if (index !== -1) {
      // Увеличить количество товара на 1
      updatedCartItems[index].quantity += 1;
    } else {
      // Добавить новый товар в корзину
      const newItem = { ...item, quantity: 1 };
      updatedCartItems.push(newItem);
    }

    setCartItems(updatedCartItems);
  };

  const handleRemoveFromCart = (item) => {
    const updatedCartItems = [...cartItems];
    const index = updatedCartItems.findIndex((cartItem) => cartItem.article === item.article);

    if (index !== -1) {
      if (updatedCartItems[index].quantity === 1) {
        // Если количество товара равно 1, удалить его из корзины
        updatedCartItems.splice(index, 1);
      } else {
        // Уменьшить количество товара на 1
        updatedCartItems[index].quantity -= 1;
      }

      setCartItems(updatedCartItems);
    }
  };

  return{
    cartItems,
    handleAddToCart,
    handleRemoveFromCart
  }
}

export default useCounter;