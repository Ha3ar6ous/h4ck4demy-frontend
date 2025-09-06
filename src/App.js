import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import Landing from './Pages/Landing/Landing'
import Login from './Pages/Login/Login'
import Learn from './Pages/Learn/Learn'
import Game from './Pages/Game/Game'
import MCQGame from './Pages/Game/MCQGame/MCQGame'
import SituationalGame from './Pages/Game/SituationalGame/SituationalGame'
import Leaderboard from './Pages/Leaderboard/Leaderboard'
import ScrollToTop from './Components/ScrollToTop' 
import './App.css'

function App() {
  return (
    <Router>
      <Layout>
        <ScrollToTop /> 
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/login' element={<Login />} />
          <Route path='/learn' element={<Learn />} />
          <Route path='/game' element={<Game />} />
          <Route path='/game/mcq' element={<MCQGame />} />
          <Route path='/game/situational' element={<SituationalGame />} />
          <Route path='/leaderboard' element={<Leaderboard />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
