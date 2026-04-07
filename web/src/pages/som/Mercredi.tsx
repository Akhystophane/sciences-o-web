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
      title: 'Village des créateurs — Mode, textile et bijoux',
      time: '12h15–14h45',
      description: 'Stands de créateurs et créatrices autour de la mode, du textile et des bijoux inspirés des identités ultramarines. Plusieurs exposants au rendez-vous.',
      status: 'probable' as const
    },
    {
      title: 'Performance de danse traditionnelle',
      time: 'Vers 12h15–13h',
      description: 'Performance de danse traditionnelle mettant en valeur un patrimoine ultramarin, dans le cadre du village des créateurs.',
      status: 'probable' as const
    },
    {
      title: 'Conférence — La musique comme miroir social',
      time: 'Horaire à confirmer',
      description: 'Une discussion autour des représentations, des héritages et des réappropriations dans les musiques ultramarines et caribéennes. Avec des artistes et un regard académique.',
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
              Mercredi 15 avril 2026
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mb-4">
              Valorisation artistique
            </h1>

            <div className="h-1 w-24 bg-accent rounded-full mb-6"></div>

            <p className="text-lg text-gray-700 leading-relaxed">
              Une journée centrée sur la création, la mode, la performance et les représentations artistiques des Outre-mer.
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
                label: 'Mardi - Dialogue des héritages culturels',
                url: '/semaine-outremer/mardi'
              }}
              nextDay={{
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
