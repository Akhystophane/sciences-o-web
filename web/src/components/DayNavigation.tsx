import { Link } from 'react-router-dom'
import { ChevronLeft, ChevronRight, LayoutGrid } from 'lucide-react'

interface DayNavigationProps {
  previousDay?: {
    label: string
    url: string
  }
  nextDay?: {
    label: string
    url: string
  }
}

export default function DayNavigation({ previousDay, nextDay }: DayNavigationProps) {
  return (
    <div className="mt-12 space-y-4">
      {/* Back to overview — always visible, centered */}
      <div className="flex justify-center">
        <Link
          to="/semaine-outremer"
          className="inline-flex items-center gap-2 text-sm font-semibold text-primary border border-primary/30 bg-white/80 hover:bg-primary hover:text-white px-5 py-2.5 rounded-full shadow-sm transition-all duration-300 hover:shadow-md"
        >
          <LayoutGrid className="w-4 h-4" />
          Programme complet de la semaine
        </Link>
      </div>

      {/* Prev / Next day */}
      <div className="flex items-center justify-between gap-4">
        {previousDay ? (
          <Link
            to={previousDay.url}
            className="group flex items-center gap-2 btn-primary px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:-translate-x-1"
          >
            <ChevronLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
            <span className="hidden sm:inline">{previousDay.label}</span>
            <span className="sm:hidden">Jour précédent</span>
          </Link>
        ) : (
          <div></div>
        )}

        {nextDay ? (
          <Link
            to={nextDay.url}
            className="group flex items-center gap-2 btn-primary px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:translate-x-1"
          >
            <span className="hidden sm:inline">{nextDay.label}</span>
            <span className="sm:hidden">Jour suivant</span>
            <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  )
}
