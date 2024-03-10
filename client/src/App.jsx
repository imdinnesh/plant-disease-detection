import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import NavBar from './Components/NavBar'
import SignupPage from './Pages/Register'
import SignInPage from './Pages/Login'

function App() {
  //Main page for routing...

  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/register' element={<SignupPage/>}/>
        <Route path='/login' element={<SignInPage/>}/>
      </Routes>
    </>
  )
}

export default App
