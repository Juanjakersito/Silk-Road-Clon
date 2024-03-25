import ReactDOM from 'react-dom/client'
import './index.css'
import { FiltersProvider } from './context/filters.tsx'
import { CartProvider } from './context/cart.tsx'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage.tsx'
import Loginpage from './pages/Loginpage.tsx'





ReactDOM.createRoot(document.getElementById('root')!).render(
  <CartProvider>
  <FiltersProvider>
    <BrowserRouter>
    <Routes>

    <Route path='/' element={<Homepage/>}/>
    <Route path='/login' element={<Loginpage/>}/>

    <Route path='*' element={<Navigate to={'/'}/>}/>

    </Routes>
    </BrowserRouter>
  </FiltersProvider>
  </CartProvider>,
)
