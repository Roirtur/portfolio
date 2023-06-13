import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './Components/LanguageContext';
import Home from './Pages/Home';
import Profil from './Pages/Profil';
import Test from './Pages/test';
import Contact from './Pages/Contact';
import Portfolio from './Pages/Portfolio';
import Skills from './Pages/Skills';

function App() {
  return (
    <LanguageProvider>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/profil" element={<Profil/>} />
        <Route path="/test" element={<Test/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/portfolio" element={<Portfolio/>} />
        <Route path="/skills" element={<Skills/>} />
      </Routes>
    </HashRouter>
    </LanguageProvider>
  );
}

export default App;
