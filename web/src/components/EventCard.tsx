import StatusBadge from './StatusBadge'
import { Clock, MapPin, ExternalLink } from 'lucide-react'

interface EventCardProps {
  title: string
  time: string
  location?: string
  description: string
  status: 'libre' | 'inscription' | 'probable' | 'confirmer'
  registrationUrl?: string
}

export default function EventCard({
  title,
  time,
  location,
  description,
  status,
  registrationUrl
}: EventCardProps) {
  return (
    <div className="group relative bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-primary/15 transition-all duration-300 hover:shadow-xl hover:bg-white/95 hover:border-primary/25 hover:-translate-y-1">
      <div className="flex items-start justify-between gap-4 mb-3">
        <h3 className="text-xl font-bold text-primary font-heading">{title}</h3>
        <StatusBadge status={status} />
      </div>

      <div className="space-y-2 mb-4">
        <div className="flex items-center gap-2 text-gray-700">
          <Clock className="w-4 h-4 text-accent" />
          <span className="text-sm font-medium">{time}</span>
        </div>
        {location && (
          <div className="flex items-center gap-2 text-gray-700">
            <MapPin className="w-4 h-4 text-accent" />
            <span className="text-sm">{location}</span>
          </div>
        )}
      </div>

      <p className="text-gray-800 text-sm leading-relaxed mb-4">{description}</p>

      {status === 'inscription' && registrationUrl && (
        <a
          href={registrationUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 btn-accent text-sm px-4 py-2 rounded-full font-semibold transition-all duration-300 hover:shadow-md"
        >
          S'inscrire
          <ExternalLink className="w-4 h-4" />
        </a>
      )}
    </div>
  )
}
