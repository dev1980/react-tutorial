import React from "react";
import Html from "./pages/Html";
import Javascript from "./pages/Javascript";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

// import your route components too

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/html" element= {<Html />} />
        <Route path="/Javascript" element= {<Javascript />} />
        
      </Routes>
      
      </BrowserRouter>

    
     <h1>Global Family Online school</h1>
    </div>
  );
}

export default App;
