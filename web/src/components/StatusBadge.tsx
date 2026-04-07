interface StatusBadgeProps {
  status: 'libre' | 'inscription' | 'probable' | 'confirmer'
}

export default function StatusBadge({ status }: StatusBadgeProps) {
  const config = {
    libre: {
      text: 'Accès libre',
      className: 'bg-green-100 text-green-800 border-green-300'
    },
    inscription: {
      text: 'Sur inscription',
      className: 'bg-accent/20 text-primary border-accent/40'
    },
    probable: {
      text: 'Programme probable',
      className: 'bg-amber-100 text-amber-800 border-amber-300'
    },
    confirmer: {
      text: 'À confirmer',
      className: 'bg-gray-100 text-gray-700 border-gray-300'
    }
  }

  const { text, className } = config[status]

  return (
    <span className={`inline-flex items-center px-3 py-1 text-xs font-semibold rounded-full border ${className}`}>
      {text}
    </span>
  )
}
