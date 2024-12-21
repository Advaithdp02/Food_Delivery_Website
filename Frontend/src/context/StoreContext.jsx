import { createContext, useState, useEffect } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});

  const addToCart = (itemID) => {
    setCartItems((prev) => ({
      ...prev,
      [itemID]: prev[itemID] ? prev[itemID] + 1 : 1,
    }));
  };

  const removeFromCart = (itemID) => {
    setCartItems((prev) => {
      if (prev[itemID] <= 1) {
        const updatedCart = { ...prev };
        delete updatedCart[itemID];
        return updatedCart;
      }
      return {
        ...prev,
        [itemID]: prev[itemID] - 1,
      };
    });
  };

  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);

  const contextValue = {
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
