import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './Dashboard';
import Product  from './Product';
import Cart from './Cart';
import Checkout from './Checkout';

export default function Home() {
  return (
    <div>
      <Header />
      <Routes>
          <Route path="/" element={<Dashboard />}/>
          <Route path='/Product/:id' element={<Product />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/Checkout/'>
            <Route path='' element={<Checkout/>} />
            <Route path=':id' element={<Checkout />} />
          </Route> 
          <Route path='/success' element={<success />} />
      </Routes>
      <Footer />
    </div>
  )
}
