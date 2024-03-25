import { useContext } from 'react'
import Navbar from '../components/Navbar/Navbar'
import SidebarLeft from '../components/Sidebar/SidebarLeft'
import News from '../components/News/News'
import Products from '../components/Products/Products'
import './Homepage.css'
import Cart from '../components/Cart/Cart'
import { useFilters } from '../hooks/useFilters'
import { useProducts } from '../hooks/useProducts'
import { CartContext } from '../context/cart'
import LoadingPage from './LoadingPage'
import { Navigate } from 'react-router-dom'
function Homepage() {
  const {categorys,products,searchProducts}=useProducts()
  const {filterProducts}=useFilters()
 const {cartProps}=useContext(CartContext)



 if(!cartProps?.user){
  return <Navigate to={'/login'}/>
 }

  return (
    <div>
        {cartProps?.paying ? <LoadingPage/> : '' }
        <Navbar searchProducts={searchProducts}/>
        <Cart/>
        <div className="homepage_content">
        <SidebarLeft categorys={categorys} searchProducts={searchProducts}/>
        <Products products={filterProducts(products)}/>
        <News/>
        </div>
    </div>
  )
}

export default Homepage