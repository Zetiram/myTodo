import {Routes, Route, Link, NavLink} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Navbar from './components/nav.jsx'
import Home from './pages/home.jsx'
import Design from './pages/design.jsx'
import Development from './pages/development.jsx'
import Marketing from './pages/marketing.jsx'

function App() {
  return (
      <div>

      <Navbar></Navbar>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/development" element={<Development/>}/>
        <Route path="/design" element={<Design/>}/>
        <Route path="/marketing" element={<Marketing/>}/>
      </Routes>
      </div>
  );
}

export default App;
