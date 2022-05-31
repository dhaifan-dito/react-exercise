import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import EffectComp from './components/EffectComp';
import Home from './components/Home';
import Details from './components/Details';
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Navbar />

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/category" element={<EffectComp/>} />
        <Route path="/detail/:idMeal" element={<Details/>} />
      </Routes>

    </div>
    </BrowserRouter>
  );
}

export default App;
