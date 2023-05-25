import { useEffect, useState } from "react";


const useCounter = () => {

  
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
      const cartItemsData = localStorage.cartItems;
      if (cartItemsData) {
        setCartItems(JSON.parse(cartItemsData));
      }
    }, []);
  
    const handleStorageChange = (event) => {
      if (event.key === "cartItems") {
        setCartItems(JSON.parse(event.newValue));
      }
    };
  
    useEffect(() => {
      window.addEventListener("storage", handleStorageChange);
  
      return () => {
        window.removeEventListener("storage", handleStorageChange);
      };
    }, []);

  const handleAddToCart = (item) => {
    setCartItems(prevCartItems => {
      const updatedCartItems = [...prevCartItems];
      const index = updatedCartItems.findIndex((cartItem) => cartItem.article === item.article);
  
      if (index !== -1) {
        // Увеличить количество товара на 1
        updatedCartItems[index].quantity += 1;
      } else {
        // Добавить новый товар в корзину
        const newItem = { ...item, quantity: 1 };
        updatedCartItems.push(newItem);
      }
  
      localStorage.cartItems = JSON.stringify(updatedCartItems);
  
      return updatedCartItems;
    });
  };
  
  const handleRemoveFromCart = (item) => {
    setCartItems(prevCartItems => {
      const updatedCartItems = [...prevCartItems];
      const index = updatedCartItems.findIndex((cartItem) => cartItem.article === item.article);
  
      if (index !== -1) {
        if (updatedCartItems[index].quantity === 1) {
          // Если количество товара равно 1, удалить его из корзины
          updatedCartItems.splice(index, 1);
        } else {
          // Уменьшить количество товара на 1
          updatedCartItems[index].quantity -= 1;
        }
  
        localStorage.cartItems = JSON.stringify(updatedCartItems);
      }
  
      return updatedCartItems;
    });
  };
  

  return{
    cartItems,
    handleAddToCart,
    handleRemoveFromCart
  }
}

export default useCounter;