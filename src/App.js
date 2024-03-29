import {Routes,Route} from 'react-router-dom'
import Home from './Pages/Home';
import Pizza from './Pages/Pizza';
import Burger from './Pages/Burger';
import Pasta from './Pages/Pasta';
import Navbar from './Components/Navbar';
import './App.css';

export default function App() {
  return (
    <div>
      <Navbar/>
      
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/pizza' element={<Pizza/>}></Route>
      <Route path='/burger' element={<Burger/>}></Route>
      <Route path='/pasta' element={<Pasta/>}></Route>
    </Routes>
    </div>
  );
}




 
