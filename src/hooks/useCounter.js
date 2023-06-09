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
    setCartItems((prevCartItems) => {
      const updatedCartItems = [...prevCartItems];
      const index = updatedCartItems.findIndex(
        (cartItem) => cartItem.article === item.article
      );

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
    setCartItems((prevCartItems) => {
      const updatedCartItems = [...prevCartItems];
      const index = updatedCartItems.findIndex(
        (cartItem) => cartItem.article === item.article
      );

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

  const handleToggleCart = (item) => {
    setCartItems((prevCartItems) => {
      const existingIndex = prevCartItems.findIndex(
        (cartItem) => cartItem.article === item.article
      );

      if (existingIndex !== -1) {
        // Remove all selected items from cart
        const updatedCartItems = [...prevCartItems];
        updatedCartItems.splice(existingIndex, 1);
        localStorage.cartItems = JSON.stringify(updatedCartItems);
        return updatedCartItems;
      } else {
        // Add item to cart
        const newItem = { ...item, quantity: 1 };
        const updatedCartItems = [...prevCartItems, newItem];
        localStorage.cartItems = JSON.stringify(updatedCartItems);
        return updatedCartItems;
      }
    });
  };

  const removeAllCart = () => {
    localStorage.cartItems = []
  }

  return {
    cartItems,
    handleAddToCart,
    handleRemoveFromCart,
    handleToggleCart, 
    removeAllCart
  };
};

export default useCounter;
