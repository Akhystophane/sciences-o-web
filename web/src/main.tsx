import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Quiz from './pages/Quiz.tsx'
import MentionsLegales from './pages/MentionsLegales.tsx'
import SemaineOutremer from './pages/SemaineOutremer.tsx'
import APropos from './pages/APropos.tsx'
import Ressources from './pages/Ressources.tsx'
import Lundi from './pages/som/Lundi.tsx'
import Mardi from './pages/som/Mardi.tsx'
import Mercredi from './pages/som/Mercredi.tsx'
import Jeudi from './pages/som/Jeudi.tsx'
import Vendredi from './pages/som/Vendredi.tsx'

const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/a-propos', element: <APropos /> },
  { path: '/ressources', element: <Ressources /> },
  { path: '/quiz', element: <Quiz /> },
  { path: '/mentions-legales', element: <MentionsLegales /> },
  { path: '/semaine-outremer', element: <SemaineOutremer /> },
  { path: '/semaine-outremer/lundi', element: <Lundi /> },
  { path: '/semaine-outremer/mardi', element: <Mardi /> },
  { path: '/semaine-outremer/mercredi', element: <Mercredi /> },
  { path: '/semaine-outremer/jeudi', element: <Jeudi /> },
  { path: '/semaine-outremer/vendredi', element: <Vendredi /> },
], { basename: import.meta.env.BASE_URL })

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
