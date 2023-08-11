import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar';
import Temas from './components/Temas';
import Home from './Pages/home/Home';
import Acerca from './Pages/acerca/Acerca';
import Portfolio from './Pages/portfolio/Portfolio';
import Contacto from './Pages/contacto/Contacto';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Temas />
      <Routes>
        <Route index element={<Home />} />
        <Route path='acerca' element={<Acerca />} />
        <Route path='portafolio' element={<Portfolio />} />
        <Route path='contacto' element={<Contacto />} />
      </Routes>
    </BrowserRouter>
      
  )
}

export default App;
