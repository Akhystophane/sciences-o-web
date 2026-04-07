import { BookOpen, Download, Users, Network, MapPin, GraduationCap, Lightbulb, Building, Star, Handshake } from 'lucide-react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useScrollReveal } from '../hooks/useScrollReveal'

const objectifs = [
  {
    icon: Users,
    color: 'primary' as const,
    title: "Décloisonner Sciences Ô et ouvrir l'association à de nouveaux publics",
    content: (
      <>
        Ouvrir davantage nos événements à des personnes extérieures à Sciences Po.
        Élargir notre audience en incluant les <strong>diasporas ultramarines</strong> et des figures de la <strong>société civile</strong>
        {' '}(sportifs engagés, artistes, Miss France, journalistes...).
        Créer des <strong>ponts</strong> avec d'autres <strong>associations étudiantes</strong> pour mutualiser nos forces.
      </>
    ),
    align: 'left' as const,
  },
  {
    icon: Network,
    color: 'accent' as const,
    title: 'Consolider un réseau intergénérationnel entre adhérents et alumni',
    content: (
      <>
        Recenser les <strong>alumni</strong> ultramarins et structurer un véritable <strong>réseau</strong> d'anciens.
        Organiser des formats variés : petits-déjeuners, afterworks, témoignages pro...
        Faciliter le <strong>mentorat</strong> et l'<strong>insertion professionnelle</strong> notamment grâce à l'accompagnement des alumni.
        Intégrer les alumni dans les <strong>préparations aux concours et aux oraux</strong>.
      </>
    ),
    align: 'right' as const,
  },
  {
    icon: MapPin,
    color: 'primary' as const,
    title: 'Renforcer notre présence dans les territoires et dans les médias',
    content: (
      <>
        Intervenir dans les <strong>lycées</strong>, y compris non conventionnés, et dans les séminaires de jeunes élus et élus lycéens/collégiens.
        Proposer des <strong>actions concrètes</strong> dans les territoires : forums, masterclass, relais locaux.
        Nouer des liens avec <strong>radios, TV et presse ultramarines</strong> pour que nos membres deviennent des interlocuteurs référents.
      </>
    ),
    align: 'left' as const,
  },
  {
    icon: GraduationCap,
    color: 'accent' as const,
    title: 'Soutenir la formation et la professionnalisation des membres',
    content: (
      <>
        Organiser des <strong>simulations d'oraux</strong>, des <strong>ateliers CV/lettre de motivation</strong>.
        Nouer des <strong>partenariats</strong> avec des institutions, entreprises et collectivités d'Outre-mer.
      </>
    ),
    align: 'right' as const,
  },
  {
    icon: Lightbulb,
    color: 'primary' as const,
    title: "Lancer de nouvelles initiatives et créer des contenus originaux ancrés dans nos réalités",
    content: (
      <>
        Lancer un <strong>podcast</strong> ou une série d'interviews <em>"Voix d'Ôutre-Mer"</em> avec des parcours inspirants.
        Publier une <strong>revue annuelle</strong> de Sciences Ô : rétrospective, tribunes, portraits, analyses.
      </>
    ),
    align: 'left' as const,
  },
  {
    icon: Building,
    color: 'accent' as const,
    title: 'Structurer durablement Sciences Ô',
    content: (
      <>
        Créer un <strong>guide de passation</strong> pour garantir la mémoire et la continuité des projets.
        Planifier en amont des <strong>temps forts annuels</strong> (conférences, gala, forum inter-assos...).
        Alimenter le <strong>livre d'or</strong> acheté par l'équipe 2024-2025.
        Porter la voix des outre-mer à l'<strong>international</strong>.
        Rester connecté à nos territoires respectifs.
      </>
    ),
    align: 'right' as const,
  },
]

const parrains = [
  { name: 'Christiane Taubira', year: '2024-2025' },
  { name: 'Meryl & Agnès Cornélie', year: '2023-2024' },
  { name: 'Matthieu Gama', year: '2022-2023' },
  { name: 'Julie Jarno & Joël Destom', year: '2021-2022' },
  { name: 'Maël Disa', year: '2020-2021' },
  { name: 'Wallès Kotra', year: '2019-2020' },
]

const partenaires = [
  { categorie: 'Médias', noms: ['Outre-mer 360', 'Outre-mer La Première', 'La Réunion La Première'] },
  { categorie: 'Institutions', noms: ['Mairie de Paris', 'Conseil régional de la Guadeloupe', 'Délégation de Mayotte', 'La FEDOM'] },
  { categorie: 'Associations', noms: ['MedikWestindies', 'Nightline France', 'Femmes au-delà des mers', "Les Apprentis d'Auteuil de Mayotte"] },
  { categorie: 'Entreprises & Culture', noms: ['Corsair', 'Musée du Quai Branly', "La Maison de l'Amérique Latine", 'Retour au Péyi'] },
]

export default function APropos() {
  useScrollReveal()

  return (
    <div className="min-h-screen relative text-gray-800 paper-texture">
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-primary/12 via-white via-40% to-accent/30" />
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/15 via-transparent to-transparent" />
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-accent/20 via-transparent to-transparent" />

      <Header />

      <main>
        {/* Hero */}
        <section className="relative mt-16 pt-12 md:pt-16 pb-12 md:pb-16">
          <div className="container-page">
            <div className="mx-auto max-w-3xl text-center" data-reveal-children>
              <div className="inline-flex items-center gap-2 bg-accent/20 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6" data-reveal>
                <BookOpen className="w-4 h-4" />
                Qui sommes-nous ?
              </div>
              <h1 className="font-heading text-5xl sm:text-6xl font-bold text-primary mb-6 drop-shadow-[0_2px_8px_rgba(12,126,128,0.15)]" data-reveal style={{ textShadow: '0 1px 2px rgba(255,255,255,0.8)' }}>
                L'association
              </h1>
              <div className="h-1 w-32 bg-accent mx-auto rounded-full mb-8" data-reveal></div>
              <p className="text-lg text-gray-700 leading-relaxed" data-reveal>
                Sciences Ô est l'association de référence pour les Outre-mer à Sciences Po Paris.
                Depuis sa création en 2011, elle valorise les territoires et les cultures ultramarines
                sur les campus en région et à Paris.
              </p>
            </div>
          </div>
        </section>

        {/* À propos — identité */}
        <section className="py-16 bg-white/50 backdrop-blur-sm">
          <div className="container-page">
            <div className="max-w-4xl mx-auto" data-reveal-children>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                <div className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    <strong>Sciences Ô</strong> est l'association de référence pour les Outre-mer à Sciences Po Paris.
                    Fondée en 2011, elle a pour objet la <strong>valorisation des territoires et des cultures d'Outre-mer</strong> sur les campus en région et à Paris.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Sciences Ô collabore avec le <strong>Pôle Égalité des chances</strong> de Sciences Po et mène à ce titre
                    une politique de préparation des lycéens d'Outre-mer au concours d'entrée et d'accompagnement des étudiants ultramarins
                    durant toute leur scolarité.
                  </p>
                  <p className="text-gray-700 leading-relaxed italic font-semibold text-primary">
                    "Ansan'm nou lé pli for" — Ensemble, nous sommes plus forts.
                  </p>
                </div>

                <div className="flex flex-col gap-4">
                  <div className="bg-white/90 rounded-2xl p-5 shadow border border-primary/10">
                    <p className="text-sm text-gray-500 mb-1">Fondée en</p>
                    <p className="font-heading text-3xl font-bold text-primary">2011</p>
                  </div>
                  <div className="bg-white/90 rounded-2xl p-5 shadow border border-primary/10">
                    <p className="text-sm text-gray-500 mb-1">Co-présidents 2025-2026</p>
                    <p className="font-semibold text-primary">Maéva Cadéroly & Philippe Legrix</p>
                  </div>
                  <div className="bg-white/90 rounded-2xl p-5 shadow border border-primary/10">
                    <p className="text-sm text-gray-500 mb-1">Contact</p>
                    <a href="mailto:scienceso.outremer@gmail.com" className="font-semibold text-primary hover:text-accent transition-colors">
                      scienceso.outremer@gmail.com
                    </a>
                  </div>
                  <a
                    href={`${import.meta.env.BASE_URL}livret-sciences-o-2025-2026.pdf`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 btn-primary px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:shadow-lg"
                  >
                    <Download className="w-4 h-4" />
                    Livret de présentation 2025-2026
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Nos Objectifs */}
        <section className="py-16 relative overflow-hidden">
          <div className="container-page relative z-10">
            <div className="text-center mb-16" data-reveal-children>
              <h2 className="font-heading text-4xl font-bold text-primary mb-4">
                Nos Objectifs 2025-2026
              </h2>
              <div className="h-1 w-24 bg-accent mx-auto rounded-full"></div>
              <p className="text-gray-600 mt-4 max-w-2xl mx-auto">Notre feuille de route stratégique pour l'année.</p>
            </div>

            <div className="space-y-20" data-reveal-children="strong">
              {objectifs.map((obj, i) => {
                const Icon = obj.icon
                const isRight = obj.align === 'right'
                return (
                  <div key={i} className={`relative max-w-4xl ${isRight ? 'ml-auto text-right' : ''}`}>
                    <div className={`flex items-center gap-4 mb-4 ${isRight ? 'justify-end' : ''}`}>
                      {!isRight && <Icon className={`w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 text-primary opacity-80 shrink-0`} />}
                      <h3 className="font-heading text-2xl font-bold text-primary">{obj.title}</h3>
                      {isRight && <Icon className={`w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 text-accent opacity-80 shrink-0`} />}
                    </div>
                    <div className={`h-1 w-32 bg-accent mb-6 ${isRight ? 'ml-auto' : ''}`}></div>
                    <div className="relative z-10 group">
                      <p className="text-gray-900 text-[17px] sm:text-lg leading-8 bg-white/90 backdrop-blur-sm rounded-2xl px-6 py-6 shadow-lg border border-primary/15 transition-all duration-300 hover:shadow-xl hover:bg-white/95 hover:border-primary/25 hover:-translate-y-1">
                        {obj.content}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Ils nous font confiance */}
        <section className="py-16 bg-white/50 backdrop-blur-sm">
          <div className="container-page">
            <div className="text-center mb-12" data-reveal-children>
              <h2 className="font-heading text-4xl font-bold text-primary mb-4">Ils nous font confiance</h2>
              <div className="h-1 w-24 bg-accent mx-auto rounded-full"></div>
            </div>

            {/* Parrains */}
            <div className="max-w-4xl mx-auto mb-16" data-reveal-children>
              <h3 className="font-heading text-2xl font-bold text-primary mb-6 flex items-center gap-3">
                <Star className="w-6 h-6 text-accent" />
                Nos parrains et marraines
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {parrains.map((p, i) => (
                  <div key={i} className="bg-white/90 rounded-xl px-4 py-3 shadow border border-primary/10 text-center">
                    <p className="font-semibold text-primary text-sm">{p.name}</p>
                    <p className="text-xs text-gray-500 mt-1">{p.year}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Partenaires */}
            <div className="max-w-4xl mx-auto" data-reveal-children>
              <h3 className="font-heading text-2xl font-bold text-primary mb-6 flex items-center gap-3">
                <Handshake className="w-6 h-6 text-accent" />
                Nos partenaires
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {partenaires.map((cat, i) => (
                  <div key={i} className="bg-white/90 rounded-2xl p-5 shadow border border-primary/10">
                    <h4 className="font-heading font-bold text-primary mb-3 text-sm uppercase tracking-wide">{cat.categorie}</h4>
                    <ul className="space-y-1">
                      {cat.noms.map((nom, j) => (
                        <li key={j} className="text-sm text-gray-700 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0"></span>
                          {nom}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
