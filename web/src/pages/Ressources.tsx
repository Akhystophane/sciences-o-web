import { FileText, Clock } from 'lucide-react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useScrollReveal } from '../hooks/useScrollReveal'

interface Document {
  title: string
  subtitle: string
  description: string
  year: string
  href: string
  accent: 'primary' | 'accent'
}

const newsletters: Document[] = [
  {
    title: 'Newsletter 2025-2026',
    subtitle: 'N°1 — Ouverture d\'année',
    description:
      'Signature du partenariat avec la CARL (Riviera du Levant), ouverture de l\'année associative et perspectives pour 2025-2026 sous la co-présidence de Maëva Cadéroly et Philippe Legrix.',
    year: '2025-2026',
    href: `newsletter-sciences-o-25-26.pdf`,
    accent: 'primary',
  },
  {
    title: 'Newsletter 2024-2025',
    subtitle: 'Bilan annuel',
    description:
      'Retour sur les actions de l\'année : Sommet Lakou, exposition Taïnos et Kalinagos, table ronde "Héritages pluriels des JO", partenariats institutionnels, 53 lycéens accompagnés et plus de 100 membres.',
    year: '2024-2025',
    href: `newsletter-sciences-o-24-25.pdf`,
    accent: 'accent',
  },
]

function DocumentCard({ doc }: { doc: Document }) {
  const isAccent = doc.accent === 'accent'

  return (
    <div className="group bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-primary/15 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      {/* Bande colorée gauche + icône */}
      <div className="flex">
        <div
          className={`w-2 shrink-0 ${isAccent ? 'bg-accent' : 'bg-primary'}`}
        />
        <div className="flex-1 p-6">
          {/* En-tête */}
          <div className="flex items-start justify-between gap-4 mb-3">
            <div className="flex items-center gap-3">
              {/* Icône PDF custom */}
              <div
                className={`flex items-center justify-center w-10 h-10 rounded-xl ${isAccent ? 'bg-accent/20' : 'bg-primary/10'}`}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  className={isAccent ? 'text-primary' : 'text-primary'}
                >
                  <rect x="4" y="2" width="12" height="16" rx="1.5" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M14 2 L20 8 L20 20 C20 21.1 19.1 22 18 22 L6 22 C4.9 22 4 21.1 4 20 L4 4 C4 2.9 4.9 2 6 2 Z" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
                  <path d="M14 2 L14 8 L20 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                  <line x1="8" y1="13" x2="16" y2="13" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeOpacity="0.5"/>
                  <line x1="8" y1="16" x2="14" y2="16" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeOpacity="0.5"/>
                </svg>
              </div>
              <div>
                <h3 className="font-heading font-bold text-primary text-base leading-tight">
                  {doc.title}
                </h3>
                <p className={`text-xs font-semibold mt-0.5 ${isAccent ? 'text-accent' : 'text-primary/70'}`}>
                  {doc.subtitle}
                </p>
              </div>
            </div>
            <span className="shrink-0 text-xs font-semibold bg-primary/8 text-primary px-3 py-1 rounded-full">
              {doc.year}
            </span>
          </div>

          {/* Description */}
          <p className="text-gray-700 text-sm leading-relaxed mb-5">
            {doc.description}
          </p>

          {/* Bouton télécharger */}
          <a
            href={`${import.meta.env.BASE_URL}${doc.href}`}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-200 ${
              isAccent
                ? 'bg-accent/20 text-primary hover:bg-accent hover:text-white border border-accent/30 hover:border-accent'
                : 'bg-primary/10 text-primary hover:bg-primary hover:text-white border border-primary/20 hover:border-primary'
            }`}
          >
            <FileText className="w-4 h-4" />
            Lire la newsletter
          </a>
        </div>
      </div>
    </div>
  )
}

export default function Ressources() {
  useScrollReveal()

  return (
    <div className="min-h-screen relative text-gray-800 paper-texture">
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-primary/12 via-white via-40% to-accent/30" />
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/15 via-transparent to-transparent" />
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-accent/20 via-transparent to-transparent" />

      <Header />

      <main>
        {/* Hero */}
        <section className="relative mt-16 pt-12 md:pt-16 pb-10">
          <div className="container-page">
            <div className="mx-auto max-w-3xl text-center" data-reveal-children>
              <div className="inline-flex items-center gap-2 bg-accent/20 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6" data-reveal>
                <FileText className="w-4 h-4" />
                Documents & publications
              </div>
              <h1
                className="font-heading text-5xl sm:text-6xl font-bold text-primary mb-6 drop-shadow-[0_2px_8px_rgba(12,126,128,0.15)]"
                data-reveal
                style={{ textShadow: '0 1px 2px rgba(255,255,255,0.8)' }}
              >
                Ressources
              </h1>
              <div className="h-1 w-32 bg-accent mx-auto rounded-full mb-8" data-reveal />
              <p className="text-lg text-gray-700 leading-relaxed" data-reveal>
                Retrouvez ici nos newsletters, comptes rendus d'événements et autres publications de Sciences Ô.
              </p>
            </div>
          </div>
        </section>

        {/* Newsletters */}
        <section className="py-12 bg-white/50 backdrop-blur-sm">
          <div className="container-page">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-heading text-2xl font-bold text-primary mb-2" data-reveal>
                Newsletters
              </h2>
              <div className="h-1 w-16 bg-accent rounded-full mb-8" data-reveal />
              <div className="space-y-5" data-reveal-children>
                {newsletters.map((doc) => (
                  <DocumentCard key={doc.href} doc={doc} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Comptes rendus — à venir */}
        <section className="py-12">
          <div className="container-page">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-heading text-2xl font-bold text-primary mb-2" data-reveal>
                Comptes rendus de conférences
              </h2>
              <div className="h-1 w-16 bg-accent rounded-full mb-8" data-reveal />
              <div
                className="flex flex-col items-center justify-center gap-3 bg-white/60 border border-dashed border-primary/25 rounded-2xl py-14 px-6 text-center"
                data-reveal
              >
                <Clock className="w-8 h-8 text-primary/30" />
                <p className="text-gray-500 text-sm font-medium">
                  Les comptes rendus seront publiés ici après chaque événement.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
