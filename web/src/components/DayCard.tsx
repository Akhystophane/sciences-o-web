import { Link } from 'react-router-dom'
import { Calendar, ChevronRight } from 'lucide-react'

interface DayCardProps {
  day: string
  date: string
  theme: string
  eventCount: number
  color: 'primary' | 'accent'
  url: string
}

export default function DayCard({ day, date, theme, eventCount, color, url }: DayCardProps) {
  const colorClasses = color === 'primary'
    ? 'bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20 hover:border-primary/40'
    : 'bg-gradient-to-br from-accent/10 to-accent/5 border-accent/20 hover:border-accent/40'

  const badgeClasses = color === 'primary' ? 'bg-primary text-white' : 'bg-accent text-gray-800'

  return (
    <Link
      to={url}
      className={`group relative block bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border-2 ${colorClasses} transition-all duration-300 hover:shadow-xl hover:-translate-y-2`}
    >
      <div className="flex items-start justify-between mb-4">
        <div className={`inline-flex items-center gap-2 ${badgeClasses} px-3 py-1.5 rounded-full text-sm font-bold`}>
          <Calendar className="w-4 h-4" />
          {day}
        </div>
        <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-primary group-hover:translate-x-1 transition-all duration-300" />
      </div>

      <p className="text-sm text-gray-600 mb-2 font-medium">{date}</p>
      <h3 className="text-2xl font-bold text-primary mb-3 font-heading">{theme}</h3>

      <p className="text-sm text-gray-700">
        {eventCount} {eventCount > 1 ? 'événements' : 'événement'}
      </p>

      <div className="absolute bottom-0 right-0 w-32 h-32 opacity-10 pointer-events-none">
        <svg viewBox="0 0 200 200" className={`w-full h-full ${color === 'primary' ? 'text-primary' : 'text-accent'}`}>
          <path d="M37.1,-25.8C42.4,-12.2,37.1,3.1,29.2,18.1C21.3,33.1,10.6,47.7,1.5,46.9C-7.6,46,-15.2,29.6,-28.5,11.5C-41.7,-6.6,-60.7,-26.3,-56.9,-39C-53.1,-51.7,-26.5,-57.4,-5.3,-54.3C15.9,-51.2,31.8,-39.4,37.1,-25.8Z" transform="translate(100 100)" fill="currentColor"/>
        </svg>
      </div>
    </Link>
  )
}
