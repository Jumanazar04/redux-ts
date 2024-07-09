
import { BrowserRouter, Route,  Routes } from 'react-router-dom'
import './App.css'
import HomePage from './components/HomePage'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path='/' element={<HomePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
