import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import Login from './components/Login.tsx'
import Register from './components/Register.tsx'
import Profile from './components/Profile.tsx'
import Messages from './components/Messages.tsx'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
  <StrictMode>
    <Routes>
      <Route path="/" element={<App />} />

      <Route path='login' element={<Login />} />
      <Route path='register' element={<Register />} />
      <Route path='profile' element={<Profile />} />
      <Route path='messages' element={<Messages />} />
    </Routes>
  </StrictMode>,
  </BrowserRouter>
)
