// eslint-disable-next-line no-unused-vars
import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './components/pages/Home/Home'
import Cart from './components/pages/Cart/Cart'
import Placeorder from './components/pages/Placeorder/Placeorder'
import Header from './components/Header/Header'
import Exploremenu from './components/Exploremenu/Exploremenu'
import FoodDisplay from './components/FoodDisplay/FoodDisplay'
import Footer from './components/Footer/Footer'
import Appdownload from './components/AppDownload/Appdownload'


const App = () => {
  return (
    <>
      <div className='app'>
        <Navbar />
        <Header />
        <Exploremenu />
        <FoodDisplay />
        <Appdownload/>
        <Routes>
          <Route path='/' elements={<Home />} />
          <Route path='/cart' elements={<Cart />} />
          <Route path='/order' elements={<Placeorder />} />
        </Routes>
      </div>
      <Footer />
    </>

  )
}

export default App