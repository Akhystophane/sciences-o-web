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
      description: 'Cartes postales et créations artisanales inspirées des Outre-mer.',
      status: 'libre' as const
    },
    {
      title: 'Quizz interactif — Déconstruisons nos clichés',
      time: 'Toute la journée',
      description: 'Dispositif ludique de sensibilisation autour des représentations des Outre-mer. À tester en solo ou à plusieurs !',
      status: 'libre' as const,
      actionUrl: '/quiz-outremer',
      actionLabel: 'Quiz interactif',
      secondaryActionUrl: '/quiz-fun-facts',
      secondaryActionLabel: 'Quiz fun facts'
    },
    {
      title: 'Atelier culinaire, masterclass rhum & marché culinaire',
      time: '14h45–16h45',
      description: 'Cours de cuisine sur des spécialités ultramarines, masterclass sur le rhum et accueil d\'un marché culinaire ultramarin regroupant 4 stands.',
      status: 'inscription' as const
    },
    {
      title: 'Cours de Gwoka — Otantika',
      time: '17h00–17h30',
      description: 'Initiation au Gwoka dispensée par Otantika, danse et musique traditionnelles de la Guadeloupe.',
      status: 'libre' as const
    },
    {
      title: 'Atelier tatouage polynésien & initiation au ukulélé',
      time: '19h15–21h15',
      description: 'Initiation accompagnée d\'un éclairage socio-anthropologique sur les symboliques culturelles du tatouage polynésien, pratique ancestrale porteuse d\'identité et de mémoire, puis initiation au ukulélé.',
      status: 'inscription' as const,
      registrationUrl: 'https://docs.google.com/forms/d/1X37Vu0KEZwh1okm9d6yzpD6hFqj6_159FqJ_hv8pAfU/viewform'
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
              Les « Outre-Mer » par tous les sens
            </h1>

            <div className="h-1 w-24 bg-accent rounded-full mb-6"></div>

            <p className="text-lg text-gray-700 leading-relaxed">
              Le « Tout-Monde » à portée de main : une journée autour des saveurs, des savoir-faire,
              des pratiques culturelles et de la transmission, avec un marché, des ateliers et des formats participatifs.
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
                label: 'Lundi - Racines vives',
                url: '/semaine-outremer/lundi'
              }}
              nextDay={{
                label: 'Mercredi - De l\'héritage à la reconnaissance',
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
