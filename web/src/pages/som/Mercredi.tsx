import Header from '../../components/Header'
import Footer from '../../components/Footer'
import EventCard from '../../components/EventCard'
import DayNavigation from '../../components/DayNavigation'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { Calendar } from 'lucide-react'

export default function Mercredi() {
  useScrollReveal()

  const events = [
    {
      title: 'Danse traditionnelle Soamako',
      time: '12h15–12h45',
      description: 'Performance mettant en valeur le patrimoine de Wallis-et-Futuna (Uvea mo Futuna).',
      status: 'libre' as const
    },
    {
      title: 'Stands de 6 créateurs et professionnels de la couture',
      time: '12h–17h',
      description: 'Présentation de créations textiles inspirées des identités ultramarines.',
      status: 'libre' as const
    },
    {
      title: 'Conférence — Esclavage, mémoire et reconnaissance international',
      time: '19h–21h',
      description: 'Comprendre l\'initiative historique du Ghana aux Nations Unies. Une conférence au croisement de l\'histoire, du droit international et de la mémoire collective.',
      status: 'libre' as const
    }
  ]

  return (
    <div className="min-h-screen relative text-gray-800 paper-texture">
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-primary/12 via-white via-40% to-accent/30" />
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/15 via-transparent to-transparent" />
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-accent/20 via-transparent to-transparent" />

      <Header />

      <main className="py-16 md:py-20">
        <div className="container-page">
          {/* Header */}
          <div className="max-w-4xl mx-auto mb-12" data-reveal-children>
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <Calendar className="w-4 h-4" />
              Mercredi 15 avril 2026
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mb-4">
              De l'héritage à la reconnaissance
            </h1>

            <div className="h-1 w-24 bg-accent rounded-full mb-6"></div>

            <p className="text-lg text-gray-700 leading-relaxed">
              Une journée entre danse traditionnelle, création textile et réflexion sur la mémoire de l'esclavage
              et la reconnaissance internationale.
            </p>
          </div>

          {/* Events */}
          <div className="max-w-4xl mx-auto space-y-6 mb-12" data-reveal-children>
            <h2 className="font-heading text-2xl font-bold text-primary mb-6">Programme de la journée</h2>
            {events.map((event, index) => (
              <EventCard key={index} {...event} />
            ))}
          </div>

          {/* Navigation */}
          <div className="max-w-4xl mx-auto">
            <DayNavigation
              previousDay={{
                label: 'Mardi - Les Outre-Mer par tous les sens',
                url: '/semaine-outremer/mardi'
              }}
              nextDay={{
                label: 'Jeudi - Les territoires d\'Outre-mer et la République',
                url: '/semaine-outremer/jeudi'
              }}
            />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
