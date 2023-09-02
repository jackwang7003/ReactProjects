import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Posts from './components/Posts';
import Login from './components/Login';
import Register from './components/Register';




function App() {
  const [count, setCount] = useState(0);
 

  return (
    <div className = 'App'>
      <Navbar />
      <Routes>
        <Route path = '/' element = {<Home />} />
        <Route path = '/posts' element = {<Posts />} />
        <Route path = '/login' element = {<Login />} />
        <Route path = '/register' element = {<Register />} />
        

      </Routes>
      
     </div>
  )
}

export default App
