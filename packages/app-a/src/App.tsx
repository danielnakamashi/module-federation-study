import * as React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import './App.css'

const App2 = React.lazy(() => import('app-b/App'))

function App() {
  return (
    <Routes>
      <Route path="/" element={<Link to="/app1">Go to app1</Link>} />
      <Route path="app1" element={<Link to="/app2">Go to app2</Link>} />
      <Route
        path="app2"
        element={
          <React.Suspense fallback={'Loading...'}>
            <App2 />
          </React.Suspense>
        }
      />
    </Routes>
  )
}

export default App
