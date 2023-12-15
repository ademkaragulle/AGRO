import './App.css'
import { Routes, Route } from 'react-router-dom'
import Cart from './components/cart/Cart'
import Product from './components/product/Product'
import ProductDetail from './components/product-detail/ProductDetail'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Body from './components/body/Body'

function App() {

  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Body />} />
        <Route path='/cart' element={<Cart />} />
        <Route path="/product/:slug" element={<ProductDetail />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
