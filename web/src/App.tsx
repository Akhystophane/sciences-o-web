import Header from './components/Header'
import Footer from './components/Footer'
import { Link } from 'react-router-dom'
import { Users, Network, MapPin, GraduationCap, Lightbulb, Building } from 'lucide-react'
import { useScrollReveal } from './hooks/useScrollReveal'

export default function App() {
  useScrollReveal()
  function Shape({
    name,
    src,
    className,
    color
  }: { name: string; src: string; className?: string; color: 'primary' | 'accent' }) {
    return (
      <div className={`absolute pointer-events-none ${className ?? ''}`}>
        <div
          className={`h-full w-full transition-opacity duration-300 ease-out ${color === 'primary' ? 'bg-primary' : 'bg-accent'} opacity-30 hover:opacity-60 peer pointer-events-auto`}
          style={{
            WebkitMaskImage: `url(${src})`,
            maskImage: `url(${src})`,
            WebkitMaskRepeat: 'no-repeat',
            maskRepeat: 'no-repeat',
            WebkitMaskSize: 'contain',
            maskSize: 'contain',
            WebkitMaskPosition: 'center',
            maskPosition: 'center'
          }}
          aria-label={name}
        />
        <div className="pointer-events-none absolute -top-2 left-1/2 -translate-x-1/2 -translate-y-full rounded bg-white/90 px-2 py-1 text-xs font-medium text-primary opacity-0 shadow-sm ring-1 ring-black/5 transition-opacity duration-200 peer-hover:opacity-100">
          {name}
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-white via-blue-50/30 to-accent/5 mt-16 md:mt-16 pt-4 md:pt-6 pb-12 md:pb-16 overflow-hidden">
          {/* Shapes overlay */}
          <div className="absolute inset-y-0 left-0 right-0 mx-auto w-full max-w-[1200px] z-0">
            {/* Positions chosen to avoid overlapping CTAs */}
            {/* Left side: blue, yellow, blue */}
            <Shape name="Martinique" src={`${import.meta.env.BASE_URL}martinique-shape.svg`} color="primary" className="top-16 left-3 w-14 h-14 sm:w-20 sm:h-20 md:w-32 md:h-32 animate-blob-float" />
            <Shape name="Guyane" src={`${import.meta.env.BASE_URL}guyane-shape.svg`} color="accent" className="top-1/2 left-2 -translate-y-1/2 w-24 h-24 sm:w-36 sm:h-36 md:w-48 md:h-48 animate-blob-float-slow" />
            <Shape name="Mayotte" src={`${import.meta.env.BASE_URL}mayotte-shape.svg`} color="primary" className="bottom-8 left-6 w-14 h-14 sm:w-18 sm:h-18 md:w-24 md:h-24 animate-blob-float-delayed" />

            {/* Right side: blue, yellow, blue */}
            <Shape name="Guadeloupe" src={`${import.meta.env.BASE_URL}guadeloupe-shape.svg`} color="primary" className="top-16 right-4 w-16 h-16 sm:w-24 sm:h-24 md:w-40 md:h-40 animate-blob-float-delayed" />
            <Shape name="Réunion" src={`${import.meta.env.BASE_URL}reunion-shape.svg`} color="accent" className="top-[58%] right-6 -translate-y-1/2 w-16 h-16 sm:w-20 sm:h-20 md:w-32 md:h-32 animate-blob-float" />
            <Shape name="Nouvelle-Calédonie" src={`${import.meta.env.BASE_URL}nouvelle-caledonie-shape.svg`} color="primary" className="bottom-2 right-16 w-28 h-28 sm:w-40 sm:h-40 md:w-56 md:h-56 animate-blob-float-slow" />

            {/* Center shapes overlapping the hero title */}
            <Shape name="Saint-Martin & Saint-Barthélemy" src={`${import.meta.env.BASE_URL}saint-martin-shape.svg`} color="accent" className="top-10 md:top-12 left-[42%] w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 animate-blob-float" />
            <Shape name="Saint-Pierre et Miquelon" src={`${import.meta.env.BASE_URL}saint-pierre-miquelon-shape.svg`} color="primary" className="top-40 md:top-44 left-[58%] w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 animate-blob-float-delayed" />
          </div>
          {/* Clean Hero Background - No particles */}

          <div className="container-page relative z-10">
            <div className="mx-auto hero-content text-center" data-reveal-children="strong" style={{ ['--reveal-duration' as any]: '800ms' }}>
              <h1 className="font-heading text-5xl sm:text-7xl lg:text-8xl font-bold text-primary mb-2" data-reveal="slide-up-strong">
                Ansanm nou pli fò <span className="text-accent">!</span>
              </h1>
              {/* Inline hero illustration under title */}
              <div className="mx-auto mb-6 flex justify-center">
                <img
                  src={`${import.meta.env.BASE_URL}animated-levitating-illustration-fixed.svg`}
                  alt="Illustration"
                  className="w-[260px] sm:w-[360px] md:w-[460px] lg:w-[520px] max-w-full h-auto opacity-90"
                />
              </div>
              
              {/* Simple elegant divider */}
              <div className="flex items-center justify-center mb-8" data-reveal="fade-in">
                <div className="h-1 w-24 bg-gradient-to-r from-transparent via-accent to-transparent rounded-full"></div>
              </div>
              
              <p className="text-lg sm:text-xl text-gray-800 mb-3 font-medium" data-reveal>
                Ensemble, nous sommes plus forts !
              </p>
              <p className="text-base sm:text-lg text-primary/80 mb-10 max-w-3xl mx-auto leading-relaxed" data-reveal>
                Connectons les territoires d'Outre-mer à Sciences Po. 
                Une communauté qui unit les étudiants des îles et des continents.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6" data-reveal-children>
                <a href="https://www.helloasso.com/associations/sciences-o/adhesions/sciences-o-adhesion-2025-2026" target="_blank" rel="noopener noreferrer" className="btn-accent text-lg px-10 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 font-semibold">
                  <span className="flex items-center gap-3">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
                      <circle cx="9" cy="7" r="4"/>
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                    </svg>
                    Rejoindre Sciences Ô
                  </span>
                </a>
                <Link to="/quiz" className="btn-primary text-lg px-10 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 font-semibold">
                  <span className="flex items-center gap-3">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                      <line x1="16" y1="2" x2="16" y2="6"/>
                      <line x1="8" y1="2" x2="8" y2="6"/>
                      <line x1="3" y1="10" x2="21" y2="10"/>
                    </svg>
                    Semaine du Climat · Quiz
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Missions Section */}
        <section className="bg-white py-16 relative overflow-hidden">

          <div className="container-page relative z-10">
            <div className="text-center mb-16" data-reveal-children>
              <h2 className="font-heading text-4xl font-bold text-primary mb-4">
                NOS MISSIONS
              </h2>
              <div className="h-1 w-24 bg-accent mx-auto rounded-full"></div>
            </div>

            <div className="space-y-20" data-reveal-children="strong">
              {/* Mission 1 - Left aligned */}
              <div className="relative max-w-4xl">
                <div className="flex items-center gap-4 mb-4">
                  <Users className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 text-primary opacity-80 shrink-0" />
                  <h3 className="font-heading text-2xl font-bold text-primary">
                    Décloisonner Sciences Ô et ouvrir l'association à de nouveaux publics
                  </h3>
                </div>
                <div className="h-1 w-32 bg-accent mb-6"></div>
                <div className="relative z-10">
                  <p className="text-gray-900 text-[17px] sm:text-lg leading-8 bg-white/85 rounded-xl px-5 py-4 shadow-sm border border-primary/10">
                    Ouvrir davantage nos événements à des personnes extérieures à Sciences Po. 
                    Élargir notre audience en incluant les <strong>diasporas ultramarines</strong> et des figures de la <strong>société civile</strong> 
                    (sportifs engagés, artistes, Miss France, journalistes...). 
                    Créer des <strong>ponts</strong> avec d'autres <strong>associations étudiantes</strong> (Melallile, Sorb'Outre-Mer, Medik…) 
                    pour mutualiser nos forces.
                  </p>
                </div>
                <div className="pointer-events-none absolute top-0 right-0 w-96 h-96 opacity-40 z-10 animate-blob-float">
                  <svg viewBox="0 0 200 200" className="w-full h-full text-accent">
                    <path d="M37.1,-25.8C42.4,-12.2,37.1,3.1,29.2,18.1C21.3,33.1,10.6,47.7,1.5,46.9C-7.6,46,-15.2,29.6,-28.5,11.5C-41.7,-6.6,-60.7,-26.3,-56.9,-39C-53.1,-51.7,-26.5,-57.4,-5.3,-54.3C15.9,-51.2,31.8,-39.4,37.1,-25.8Z" transform="translate(100 100)" fill="currentColor"/>
                  </svg>
                </div>
              </div>

              {/* Mission 2 - Right aligned */}
              <div className="relative max-w-4xl ml-auto text-right">
                <div className="flex items-center justify-end gap-4 mb-4">
                  <h3 className="font-heading text-2xl font-bold text-primary">
                    Consolider un réseau intergénérationnel entre adhérents et alumni
                  </h3>
                  <Network className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 text-accent opacity-80 shrink-0" />
                </div>
                <div className="h-1 w-32 bg-accent mb-6 ml-auto"></div>
                <div className="relative z-10">
                  <p className="text-gray-900 text-[17px] sm:text-lg leading-8 bg-white/85 rounded-xl px-5 py-4 shadow-sm border border-primary/10">
                    Recenser les <strong>alumni</strong> ultramarins et structurer un véritable <strong>réseau</strong> d'anciens. 
                    Organiser des formats variés : petits-déjeuners, afterworks, témoignages pro... 
                    Faciliter le <strong>mentorat</strong> et l'<strong>insertion professionnelle</strong> notamment grâce à l'accompagnement des alumni. 
                    Intégrer les alumni dans les <strong>préparations aux concours et aux oraux</strong>.
                  </p>
                </div>
                <div className="pointer-events-none absolute -bottom-8 right-0 w-96 h-96 opacity-40 z-10 animate-blob-float-delayed">
                  <svg viewBox="0 0 200 200" className="w-full h-full text-primary">
                    <path d="M26.8,-48.1C31.2,-33.7,28.8,-21.1,26,-12.5C23.2,-3.9,20,0.8,23.9,13.6C27.8,26.4,38.7,47.3,35.9,49.7C33.1,52.2,16.5,36,0.2,35.8C-16.2,35.5,-32.3,51.2,-42.1,51C-51.9,50.9,-55.3,35,-51.2,22.5C-47.1,10.1,-35.6,1.1,-28,-5.1C-20.5,-11.4,-17,-15,-13,-29.5C-9,-44.1,-4.5,-69.6,3.4,-74.2C11.2,-78.9,22.4,-62.6,26.8,-48.1Z" transform="translate(100 100)" fill="currentColor"/>
                  </svg>
                </div>
              </div>

              {/* Mission 3 - Left aligned */}
              <div className="relative max-w-4xl">
                <div className="flex items-center gap-4 mb-4">
                  <MapPin className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 text-primary opacity-80 shrink-0" />
                  <h3 className="font-heading text-2xl font-bold text-primary">
                    Renforcer notre présence dans les territoires et dans les médias
                  </h3>
                </div>
                <div className="h-1 w-32 bg-accent mb-6"></div>
                <div className="relative z-10">
                  <p className="text-gray-900 text-[17px] sm:text-lg leading-8 bg-white/85 rounded-xl px-5 py-4 shadow-sm border border-primary/10">
                    Intervenir dans les <strong>lycées</strong>, y compris non conventionnés, et dans les séminaires de jeunes élus et élus lycéens/collégiens. 
                    Proposer des <strong>actions concrètes</strong> dans les territoires : forums, masterclass, relais locaux. 
                    Nouer des liens avec <strong>radios, TV et presse ultramarines</strong> pour que nos membres deviennent des interlocuteurs référents.
                  </p>
                </div>
                <div className="pointer-events-none absolute -top-8 left-0 w-96 h-96 opacity-40 z-10 animate-blob-float-slow">
                  <svg viewBox="0 0 200 200" className="w-full h-full text-accent">
                    <path d="M44.3,-50.8C56.3,-52.3,64,-37.8,69.1,-22.4C74.2,-7,76.5,9.3,72.4,24C68.3,38.8,57.8,51.9,44.6,60.6C31.5,69.4,15.7,73.7,2.9,69.8C-10,65.8,-20,53.6,-22.7,41.4C-25.3,29.3,-20.6,17.2,-21.4,8.4C-22.3,-0.4,-28.7,-5.9,-34.2,-18C-39.7,-30.1,-44.4,-48.8,-38.5,-49.3C-32.7,-49.7,-16.4,-32,-0.1,-31.8C16.2,-31.7,32.3,-49.2,44.3,-50.8Z" transform="translate(100 100)" fill="currentColor"/>
                  </svg>
                </div>
              </div>

              {/* Mission 4 - Right aligned */}
              <div className="relative max-w-4xl ml-auto text-right">
                <div className="flex items-center justify-end gap-4 mb-4">
                  <h3 className="font-heading text-2xl font-bold text-primary">
                    Soutenir la formation et la professionnalisation des membres
                  </h3>
                  <GraduationCap className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 text-accent opacity-80 shrink-0" />
                </div>
                <div className="h-1 w-32 bg-accent mb-6 ml-auto"></div>
                <div className="relative z-10">
                  <p className="text-gray-900 text-[17px] sm:text-lg leading-8 bg-white/85 rounded-xl px-5 py-4 shadow-sm border border-primary/10">
                    Organiser des <strong>simulations d'oraux</strong>, des <strong>ateliers CV/lettre de motivation</strong>. 
                    Nouer des <strong>partenariats</strong> avec des institutions, entreprises et collectivités d'Outre-mer.
                  </p>
                </div>
                <div className="pointer-events-none absolute -bottom-8 right-0 w-96 h-96 opacity-40 z-10 animate-blob-float">
                  <svg viewBox="0 0 200 200" className="w-full h-full text-primary">
                    <path d="M28.8,-38.3C38.8,-32.3,49.5,-26,55.7,-16C61.8,-6,63.4,7.5,56.9,15.7C50.4,23.8,35.8,26.6,25,38.4C14.2,50.2,7.1,71.2,-2,73.9C-11.1,76.7,-22.2,61.3,-32.9,49.4C-43.6,37.6,-53.8,29.2,-52.3,20.2C-50.7,11.3,-37.3,1.8,-30.5,-7.2C-23.8,-16.1,-23.9,-24.5,-19.9,-32.4C-15.9,-40.3,-8,-47.8,0.7,-48.8C9.4,-49.8,18.8,-44.2,28.8,-38.3Z" transform="translate(100 100)" fill="currentColor"/>
                  </svg>
                </div>
              </div>

              {/* Mission 5 - Left aligned */}
              <div className="relative max-w-4xl">
                <div className="flex items-center gap-4 mb-4">
                  <Lightbulb className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 text-primary opacity-80 shrink-0" />
                  <h3 className="font-heading text-2xl font-bold text-primary">
                    Lancer de nouvelles initiatives et créer des contenus originaux ancrés dans nos réalités
                  </h3>
                </div>
                <div className="h-1 w-32 bg-accent mb-6"></div>
                <div className="relative z-10">
                  <p className="text-gray-900 text-[17px] sm:text-lg leading-8 bg-white/85 rounded-xl px-5 py-4 shadow-sm border border-primary/10">
                    Lancer un <strong>podcast</strong> ou une série d'interviews <strong>"Voix d'Ôutre-Mer"</strong> avec des parcours inspirants 
                    (piste de partenariat avec un média jeune). 
                    Publier une <strong>revue annuelle</strong> de Sciences Ô : rétrospective, tribunes, portraits, analyses 
                    (compilant notamment nos résumés et nos notes de synthèses).
                  </p>
                </div>
                <div className="pointer-events-none absolute -bottom-8 left-0 w-96 h-96 opacity-40 z-10 animate-blob-float-delayed">
                  <svg viewBox="0 0 200 200" className="w-full h-full text-accent">
                    <path d="M37.1,-25.8C42.4,-12.2,37.1,3.1,29.2,18.1C21.3,33.1,10.6,47.7,1.5,46.9C-7.6,46,-15.2,29.6,-28.5,11.5C-41.7,-6.6,-60.7,-26.3,-56.9,-39C-53.1,-51.7,-26.5,-57.4,-5.3,-54.3C15.9,-51.2,31.8,-39.4,37.1,-25.8Z" transform="translate(100 100)" fill="currentColor"/>
                  </svg>
                </div>
              </div>

              {/* Mission 6 - Right aligned */}
              <div className="relative max-w-4xl ml-auto text-right">
                <div className="flex items-center justify-end gap-4 mb-4">
                  <h3 className="font-heading text-2xl font-bold text-primary">
                    Structurer durablement Sciences Ô
                  </h3>
                  <Building className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 text-accent opacity-80 shrink-0" />
                </div>
                <div className="h-1 w-32 bg-accent mb-6 ml-auto"></div>
                <div className="relative z-10">
                  <p className="text-gray-900 text-[17px] sm:text-lg leading-8 bg-white/85 rounded-xl px-5 py-4 shadow-sm border border-primary/10">
                    Créer un <strong>guide de passation</strong> pour garantir la mémoire et la continuité des projets. 
                    Planifier en amont des <strong>temps forts annuels</strong> (conférences, gala, forum inter-assos...). 
                    Alimenter le <strong>livre d'or</strong> acheté par l'équipe 2024-2025. 
                    Porter la voix des outre-mer à l'<strong>international</strong>. 
                    Rester connecté à nos territoires respectifs.
                  </p>
                </div>
                <div className="pointer-events-none absolute top-0 right-0 w-96 h-96 opacity-40 z-10 animate-blob-float-slow">
                  <svg viewBox="0 0 200 200" className="w-full h-full text-primary">
                    <path d="M26.8,-48.1C31.2,-33.7,28.8,-21.1,26,-12.5C23.2,-3.9,20,0.8,23.9,13.6C27.8,26.4,38.7,47.3,35.9,49.7C33.1,52.2,16.5,36,0.2,35.8C-16.2,35.5,-32.3,51.2,-42.1,51C-51.9,50.9,-55.3,35,-51.2,22.5C-47.1,10.1,-35.6,1.1,-28,-5.1C-20.5,-11.4,-17,-15,-13,-29.5C-9,-44.1,-4.5,-69.6,3.4,-74.2C11.2,-78.9,22.4,-62.6,26.8,-48.1Z" transform="translate(100 100)" fill="currentColor"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
