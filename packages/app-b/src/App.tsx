import * as React from 'react'
import { Link } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <>
      <h1>App B</h1>
      <Link to="/app-c">App C</Link>
    </>
  )
}

export default App
