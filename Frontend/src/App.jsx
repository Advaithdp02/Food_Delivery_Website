import React from 'react'
import Navbar from './components/navbar/Navbar'
import { Route, Routes } from 'react-router-dom'


import Home from './pages/home/home';
import Cart from './pages/cart/cart';
import Placeorder from './pages/placeorder/placeorder';
const App = () => {
  return (
    <div className='app'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/placeorder' element={<Placeorder/>}/>


      </Routes>

      
    </div>
  )
}

export default App
