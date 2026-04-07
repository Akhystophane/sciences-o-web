import Header from '../../components/Header'
import Footer from '../../components/Footer'
import EventCard from '../../components/EventCard'
import DayNavigation from '../../components/DayNavigation'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { Calendar } from 'lucide-react'

export default function Mardi() {
  useScrollReveal()

  const events = [
    {
      title: 'Exposition-vente artisanale',
      time: 'Toute la journée',
      description: 'Cartes, créations artisanales, textiles, bijoux et objets inspirés des Outre-mer. Un marché pour découvrir et soutenir les créateurs ultramarins.',
      status: 'libre' as const
    },
    {
      title: 'Quiz interactif — Déconstruisons nos clichés',
      time: 'Toute la journée',
      description: 'Dispositif ludique de sensibilisation autour des représentations des Outre-mer. À tester en solo ou à plusieurs !',
      status: 'libre' as const
    },
    {
      title: 'Masterclass rhum & marché culinaire',
      time: '12h15–17h',
      description: 'Une séquence mêlant marché culinaire et temps de découverte autour du rhum. L\'occasion de goûter et d\'apprendre sur les savoir-faire ultramarins.',
      status: 'probable' as const
    },
    {
      title: 'Atelier maré tèt',
      time: '14h45–16h45',
      description: 'Transmission d\'un savoir-faire traditionnel dans un format participatif. Venez apprendre et partager autour de cette pratique culturelle.',
      status: 'probable' as const
    },
    {
      title: 'Atelier culinaire',
      time: 'Horaire à confirmer',
      description: 'Cours de cuisine autour de spécialités ultramarines. Détails à venir.',
      status: 'confirmer' as const
    },
    {
      title: 'Prestation musicale — Otantika',
      time: '16h45–17h',
      description: 'Intermède musical dans le cadre de la journée culturelle.',
      status: 'probable' as const
    },
    {
      title: 'Atelier tatouage polynésien',
      time: '19h–21h (deux créneaux)',
      description: 'Initiation au tatouage polynésien accompagnée d\'un éclairage socio-anthropologique sur les symboliques et les héritages de cette pratique. Sur inscription, places limitées.',
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
              Mardi 14 avril 2026
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mb-4">
              Dialogue des héritages culturels
            </h1>

            <div className="h-1 w-24 bg-accent rounded-full mb-6"></div>

            <p className="text-lg text-gray-700 leading-relaxed">
              Une journée autour des savoir-faire, des goûts, des pratiques culturelles et de la transmission,
              avec un marché, des ateliers et des formats participatifs.
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
                label: 'Lundi - Mémoire, reconnaissance',
                url: '/semaine-outremer/lundi'
              }}
              nextDay={{
                label: 'Mercredi - Valorisation artistique',
                url: '/semaine-outremer/mercredi'
              }}
            />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
