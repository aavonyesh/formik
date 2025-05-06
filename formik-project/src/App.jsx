import {BrowserRouter,Routes, Route } from 'react-router-dom'
import './App.css'
import Layout from './layout/Layout'
import Book from './pages/Book'
import Detail from './pages/Detail'
import AddBook from './pages/AddBook'

function App() {

  return (
    <div>
      {
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Layout/>}>
              <Route path='book' element={<Book/>}/>
              <Route path='detail/:id' element={<Detail/>}/>
              <Route path='addbook' element={<AddBook/>}/>
            </Route>
          </Routes>
        </BrowserRouter>
      }
    </div>
  )
}

export default App
