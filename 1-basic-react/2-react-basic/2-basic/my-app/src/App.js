import Button from "./Button";
import Navbar from "./Navbar";
import Car from "./Car";
function App() {
  if(true) {
    return (
      <>
        <Navbar />
        <h1>My project first react {" i am string "} {5+6} project</h1>
        <Car model ="ford" color="red"/>
       <Button />
      </>
    );
  } else {
    return(
      <>
      <h1>I am false</h1>
      <h2>heading to from false</h2>
      </>
    )
  }
 
}

export default App;
