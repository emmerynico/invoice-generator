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
    <Router>
      <Routes>
  <Route path="/" element={<>
    <p>coucou</p>
    <Link to='/login'>Go to coucou</Link>
  </>}  />
  <Route path="/login" element={<Coucou />} />
      </Routes>
    </Router>
  )
}

export default App
