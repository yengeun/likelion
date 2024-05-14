import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Button from './components/Button'
import Write from './components/Write'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path = '/' element ={<Button />} />
            <Route path = '/write' element ={<Write />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App