import StatusBadge from './StatusBadge'
import { Clock, MapPin, ExternalLink } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

interface EventCardProps {
  title: string
  time: string
  location?: string
  description: string
  status: 'libre' | 'inscription' | 'probable' | 'confirmer'
  registrationUrl?: string
  actionUrl?: string
  actionLabel?: string
  secondaryActionUrl?: string
  secondaryActionLabel?: string
}

export default function EventCard({
  title,
  time,
  location,
  description,
  status,
  registrationUrl,
  actionUrl,
  actionLabel,
  secondaryActionUrl,
  secondaryActionLabel
}: EventCardProps) {
  const navigate = useNavigate()
  const isExternalAction = actionUrl?.startsWith('http')
  const isSecondaryExternalAction = secondaryActionUrl?.startsWith('http')

  function renderAction(actionTarget: string, label: string, external?: boolean) {
    if (external) {
      return (
        <a
          href={actionTarget}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-primary/20 px-4 py-2 text-sm font-semibold text-primary transition-all duration-300 hover:border-primary/35 hover:bg-primary/5"
        >
          {label}
          <ExternalLink className="w-4 h-4" />
        </a>
      )
    }

    return (
      <button
        type="button"
        onClick={() => navigate(actionTarget)}
        className="inline-flex items-center gap-2 rounded-full border border-primary/20 px-4 py-2 text-sm font-semibold text-primary transition-all duration-300 hover:border-primary/35 hover:bg-primary/5"
      >
        {label}
      </button>
    )
  }

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

      {((actionUrl && actionLabel) || (secondaryActionUrl && secondaryActionLabel)) && (
        <div className="flex flex-wrap gap-2">
          {actionUrl && actionLabel && renderAction(actionUrl, actionLabel, isExternalAction)}
          {secondaryActionUrl &&
            secondaryActionLabel &&
            renderAction(secondaryActionUrl, secondaryActionLabel, isSecondaryExternalAction)}
        </div>
      )}
    </div>
  )
}
