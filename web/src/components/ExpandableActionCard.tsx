import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

interface Stat {
  label: string
  value: string
}

interface ExpandedContent {
  highlights: string[]
  stats?: Stat[]
  link?: { label: string; to: string; external?: boolean }
}

interface ExpandableActionCardProps {
  visual: ReactNode
  title: string
  description: string
  expandedContent?: ExpandedContent
  /** Couleur du bandeau en haut de la carte */
  strip?: 'primary' | 'accent'
}

export default function ExpandableActionCard({
  visual,
  title,
  description,
  expandedContent,
  strip = 'primary',
}: ExpandableActionCardProps) {
  const [open, setOpen] = useState(false)

  return (
    <div
      className={`bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border overflow-hidden transition-all duration-300 ${
        open ? 'border-primary/35 shadow-xl' : 'border-primary/15'
      }`}
    >
      {/* Bandeau visuel */}
      <div
        className={`flex items-center justify-center h-24 ${
          strip === 'accent' ? 'bg-accent/20' : 'bg-primary/8'
        }`}
      >
        {visual}
      </div>

      {/* Contenu */}
      <div className="p-6">
        <h3 className="font-heading text-lg font-bold text-primary mb-2">{title}</h3>
        <p className="text-gray-700 text-sm leading-relaxed">{description}</p>

        {expandedContent && (
          <>
            <button
              onClick={() => setOpen(!open)}
              className="mt-4 flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-accent transition-colors group"
            >
              <span>{open ? 'Voir moins' : 'En savoir plus'}</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
              />
            </button>

            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                open ? 'max-h-[600px] opacity-100 mt-4' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="pt-4 border-t border-primary/10">
                {expandedContent.stats && expandedContent.stats.length > 0 && (
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    {expandedContent.stats.map((stat, i) => (
                      <div key={i} className="bg-primary/8 rounded-xl p-3 text-center">
                        <div className="text-xl font-bold text-primary">{stat.value}</div>
                        <div className="text-xs text-gray-600 mt-0.5">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                )}
                <ul className="space-y-2">
                  {expandedContent.highlights.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
                {expandedContent.link && (
                  <div className="mt-4">
                    {expandedContent.link.external ? (
                      <a
                        href={expandedContent.link.to}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-primary border border-primary/30 px-4 py-2 rounded-full hover:bg-primary hover:text-white transition-all duration-200"
                      >
                        {expandedContent.link.label} →
                      </a>
                    ) : (
                      <Link
                        to={expandedContent.link.to}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-primary border border-primary/30 px-4 py-2 rounded-full hover:bg-primary hover:text-white transition-all duration-200"
                      >
                        {expandedContent.link.label} →
                      </Link>
                    )}
                  </div>
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
