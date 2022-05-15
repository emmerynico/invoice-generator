import { useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

import './App.css'
import Coucou from "./pages/Coucou";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Coucou</h1>
    </div>
  )
}

export default App
