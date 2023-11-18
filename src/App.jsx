import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import LandingPage from './components/LandingPage'
import Nav from './components/Nav'
import Word from './components/Word'
import Form from './components/Form'

function App() {

  return (
    <>
      <h1>Routing Practice</h1>
      <BrowserRouter> 
        <Nav/>
        <Routes>
          <Route index element={<LandingPage/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/:word/:fcolor/:bcolor" element={<Word/>} />
          <Route path="/form" element={<Form/>} />
          <Route path="/*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
