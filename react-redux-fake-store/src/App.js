import Header from "./components/Header";
import ProductList from "./components/ProductList";
import ProductDetails from "./components/ProductDetails";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<ProductList />} />
      <Route path="/product/:productId" element={<ProductDetails />} />
      <Route>404 page not found</Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}



export default App;
