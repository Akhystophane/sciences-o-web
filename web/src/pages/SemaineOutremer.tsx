import Header from '../components/Header'
import Footer from '../components/Footer'
import DayCard from '../components/DayCard'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { Calendar, MapPin, Users } from 'lucide-react'

export default function SemaineOutremer() {
  useScrollReveal()

  const days = [
    {
      day: 'Lundi',
      date: '13 avril 2026',
      theme: 'Racines vives : Mémoire, langue et transmission',
      eventCount: 4,
      color: 'primary' as const,
      url: '/semaine-outremer/lundi'
    },
    {
      day: 'Mardi',
      date: '14 avril 2026',
      theme: 'Les « Outre-Mer » par tous les sens : Le « Tout-Monde » à portée de main',
      eventCount: 5,
      color: 'accent' as const,
      url: '/semaine-outremer/mardi'
    },
    {
      day: 'Mercredi',
      date: '15 avril 2026',
      theme: 'De l\'héritage à la reconnaissance',
      eventCount: 3,
      color: 'primary' as const,
      url: '/semaine-outremer/mercredi'
    },
    {
      day: 'Jeudi',
      date: '16 avril 2026',
      theme: 'Les territoires dits d’« Outre-mer » et la République',
      eventCount: 5,
      color: 'accent' as const,
      url: '/semaine-outremer/jeudi'
    },
    {
      day: 'Vendredi',
      date: '17 avril 2026',
      theme: 'Vie chère — Regards sur les réalités ultramarines',
      eventCount: 2,
      color: 'primary' as const,
      url: '/semaine-outremer/vendredi'
    }
  ]

  return (
    <div className="min-h-screen relative text-gray-800 paper-texture">
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-primary/12 via-white via-40% to-accent/30" />
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/15 via-transparent to-transparent" />
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-accent/20 via-transparent to-transparent" />

      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative mt-16 md:mt-16 pt-12 md:pt-16 pb-16 md:pb-20 overflow-hidden">
          <div className="container-page relative z-20">
            <div className="mx-auto max-w-4xl text-center" data-reveal-children>
              <div className="inline-flex items-center gap-2 bg-accent/20 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6" data-reveal>
                <Calendar className="w-4 h-4" />
                13-17 avril 2026
              </div>

              <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold text-primary mb-6 drop-shadow-[0_2px_8px_rgba(12,126,128,0.15)]" data-reveal style={{textShadow: '0 1px 2px rgba(255,255,255,0.8)'}}>
                Semaine des Outre-mer
              </h1>

              <div className="h-1 w-32 bg-accent mx-auto rounded-full mb-8" data-reveal></div>

              <p className="text-lg sm:text-xl text-gray-900 mb-4 font-semibold" data-reveal>
                Célébrons ensemble la richesse et la diversité des territoires ultramarins
              </p>

              <p className="text-base sm:text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed" data-reveal>
                Une semaine pour explorer les réalités, les cultures et les enjeux des territoires ultramarins.
                Conférences, débats, expositions et rencontres au croisement de l'histoire, du politique et du vivant.
              </p>
            </div>
          </div>
        </section>

        {/* Programme Section */}
        <section className="py-16 relative">
          <div className="container-page">
            <div className="text-center mb-12" data-reveal-children>
              <h2 className="font-heading text-4xl font-bold text-primary mb-4">
                Programme de la semaine
              </h2>
              <div className="h-1 w-24 bg-accent mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16" data-reveal-children>
              {days.map((day, index) => (
                <DayCard key={index} {...day} />
              ))}
            </div>
          </div>
        </section>

        {/* Infos Pratiques */}
        <section className="py-16 bg-white/50 backdrop-blur-sm">
          <div className="container-page">
            <div className="text-center mb-12" data-reveal-children>
              <h2 className="font-heading text-4xl font-bold text-primary mb-4">
                Informations pratiques
              </h2>
              <div className="h-1 w-24 bg-accent mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto" data-reveal-children>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                  <Calendar className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-bold text-primary mb-2">Quand ?</h3>
                <p className="text-gray-700">Du 13 au 17 avril 2026</p>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-4">
                  <MapPin className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-bold text-primary mb-2">Où ?</h3>
                <p className="text-gray-700">Sciences Po Paris</p>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-bold text-primary mb-2">Pour qui ?</h3>
                <p className="text-gray-700">Entrée libre ou sur inscription<br /><span className="text-sm text-primary/70 font-medium">selon les événements</span></p>
              </div>
            </div>

            <div className="text-center mt-12">
              <a
                href="https://www.helloasso.com/associations/sciences-o"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-accent text-lg px-10 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 font-semibold"
              >
                Suivre Sciences Ô
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
