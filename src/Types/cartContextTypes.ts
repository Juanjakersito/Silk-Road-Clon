import { Dispatch, ReactNode, SetStateAction } from "react"
import { productPropsType } from "./productPropsType"


export type cartPropsType={
    user:string | null,
    paying:boolean,
    count:number,
    wallet:number,
    showCart:boolean,
    cart:Array<any>
}

export type cartProviderPropsType={
    children: ReactNode
}

export interface CartContextInterface {
    cartProps : cartPropsType,
    updateCartProps: Dispatch<SetStateAction<cartPropsType>>,
     addToCart: ((product:productPropsType)=>void),
     removeFromCart: ((product:productPropsType)=>void),
     removeOneProduct:((product:productPropsType)=>void),
     returnNumberOfProducts: (()=>number),
     clearCart: (()=>void),
     showCart:(()=>void),

}

