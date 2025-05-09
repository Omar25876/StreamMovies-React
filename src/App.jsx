import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout/Layout'
import Home from './components/Home/Home'
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import Notfound from './components/Notfound/Notfound'
import Categories from './components/Categories/Categories'
import MovieDetails from './components/MovieDetails/MovieDetails'
import MoviesProvider from './context/MoviesProvider'
import SearchResult from './components/Search/SearchResult'

const routes =createBrowserRouter([
  {path: "", element: <Layout />
  , children: [
    {index: true, element: <Home />},
    {path: "categories", element: <Categories />},
    {path: "movie/:id", element: <MovieDetails />},
    {path: "search", element: <SearchResult />},
    {path: "login", element: <Login />},
    {path: "register", element: <Register />},
    {path: "*", element: <Notfound />},
  ]
  },
])

function App() {
  
  return  <>
   <MoviesProvider>
      <RouterProvider router={routes} />
    </MoviesProvider>
  </>
}

export default App
