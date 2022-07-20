import Card from "./components/Card";
import Counter from "./components/Counter";
function App() {

  return (
    <div className="App">

     <Card title="About Me 1" age={40}/>
     <Counter />

    </div>
  );
}

export default App;
