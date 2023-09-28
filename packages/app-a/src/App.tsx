import * as React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import './App.css'

const AppB = React.lazy(() => import('appB/AppB'))
const AppC = React.lazy(() => import('appC/AppC'))

function App() {
  return (
    <Routes>
      <Route
        path="/app-b"
        element={
          <React.Suspense fallback="Loading app b">
            <AppB />
          </React.Suspense>
        }
      />
      <Route
        path="/app-c"
        element={
          <React.Suspense fallback={'Loading App c...'}>
            <AppC />
          </React.Suspense>
        }
      />
    </Routes>
  )
}

export default App
