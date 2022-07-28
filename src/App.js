
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import Features from "./Components/Features/Features";
import Home from './Components/Home/Home';
import Login from "./Components/Login/Login";
import Services from "./Components/Servieces/Services";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login/>} />
        <Route path="/services" element={<Services/>}/>
        <Route path="/features" element={<Features/>}/>
        
      
    </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
