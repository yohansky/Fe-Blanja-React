import "./App.css";
import Navbar from "./components/navbar";
import Router from "./config/index";

function App() {
  return (
    // empty tag, karena div membawa class
    <div>
      <Router />
      {/* <Navbar /> */}
      {/* <Home /> */}
      {/* <div className="container" style={{ marginTop: 100 }}></div> */}
    </div>
  );
}

export default App;
