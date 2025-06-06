import React from 'react'
import Header from './components/header/Header'
import { BrowserRouter } from 'react-router-dom';
import Banner from './components/banner/Banner';
import Categories from './components/category/Categories';
import Product from './components/products/Product';
import Offer from './components/offers/Offer';
import DailySells from './components/sells/DailySells';
import TopItems from './components/top/TopItems';
import AppBanner from './components/appBanner/AppBanner';
import Footer from './components/footer/Footer';
const App = () => {
  return (
    <div>
        <header>
          <Header />
        </header>
        <main>
          <Banner />
        </main>
        <section>
          <Categories />
          <Product/>
          <Offer />
          <DailySells />
          <TopItems />
          <AppBanner />
        </section>
        <footer>
          <Footer />
        </footer>
    </div>
  )
}

export default App