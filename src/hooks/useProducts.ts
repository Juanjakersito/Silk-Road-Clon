import { useEffect, useState } from "react";

export function useProducts() {
  const [products, setProducts] = useState([])
  const [categorys, setCategorys] = useState([]);




  function searchProducts(search:string){
    fetch(`https://dummyjson.com/products/search?q=${search}&limit=100`)
    .then(res=>res.json())
    .then(data=>setProducts(data['products']))
  }


  useEffect(() => {
    fetch('https://dummyjson.com/products?limit=100')
      .then(res => res.json())
      .then((data) => {
        setProducts(data['products'])
        console.log(products)
      })

  }, [])

  useEffect(() => {
    fetch('https://dummyjson.com/products/categories')
      .then(res => res.json())
      .then((data) => setCategorys(data))
  }
    , []);





  return { products, categorys,searchProducts, setProducts }

}