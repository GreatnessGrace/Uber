import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import Start from './pages/Start'
import UserLogin from './pages/UserLogin'
import UserSignup from './pages/UserSignup'
import Home from './pages/Home'

const App = () => {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Start />} />
        <Route path='/login' element={<UserLogin />} />

        <Route path='/signup' element={<UserSignup />} />
        <Route path='/home' element={<Home />} />
        
       
       
      </Routes>
    </div>
  )
}

export default App