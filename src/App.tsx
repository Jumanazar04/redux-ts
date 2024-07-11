
import { BrowserRouter, Route,  Routes } from 'react-router-dom'
import './App.css'
import HomePage from './components/HomePage'
import Layout from './components/Layout'
import Categories from './components/Categories'
import Products from './components/Products'
import Todo from './components/Todo'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path='/category' element={<Categories />} />
            <Route path='/product' element={<Products />} />
            <Route path='/todo' element={<Todo />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
