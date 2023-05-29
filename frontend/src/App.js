import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './Components/Footer';
import NavBar from './Components/NavBar';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Rooms from './Pages/Rooms';

function App() {
  return (
    <>
    {/* <NavBar/>
    <Home/>
    <Footer/> */}

    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/rooms" element={<Rooms />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
