import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Quiz from './pages/Quiz.tsx'
import MentionsLegales from './pages/MentionsLegales.tsx'

const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/quiz', element: <Quiz /> },
  { path: '/mentions-legales', element: <MentionsLegales /> },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
