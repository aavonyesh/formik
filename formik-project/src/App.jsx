import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./layout/Layout";
import Book from "./pages/Book";
import Detail from "./pages/Detail";
import AddBook from "./pages/AddBook";
import BasketProvider from "./context/BasketProvider";
import Basket from "./pages/Basket";

function App() {
  return (
    <div>
      <BasketProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="book" element={<Book />} />
              <Route path="detail/:id" element={<Detail />} />
              <Route path="addbook" element={<AddBook />} />
              <Route path="/basket" element={<Basket />} />
              
            </Route>
          </Routes>
        </BrowserRouter>
      </BasketProvider>
    </div>
  );
}

export default App;
