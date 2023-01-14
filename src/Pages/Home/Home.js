import React from 'react'
import Carousel from '../../components/carousel/carousel'
import Cart from '../../components/cart/Cart'
import Footer from '../../components/footer/Footer'
import Header from '../../components/Header/Header'

import "./home.scss"

const Home = () => {
  return (
    <main>
    <Header />
    <div className='home'>
        <Carousel />
        <Cart />
    </div>

    <Footer />
  </main>
  )
}

export default Home