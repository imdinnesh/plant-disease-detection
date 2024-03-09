import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import { FireBaseProvider } from './ContextProvider/FireBaseProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <Router>
      <FireBaseProvider>
        <App />
      </FireBaseProvider>
    </Router>
  </React.StrictMode>,
)
