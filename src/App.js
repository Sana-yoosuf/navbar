import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import About from './components/Pages/About'
import Home from './components/Pages/Home'
import Services from './components/Pages/Services'
import Contact from './components/Pages/Contact'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/services" element={<Services/>}/>
          
          <Route path="/contact" element={<Contact/>}/>

          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
