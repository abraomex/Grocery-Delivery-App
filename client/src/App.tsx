import { Toaster } from 'react-hot-toast'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import FlashDeals from './pages/FlashDeals'
import Products from './pages/products'
import SearchResult from './pages/SearchResults'
import Applayout from './pages/Applayout'
import ProductPage from './pages/ProductPage'
import Ckeckout from './pages/Ckeckout'
import MyOrders from './pages/MyOrders'
import OrderTracking from './pages/OrderTracking'
import Addresses from './pages/Addresses'
import Protectedroute from './components/Protectedroute'

const App = () => {
  return (
    <>
      <Toaster position="top-right" toastOptions={{ duration: 3000, style: { background: "#1B3022", color: "#fff", borderRadius: "12px", fontSize: "14px" } }} />
      <Routes>

        <Route path="/login" element={<Login />} />

        <Route path="/" element={<Applayout />}>

          <Route index element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductPage />} />
          <Route path="/search" element={<SearchResult />} />
          <Route path="/deals" element={<FlashDeals />} />

          <Route element={<Protectedroute />}>
            <Route path="Checkout" element={<Ckeckout />} />
            <Route path="/orders" element={<MyOrders />} />
            <Route path="/orders/:id" element={<OrderTracking />} />
            <Route path="/addresses" element={<Addresses />} />

          </Route>



        </Route>



      </Routes>
    </>
  )
}


export default App;