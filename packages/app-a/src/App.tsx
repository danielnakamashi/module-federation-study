import * as React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import './App.css'

const App2 = React.lazy(() => import('app-b/App'))
const App3 = React.lazy(() => import('app-c/App'))

function App() {
  return (
    <Routes>
      <Route
        path="/app2"
        element={
          <React.Suspense fallback={'Loading App 2...'}>
            <App2 />
          </React.Suspense>
        }
      />
      <Route
        path="/app3"
        element={
          <React.Suspense fallback={'Loading App 3...'}>
            <App3 />
          </React.Suspense>
        }
      />
    </Routes>
  )
}

export default App
