import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/login'
import Profile from './components/profile'

function App() {
  

  return (
    <>
      <UserContextProvider>
        <h1>hlo world</h1>
        <Login />
       <Profile />
      </UserContextProvider>
    </>
  )
}

export default App
