import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Profil from './Pages/Profil';
import { LanguageProvider } from './Components/LanguageContext';

function App() {
  return (
    <LanguageProvider>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/profil" element={<Profil/>} />
      </Routes>
    </HashRouter>
    </LanguageProvider>
  );
}

export default App;
