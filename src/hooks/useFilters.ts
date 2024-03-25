import { useContext } from "react"
import { FiltersContext } from "../context/filters"
import { productPropsType } from "../Types/productPropsType"


export function useFilters(){
    const {filters,setFilters}=useContext(FiltersContext)
  
  
    function filterProducts(products : productPropsType[]){
      return products.filter((product)=>{
        return(
          (
            filters?.category=='all' ||
            product.category==filters?.category
          )
        )
      })
    }

      
    return {filters,filterProducts, setFilters}
  }