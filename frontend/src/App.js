import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './Components/Footer';
import NavBar from './Components/NavBar';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Rooms from './Pages/Rooms';
import Testimonial from './Pages/Testimonial';

function App() {
  return (
    <>
    {/* <NavBar/>
    <Home/>
    <Footer/> */}

    <Router>
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/rooms" element={<Rooms/>} />
      <Route path="/testimonial" element={<Testimonial/>} />
      <Route path="/contact" element={<Contact/>} />
      
      </Routes>
    </Router>
    </>
  );
}

export default App;
