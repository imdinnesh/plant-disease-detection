import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import SignupPage from './Pages/Register'
import SignInPage from './Pages/Login'
import LobbyScreen from './Pages/Lobby'

function App() {
  //Main page for routing...

  return (
    <>
      <Routes>
        <Route path='/' element={<LobbyScreen/>}/>
        <Route path='/register' element={<SignupPage/>}/>
        <Route path='/login' element={<SignInPage/>}/>
        <Route path='/home' element={<HomePage/>}/>
      </Routes>
    </>
  )
}

export default App
