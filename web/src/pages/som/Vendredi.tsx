import Header from '../../components/Header'
import Footer from '../../components/Footer'
import EventCard from '../../components/EventCard'
import DayNavigation from '../../components/DayNavigation'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { Calendar } from 'lucide-react'

export default function Vendredi() {
  useScrollReveal()

  const events = [
    {
      title: 'Performance musicale',
      time: '18h30',
      description: 'Performance musicale en ouverture de la soirée de clôture.',
      status: 'confirmer' as const
    },
    {
      title: 'Grande conférence — La vie chère',
      time: '19h–21h',
      description: 'Conférence consacrée à la vie chère et aux enjeux économiques et sociaux dans les Outre-mer. L\'un des temps forts intellectuels de la semaine, pour mettre des mots sur des réalités trop souvent invisibilisées.',
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
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <Calendar className="w-4 h-4" />
              Vendredi 17 avril 2026
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mb-4">
              Entre créations, musique et artisanat
            </h1>

            <div className="h-1 w-24 bg-accent rounded-full mb-6"></div>

            <p className="text-lg text-gray-700 leading-relaxed">
              Une soirée de clôture entre discussion, expressions artistiques et mise en valeur d'acteurs ultramarins.
            </p>
          </div>

          {/* Events */}
          <div className="max-w-4xl mx-auto space-y-6 mb-12" data-reveal-children>
            <h2 className="font-heading text-2xl font-bold text-primary mb-6">Programme de la soirée</h2>
            {events.map((event, index) => (
              <EventCard key={index} {...event} />
            ))}
          </div>

          {/* Navigation */}
          <div className="max-w-4xl mx-auto">
            <DayNavigation
              previousDay={{
                label: 'Jeudi - Regards croisés sur les réalités ultramarines',
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
