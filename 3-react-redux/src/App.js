import Home from "./Home";
import { useSelector } from 'react-redux'
import About from "./About";
function App() {
  const data = useSelector((state) => state.reducer.count)
  return (
    <div className="App">
      <h1>Couter App with redux</h1>
      <Home />

      <h3> count is: {data}</h3>
      
      <About />
    </div>
  );
}

export default App;
