export default function Footer() {
  return (
    <footer className="mt-24 border-t border-black/5 bg-white">
      <div className="container-page flex flex-col items-center justify-between gap-6 py-8 sm:flex-row">
        <div className="flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[--color-primary] text-[--color-text-inverse] font-bold">Ô</span>
          <span className="font-heading text-base font-semibold tracking-tight">Sciences Ô</span>
        </div>
        <nav className="flex items-center gap-6 text-sm text-gray-600">
          <a href="/mentions-legales" className="hover:text-gray-900">Mentions légales</a>
          <a href="mailto:scienceso.outremer@gmail.com" className="hover:text-gray-900">Contact</a>
          <a href="https://www.instagram.com/sciences_o/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900">
            <img src="/instagram-icon.svg" alt="Instagram" className="w-5 h-5" />
          </a>
        </nav>
      </div>
    </footer>
  )
}





