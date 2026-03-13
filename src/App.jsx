import React from 'react'
import './App.css'
import {Routes,Route} from 'react-router-dom'
import Profile from './Pages/Profile'
import Error from './Pages/Error'
import Head from './Components/Head'

function App() {
  return (
    <div className="container">
      <div className="row">
        <Routes>
          <Route path='/' element={<Head/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/*' element={<Error/>}/>
        </Routes>
      </div>
    </div>
  )
}

export default App