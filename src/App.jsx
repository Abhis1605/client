import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Layout from './components/Layout'

export default function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>

          </Route>
          
        </Routes>
      </BrowserRouter>
  )
}
