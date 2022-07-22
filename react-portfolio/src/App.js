import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Work from "./pages/Work";
import Contact from "./pages/Contact";
import SharedLayout from "./pages/SharedLayout";
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<SharedLayout />}>
      <Route index element={<Home />}  />
      <Route path="/about" element={<About />}  />
      <Route path="/work" element={<Work />}  />
      <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
    
    </BrowserRouter>
  );
}

export default App;
