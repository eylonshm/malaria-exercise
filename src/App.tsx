import React from 'react'
import { Home, Tasks } from './routes'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ROUTES } from './constants'

const router = createBrowserRouter([
  {
    path: ROUTES.root,
    element: <Home />,
  },
  {
    path: ROUTES.tasks,
    element: <Tasks />,
  },
])

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
