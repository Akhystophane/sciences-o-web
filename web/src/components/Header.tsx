import { useState } from 'react'
import { Link } from 'react-router-dom'

const navItems = [
  { label: 'Accueil', to: '/' },
  { label: 'Nos Actions', to: '/#actions' },
  { label: 'Événements', to: '/quiz' },
  { label: 'À propos', to: '/#about' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-black/5 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      
      <div className="container-page flex items-center justify-between py-4 md:py-5 relative z-10">
        <Link to="/" className="flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white font-bold">Ô</span>
          <span className="font-heading text-lg font-semibold tracking-tight text-primary">Sciences Ô</span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <Link key={item.label} to={item.to} className="text-sm font-medium text-gray-700 hover:text-primary">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <a href="https://www.helloasso.com/associations/sciences-o/adhesions/sciences-o-adhesion-2025-2026" target="_blank" rel="noopener noreferrer" className="btn-accent">Rejoindre</a>
        </div>

        <button
          aria-label="Menu"
          className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 md:hidden"
          onClick={() => setOpen(!open)}
        >
          <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden">
          <div className="container-page space-y-1 pb-4">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <a href="https://www.helloasso.com/associations/sciences-o/adhesions/sciences-o-adhesion-2025-2026" target="_blank" rel="noopener noreferrer" className="btn-accent inline-block w-full text-center" onClick={() => setOpen(false)}>
              Rejoindre
            </a>
          </div>
        </div>
      )}
    </header>
  )
}


