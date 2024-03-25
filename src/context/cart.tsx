import { createContext, useState } from "react";
import { productPropsType } from "../Types/productPropsType";
import { CartContextInterface, cartPropsType, cartProviderPropsType } from "../Types/cartContextTypes";



//1._ crear el contexto 
export const CartContext=createContext<Partial<CartContextInterface>>({})
//2._crear el provider para el context

export function CartProvider({children} : cartProviderPropsType){
  
    const [cartProps,updateCartProps]=useState<cartPropsType>({
        user: null,
        paying:false,
        count:0,
        wallet:23198,
        showCart:true,
        cart:[]
    })


    function showCart(){
        let cart=document.querySelector('.cart') as HTMLElement
        

        if(cartProps.showCart){
            cart.style.display='block'
            cart.style.height='100%'
            updateCartProps({...cartProps,showCart: !cartProps.showCart})
        }else{
            cart.style.display='none'
            updateCartProps({...cartProps,showCart: !cartProps.showCart})
        }

        
    }
    

    function returnNumberOfProducts(){
        let numberOfArticles : number =0
        for(let article of cartProps.cart){
          numberOfArticles+=article.quantity
        }
        return numberOfArticles
    }

  

    function addToCart(product : productPropsType){

        if((cartProps.count + product.price)>=cartProps.wallet){return alert('insufficient bitcoin')}
        const productInCartIndex=cartProps.cart.findIndex(item=>item.id==product.id)

        if(productInCartIndex>=0){
            if(cartProps.cart[productInCartIndex].quantity==product.stock){return}
        }



        console.log(cartProps.count)


        if(productInCartIndex>=0){
            const newCart=structuredClone(cartProps.cart)
            newCart[productInCartIndex].quantity+=1
            console.log(cartProps.cart)
        return updateCartProps({...cartProps,cart : newCart ,count : cartProps.count + product.price}) ; 
        }
        updateCartProps({...cartProps, cart : [
            ...cartProps.cart,{
            ...product,
            quantity:1
        }
    ],
     count : cartProps.count + product.price
})
        //console.log(cart)
        console.log(cartProps.cart)


    }

    function removeOneProduct(product:productPropsType){
       
        const productInCartIndex=cartProps.cart.findIndex(item=>item.id==product.id)
        if(product.quantity==1) {return removeFromCart(product)};
        const newCart=structuredClone(cartProps.cart)
        newCart[productInCartIndex].quantity-=1
         
        updateCartProps({...cartProps,
            cart : newCart,
            count : cartProps.count-product.price
        }) ;
    }

    function removeFromCart(product:productPropsType){
        const productInCartIndex=cartProps.cart.findIndex(item=>item.id==product.id)

        const productInCart=cartProps.cart[productInCartIndex]

        console.log(productInCart)


        updateCartProps({...cartProps, 
            cart : cartProps.cart.filter(item=>item.id!==product.id),
            count: cartProps.count-productInCart.price*productInCart.quantity
        })

        console.log(cartProps.cart)
    }

    function clearCart(){
        updateCartProps({...cartProps, cart: [],count:0})
    }
      return(
        <CartContext.Provider value={{
            addToCart,
            removeFromCart,
            removeOneProduct,
            returnNumberOfProducts,
            clearCart,
            showCart,
            cartProps,
            updateCartProps
        }}>
            {children}
        </CartContext.Provider>
      )
}