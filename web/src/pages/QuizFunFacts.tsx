import { useCallback, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'

type MultipleChoiceQuestion = {
  id: number
  type: 'mcq'
  prompt: string
  options: string[]
  correctIndex: number
  correctInsight: string
  wrongInsight: string
}

type Question = MultipleChoiceQuestion

const questions: Question[] = [
  {
    id: 1,
    type: 'mcq',
    prompt: 'Quel est le point culminant de La Réunion ?',
    options: ['Piton de la Fournaise', 'Piton des Neiges', 'Maido', 'Grand Benare'],
    correctIndex: 1,
    correctInsight:
      "Le Piton des Neiges culmine à 3 070 mètres et reste le sommet le plus élevé de La Réunion. Le Piton de la Fournaise est beaucoup plus célèbre car il est actif, mais ce n'est pas lui le point culminant.",
    wrongInsight: "Le Piton des Neiges est le sommet le plus haut de l'île ; le Piton de la Fournaise est surtout le volcan le plus connu.",
  },
  {
    id: 2,
    type: 'mcq',
    prompt: 'Quel ensemble reunionnais est inscrit au patrimoine mondial de l’UNESCO ?',
    options: [
      'Les lagons et atolls',
      'Les pitons, cirques et remparts',
      'Les plages volcaniques',
      'Les savanes et forets seches',
    ],
    correctIndex: 1,
    correctInsight:
      "Les pitons, cirques et remparts de La Réunion sont inscrits au patrimoine mondial de l'UNESCO. Cet ensemble montagneux spectaculaire est l'un des grands marqueurs paysagers et identitaires de l'île.",
    wrongInsight: "L'inscription UNESCO concerne les pitons, cirques et remparts, pas les lagons ou les seules plages volcaniques.",
  },
  {
    id: 3,
    type: 'mcq',
    prompt: 'Quel volcan est a l’origine de la destruction de Saint-Pierre en 1902 ?',
    options: ['La Soufriere', 'La montagne Pelee', 'Le mont Orohena', 'Le Piton des Neiges'],
    correctIndex: 1,
    correctInsight:
      "La montagne Pelée détruit Saint-Pierre en 1902 lors d'une éruption majeure. Cet épisode a profondément marqué l'histoire de la Martinique, au point que la ville est souvent surnommée la 'Pompéi des Caraïbes'.",
    wrongInsight: "C'est la montagne Pelée, en Martinique, qui est responsable de la destruction de Saint-Pierre en 1902.",
  },
  {
    id: 4,
    type: 'mcq',
    prompt: 'Quel fun fact visuel explique pourquoi la Guadeloupe est souvent representee comme un papillon ?',
    options: [
      'Sa forme generale evoque un papillon',
      'Elle est formee autour de Grande-Terre et Basse-Terre',
      'Elle compte deux volcans actifs',
      'Ses oiseaux migrateurs dessinent deux ailes',
    ],
    correctIndex: 0,
    correctInsight:
      "Oui. Le fun fact à retenir, c'est que la forme générale de la Guadeloupe évoque un papillon. Cette image vient de ses deux grandes parties, Grande-Terre et Basse-Terre, séparées par la Rivière Salée.",
    wrongInsight: "Le 'papillon' guadeloupéen renvoie à la forme dessinée par Grande-Terre et Basse-Terre.",
  },
  {
    id: 5,
    type: 'mcq',
    prompt: 'Depuis quelle ville est opere le Centre spatial guyanais ?',
    options: ['Cayenne', 'Kourou', 'Saint-Laurent-du-Maroni', 'Remire-Montjoly'],
    correctIndex: 1,
    correctInsight:
      "Le Centre spatial guyanais est implanté à Kourou. C'est depuis ce site que sont réalisés les grands lancements spatiaux européens en Guyane.",
    wrongInsight: "Le Centre spatial guyanais se trouve à Kourou, pas à Cayenne.",
  },
  {
    id: 6,
    type: 'mcq',
    prompt: 'Le Parc amazonien de Guyane couvre environ quelle part du territoire ?',
    options: ['10 %', '25 %', '40 %', '60 %'],
    correctIndex: 2,
    correctInsight:
      "Le Parc amazonien de Guyane couvre environ 40 % du territoire. Ce chiffre permet de mesurer à quel point la Guyane est vaste et dominée par l'espace forestier.",
    wrongInsight: "On retient généralement qu'environ 40 % du territoire guyanais est couvert par le Parc amazonien.",
  },
  {
    id: 7,
    type: 'mcq',
    prompt:
      'Quel accord signe en 1998 structure encore le cadre institutionnel de la Nouvelle-Caledonie ?',
    options: ['Accord de Matignon', 'Accord de Noumea', 'Accord de Papeete', 'Accord de Wallis'],
    correctIndex: 1,
    correctInsight:
      "L'accord de Nouméa, signé en 1998, organise le cadre institutionnel contemporain de la Nouvelle-Calédonie. C'est le grand repère politique à connaître pour comprendre son statut actuel.",
    wrongInsight: "Le grand accord de référence pour la Nouvelle-Calédonie est l'accord de Nouméa de 1998.",
  },
  {
    id: 8,
    type: 'mcq',
    prompt: 'Quel traite signe en 1648 organise historiquement le partage de Saint-Martin ?',
    options: ['Traite de Tordesillas', 'Traite de Concordia', 'Traite d’Utrecht', 'Traite de Ryswick'],
    correctIndex: 1,
    correctInsight:
      "Le traité de Concordia, signé en 1648, sert de référence historique pour le partage de l'île entre la France et les Pays-Bas. C'est un repère très classique sur Saint-Martin.",
    wrongInsight: "Le texte historique à retenir ici est le traité de Concordia de 1648.",
  },
  {
    id: 9,
    type: 'mcq',
    prompt: 'Quelle puissance a administre Saint-Barthelemy entre 1784 et 1878 ?',
    options: ['L’Espagne', 'Les Pays-Bas', 'La Suede', 'Le Royaume-Uni'],
    correctIndex: 2,
    correctInsight:
      "Saint-Barthélemy a été administrée par la Suède entre 1784 et 1878. Le nom de Gustavia rappelle directement cette période suédoise.",
    wrongInsight: "Saint-Barthélemy a connu une période suédoise, ce qui explique notamment le nom de Gustavia.",
  },
  {
    id: 10,
    type: 'mcq',
    prompt: 'Combien de royaumes coutumiers sont reconnus a Wallis-et-Futuna ?',
    options: ['2', '3', '4', '5'],
    correctIndex: 1,
    correctInsight:
      "Wallis-et-Futuna reconnaît trois royaumes coutumiers : Uvea, Alo et Sigave. C'est l'un des traits institutionnels les plus singuliers de ce territoire français.",
    wrongInsight: "Wallis-et-Futuna se distingue par la reconnaissance de trois royaumes coutumiers : Uvea, Alo et Sigave.",
  },
  {
    id: 11,
    type: 'mcq',
    prompt: 'Combien d’archipels composent la Polynesie francaise ?',
    options: ['3', '4', '5', '6'],
    correctIndex: 2,
    correctInsight:
      "La Polynésie française est composée de cinq archipels : Société, Tuamotu, Gambier, Marquises et Australes. Ce chiffre aide à comprendre l'immensité et la dispersion du territoire.",
    wrongInsight: "On retient que la Polynésie française est organisée en cinq archipels.",
  },
  {
    id: 12,
    type: 'mcq',
    prompt: 'Le grand lagon de Mayotte est surtout connu pour etre…',
    options: [
      'le plus profond de France',
      'l’un des plus grands et des plus beaux lagons du monde',
      'le seul lagon sans barriere de corail',
      'un lagon entierement ferme sans passe',
    ],
    correctIndex: 1,
    correctInsight:
      "Mayotte possède l'un des plus grands lagons du monde, protégé par une longue barrière de corail. C'est l'un des éléments naturels les plus célèbres et les plus impressionnants du territoire.",
    wrongInsight: "Le lagon de Mayotte est surtout connu pour être l'un des plus grands et des plus remarquables du monde.",
  },
  {
    id: 13,
    type: 'mcq',
    prompt: 'Saint-Pierre-et-Miquelon est souvent presente comme le dernier morceau de France situe en…',
    options: ['Amerique du Nord', 'Amerique du Sud', 'Asie du Sud-Est', 'Ocean Indien'],
    correctIndex: 0,
    correctInsight:
      "Situé au large de Terre-Neuve, Saint-Pierre-et-Miquelon constitue la seule collectivité française en Amérique du Nord. C'est ce décalage géographique qui rend l'archipel particulièrement marquant.",
    wrongInsight: "Saint-Pierre-et-Miquelon se trouve bien en Amérique du Nord, au large du Canada.",
  },
  {
    id: 14,
    type: 'mcq',
    prompt: 'Quel ensemble de deux iles principales donne son nom a l’archipel de Saint-Pierre-et-Miquelon ?',
    options: ['Saint-Pierre et Langlade', 'Miquelon et Langlade', 'Saint-Pierre et Terre-Neuve', 'Miquelon et Uvea'],
    correctIndex: 1,
    correctInsight:
      "Miquelon et Langlade forment aujourd'hui une même grande île reliée par un tombolo, ce qui en fait un fun fact géographique assez marquant. Saint-Pierre reste l'autre île principale de l'archipel.",
    wrongInsight: "Le duo à retenir ici est Miquelon-Langlade, aujourd'hui relié par un tombolo.",
  },
]

function QuestionCard({
  question,
  questionNumber,
  selected,
  onSelect,
}: {
  question: Question
  questionNumber: number
  selected: number | null
  onSelect: (optionIndex: number) => void
}) {
  const isAnswered = typeof selected === 'number'

  return (
    <article className="quiz-card p-5 sm:p-6 text-left" data-reveal>
      <div className="flex items-start justify-between gap-4">
        <h2 className="font-heading text-xl sm:text-2xl font-semibold text-primary">
          <span className="mr-2 text-accent">{questionNumber}.</span>
          {question.prompt}
        </h2>
        <span className="text-xs sm:text-sm text-gray-500 whitespace-nowrap">Choix multiple</span>
      </div>

      <div className="mt-4 grid gap-3">
        {question.options.map((opt, optIdx) => {
          const isCorrect = isAnswered && optIdx === question.correctIndex
          const isIncorrect =
            isAnswered && optIdx === selected && selected !== question.correctIndex

          return (
            <button
              key={opt}
              type="button"
              className={`quiz-option ${isCorrect ? 'correct' : ''} ${isIncorrect ? 'incorrect' : ''}`}
              onClick={() => onSelect(optIdx)}
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
        <div
          className={`mt-4 grid gap-2 rounded-lg border px-4 py-3 text-sm ${
            selected === question.correctIndex
              ? 'border-green-200 bg-green-50'
              : 'border-red-50 bg-red-50'
          }`}
        >
          {selected === question.correctIndex ? (
            <>
              <div className="font-semibold text-green-700">
                ✅ Bonne réponse : {String.fromCharCode(97 + question.correctIndex)}){' '}
                {question.options[question.correctIndex]}
              </div>
              <div className="text-gray-700">{question.correctInsight}</div>
            </>
          ) : (
            <>
              <div className="font-semibold text-red-700">❌ {question.wrongInsight}</div>
              <div className="text-gray-700">
                Bonne réponse : {String.fromCharCode(97 + question.correctIndex)}){' '}
                {question.options[question.correctIndex]}
              </div>
            </>
          )}
        </div>
      )}
    </article>
  )
}

export default function QuizFunFacts() {
  useScrollReveal()

  const [answers, setAnswers] = useState<Record<number, number | null>>({})
  const [currentIndex, setCurrentIndex] = useState(0)

  const score = useMemo(() => {
    return questions.reduce((sum, q) => {
      const answer = answers[q.id]
      return sum + (answer === q.correctIndex ? 1 : 0)
    }, 0)
  }, [answers])

  const currentQuestion = questions[currentIndex]
  const currentAnswer = answers[currentQuestion.id] ?? null
  const isFirstQuestion = currentIndex === 0
  const isLastQuestion = currentIndex === questions.length - 1
  const currentQuestionAnswered = typeof currentAnswer === 'number'
  const totalAnswered = Object.values(answers).filter((value) => typeof value === 'number').length
  const allAnswered = totalAnswered === questions.length

  const selectAnswer = useCallback((questionId: number, optionIndex: number) => {
    setAnswers((prev) => {
      if (typeof prev[questionId] === 'number') return prev
      return { ...prev, [questionId]: optionIndex }
    })
  }, [])

  const goToQuestion = (index: number) => {
    setCurrentIndex(index)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const goToPrevious = () => {
    if (isFirstQuestion) return
    goToQuestion(currentIndex - 1)
  }

  const goToNext = () => {
    if (isLastQuestion || !currentQuestionAnswered) return
    goToQuestion(currentIndex + 1)
  }

  const resetQuiz = () => {
    window.location.reload()
  }

  return (
    <div className="h-[100dvh] overflow-hidden bg-white text-gray-800">
      <main className="h-full">
        <section className="relative h-full overflow-hidden bg-gradient-to-br from-white via-blue-50/30 to-accent/5">
          <div className="container-page relative z-10 flex h-full flex-col pt-4 pb-10 md:pt-5 md:pb-12">
            <div className="mb-3 flex items-center justify-between gap-4" data-reveal>
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-sm text-primary/80 transition-colors hover:text-primary"
                aria-label="Retour à l'accueil"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>Quitter</span>
              </Link>

              {!allAnswered && (
                <div className="text-xs font-medium uppercase tracking-[0.24em] text-primary/55">
                  {currentIndex + 1} / {questions.length}
                </div>
              )}
            </div>

            <div
              className="mx-auto flex w-full max-w-5xl min-h-0 flex-1 flex-col"
              data-reveal-children="strong"
              style={{ ['--reveal-duration' as string]: '700ms' }}
            >
              {allAnswered ? (
                <div className="flex min-h-0 flex-1 items-center justify-center py-1 md:py-2">
                  <div className="w-full max-w-2xl rounded-[32px] border border-primary/10 bg-white/88 px-6 py-8 text-center shadow-sm backdrop-blur sm:px-8">
                    <span className="quiz-badge mb-3">Quiz terminé</span>
                    <h1 className="font-heading text-3xl sm:text-5xl font-bold text-primary">
                      Score final : {score} / {questions.length}
                    </h1>
                    <p className="mt-4 text-base sm:text-lg text-primary/80">
                      Très bon tour d'horizon. Ce quiz vous laisse surtout avec des repères faciles à retenir, des images marquantes et quelques vrais fun facts sur les Outre-mer.
                    </p>
                    <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                      <button className="btn-primary rounded-full px-6 py-2" onClick={resetQuiz}>
                        Recommencer
                      </button>
                      <Link
                        to="/quiz-outremer"
                        className="inline-flex items-center justify-center rounded-full border border-primary/20 px-6 py-2 text-sm font-semibold text-primary transition-colors hover:bg-primary/5"
                      >
                        Aller au quiz histoire & géographie
                      </Link>
                    </div>
                  </div>
                </div>
              ) : (
                <>
                  <div className="flex min-h-0 flex-1 items-center justify-center py-1 md:py-2">
                    <div className="w-full max-w-4xl">
                      <QuestionCard
                        question={currentQuestion}
                        questionNumber={currentIndex + 1}
                        selected={currentAnswer}
                        onSelect={(optionIndex) => selectAnswer(currentQuestion.id, optionIndex)}
                      />
                    </div>
                  </div>

                  <div className="mt-3 flex items-center justify-end gap-2">
                    <button
                      type="button"
                      className="rounded-full border border-primary/15 px-4 py-2 text-sm font-semibold text-primary transition-colors hover:bg-primary/5 disabled:cursor-not-allowed disabled:opacity-35"
                      onClick={goToPrevious}
                      disabled={isFirstQuestion}
                    >
                      Précédent
                    </button>
                    <button
                      type="button"
                      className="rounded-full border border-primary/15 px-4 py-2 text-sm font-semibold text-primary transition-colors hover:bg-primary/5 disabled:cursor-not-allowed disabled:opacity-35"
                      onClick={goToNext}
                      disabled={isLastQuestion || !currentQuestionAnswered}
                    >
                      Suivante
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
