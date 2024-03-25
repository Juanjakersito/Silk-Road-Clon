import { useContext } from 'react'
import { CartContext } from '../../context/cart'
import { productPropsType } from '../../Types/productPropsType'

function CartElement({productProps} : {productProps : productPropsType}) {
  const {addToCart,removeOneProduct}=useContext(CartContext)
  return (
    <div className='cart-element'>
        <img width={100} height={100} src={productProps.thumbnail} alt="" />
        <h4>{productProps.title}</h4>
        <div className="cart-element-buttons">
        <button onClick={()=>{removeOneProduct ? removeOneProduct(productProps): ''}}>-</button>
        <input type="text"  value={productProps.quantity} name="" id="" readOnly/>
        <button onClick={()=>{addToCart ? addToCart(productProps) : ''}}>+</button>
        </div>
    </div>
  )
}

export default CartElement