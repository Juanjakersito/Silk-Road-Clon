import { useContext } from "react";
import { IoLogoBitcoin } from "react-icons/io";
import "./Product.css";
import { FaCartArrowDown } from "react-icons/fa";
import { CartContext } from "../../context/cart";
import { MdRemoveShoppingCart } from "react-icons/md";
import { productPropsType } from "../../Types/productPropsType";

function Product({ productProps } : {productProps: productPropsType}) {
  const { addToCart, removeFromCart, cartProps } = useContext(CartContext);

  function checkProductInCart(product:productPropsType){
    return cartProps?.cart.some(item=>item.id==product.id)
  }

  const isProductInCart=checkProductInCart(productProps)

  return (
    <div className="product">
      <img src={productProps.thumbnail} alt="" />
      <p>{productProps.title}</p>
      <h3>
        <span>
          <IoLogoBitcoin size={24} /> {productProps.price}
        </span>

        <div
          onClick={() => { 
            
            {isProductInCart 
            ? removeFromCart ? removeFromCart(productProps) :''  
            : addToCart? addToCart(productProps):'' }
          }}
        >
          {isProductInCart ? <MdRemoveShoppingCart size={24} color='red'/> : <FaCartArrowDown size={24} color="green" />}
        </div>
      </h3>
    </div>
  );
}

export default Product;
