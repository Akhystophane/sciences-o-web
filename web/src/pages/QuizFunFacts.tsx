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
      'Exact. Le Piton des Neiges culmine a 3 070 m. Le Piton de la Fournaise est le volcan actif le plus celebre, mais ce n’est pas le sommet le plus haut.',
    wrongInsight: 'La bonne reponse etait le Piton des Neiges, point culminant de La Reunion.',
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
      'Oui. Les pitons, cirques et remparts de La Reunion sont inscrits a l’UNESCO et couvrent une part tres importante de l’ile.',
    wrongInsight: 'La bonne reponse etait les pitons, cirques et remparts.',
  },
  {
    id: 3,
    type: 'mcq',
    prompt: 'Quel volcan est a l’origine de la destruction de Saint-Pierre en 1902 ?',
    options: ['La Soufriere', 'La montagne Pelee', 'Le mont Orohena', 'Le Piton des Neiges'],
    correctIndex: 1,
    correctInsight:
      'C’est bien la montagne Pelee qui detruit Saint-Pierre en 1902, ce qui vaut encore a la ville le surnom de Pompéi des Caraibes.',
    wrongInsight: 'La bonne reponse etait la montagne Pelee.',
  },
  {
    id: 4,
    type: 'mcq',
    prompt: 'Pourquoi la Guadeloupe est-elle souvent representee comme un papillon ?',
    options: [
      'A cause de ses recifs',
      'Parce qu’elle est formee autour de Grande-Terre et Basse-Terre',
      'Parce qu’elle compte deux volcans',
      'A cause de ses ailes migratoires d’oiseaux',
    ],
    correctIndex: 1,
    correctInsight:
      'Oui. La forme de papillon vient des deux iles principales, Grande-Terre et Basse-Terre, separees par la Riviere Salee.',
    wrongInsight: 'La bonne reponse etait Grande-Terre et Basse-Terre.',
  },
  {
    id: 5,
    type: 'mcq',
    prompt: 'Depuis quelle ville est opere le Centre spatial guyanais ?',
    options: ['Cayenne', 'Kourou', 'Saint-Laurent-du-Maroni', 'Remire-Montjoly'],
    correctIndex: 1,
    correctInsight:
      'Exact. Le Centre spatial guyanais est implante a Kourou. C’est de la que l’Europe effectue ses lancements spatiaux depuis la Guyane.',
    wrongInsight: 'La bonne reponse etait Kourou.',
  },
  {
    id: 6,
    type: 'mcq',
    prompt: 'Le Parc amazonien de Guyane couvre environ quelle part du territoire ?',
    options: ['10 %', '25 %', '40 %', '60 %'],
    correctIndex: 2,
    correctInsight:
      'Oui. Le Parc amazonien couvre environ 40 % de la Guyane, ce qui donne tout de suite l’echelle du territoire.',
    wrongInsight: 'La bonne reponse etait environ 40 %.',
  },
  {
    id: 7,
    type: 'mcq',
    prompt:
      'Quel accord signe en 1998 structure encore le cadre institutionnel de la Nouvelle-Caledonie ?',
    options: ['Accord de Matignon', 'Accord de Noumea', 'Accord de Papeete', 'Accord de Wallis'],
    correctIndex: 1,
    correctInsight:
      'Exact. L’accord de Noumea, signe en 1998, est le grand repere politique et institutionnel contemporain de la Nouvelle-Caledonie.',
    wrongInsight: 'La bonne reponse etait l’accord de Noumea.',
  },
  {
    id: 8,
    type: 'mcq',
    prompt: 'Quel traite signe en 1648 organise historiquement le partage de Saint-Martin ?',
    options: ['Traite de Tordesillas', 'Traite de Concordia', 'Traite d’Utrecht', 'Traite de Ryswick'],
    correctIndex: 1,
    correctInsight:
      'Oui. Le traite de Concordia de 1648 est la reference historique du partage de l’ile entre la France et les Pays-Bas.',
    wrongInsight: 'La bonne reponse etait le traite de Concordia.',
  },
  {
    id: 9,
    type: 'mcq',
    prompt: 'Quelle puissance a administre Saint-Barthelemy entre 1784 et 1878 ?',
    options: ['L’Espagne', 'Les Pays-Bas', 'La Suede', 'Le Royaume-Uni'],
    correctIndex: 2,
    correctInsight:
      'Exact. Saint-Barthelemy a ete suedoise pendant pres d’un siecle. Le nom de Gustavia vient directement de cette periode.',
    wrongInsight: 'La bonne reponse etait la Suede.',
  },
  {
    id: 10,
    type: 'mcq',
    prompt: 'Combien de royaumes coutumiers sont reconnus a Wallis-et-Futuna ?',
    options: ['2', '3', '4', '5'],
    correctIndex: 1,
    correctInsight:
      'Oui. Wallis-et-Futuna reconnait trois royaumes coutumiers : Uvea, Alo et Sigave.',
    wrongInsight: 'La bonne reponse etait 3 royaumes coutumiers.',
  },
  {
    id: 11,
    type: 'mcq',
    prompt: 'Combien d’archipels composent la Polynesie francaise ?',
    options: ['3', '4', '5', '6'],
    correctIndex: 2,
    correctInsight:
      'Exact. La Polynesie francaise est composee de 5 archipels : Societe, Tuamotu, Gambier, Marquises et Australes.',
    wrongInsight: 'La bonne reponse etait 5 archipels.',
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
      'Oui. Mayotte possede l’un des plus grands lagons du monde, delimite par une barriere de corail de plus de 160 km.',
    wrongInsight: 'La bonne reponse etait l’un des plus grands et des plus beaux lagons du monde.',
  },
  {
    id: 13,
    type: 'mcq',
    prompt: 'Saint-Pierre-et-Miquelon est souvent presente comme le dernier morceau de France situe en…',
    options: ['Amerique du Nord', 'Amerique du Sud', 'Asie du Sud-Est', 'Ocean Indien'],
    correctIndex: 0,
    correctInsight:
      'Oui. Au large de Terre-Neuve, Saint-Pierre-et-Miquelon est la seule collectivite francaise situee en Amerique du Nord. C’est ce qui rend l’archipel si singulier.',
    wrongInsight: 'La bonne reponse etait l’Amerique du Nord.',
  },
  {
    id: 14,
    type: 'mcq',
    prompt: 'Quel ensemble de deux iles principales donne son nom a l’archipel de Saint-Pierre-et-Miquelon ?',
    options: ['Saint-Pierre et Langlade', 'Miquelon et Langlade', 'Saint-Pierre et Terre-Neuve', 'Miquelon et Uvea'],
    correctIndex: 1,
    correctInsight:
      'Exact. Miquelon et Langlade forment aujourd’hui une meme grande ile reliee par un tombolo, un petit fun fact geographique tres visuel.',
    wrongInsight: 'La bonne reponse etait Miquelon et Langlade.',
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

              <div className="text-xs font-medium uppercase tracking-[0.24em] text-primary/55">
                {currentIndex + 1} / {questions.length}
              </div>
            </div>

            <div
              className="mx-auto flex w-full max-w-5xl min-h-0 flex-1 flex-col"
              data-reveal-children="strong"
              style={{ ['--reveal-duration' as string]: '700ms' }}
            >
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

              <div className="mt-3 flex items-center justify-between gap-3">
                <div className="text-sm text-primary/70">
                  {isLastQuestion &&
                    (totalAnswered === questions.length
                      ? `Score final : ${score} / ${questions.length}`
                      : `Encore ${questions.length - totalAnswered} question${questions.length - totalAnswered > 1 ? 's' : ''} à valider`)}
                </div>

                <div className="flex items-center gap-2">
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
                  <button className="btn-primary rounded-full px-6 py-2" onClick={resetQuiz}>
                    Recommencer
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
