import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import AllPlayers from './components/AllPlayers';
import SinglePlayer from './components/SinglePlayer';
import NewPlayerForms from './components/NewPlayerForms';
import './App.css'

function App() {
  

  return (
    
    <div id="App">
    <div className="navbar">
      <Link to="/">All Players</Link>
      
      <Link to="/players/newplayer">New Player</Link>
    
    </div>  
    
    <Routes>
      <Route path="/" element={<AllPlayers />} />
      <Route path="/players/:playerId" element={<SinglePlayer />} />
      <Route path="/players/newplayer" element={<NewPlayerForms />} />
    </Routes>
    </div>
    )
  }

export default App
