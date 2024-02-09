import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Headers from './components/Header'
import { About, Dashboard, Home, Projects, SignIn, SignUp } from './pages'

export default function App() {
  return (
    <BrowserRouter>
    <Headers />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  )
}
