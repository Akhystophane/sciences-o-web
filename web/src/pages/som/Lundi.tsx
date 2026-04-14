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
      title: 'Prestation musicale — Origin Kayamb, Maloya',
      time: '12h15–12h40',
      description: 'Un moment musical pour ouvrir la journée aux rythmes de La Réunion, entre tradition et énergie du Maloya.',
      status: 'libre' as const
    },
    {
      title: 'Atelier linguistique — Cours de créole',
      time: '14h45–16h45',
      description: 'Cours de créole dispensé par Samuel FEREOL. Un moment d\'ouverture linguistique et culturelle pour découvrir une langue vivante des Outre-mer.',
      status: 'libre' as const
    },
    {
      title: 'Afterwork d\'ouverture',
      time: '19h–22h',
      description: 'Moment officiel de présentation de notre marraine Me Vanessa BOUSARDO, suivi d\'un temps de networking entre alumni et étudiants.',
      status: 'inscription' as const,
      registrationUrl: 'https://docs.google.com/forms/d/1dV7ia5JdSSuj-LJ6ipSBMqTvF6J6F-iTaL10lVGNf-c'
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
              Racines vives : Mémoire, langue et transmission
            </h1>

            <div className="h-1 w-24 bg-accent rounded-full mb-6"></div>

            <p className="text-lg text-gray-700 leading-relaxed">
              Une journée d'ouverture consacrée aux figures historiques, aux héritages linguistiques et aux
              expressions musicales des Outre-mer, entre mémoire, transmission et lancement de la semaine.
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
                label: 'Mardi - Les Outre-Mer par tous les sens',
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
