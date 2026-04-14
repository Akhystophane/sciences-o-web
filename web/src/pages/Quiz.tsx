import { useMemo, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

type MultipleChoiceQuestion = {
  id: number
  type: 'mcq'
  prompt: string
  options: string[]
  correctIndex: number
  correctInsight: string
  wrongInsight: string
}

type TrueFalseQuestion = {
  id: number
  type: 'tf'
  prompt: string
  options: string[]
  correctIndex: number
  correctInsight: string
  wrongInsight: string
}

type Question = MultipleChoiceQuestion | TrueFalseQuestion

export default function Quiz() {
  const questions: Question[] = useMemo(
    () => [
      {
        id: 1,
        type: 'mcq',
        prompt:
          "Quelle est la principale menace environnementale pour les îles de l’océan Pacifique, comme la Polynésie française ?",
        options: ['Sécheresse', 'Montée du niveau de la mer', 'Tornades', 'Éruptions volcaniques'],
        correctIndex: 1,
        correctInsight:
          '🌊 La montée des eaux menace directement les atolls et îles basses, provoquant l’érosion côtière et la disparition progressive de terres habitées.',
        wrongInsight:
          'Pas tout à fait ! 😅 Les sécheresses ou tornades existent, mais la hausse du niveau marin est la plus grave, car elle rend certaines zones littéralement inhabitables à long terme.',
      },
      {
        id: 2,
        type: 'mcq',
        prompt:
          'Quel écosystème côtier est particulièrement important pour protéger les territoires ultramarins contre l’érosion et les submersions ?',
        options: ['Forêts tropicales', 'Mangroves', 'Déserts', 'Rivières'],
        correctIndex: 1,
        correctInsight:
          '🌱 Les mangroves agissent comme un bouclier naturel, absorbant les vagues et limitant les dégâts des tempêtes. Elles sont aussi des nurseries pour de nombreuses espèces marines !',
        wrongInsight:
          'Oups 😬 Ce n’est pas la forêt ni la rivière : seules les mangroves poussent directement sur les côtes et jouent ce rôle vital de protection.',
      },
      {
        id: 3,
        type: 'tf',
        prompt:
          'Vrai ou Faux : La montée des eaux menace la biodiversité marine et terrestre des Outre-mer.',
        options: ['Vrai', 'Faux'],
        correctIndex: 0,
        correctInsight:
          '🐠🌺 Exact ! La montée des eaux salinise les sols, détruit les habitats côtiers et perturbe les écosystèmes marins comme les récifs coralliens.',
        wrongInsight:
          'Faux 😅 En réalité, la montée des eaux a un impact massif sur la faune, la flore et les écosystèmes littoraux ultramarins.',
      },
      {
        id: 4,
        type: 'mcq',
        prompt:
          'Quel est l’impact de la salinisation des sols liée à la montée des eaux ?',
        options: [
          'Amélioration des cultures agricoles',
          'Dégradation des terres agricoles et perte de productivité',
          'Augmentation de la biodiversité',
          'Aucun impact',
        ],
        correctIndex: 1,
        correctInsight:
          '🧂 Trop de sel tue les plantes 🌾 : les sols deviennent infertiles, ce qui fragilise la sécurité alimentaire locale.',
        wrongInsight:
          'Pas exactement 😕 La salinisation ne favorise pas les cultures — au contraire, elle empêche la croissance des plantes et ruine les récoltes.',
      },
      {
        id: 5,
        type: 'mcq',
        prompt:
          'Quel est le rôle des savoirs écologiques traditionnels créoles dans l’adaptation au changement climatique ?',
        options: [
          'Ignorer les phénomènes naturels',
          'Favoriser l’exploitation intensive des sols',
          'Transmettre des pratiques durables adaptées aux contraintes environnementales',
          'Se limiter à une vision technologique uniquement',
        ],
        correctIndex: 2,
        correctInsight:
          '🌺 Ces savoirs sont précieux ! Ils reposent sur des observations fines de la nature et sur des pratiques agricoles durables, souvent mieux adaptées que les modèles importés.',
        wrongInsight:
          'Eh non 😅 Ces savoirs ne consistent pas à ignorer la nature, mais à vivre en harmonie avec elle. C’est une vraie source d’inspiration pour l’adaptation climatique.',
      },
      {
        id: 6,
        type: 'mcq',
        prompt:
          'Quel secteur économique dans les Outre-mer est le plus vulnérable aux catastrophes naturelles exacerbées par le réchauffement climatique ?',
        options: ['Industrie minière', 'Tourisme côtier', 'Agriculture en serre', "Technologies de l’information"],
        correctIndex: 1,
        correctInsight:
          '🏖️ Les ouragans, l’érosion et la montée des eaux menacent directement les plages, hôtels et infrastructures touristiques — un pilier de l’économie ultramarine.',
        wrongInsight:
          'Presque ! 🤔 Le secteur minier ou agricole souffre aussi, mais le tourisme côtier est le plus exposé aux catastrophes climatiques.',
      },
      {
        id: 7,
        type: 'mcq',
        prompt: "Quel est l’effet principal de la déforestation sur l’environnement ultramarin ?",
        options: [
          "Amélioration de la qualité de l’air",
          'Renforcement de la biodiversité',
          'Perte de biodiversité et aggravation de l’érosion',
          'Stabilisation des sols',
        ],
        correctIndex: 2,
        correctInsight:
          '🌳 Quand les forêts disparaissent, les sols s’effondrent et les espèces perdent leur habitat — un vrai domino écologique.',
        wrongInsight:
          'Pas tout à fait 😬 La déforestation ne purifie pas l’air, elle accélère la dégradation des écosystèmes et l’érosion des sols.',
      },
      {
        id: 8,
        type: 'mcq',
        prompt:
          'Parmi ces actions, laquelle contribue à la préservation de l’environnement des Outre-mer ?',
        options: [
          'Urbanisation des zones humides',
          'Reforestation et protection des mangroves',
          'Pêche non régulée',
          'Pollution industrielle accrue',
        ],
        correctIndex: 1,
        correctInsight:
          '🌿 Replanter, c’est réparer ! Ces actions restaurent les écosystèmes, protègent les côtes et captent le CO₂.',
        wrongInsight:
          'Non 😅 Urbaniser ou polluer détruit la nature. Seule la reforestation aide à renforcer la résilience des territoires.',
      },
      {
        id: 9,
        type: 'tf',
        prompt:
          'Vrai ou Faux : Les récifs coralliens ultramarins sont essentiels pour la protection des côtes et le maintien de la biodiversité marine.',
        options: ['Vrai', 'Faux'],
        correctIndex: 0,
        correctInsight:
          '🪸 Absolument ! Les récifs sont des barrières naturelles qui freinent les vagues et abritent une biodiversité exceptionnelle.',
        wrongInsight:
          'Faux ❌ Les coraux sont bien plus qu’un décor marin : sans eux, les côtes seraient bien plus vulnérables aux tempêtes et à l’érosion.',
      },
    ],
    [],
  )

  const [answers, setAnswers] = useState<Record<number, number | null>>({})

  const score = useMemo(() => {
    return questions.reduce((sum, q) => {
      const a = answers[q.id]
      return sum + (a === q.correctIndex ? 1 : 0)
    }, 0)
  }, [answers, questions])

  function selectAnswer(questionId: number, optionIndex: number) {
    setAnswers((prev) => ({ ...prev, [questionId]: optionIndex }))
  }

  function resetQuiz() {
    setAnswers({})
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const keycaps = ['', '1️⃣', '2️⃣', '3️⃣', '4️⃣', '5️⃣', '6️⃣', '7️⃣', '8️⃣', '9️⃣']

  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Header />

      <main>
        <section className="relative bg-gradient-to-br from-white via-blue-50/30 to-accent/5 mt-16 md:mt-16 pt-6 md:pt-10 pb-12 md:pb-16 overflow-hidden">
          <div className="container-page relative z-10">
            <div className="mb-4" data-reveal>
              <Link to="/" className="inline-flex items-center gap-2 text-primary hover:underline" aria-label="Retour à l'accueil">
                <ArrowLeft className="w-5 h-5" />
                <span className="text-sm">Retour à l'accueil</span>
              </Link>
            </div>
            <div className="mx-auto hero-content text-center" data-reveal-children="strong" style={{ ['--reveal-duration' as string]: '700ms' }}>
              <span className="quiz-badge mb-3">Thème · Enjeux Environnementaux et Écologiques des Outre-mer</span>
              <h1 className="font-heading text-4xl sm:text-6xl font-bold text-primary mb-4">Quiz Climat</h1>
              <p className="text-base sm:text-lg text-primary/80 mb-6 max-w-3xl mx-auto">
                Testez vos connaissances et découvrez les bonnes réponses au fur et à mesure.
              </p>

              <div className="mx-auto grid gap-6 sm:gap-8">
                {questions.map((q, idx) => {
                  const selected = answers[q.id]
                  const isAnswered = typeof selected === 'number'
                  return (
                    <article key={q.id} className="quiz-card p-5 sm:p-6 text-left" data-reveal>
                      <div className="flex items-start justify-between gap-4">
                        <h2 className="font-heading text-xl sm:text-2xl font-semibold text-primary">
                          <span className="mr-2">{keycaps[idx + 1]}</span> {q.prompt}
                        </h2>
                        <span className="text-xs sm:text-sm text-gray-500 whitespace-nowrap">{q.type === 'tf' ? 'Vrai / Faux' : 'Choix multiple'}</span>
                      </div>

                      <div className="mt-4 grid gap-3">
                        {q.options.map((opt, optIdx) => {
                          const isCorrect = isAnswered && optIdx === q.correctIndex
                          const isIncorrect = isAnswered && optIdx === selected && selected !== q.correctIndex
                          return (
                            <button
                              key={opt}
                              type="button"
                              className={`quiz-option ${isCorrect ? 'correct' : ''} ${isIncorrect ? 'incorrect' : ''}`}
                              onClick={() => selectAnswer(q.id, optIdx)}
                              aria-pressed={selected === optIdx}
                            >
                              <span className="flex items-center gap-3">
                                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border text-xs font-semibold text-gray-700">
                                  {String.fromCharCode(97 + optIdx)}
                                </span>
                                <span>{opt}</span>
                              </span>
                            </button>
                          )
                        })}
                      </div>

                      {isAnswered && (
                        <div className={`mt-4 grid gap-2 rounded-lg border px-4 py-3 text-sm ${selected === q.correctIndex ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'}`}>
                          {selected === q.correctIndex ? (
                            <>
                              <div className="text-green-700 font-semibold">
                                ✅ Bonne réponse : {String.fromCharCode(97 + q.correctIndex)}) {q.options[q.correctIndex]}
                              </div>
                              <div className="text-gray-700">{q.correctInsight}</div>
                            </>
                          ) : (
                            <>
                              <div className="text-red-700 font-semibold">❌ {q.wrongInsight}</div>
                              <div className="text-gray-700">Bonne réponse : {String.fromCharCode(97 + q.correctIndex)}) {q.options[q.correctIndex]}</div>
                            </>
                          )}
                        </div>
                      )}
                    </article>
                  )
                })}
              </div>

              <div className="mt-8 flex flex-col items-center gap-3">
                <div className="text-sm text-gray-700">
                  Score : <span className="font-semibold text-primary">{score}</span> / {questions.length}
                </div>
                <div className="flex items-center gap-3">
                  <button className="btn-primary px-6 py-2 rounded-full" onClick={resetQuiz}>Recommencer</button>
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
