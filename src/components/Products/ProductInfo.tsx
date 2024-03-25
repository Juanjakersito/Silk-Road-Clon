import { useContext } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./ProductInfo.css";
import { CartContext } from "../../context/cart";
import { IoLogoBitcoin } from "react-icons/io";
import { MdRemoveShoppingCart } from "react-icons/md";
import { FaCartArrowDown } from "react-icons/fa";
import { productPropsType } from "../../Types/productPropsType";
function ProductInfo({ product }:{product:productPropsType}) {
  if (!product.images) {
    return;
  }

  const {cartProps, addToCart, removeFromCart } = useContext(CartContext);

  function checkProductInCart(product:productPropsType) {
    return cartProps?.cart.some((item) => item.id == product.id);
  }

  const isProductInCart = checkProductInCart(product);

  return (
    <div className="product-info-container">
        
      <Carousel infiniteLoop thumbWidth={80} width={600}>
        {product.images.map((image) => {
          return (
            <div>
              <img src={image} style={{ maxHeight: "300px" }} alt="" />
            </div>
          );
        })}
      </Carousel>

      <div className="product-info">
        <h1 className="green">{product.title}</h1>
        <h4>
          <span className="green">Category:</span> {product?.category}
        </h4>
        <h4>
          {" "}
          <span className="green">Stock:</span> {product.stock}
        </h4>
        <p>
          <strong className="green">Description: </strong> {product.description}
        </p>

        <div className="add-to-cart">
          <span>
            <IoLogoBitcoin size={24} /> <strong>{product.price}</strong>
          </span>

          <div
            onClick={() => {
              {
                isProductInCart ? 
                removeFromCart? removeFromCart(product) : '' 
                : addToCart ? addToCart(product) : ''
              }
            }}
          >
            {isProductInCart ? (
              <MdRemoveShoppingCart size={24} color="red" />
            ) : (
              <FaCartArrowDown size={24} color="green" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductInfo;
