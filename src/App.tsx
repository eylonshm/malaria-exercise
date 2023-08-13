import React from 'react'
import { Home, Tasks, AddTask } from './routes'
import NavBar from './components/NavBar'
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
  {
    path: ROUTES.addTask,
    element: <AddTask />,
  },
])

function App() {
  return (
    <div>
      <NavBar />
      <RouterProvider router={router} />
    </div>
  )
}

export default App
