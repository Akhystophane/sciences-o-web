import Header from '../../components/Header'
import Footer from '../../components/Footer'
import EventCard from '../../components/EventCard'
import DayNavigation from '../../components/DayNavigation'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { Calendar } from 'lucide-react'

export default function Lundi() {
  useScrollReveal()

  const events = [
    {
      title: 'Exposition — Nos héros oubliés des Outre-mer',
      time: 'Dès 10h15 — toute la journée',
      description: 'Une installation visuelle mettant en lumière des figures historiques méconnues des Outre-mer, à travers portraits et contenus pédagogiques.',
      status: 'libre' as const
    },
    {
      title: 'Atelier linguistique',
      time: 'Horaire à confirmer',
      description: 'Initiation aux langues ultramarines : créole réunionnais, shimaoré, nengone et autres langues des territoires d\'Outre-mer. Un moment d\'ouverture linguistique et culturelle.',
      status: 'probable' as const
    },
    {
      title: 'Afterwork d\'ouverture',
      time: 'Soirée',
      description: 'Moment d\'ouverture de la semaine et de rencontre dans un cadre convivial. L\'occasion de lancer la semaine ensemble.',
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
              Lundi 13 avril 2026
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mb-4">
              Mémoire, reconnaissance
            </h1>

            <div className="h-1 w-24 bg-accent rounded-full mb-6"></div>

            <p className="text-lg text-gray-700 leading-relaxed">
              Une journée d'ouverture consacrée aux figures, aux héritages et aux langues des Outre-mer,
              entre transmission, visibilité historique et ouverture de la semaine.
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
              nextDay={{
                label: 'Mardi - Dialogue des héritages culturels',
                url: '/semaine-outremer/mardi'
              }}
            />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
