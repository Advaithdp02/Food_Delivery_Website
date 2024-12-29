import React, { useContext } from 'react';
import './cart.css';
import { StoreContext } from '../../context/StoreContext';

const Cart = () => {
  const { cartItems, food_list, removeFromCart,getTotalCartAmount } = useContext(StoreContext);

  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list && food_list.length > 0 ? (
          food_list.map((item,index) => {
            if (cartItems[item._id] > 0) {
              return (
                <div className="cart-items-item cart-items-title" key={item._id}>
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>${cartItems[item._id]*item.price}</p>
                  <p onClick={()=>removeFromCart(item._id)} className='close'>x</p>

                </div>
              );
            }
            return null;
          })
        ) : (
          <p>No items in the cart.</p>
        )}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-details">
              <p>SubTotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <div className="cart-total-details">
              <p>Delivery Price</p>
              <p>${2}</p>
            </div>
            <div className="cart-total-details">
              <b>Total</b>
              <b>${getTotalCartAmount()+2}</b>
            </div>
          </div>
          <button>Proceed To Checkout</button>
        </div>
        <div className="cart-promocode">
          <div className="">
            <p>If You Have Promo Code Enter It Here</p>
           <div className="cart-promocode-input">
            <input type="text" placeholder='Promocode' />
            <button>Submit</button></div> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
