import Header from '../../components/Header'
import Footer from '../../components/Footer'
import EventCard from '../../components/EventCard'
import DayNavigation from '../../components/DayNavigation'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { Calendar } from 'lucide-react'

export default function Jeudi() {
  useScrollReveal()

  const events = [
    {
      title: 'Ciné-lunch',
      time: '12h30–14h30',
      description: 'Projection de courts-métrages ultramarins suivie d\'un repas et d\'un échange. Un moment pour voir, écouter et débattre autour de regards filmés sur les Outre-mer.',
      status: 'inscription' as const,
      registrationUrl: 'https://docs.google.com/forms/d/1R0sM0dgde6PGwGtREQNvFvZOu0it1lQskAnc4KAvnQY/viewform'
    },
    {
      title: 'Exposition photographique',
      time: 'Après-midi',
      description: 'Exposition consacrée à des regards photographiques sur les Outre-mer et les diasporas.',
      status: 'probable' as const
    },
    {
      title: 'Espace documentaire & quiz',
      time: 'Toute la journée',
      description: 'Espace documentaire sur plusieurs thématiques sociétales des Outre-mer, accompagné d\'un quiz pédagogique pour approfondir ses connaissances.',
      status: 'probable' as const
    },
    {
      title: 'Prestation musicale — Les Zamourettes',
      time: '19h15–19h30',
      description: 'Séquence musicale de clôture de journée.',
      status: 'probable' as const
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
            <div className="inline-flex items-center gap-2 bg-accent/20 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <Calendar className="w-4 h-4" />
              Jeudi 16 avril 2026
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mb-4">
              Regards croisés sur les réalités ultramarines
            </h1>

            <div className="h-1 w-24 bg-accent rounded-full mb-6"></div>

            <p className="text-lg text-gray-700 leading-relaxed">
              Une journée de réflexion, d'images et de documentation autour des réalités sociales,
              historiques et politiques des Outre-mer.
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
                label: 'Mercredi - Valorisation artistique',
                url: '/semaine-outremer/mercredi'
              }}
              nextDay={{
                label: 'Vendredi - Entre créations, musique et artisanat',
                url: '/semaine-outremer/vendredi'
              }}
            />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
