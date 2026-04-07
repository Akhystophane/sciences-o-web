import Header from './components/Header'
import Footer from './components/Footer'
import ExpandableActionCard from './components/ExpandableActionCard'
import { Link } from 'react-router-dom'
import { Newspaper } from 'lucide-react'
import { useScrollReveal } from './hooks/useScrollReveal'

export default function App() {
  useScrollReveal()
  function Shape({
    name,
    src,
    className,
    color,
    tooltipPosition = 'top'
  }: { name: string; src: string; className?: string; color: 'primary' | 'accent'; tooltipPosition?: 'top' | 'bottom' }) {
    const handleClick = () => {
      // Scroll smoothly to missions section when clicked
      const missionsSection = document.querySelector('section:nth-of-type(2)')
      missionsSection?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }

    const tooltipClasses = tooltipPosition === 'top'
      ? "pointer-events-none absolute -top-2 left-1/2 -translate-x-1/2 -translate-y-full rounded bg-white/95 px-3 py-1.5 text-xs font-semibold text-primary opacity-0 shadow-md ring-1 ring-primary/10 transition-all duration-200 group-hover:opacity-100 group-hover:-translate-y-full group-hover:scale-105 whitespace-nowrap"
      : "pointer-events-none absolute -bottom-2 left-1/2 -translate-x-1/2 translate-y-full rounded bg-white/95 px-3 py-1.5 text-xs font-semibold text-primary opacity-0 shadow-md ring-1 ring-primary/10 transition-all duration-200 group-hover:opacity-100 group-hover:translate-y-full group-hover:scale-105 whitespace-nowrap"

    return (
      <div className={`absolute cursor-pointer group pointer-events-auto ${className ?? ''}`} onClick={handleClick}>
        <div
          className={`h-full w-full transition-all duration-300 ease-out ${color === 'primary' ? 'bg-primary' : 'bg-accent'} opacity-30 hover:opacity-70 group-hover:scale-110`}
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
        <div className={tooltipClasses}>
          {name}
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen relative text-gray-800 paper-texture">
      {/* Sophisticated gradient background for entire site */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-primary/12 via-white via-40% to-accent/30" />
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/15 via-transparent to-transparent" />
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-accent/20 via-transparent to-transparent" />
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative mt-16 md:mt-16 pt-4 md:pt-6 pb-12 md:pb-16 overflow-hidden">
          {/* Shapes overlay */}
          <div className="absolute inset-y-0 left-0 right-0 mx-auto w-full max-w-[1200px] z-10 pointer-events-none">
            {/* Positions chosen to avoid overlapping CTAs */}
            {/* Left side: blue, yellow, blue */}
            <Shape name="Martinique" src={`${import.meta.env.BASE_URL}martinique-shape.svg`} color="primary" className="top-16 left-3 w-14 h-14 sm:w-20 sm:h-20 md:w-32 md:h-32 animate-blob-float" tooltipPosition="bottom" />
            <Shape name="Guyane" src={`${import.meta.env.BASE_URL}guyane-shape.svg`} color="accent" className="top-1/2 left-2 -translate-y-1/2 w-24 h-24 sm:w-36 sm:h-36 md:w-48 md:h-48 animate-blob-float-slow" />
            <Shape name="Mayotte" src={`${import.meta.env.BASE_URL}mayotte-shape.svg`} color="primary" className="bottom-8 left-6 w-14 h-14 sm:w-18 sm:h-18 md:w-24 md:h-24 animate-blob-float-delayed" />

            {/* Right side: blue, yellow, blue */}
            <Shape name="Guadeloupe" src={`${import.meta.env.BASE_URL}guadeloupe-shape.svg`} color="primary" className="top-16 right-4 w-16 h-16 sm:w-24 sm:h-24 md:w-40 md:h-40 animate-blob-float-delayed" tooltipPosition="bottom" />
            <Shape name="Réunion" src={`${import.meta.env.BASE_URL}reunion-shape.svg`} color="accent" className="top-[58%] right-6 -translate-y-1/2 w-16 h-16 sm:w-20 sm:h-20 md:w-32 md:h-32 animate-blob-float" />
            <Shape name="Nouvelle-Calédonie" src={`${import.meta.env.BASE_URL}nouvelle-caledonie-shape.svg`} color="primary" className="bottom-2 right-16 w-28 h-28 sm:w-40 sm:h-40 md:w-56 md:h-56 animate-blob-float-slow" />

            {/* Center shapes overlapping the hero title */}
            <Shape name="Saint-Martin & Saint-Barthélemy" src={`${import.meta.env.BASE_URL}saint-martin-shape.svg`} color="accent" className="top-10 md:top-12 left-[42%] w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 animate-blob-float" tooltipPosition="bottom" />
            <Shape name="Saint-Pierre et Miquelon" src={`${import.meta.env.BASE_URL}saint-pierre-miquelon-shape.svg`} color="primary" className="top-40 md:top-44 left-[58%] w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 animate-blob-float-delayed" />
          </div>
          <div className="container-page relative z-20 pointer-events-none">
            <div className="mx-auto hero-content text-center" data-reveal-children="strong" style={{ ['--reveal-duration' as any]: '800ms' }}>
              <h1 className="font-heading text-5xl sm:text-7xl lg:text-8xl font-bold text-primary mb-2 drop-shadow-[0_2px_8px_rgba(12,126,128,0.15)] pointer-events-none" data-reveal="slide-up-strong" style={{textShadow: '0 1px 2px rgba(255,255,255,0.8)'}}>
                Ansanm nou pli fò <span className="text-accent drop-shadow-[0_2px_8px_rgba(253,197,19,0.2)]">!</span>
              </h1>
              {/* Inline hero illustration under title */}
              <div className="mx-auto mb-6 flex justify-center pointer-events-none">
                <img
                  src={`${import.meta.env.BASE_URL}animated-levitating-illustration-fixed.svg`}
                  alt="Illustration"
                  className="w-[260px] sm:w-[360px] md:w-[460px] lg:w-[520px] max-w-full h-auto opacity-90 pointer-events-none"
                />
              </div>
              
              {/* Simple elegant divider */}
              <div className="flex items-center justify-center mb-8 pointer-events-none" data-reveal="fade-in">
                <div className="h-1 w-24 bg-gradient-to-r from-transparent via-accent to-transparent rounded-full"></div>
              </div>
              
              <p className="text-lg sm:text-xl text-gray-900 mb-3 font-semibold drop-shadow-sm pointer-events-none" data-reveal style={{textShadow: '0 1px 3px rgba(255,255,255,0.7)'}}>
                Ensemble, nous sommes plus forts !
              </p>
              <p className="text-base sm:text-lg text-primary mb-10 max-w-3xl mx-auto leading-relaxed font-medium drop-shadow-sm pointer-events-none" data-reveal style={{textShadow: '0 1px 2px rgba(255,255,255,0.6)'}}>
                Connectons les territoires d'Outre-mer à Sciences Po.
                Une communauté qui unit les étudiants des îles et des continents.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-6" data-reveal-children>
                <a href="https://www.helloasso.com/associations/sciences-o/adhesions/sciences-o-adhesion-2025-2026" target="_blank" rel="noopener noreferrer" className="btn-accent text-lg px-10 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 font-semibold pointer-events-auto">
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
                <Link to="/semaine-outremer" className="btn-primary text-lg px-10 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 font-semibold pointer-events-auto">
                  <span className="flex items-center gap-3">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                      <line x1="16" y1="2" x2="16" y2="6"/>
                      <line x1="8" y1="2" x2="8" y2="6"/>
                      <line x1="3" y1="10" x2="21" y2="10"/>
                    </svg>
                    Semaine des Outre-mer
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Nos Actions */}
        <section className="py-16 relative" id="actions">
          <div className="container-page relative z-10">
            <div className="text-center mb-12" data-reveal-children>
              <h2 className="font-heading text-4xl font-bold text-primary mb-4">Nos Actions</h2>
              <div className="h-1 w-24 bg-accent mx-auto rounded-full"></div>
              <p className="text-gray-600 mt-4 max-w-2xl mx-auto">Ce que nous faisons concrètement, tout au long de l'année.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto" data-reveal-children>
              {/* Mentorat — livre ouvert + étoile */}
              <ExpandableActionCard
                strip="primary"
                visual={
                  <svg width="52" height="52" viewBox="0 0 52 52" fill="none" className="text-primary">
                    <path d="M6 38 C6 31 21 27 26 27 L26 47 C21 47 6 43 6 38Z" fill="currentColor" fillOpacity="0.22"/>
                    <path d="M46 38 C46 31 31 27 26 27 L26 47 C31 47 46 43 46 38Z" fill="currentColor" fillOpacity="0.12"/>
                    <path d="M26 27 L26 47" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M6 38 C6 31 21 27 26 27" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.45" fill="none"/>
                    <path d="M46 38 C46 31 31 27 26 27" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.45" fill="none"/>
                    <line x1="11" y1="36" x2="22" y2="34" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeOpacity="0.35"/>
                    <line x1="11" y1="40" x2="21" y2="39" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeOpacity="0.35"/>
                    <line x1="30" y1="34" x2="41" y2="36" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeOpacity="0.35"/>
                    <line x1="31" y1="39" x2="41" y2="40" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeOpacity="0.35"/>
                    <path d="M26 6 L27.8 12 L34 12 L29 15.8 L31 22 L26 18.5 L21 22 L23 15.8 L18 12 L24.2 12 Z" fill="currentColor"/>
                    <path d="M26 26 L26 23" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 1.5" strokeLinecap="round"/>
                  </svg>
                }
                title="Mentorat & préparation aux concours"
                description="Service de mentorat en distanciel pour les lycéens souhaitant intégrer Sciences Po. Conseils personnalisés, retours d'expérience, préparation aux épreuves écrites et aux oraux."
                expandedContent={{
                  highlights: [
                    'Mentorat individuel en distanciel pour les candidats aux concours Sciences Po',
                    'Ouvert aux lycéens d\'établissements conventionnés et aux candidats libres',
                    'Accès aux retours d\'expérience des étudiants Sciences Ô',
                    'Préparation aux épreuves écrites et à l\'oral d\'entrée',
                    'Visites de lycées pour aller à la rencontre des futurs candidats',
                  ],
                }}
              />

              {/* Accueil — deux silhouettes bras ouverts */}
              <ExpandableActionCard
                strip="accent"
                visual={
                  <svg width="52" height="52" viewBox="0 0 52 52" fill="none" className="text-primary">
                    <circle cx="15" cy="13" r="5.5" fill="currentColor" fillOpacity="0.75"/>
                    <path d="M15 20 L15 34" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
                    <path d="M15 25 L6 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.55"/>
                    <path d="M15 25 L24 29" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M15 34 L11 44" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.55"/>
                    <path d="M15 34 L19 44" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.55"/>
                    <circle cx="37" cy="13" r="5.5" fill="currentColor" fillOpacity="0.75"/>
                    <path d="M37 20 L37 34" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
                    <path d="M37 25 L46 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.55"/>
                    <path d="M37 25 L28 29" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M37 34 L33 44" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.55"/>
                    <path d="M37 34 L41 44" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.55"/>
                    {/* Petit cœur au centre */}
                    <path d="M26 27 C26 24.5,23.5 23.5,23.5 26 C23.5 28.5,26 31,26 31 C26 31,28.5 28.5,28.5 26 C28.5 23.5,26 24.5,26 27Z" fill="#FDC513"/>
                  </svg>
                }
                title="Accueil des admis & insertion"
                description="Connecter les nouveaux arrivants aux étudiants plus anciens. Afterworks, parrainage, rencontres informelles — tous les prétextes sont bons pour créer du lien."
                expandedContent={{
                  highlights: [
                    'Afterworks inter-promotions pour créer des liens durables',
                    'Parrainage des nouvelles recrues par des étudiants de 2e et 3e année',
                    'Accompagnement dans les démarches d\'installation à Sciences Po',
                    'Moments de découverte culturelle tout au long de l\'année',
                    'Soutien à l\'insertion professionnelle via notre réseau alumni',
                  ],
                }}
              />

              {/* Ateliers — hibiscus tropical */}
              <ExpandableActionCard
                strip="primary"
                visual={
                  <svg width="52" height="52" viewBox="0 0 52 52" fill="none" className="text-primary">
                    <ellipse cx="26" cy="13" rx="5.5" ry="12" fill="currentColor" fillOpacity="0.22" transform="rotate(0, 26, 26)"/>
                    <ellipse cx="26" cy="13" rx="5.5" ry="12" fill="currentColor" fillOpacity="0.22" transform="rotate(72, 26, 26)"/>
                    <ellipse cx="26" cy="13" rx="5.5" ry="12" fill="currentColor" fillOpacity="0.22" transform="rotate(144, 26, 26)"/>
                    <ellipse cx="26" cy="13" rx="5.5" ry="12" fill="currentColor" fillOpacity="0.22" transform="rotate(216, 26, 26)"/>
                    <ellipse cx="26" cy="13" rx="5.5" ry="12" fill="currentColor" fillOpacity="0.22" transform="rotate(288, 26, 26)"/>
                    <ellipse cx="26" cy="13" rx="5.5" ry="12" stroke="currentColor" strokeWidth="1" strokeOpacity="0.3" fill="none" transform="rotate(0, 26, 26)"/>
                    <ellipse cx="26" cy="13" rx="5.5" ry="12" stroke="currentColor" strokeWidth="1" strokeOpacity="0.3" fill="none" transform="rotate(72, 26, 26)"/>
                    <ellipse cx="26" cy="13" rx="5.5" ry="12" stroke="currentColor" strokeWidth="1" strokeOpacity="0.3" fill="none" transform="rotate(144, 26, 26)"/>
                    <ellipse cx="26" cy="13" rx="5.5" ry="12" stroke="currentColor" strokeWidth="1" strokeOpacity="0.3" fill="none" transform="rotate(216, 26, 26)"/>
                    <ellipse cx="26" cy="13" rx="5.5" ry="12" stroke="currentColor" strokeWidth="1" strokeOpacity="0.3" fill="none" transform="rotate(288, 26, 26)"/>
                    <circle cx="26" cy="26" r="7.5" fill="currentColor" fillOpacity="0.85"/>
                    <circle cx="26" cy="22.5" r="1.3" fill="white" fillOpacity="0.75"/>
                    <circle cx="29.5" cy="24.5" r="1.3" fill="white" fillOpacity="0.75"/>
                    <circle cx="28" cy="28.5" r="1.3" fill="white" fillOpacity="0.75"/>
                    <circle cx="24" cy="28.5" r="1.3" fill="white" fillOpacity="0.75"/>
                    <circle cx="22.5" cy="24.5" r="1.3" fill="white" fillOpacity="0.75"/>
                  </svg>
                }
                title="Ateliers culturels & événements"
                description="Semaine des Outre-mer, conférences, tables-rondes, ateliers : nous mettons en lumière les cultures ultramarines et discutons des réalités propres à nos territoires."
                expandedContent={{
                  highlights: [
                    'Semaine des Outre-mer : 5 jours d\'événements culturels, académiques et festifs',
                    'Conférences avec des intervenants académiques, politiques et culturels',
                    'Tables-rondes sur les enjeux spécifiques aux territoires d\'Outre-mer',
                    'Ateliers pratiques : cuisine, langues ultramarines, arts traditionnels',
                  ],
                  link: { label: 'Voir le programme SOM 2026', to: '/semaine-outremer' },
                }}
              />

              {/* Partenariats — réseau de nœuds */}
              <ExpandableActionCard
                strip="accent"
                visual={
                  <svg width="52" height="52" viewBox="0 0 52 52" fill="none" className="text-primary">
                    <line x1="26" y1="10" x2="10" y2="40" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.3"/>
                    <line x1="26" y1="10" x2="42" y2="40" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.3"/>
                    <line x1="10" y1="40" x2="42" y2="40" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.3"/>
                    <line x1="18" y1="25" x2="34" y2="25" stroke="currentColor" strokeWidth="1" strokeOpacity="0.2" strokeDasharray="2 2"/>
                    <circle cx="18" cy="25" r="2.5" fill="currentColor" fillOpacity="0.45"/>
                    <circle cx="34" cy="25" r="2.5" fill="currentColor" fillOpacity="0.45"/>
                    <circle cx="26" cy="40" r="2.5" fill="currentColor" fillOpacity="0.35"/>
                    <circle cx="26" cy="10" r="7" fill="currentColor" fillOpacity="0.85"/>
                    <circle cx="10" cy="40" r="7" fill="currentColor" fillOpacity="0.6"/>
                    <circle cx="42" cy="40" r="7" fill="currentColor" fillOpacity="0.45"/>
                    <circle cx="26" cy="10" r="3" fill="white" fillOpacity="0.5"/>
                    <circle cx="10" cy="40" r="3" fill="white" fillOpacity="0.4"/>
                    <circle cx="42" cy="40" r="3" fill="white" fillOpacity="0.3"/>
                  </svg>
                }
                title="Partenariats & réseau"
                description="Réseau alumni, rencontres avec des professionnels, médias, institutions et collectivités. Construire des ponts durables entre Sciences Po et les Outre-mer."
                expandedContent={{
                  highlights: [
                    'Médias : Outre-mer 360, Outre-mer La Première, La Réunion La Première',
                    'Institutions : Mairie de Paris, Délégation de Mayotte, Conseils régionaux',
                    'Associations : MedikWestindies, Nightline France, Femmes au-delà des mers',
                    'Entreprises : Corsair, La Maison de l\'Amérique Latine',
                    'Réseau alumni actif pour l\'insertion des diplômés',
                  ],
                }}
              />
            </div>

            {/* Newsletter */}
            <div className="max-w-4xl mx-auto mt-8 flex justify-center" data-reveal-children>
              <a
                href="https://sciences-o-assets.s3.eu-west-3.amazonaws.com/newsletter-sciences-o-25-26.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-white/90 border border-primary/20 hover:border-primary/40 hover:shadow-lg text-primary font-semibold px-6 py-3 rounded-full shadow transition-all duration-300 hover:-translate-y-0.5"
              >
                <Newspaper className="w-5 h-5 text-accent" />
                Découvrir notre newsletter 2025-2026
              </a>
            </div>
          </div>
        </section>

        {/* Galerie photos */}
        <section className="py-12">
          <div className="container-page">
            <div className="text-center mb-8" data-reveal-children>
              <h2 className="font-heading text-3xl font-bold text-primary mb-3">Sciences Ô en images</h2>
              <div className="h-1 w-20 bg-accent mx-auto rounded-full"></div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4" data-reveal-children>
              {/* Conférence — large, 2 cols */}
              <div className="col-span-2 md:col-span-2 rounded-2xl overflow-hidden aspect-video shadow-lg">
                <img src={`${import.meta.env.BASE_URL}photo-conference.jpg`} alt="Conférence Sciences Ô" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              {/* Partenariat */}
              <div className="col-span-1 rounded-2xl overflow-hidden aspect-[4/3] shadow-lg">
                <img src={`${import.meta.env.BASE_URL}photo-partenariat.jpg`} alt="Partenariat Sciences Ô" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              {/* Groupe Paris */}
              <div className="col-span-1 rounded-2xl overflow-hidden aspect-[4/3] shadow-lg">
                <img src={`${import.meta.env.BASE_URL}photo-groupe-paris.jpg`} alt="Membres Sciences Ô à Paris" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              {/* SOM groupe — large, 2 cols */}
              <div className="col-span-2 md:col-span-2 rounded-2xl overflow-hidden aspect-video shadow-lg">
                <img src={`${import.meta.env.BASE_URL}photo-som-groupe.jpg`} alt="Semaine des Outre-Mer" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              {/* Networking */}
              <div className="col-span-1 rounded-2xl overflow-hidden aspect-[4/3] shadow-lg">
                <img src={`${import.meta.env.BASE_URL}photo-networking.jpg`} alt="Networking Sciences Ô" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              {/* Stand SOM */}
              <div className="col-span-1 rounded-2xl overflow-hidden aspect-[4/3] shadow-lg">
                <img src={`${import.meta.env.BASE_URL}photo-stand-som.jpg`} alt="Stand Semaine Outre-Mer" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  )
}
