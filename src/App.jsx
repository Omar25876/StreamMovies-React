import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout/Layout'
import Home from './components/Home/Home'
import Products from './components/Products/Products'
import Cart from './components/Cart/Cart'
import Brands from './components/Brands/Brands'
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import Notfound from './components/Notfound/Notfound'
import Categories from './components/Categories/Categories'

const routes =createBrowserRouter([
  {path: "", element: <Layout />
  , children: [
    {index: true, element: <Home />},
    {path: "products", element: <Products />},
    {path: "cart", element: <Cart />},
    {path: "categories", element: <Categories />},
    {path: "brands", element: <Brands />},
    {path: "login", element: <Login />},
    {path: "register", element: <Register />},
    {path: "*", element: <Notfound />},
  ]
  },
])

function App() {


  return <RouterProvider router={routes} />
}

export default App
