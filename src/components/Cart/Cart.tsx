import { useContext } from "react";
import { CartContext } from "../../context/cart";
import CartElement from "./CartElement";
import { FaBackward, FaTrashCan } from "react-icons/fa6";
import { IoLogoBitcoin } from "react-icons/io";

import "./Cart.css";
import { BsCart4 } from "react-icons/bs";
import { MdOutlinePayments } from "react-icons/md";
import { productPropsType } from "../../Types/productPropsType";

function Cart() {
  const {
    clearCart,
    returnNumberOfProducts,
    showCart,
    updateCartProps,
    cartProps,
  }= useContext(CartContext);
  return (
    <>
      <div className="cart">
        <div className="cart-buttons">
          <span onClick={showCart} className="cart-button">
            <FaBackward size={24} />
            <BsCart4 size={25} />({returnNumberOfProducts ? returnNumberOfProducts() : ''})
          </span>

          <button className="cart-button" onClick={clearCart}>
            <FaTrashCan size={20} />
          </button>

          <button
            className="cart-button"
            onClick={() => {
              updateCartProps && cartProps ?
              cartProps.count==0 ?  alert('put something in the car') : updateCartProps({ ...cartProps, paying: true })
              : ''
            }}
          >
            <MdOutlinePayments size={24} /> Pay
          </button>
        </div>

        <h3>
          <IoLogoBitcoin size={16} />
          {cartProps?.count}
        </h3>

        <div className="cart-elements">
          {cartProps?.cart.map((product: productPropsType) => {
            return <CartElement key={product.id} productProps={product} />;
          })}
        </div>
      </div>
    </>
  );
}

export default Cart;
