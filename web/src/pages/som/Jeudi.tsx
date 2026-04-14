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
      description: 'Projection de courts-métrages ultramarins suivie d\'un repas. Un moment pour voir, écouter et échanger autour de regards filmés sur les Outre-mer — événement sur inscription.',
      status: 'inscription' as const,
      registrationUrl: 'https://docs.google.com/forms/d/1R0sM0dgde6PGwGtREQNvFvZOu0it1lQskAnc4KAvnQY/viewform'
    },
    {
      title: 'Prestation musicale — Ori Nesia',
      time: '14h30–14h45',
      description: 'Intermède musical aux sonorités polynésiennes.',
      status: 'libre' as const
    },
    {
      title: 'Exposition photographique — Minorités invisibilisées',
      time: 'Toute la journée',
      description: 'Travaux photographiques sur les minorités invisibilisées des Outre-mer et des diasporas.',
      status: 'libre' as const
    },
    {
      title: 'Espace documentaire & quiz',
      time: 'Toute la journée',
      description: 'Espace documentaire sur plusieurs thématiques sociétales des Outre-mer (enfants de la Creuse, engagisme, etc.), accompagné d\'un quiz pédagogique.',
      status: 'libre' as const
    },
    {
      title: 'Conférence — 80 ans de départementalisation, et après ?',
      time: '19h00–21h15',
      description: 'L\'accès aux droits dans les Outre-mer entre promesse républicaine et réalités vécues. Une réflexion sur les enjeux contemporains de la départementalisation.',
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
            <div className="inline-flex items-center gap-2 bg-accent/20 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <Calendar className="w-4 h-4" />
              Jeudi 16 avril 2026
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mb-4">
              Les territoires dits d’« Outre-mer » et la République
            </h1>

            <div className="h-1 w-24 bg-accent rounded-full mb-6"></div>

            <p className="text-lg text-gray-700 leading-relaxed">
              Une journée de réflexion, d'images et de documentation autour des réalités sociales,
              historiques et politiques des Outre-mer face à la promesse républicaine.
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
                label: 'Mercredi - De l\'héritage à la reconnaissance',
                url: '/semaine-outremer/mercredi'
              }}
              nextDay={{
                label: 'Vendredi - Vie chère, regards ultramarins',
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
