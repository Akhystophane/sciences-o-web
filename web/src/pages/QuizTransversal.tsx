import { useCallback, useMemo, useState, type DragEvent } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, GripVertical, X } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'

/* ──────────────────── Types ──────────────────── */

type MCQQuestion = {
  id: number
  type: 'mcq'
  typeLabel: string
  prompt: string
  options: string[]
  correctIndex: number
  explanation: string
}

type MultiSelectQuestion = {
  id: number
  type: 'multi-select'
  typeLabel: string
  prompt: string
  options: string[]
  correctIndices: number[]
  explanation: string
}

type MatchingQuestion = {
  id: number
  type: 'matching'
  typeLabel: string
  prompt: string
  leftItems: string[]
  rightItems: string[]
  correctPairs: Record<number, number>
  explanation: string
}

type OrderingQuestion = {
  id: number
  type: 'ordering'
  typeLabel: string
  prompt: string
  items: { label: string; detail?: string }[]
  explanation: string
}

type Question = MCQQuestion | MultiSelectQuestion | MatchingQuestion | OrderingQuestion

/* ──────────────────── Data ──────────────────── */

const immersiveCardClass = 'quiz-card flex h-full flex-col overflow-hidden p-4 sm:p-5 text-left'

const questions: Question[] = [
  {
    id: 15,
    type: 'matching',
    typeLabel: 'Association',
    prompt:
      'Relie chaque territoire à sa grande zone géographique.',
    leftItems: [
      'Guadeloupe',
      'Guyane',
      'La Réunion',
    ],
    rightItems: ['Caraïbes', 'Amérique du Sud', 'Océan Indien', 'Océan Pacifique', 'Amérique du Nord'],
    correctPairs: { 0: 0, 1: 1, 2: 2 },
    explanation:
      "Cette question pose trois grands repères très simples : la Guadeloupe appartient à l'espace caribéen, la Guyane est située sur le continent sud-américain et La Réunion se trouve dans l'océan Indien. Les autres propositions restent là pour obliger à vraiment distinguer les grandes zones.",
  },
  {
    id: 16,
    type: 'ordering',
    typeLabel: 'Mise en ordre',
    prompt: 'Replace ces grands repères historiques du plus ancien au plus récent.',
    items: [
      { label: "Abolition de l'esclavage dans plusieurs territoires ultramarins", detail: '1848' },
      {
        label:
          'Départementalisation de la Guadeloupe, de la Martinique, de la Guyane et de La Réunion',
        detail: '1946',
      },
      { label: 'Accord de Nouméa', detail: '1998' },
      { label: 'Mayotte devient département', detail: '2011' },
    ],
    explanation:
      "Ces quatre dates structurent une bonne partie des repères de base. L'abolition de l'esclavage en 1848 précède la départementalisation de 1946 ; l'accord de Nouméa ouvre ensuite un cadre institutionnel spécifique en 1998 ; enfin Mayotte devient département en 2011.",
  },
  {
    id: 17,
    type: 'mcq',
    typeLabel: 'QCM',
    prompt: "Quel territoire ultramarin français se trouve en Amérique du Sud ?",
    options: [
      'La Guadeloupe',
      'La Guyane',
      'La Réunion',
      'Saint-Barthélemy',
    ],
    correctIndex: 1,
    explanation:
      "La Guyane est un cas très particulier : ce n'est pas une île, mais un territoire continental situé entre le Suriname et le Brésil. C'est aussi le plus vaste territoire ultramarin français.",
  },
  {
    id: 18,
    type: 'multi-select',
    typeLabel: 'Multi-sélection',
    prompt: "Parmi ces territoires, lesquels se situent dans l'océan Indien ?",
    options: [
      'La Réunion',
      'Mayotte',
      'La Guadeloupe',
      'La Martinique',
      'La Nouvelle-Calédonie',
      'Saint-Martin',
    ],
    correctIndices: [0, 1],
    explanation:
      "La Réunion et Mayotte sont les deux grands territoires ultramarins français de l'océan Indien. La Guadeloupe, la Martinique et Saint-Martin relèvent de l'espace caribéen, tandis que la Nouvelle-Calédonie est dans le Pacifique.",
  },
  {
    id: 19,
    type: 'mcq',
    typeLabel: 'QCM',
    prompt: "Quel territoire français d'outre-mer est partagé avec les Pays-Bas ?",
    options: ['Saint-Barthélemy', 'Saint-Martin', 'La Guadeloupe', 'La Réunion'],
    correctIndex: 1,
    explanation:
      "Saint-Martin est divisée entre une partie française et une partie néerlandaise. C'est l'un des exemples les plus connus d'île partagée dans l'espace caribéen français.",
  },
  {
    id: 20,
    type: 'matching',
    typeLabel: 'Association',
    prompt: 'Relie chaque territoire à son chef-lieu.',
    leftItems: ['Guadeloupe', 'Martinique', 'Guyane', 'La Réunion'],
    rightItems: ['Basse-Terre', 'Fort-de-France', 'Cayenne', 'Saint-Denis'],
    correctPairs: { 0: 0, 1: 1, 2: 2, 3: 3 },
    explanation:
      "Ce sont des repères administratifs utiles à retenir. Basse-Terre est le chef-lieu de la Guadeloupe, Fort-de-France celui de la Martinique, Cayenne celui de la Guyane et Saint-Denis celui de La Réunion.",
  },
  {
    id: 21,
    type: 'mcq',
    typeLabel: 'QCM',
    prompt:
      'Quel territoire ultramarin donne à la France sa plus grande zone économique exclusive (ZEE) ?',
    options: ['La Réunion', 'La Nouvelle-Calédonie', 'La Polynésie française', 'La Guyane'],
    correctIndex: 2,
    explanation:
      "La Polynésie française est décisive pour la présence maritime française dans le Pacifique. À elle seule, elle donne à la France une ZEE immense, souvent estimée autour de 5,5 millions de km².",
  },
  {
    id: 22,
    type: 'ordering',
    typeLabel: 'Classement',
    prompt: 'Classe ces territoires du plus grand au plus petit par superficie.',
    items: [
      { label: 'Guyane' },
      { label: 'Guadeloupe' },
      { label: 'Martinique' },
      { label: 'Saint-Barthélemy' },
    ],
    explanation:
      "La Guyane est de très loin la plus vaste, avec une superficie sans commune mesure avec les territoires insulaires. Viennent ensuite la Guadeloupe, puis la Martinique ; Saint-Barthélemy est très petite à l'échelle française.",
  },
  {
    id: 23,
    type: 'mcq',
    typeLabel: 'QCM',
    prompt: 'Quel territoire ultramarin français a connu une période suédoise ?',
    options: ['La Martinique', 'Saint-Martin', 'Saint-Barthélemy', 'La Réunion'],
    correctIndex: 2,
    explanation:
      "Saint-Barthélemy a été administrée par la Suède entre 1784 et 1878. Le nom de Gustavia, sa principale ville, vient directement de cette période suédoise.",
  },
  {
    id: 24,
    type: 'multi-select',
    typeLabel: 'Multi-sélection',
    prompt: 'Parmi ces territoires, lesquels sont des archipels ?',
    options: [
      'Guadeloupe',
      'Martinique',
      'Wallis-et-Futuna',
      'Polynésie française',
      'Guyane',
      'Saint-Pierre-et-Miquelon',
    ],
    correctIndices: [0, 2, 3, 5],
    explanation:
      "La Guadeloupe, Wallis-et-Futuna, la Polynésie française et Saint-Pierre-et-Miquelon sont bien des ensembles composés de plusieurs îles. La Martinique est en revanche une île unique, et la Guyane n'est pas insulaire puisqu'elle se situe sur le continent sud-américain.",
  },
]

/* ──────────────────── MCQ ──────────────────── */

function MCQCard({
  question,
  questionNumber,
  onAnswer,
}: {
  question: MCQQuestion
  questionNumber: number
  onAnswer: (correct: boolean) => void
}) {
  const [selected, setSelected] = useState<number | null>(null)
  const isAnswered = selected !== null

  const handleSelect = (idx: number) => {
    if (isAnswered) return
    setSelected(idx)
    onAnswer(idx === question.correctIndex)
  }

  return (
    <article className={immersiveCardClass} data-reveal>
      <div className="flex items-start justify-between gap-4">
        <h2 className="font-heading text-lg sm:text-xl font-semibold text-primary">
          Question {questionNumber}. {question.prompt}
        </h2>
        <span className="text-xs sm:text-sm text-gray-500 whitespace-nowrap">
          {question.typeLabel}
        </span>
      </div>

      <div className="mt-3 grid gap-2">
        {question.options.map((opt, idx) => {
          const isCorrect = isAnswered && idx === question.correctIndex
          const isIncorrect = isAnswered && idx === selected && selected !== question.correctIndex
          return (
            <button
              key={idx}
              type="button"
              className={`quiz-option ${isCorrect ? 'correct' : ''} ${isIncorrect ? 'incorrect' : ''}`}
              onClick={() => handleSelect(idx)}
              disabled={isAnswered}
            >
              <span className="flex items-center gap-3">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border text-xs font-semibold text-gray-700">
                  {String.fromCharCode(65 + idx)}
                </span>
                <span>{opt}</span>
              </span>
            </button>
          )
        })}
      </div>

      {isAnswered && (
        <div
          className={`mt-3 rounded-lg border px-4 py-3 text-sm ${
            selected === question.correctIndex
              ? 'bg-green-50 border-green-200'
              : 'bg-red-50 border-red-200'
          }`}
        >
          {selected === question.correctIndex ? (
            <>
              <div className="text-green-700 font-semibold">Bonne réponse !</div>
              <div className="text-gray-700 mt-1">{question.explanation}</div>
            </>
          ) : (
            <>
              <div className="text-red-700 font-semibold">
                La bonne réponse était : {String.fromCharCode(65 + question.correctIndex)}){' '}
                {question.options[question.correctIndex]}
              </div>
              <div className="text-gray-700 mt-1">{question.explanation}</div>
            </>
          )}
        </div>
      )}
    </article>
  )
}

/* ──────────────────── Multi-select ──────────────────── */

function shuffleIndices(length: number) {
  const indices = Array.from({ length }, (_, i) => i)
  for (let i = indices.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[indices[i], indices[j]] = [indices[j], indices[i]]
  }
  if (indices.length > 1 && indices.every((value, index) => value === index)) {
    ;[indices[0], indices[1]] = [indices[1], indices[0]]
  }
  return indices
}

function moveItem<T>(items: T[], from: number, to: number) {
  if (from === to) return items
  const next = [...items]
  const [moved] = next.splice(from, 1)
  next.splice(to, 0, moved)
  return next
}

function setCustomDragPreview<T extends HTMLElement>(event: DragEvent<T>) {
  const source = event.currentTarget
  const rect = source.getBoundingClientRect()
  const preview = source.cloneNode(true) as HTMLElement

  preview.style.position = 'fixed'
  preview.style.top = '-1000px'
  preview.style.left = '-1000px'
  preview.style.width = `${rect.width}px`
  preview.style.maxWidth = `${rect.width}px`
  preview.style.boxSizing = 'border-box'
  preview.style.pointerEvents = 'none'
  preview.style.margin = '0'
  preview.style.transform = 'none'
  preview.style.opacity = '1'
  preview.style.zIndex = '9999'
  preview.style.boxShadow = '0 18px 40px rgba(12, 126, 128, 0.18)'

  document.body.appendChild(preview)
  event.dataTransfer.effectAllowed = 'move'
  event.dataTransfer.setData('text/plain', source.textContent ?? '')
  event.dataTransfer.setDragImage(preview, rect.width / 2, rect.height / 2)

  requestAnimationFrame(() => {
    if (preview.parentNode) {
      preview.parentNode.removeChild(preview)
    }
  })
}

function MultiSelectCard({
  question,
  questionNumber,
  onAnswer,
}: {
  question: MultiSelectQuestion
  questionNumber: number
  onAnswer: (correct: boolean) => void
}) {
  const [selected, setSelected] = useState<Set<number>>(new Set())
  const [validated, setValidated] = useState(false)
  const [draggedOption, setDraggedOption] = useState<number | null>(null)
  const [hoveredZone, setHoveredZone] = useState<'available' | 'selected' | null>(null)
  const correctSet = useMemo(() => new Set(question.correctIndices), [question.correctIndices])
  const available = question.options.map((_, idx) => idx).filter((idx) => !selected.has(idx))

  const moveToSelected = (idx: number) => {
    if (validated) return
    setSelected((prev) => {
      const next = new Set(prev)
      next.add(idx)
      return next
    })
  }

  const moveToAvailable = (idx: number) => {
    if (validated) return
    setSelected((prev) => {
      const next = new Set(prev)
      next.delete(idx)
      return next
    })
  }

  const handleValidate = () => {
    setValidated(true)
    const isCorrect =
      question.correctIndices.length === selected.size &&
      question.correctIndices.every((i) => selected.has(i))
    onAnswer(isCorrect)
  }

  const isAllCorrect =
    validated &&
    question.correctIndices.length === selected.size &&
    question.correctIndices.every((i) => selected.has(i))

  const renderChip = (idx: number, location: 'available' | 'selected') => {
    const isSelected = selected.has(idx)
    const isCorrectChoice = correctSet.has(idx)

    let chipClasses =
      'rounded-full border px-4 py-2 text-sm font-semibold transition-all duration-150 cursor-pointer'

    if (validated) {
      if (isCorrectChoice && isSelected) {
        chipClasses += ' border-green-500 bg-green-50 text-green-800'
      } else if (isCorrectChoice && !isSelected) {
        chipClasses += ' border-green-300 bg-green-50/70 text-green-700'
      } else if (!isCorrectChoice && isSelected) {
        chipClasses += ' border-red-400 bg-red-50 text-red-700'
      } else {
        chipClasses += ' border-gray-200 bg-white text-gray-400'
      }
    } else {
      chipClasses +=
        location === 'selected'
          ? ' border-primary bg-primary/10 text-primary shadow-sm hover:bg-primary/15'
          : ' border-primary/30 bg-white text-primary hover:border-primary hover:bg-primary/5'
    }

    return (
      <button
        key={idx}
        type="button"
        draggable={!validated}
        className={chipClasses}
        onClick={() => (isSelected ? moveToAvailable(idx) : moveToSelected(idx))}
        onDragStart={(event) => {
          if (validated) return
          setCustomDragPreview(event)
          setDraggedOption(idx)
        }}
        onDragEnd={() => {
          setDraggedOption(null)
          setHoveredZone(null)
        }}
        disabled={validated}
      >
        {question.options[idx]}
      </button>
    )
  }

  return (
    <article className={immersiveCardClass} data-reveal>
      <div className="flex items-start justify-between gap-4">
        <h2 className="font-heading text-lg sm:text-xl font-semibold text-primary">
          Question {questionNumber}. {question.prompt}
        </h2>
        <span className="text-xs sm:text-sm text-gray-500 whitespace-nowrap">
          {question.typeLabel}
        </span>
      </div>
      <p className="mt-1 text-sm text-gray-500">
        Glissez les bonnes réponses dans votre sélection, ou cliquez simplement sur une réponse pour l'ajouter et la retirer.
      </p>

      <div className="mt-3 grid gap-3 lg:grid-cols-2">
        <div
          className={`rounded-2xl border border-dashed p-3 transition-colors ${
            hoveredZone === 'available' && !validated
              ? 'border-primary bg-primary/5'
              : 'border-primary/20 bg-white'
          }`}
          onDragOver={(event) => {
            if (validated) return
            event.preventDefault()
            setHoveredZone('available')
          }}
          onDragLeave={() => setHoveredZone((current) => (current === 'available' ? null : current))}
          onDrop={(event) => {
            event.preventDefault()
            if (draggedOption !== null) {
              moveToAvailable(draggedOption)
            }
            setDraggedOption(null)
            setHoveredZone(null)
          }}
        >
          <div className="mb-2 flex items-center justify-between gap-3">
            <h3 className="font-semibold text-primary">Banque de réponses</h3>
            <span className="text-xs text-gray-400">{available.length} disponible(s)</span>
          </div>
          <div className="flex min-h-16 flex-wrap gap-2">
            {available.length > 0 ? (
              available.map((idx) => renderChip(idx, 'available'))
            ) : (
              <p className="text-sm text-gray-400">Toutes les propositions sont dans votre sélection.</p>
            )}
          </div>
        </div>

        <div
          className={`rounded-2xl border border-dashed p-3 transition-colors ${
            hoveredZone === 'selected' && !validated
              ? 'border-primary bg-primary/5'
              : 'border-primary/30 bg-primary/[0.03]'
          }`}
          onDragOver={(event) => {
            if (validated) return
            event.preventDefault()
            setHoveredZone('selected')
          }}
          onDragLeave={() => setHoveredZone((current) => (current === 'selected' ? null : current))}
          onDrop={(event) => {
            event.preventDefault()
            if (draggedOption !== null) {
              moveToSelected(draggedOption)
            }
            setDraggedOption(null)
            setHoveredZone(null)
          }}
        >
          <div className="mb-2 flex items-center justify-between gap-3">
            <h3 className="font-semibold text-primary">Ma sélection</h3>
            <span className="text-xs text-gray-400">{selected.size} choisie(s)</span>
          </div>
          <div className="flex min-h-16 flex-wrap gap-2">
            {selected.size > 0 ? (
              Array.from(selected).map((idx) => renderChip(idx, 'selected'))
            ) : (
              <p className="text-sm text-gray-400">Déposez ici les réponses que vous retenez.</p>
            )}
          </div>
        </div>
      </div>

      {!validated && selected.size > 0 && (
        <div className="mt-3 flex justify-center">
          <button className="btn-primary px-6 py-2 rounded-full" onClick={handleValidate}>
            Valider
          </button>
        </div>
      )}

      {validated && (
        <div
          className={`mt-3 rounded-lg border px-4 py-3 text-sm ${
            isAllCorrect ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'
          }`}
        >
          <div className={`font-semibold ${isAllCorrect ? 'text-green-700' : 'text-red-700'}`}>
            {isAllCorrect
              ? 'Parfait !'
              : `Les bonnes réponses étaient : ${question.correctIndices.map((i) => question.options[i]).join(', ')}.`}
          </div>
          <div className="text-gray-700 mt-1">{question.explanation}</div>
        </div>
      )}
    </article>
  )
}

/* ──────────────────── Matching ──────────────────── */

function MatchingCard({
  question,
  questionNumber,
  onAnswer,
}: {
  question: MatchingQuestion
  questionNumber: number
  onAnswer: (correct: boolean) => void
}) {
  const [assignments, setAssignments] = useState<Record<number, number>>({})
  const [selectedChoice, setSelectedChoice] = useState<number | null>(null)
  const [draggedChoice, setDraggedChoice] = useState<number | null>(null)
  const [hoveredLeft, setHoveredLeft] = useState<number | null>(null)
  const [validated, setValidated] = useState(false)
  const allowsReuse =
    new Set(Object.values(question.correctPairs)).size < Object.values(question.correctPairs).length

  const assignChoice = (leftIdx: number, rightIdx: number) => {
    if (validated) return
    setAssignments((prev) => ({ ...prev, [leftIdx]: rightIdx }))
    setSelectedChoice(null)
    setHoveredLeft(null)
  }

  const handleChoiceClick = (rightIdx: number) => {
    if (validated) return
    setSelectedChoice((current) => (current === rightIdx ? null : rightIdx))
  }

  const clearAssignment = (leftIdx: number) => {
    if (validated) return
    setAssignments((prev) => {
      const next = { ...prev }
      delete next[leftIdx]
      return next
    })
  }

  const allAssigned = question.leftItems.every((_, i) => i in assignments)

  const handleValidate = () => {
    setValidated(true)
    const allCorrect = question.leftItems.every(
      (_, i) => assignments[i] === question.correctPairs[i],
    )
    onAnswer(allCorrect)
  }

  const correctCount = validated
    ? question.leftItems.filter((_, i) => assignments[i] === question.correctPairs[i]).length
    : 0

  return (
    <article className={immersiveCardClass} data-reveal>
      <div className="flex items-start justify-between gap-4">
        <h2 className="font-heading text-lg sm:text-xl font-semibold text-primary">
          Question {questionNumber}. {question.prompt}
        </h2>
        <span className="text-xs sm:text-sm text-gray-500 whitespace-nowrap">
          {question.typeLabel}
        </span>
      </div>

      <div className="mt-3 rounded-2xl border border-primary/15 bg-primary/[0.03] p-3">
        <div className="mb-2 flex flex-wrap items-center justify-between gap-3">
          <div>
            <h3 className="font-semibold text-primary">Étiquettes à glisser</h3>
            <p className="text-sm text-gray-500">
              Vous pouvez glisser une réponse sur chaque territoire, ou faire plus simple :
              cliquez sur une étiquette, puis cliquez sur la case du territoire.
            </p>
          </div>
          {allowsReuse && <span className="text-xs text-gray-500">Certaines réponses se réutilisent.</span>}
        </div>

        <div className="flex flex-wrap gap-2">
          {question.rightItems.map((item, rightIdx) => {
            const isSelected = selectedChoice === rightIdx
            return (
              <button
                key={rightIdx}
                type="button"
                draggable={!validated}
                className={`rounded-full border px-4 py-2 text-sm font-semibold transition-all ${
                  validated
                    ? 'border-gray-200 bg-white text-gray-500'
                    : isSelected
                      ? 'border-primary bg-primary text-white shadow-sm'
                      : 'border-primary/30 bg-white text-primary hover:border-primary hover:bg-primary/5'
                }`}
                onClick={() => handleChoiceClick(rightIdx)}
                onDragStart={(event) => {
                  if (validated) return
                  setCustomDragPreview(event)
                  setDraggedChoice(rightIdx)
                }}
                onDragEnd={() => {
                  setDraggedChoice(null)
                  setHoveredLeft(null)
                }}
                disabled={validated}
              >
                {item}
              </button>
            )
          })}
        </div>
      </div>

      <div className="mt-3 grid gap-2 lg:grid-cols-2">
        {question.leftItems.map((item, leftIdx) => {
          const assigned = assignments[leftIdx]
          const isCorrect = validated && assigned === question.correctPairs[leftIdx]
          const isIncorrect = validated && assigned !== question.correctPairs[leftIdx]
          const isHovered = hoveredLeft === leftIdx && !validated

          return (
            <div
              key={leftIdx}
              className={`rounded-2xl border p-3 transition-colors
                ${!validated && isHovered ? 'border-primary bg-primary/10 ring-2 ring-primary/20' : ''}
                ${!validated && !isHovered ? 'border-gray-200 hover:border-primary/30' : ''}
                ${isCorrect ? 'border-green-500 bg-green-50' : ''}
                ${isIncorrect ? 'border-red-400 bg-red-50' : ''}
              `}
              onClick={() => {
                if (selectedChoice !== null) assignChoice(leftIdx, selectedChoice)
              }}
              onDragOver={(event) => {
                if (validated) return
                event.preventDefault()
                setHoveredLeft(leftIdx)
              }}
              onDragLeave={() => {
                setHoveredLeft((current) => (current === leftIdx ? null : current))
              }}
              onDrop={(event) => {
                event.preventDefault()
                if (draggedChoice !== null) assignChoice(leftIdx, draggedChoice)
                setDraggedChoice(null)
                setHoveredLeft(null)
              }}
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-400">
                    Territoire
                  </div>
                  <div className="mt-1 font-medium text-sm">{item}</div>
                </div>
                <div className="min-w-32 shrink-0">
                  <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-400">
                    Réponse
                  </div>
                  <div className="mt-1.5 flex min-h-10 items-center justify-between gap-2 rounded-xl border border-dashed border-primary/25 bg-white/80 px-3 py-2">
                {assigned !== undefined ? (
                  <>
                    <span
                      className={`text-sm font-semibold ${
                        isCorrect
                          ? 'text-green-700'
                          : isIncorrect
                            ? 'text-red-700'
                          : 'text-primary'
                      }`}
                    >
                      {question.rightItems[assigned]}
                    </span>
                    {!validated && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          clearAssignment(leftIdx)
                        }}
                        className="text-gray-400 hover:text-red-500 p-0.5"
                        aria-label="Effacer"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    )}
                    {validated && isIncorrect && (
                      <span className="text-xs text-green-700 whitespace-nowrap">
                        → {question.rightItems[question.correctPairs[leftIdx]]}
                      </span>
                    )}
                  </>
                ) : (
                  <span className="text-sm text-gray-400">
                    {selectedChoice !== null ? 'Cliquez ici pour déposer' : 'Déposez ici ou cliquez après avoir choisi'}
                  </span>
                )}
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {!validated && allAssigned && (
        <div className="mt-3 flex justify-center">
          <button className="btn-primary px-6 py-2 rounded-full" onClick={handleValidate}>
            Valider
          </button>
        </div>
      )}

      {validated && (
        <div
          className={`mt-3 rounded-lg border px-4 py-3 text-sm ${
            correctCount === question.leftItems.length
              ? 'bg-green-50 border-green-200'
              : 'bg-red-50 border-red-200'
          }`}
        >
          <div
            className={`font-semibold ${
              correctCount === question.leftItems.length ? 'text-green-700' : 'text-red-700'
            }`}
          >
            {correctCount === question.leftItems.length
              ? 'Parfait, toutes les correspondances sont correctes !'
              : `${correctCount}/${question.leftItems.length} correspondances correctes.`}
          </div>
          <div className="text-gray-700 mt-1">{question.explanation}</div>
        </div>
      )}
    </article>
  )
}

/* ──────────────────── Ordering ──────────────────── */

function OrderingCard({
  question,
  questionNumber,
  onAnswer,
}: {
  question: OrderingQuestion
  questionNumber: number
  onAnswer: (correct: boolean) => void
}) {
  const [order, setOrder] = useState<number[]>(() => shuffleIndices(question.items.length))
  const [validated, setValidated] = useState(false)
  const [draggedItem, setDraggedItem] = useState<number | null>(null)
  const [hoveredItem, setHoveredItem] = useState<number | null>(null)

  const moveUp = (pos: number) => {
    if (pos === 0 || validated) return
    setOrder((prev) => {
      const next = [...prev]
      ;[next[pos - 1], next[pos]] = [next[pos], next[pos - 1]]
      return next
    })
  }

  const moveDown = (pos: number) => {
    if (pos === order.length - 1 || validated) return
    setOrder((prev) => {
      const next = [...prev]
      ;[next[pos], next[pos + 1]] = [next[pos + 1], next[pos]]
      return next
    })
  }

  const moveDraggedItem = (targetItemIdx: number) => {
    if (validated || draggedItem === null || draggedItem === targetItemIdx) return
    setOrder((prev) => {
      const from = prev.indexOf(draggedItem)
      const to = prev.indexOf(targetItemIdx)
      if (from === -1 || to === -1) return prev
      return moveItem(prev, from, to)
    })
  }

  const isCorrectOrder = order.every((v, i) => v === i)

  const handleValidate = () => {
    setValidated(true)
    onAnswer(isCorrectOrder)
  }

  return (
    <article className={immersiveCardClass} data-reveal>
      <div className="flex items-start justify-between gap-4">
        <h2 className="font-heading text-lg sm:text-xl font-semibold text-primary">
          Question {questionNumber}. {question.prompt}
        </h2>
        <span className="text-xs sm:text-sm text-gray-500 whitespace-nowrap">
          {question.typeLabel}
        </span>
      </div>

      {!validated && (
        <div className="mt-3 rounded-2xl border border-primary/15 bg-primary/[0.03] px-4 py-3 text-sm text-gray-600">
          Glissez les cartes pour les remettre dans l'ordre.
          Si ce n'est pas pratique sur votre écran, utilisez simplement les boutons
          « Monter d'une place » et « Descendre d'une place ».
        </div>
      )}

      <div className="mt-3 flex items-start gap-3">
        <div className="hidden w-28 shrink-0 rounded-2xl border border-primary/15 bg-white/80 px-3 py-4 text-center text-xs font-semibold uppercase tracking-[0.18em] text-primary/60 sm:flex sm:flex-col sm:items-center sm:justify-between">
          <span>Plus ancien</span>
          <span className="text-primary/30">↓</span>
          <span>Plus récent</span>
        </div>

        <div className="flex-1 space-y-2">
        {order.map((itemIdx, pos) => {
          const item = question.items[itemIdx]
          const isCorrectPos = validated && itemIdx === pos
          const isWrongPos = validated && itemIdx !== pos
          const isHovered = hoveredItem === itemIdx && !validated
          const isDragging = draggedItem === itemIdx && !validated

          return (
            <div
              key={itemIdx}
              draggable={!validated}
              className={`flex items-center gap-3 rounded-2xl border px-4 py-3 transition-all
                ${isCorrectPos ? 'border-green-500 bg-green-50' : ''}
                ${isWrongPos ? 'border-red-400 bg-red-50' : ''}
                ${!validated ? 'border-gray-200 bg-white' : ''}
                ${isHovered ? 'border-primary bg-primary/5 shadow-sm' : ''}
                ${isDragging ? 'scale-[0.98] opacity-60 shadow-none' : ''}
              `}
              onDragStart={(event) => {
                if (validated) return
                setCustomDragPreview(event)
                setDraggedItem(itemIdx)
              }}
              onDragEnd={() => {
                setDraggedItem(null)
                setHoveredItem(null)
              }}
              onDragOver={(event) => {
                if (validated) return
                event.preventDefault()
                setHoveredItem(itemIdx)
              }}
              onDragLeave={() => {
                setHoveredItem((current) => (current === itemIdx ? null : current))
              }}
              onDrop={(event) => {
                event.preventDefault()
                moveDraggedItem(itemIdx)
                setDraggedItem(null)
                setHoveredItem(null)
              }}
            >
              <div className="flex items-center gap-2 text-gray-400">
                <GripVertical className="w-4 h-4 shrink-0" />
                <span className="text-sm font-bold w-6 shrink-0">{pos + 1}.</span>
              </div>
              <span className="flex-1 font-medium text-sm sm:text-base">{item.label}</span>
              {!validated && (
                <div className="flex gap-1 shrink-0">
                  <button
                    onClick={() => moveUp(pos)}
                    disabled={pos === 0}
                    className="rounded-full border border-gray-200 px-2 py-1 text-xs font-semibold text-gray-600 hover:border-primary/30 hover:bg-primary/5 disabled:opacity-25 transition-colors"
                    aria-label="Monter"
                  >
                    Monter d'une place
                  </button>
                  <button
                    onClick={() => moveDown(pos)}
                    disabled={pos === order.length - 1}
                    className="rounded-full border border-gray-200 px-2 py-1 text-xs font-semibold text-gray-600 hover:border-primary/30 hover:bg-primary/5 disabled:opacity-25 transition-colors"
                    aria-label="Descendre"
                  >
                    Descendre d'une place
                  </button>
                </div>
              )}
              {validated && item.detail && (
                <span className="text-sm text-gray-500 shrink-0">{item.detail}</span>
              )}
            </div>
          )
        })}
        </div>
      </div>

      {validated && !isCorrectOrder && (
        <div className="mt-2">
          <p className="text-sm font-semibold text-green-700 mb-1">Bon ordre :</p>
          <div className="space-y-1">
            {question.items.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 rounded-lg border border-green-200 bg-green-50/50 px-4 py-2 text-sm"
              >
                <span className="font-bold text-green-700 w-6 shrink-0">{idx + 1}.</span>
                <span className="flex-1">{item.label}</span>
                {item.detail && <span className="text-gray-500 shrink-0">{item.detail}</span>}
              </div>
            ))}
          </div>
        </div>
      )}

      {!validated && (
        <div className="mt-3 flex justify-center">
          <button className="btn-primary px-6 py-2 rounded-full" onClick={handleValidate}>
            Valider
          </button>
        </div>
      )}

      {validated && (
        <div
          className={`mt-3 rounded-lg border px-4 py-3 text-sm ${
            isCorrectOrder ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'
          }`}
        >
          <div className={`font-semibold ${isCorrectOrder ? 'text-green-700' : 'text-red-700'}`}>
            {isCorrectOrder ? "Parfait, c'est le bon ordre !" : 'Pas tout à fait le bon ordre.'}
          </div>
          <div className="text-gray-700 mt-1">{question.explanation}</div>
        </div>
      )}
    </article>
  )
}

/* ──────────────────── Page ──────────────────── */

export default function QuizTransversal() {
  useScrollReveal()

  const [results, setResults] = useState<Record<number, boolean>>({})
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleAnswer = useCallback((questionId: number, isCorrect: boolean) => {
    setResults((prev) => ({ ...prev, [questionId]: isCorrect }))
  }, [])

  const isFirstQuestion = currentIndex === 0
  const isLastQuestion = currentIndex === questions.length - 1
  const totalAnswered = Object.keys(results).length
  const score = Object.values(results).filter(Boolean).length
  const allAnswered = totalAnswered === questions.length
  const currentQuestionAnswered = questions[currentIndex].id in results

  const goToQuestion = (index: number) => {
    setCurrentIndex(index)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const goToPrevious = () => {
    if (isFirstQuestion) return
    goToQuestion(currentIndex - 1)
  }

  const goToNext = () => {
    if (isLastQuestion) return
    goToQuestion(currentIndex + 1)
  }

  const reset = () => {
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
                <ArrowLeft className="w-4 h-4" />
                <span>Quitter</span>
              </Link>

              {!allAnswered && (
                <div className="text-xs font-medium tracking-[0.24em] text-primary/55 uppercase">
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
                      Beau parcours. Ce quiz vous a donné des repères plus structurés sur l'histoire, la géographie et les grands cadres institutionnels des territoires ultramarins.
                    </p>
                    <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                      <button className="btn-primary rounded-full px-6 py-2" onClick={reset}>
                        Recommencer
                      </button>
                      <Link
                        to="/quiz-fun-facts"
                        className="inline-flex items-center justify-center rounded-full border border-primary/20 px-6 py-2 text-sm font-semibold text-primary transition-colors hover:bg-primary/5"
                      >
                        Aller au quiz fun facts
                      </Link>
                    </div>
                  </div>
                </div>
              ) : (
                <>
                  <div className="flex min-h-0 flex-1 items-center justify-center py-1 md:py-2">
                    {questions.map((q, idx) => {
                      const num = idx + 1
                      const onAnswer = (c: boolean) => handleAnswer(q.id, c)
                      const isVisible = idx === currentIndex
                      let content

                      switch (q.type) {
                        case 'mcq':
                          content = <MCQCard key={q.id} question={q} questionNumber={num} onAnswer={onAnswer} />
                          break
                        case 'multi-select':
                          content = (
                            <MultiSelectCard key={q.id} question={q} questionNumber={num} onAnswer={onAnswer} />
                          )
                          break
                        case 'matching':
                          content = (
                            <MatchingCard key={q.id} question={q} questionNumber={num} onAnswer={onAnswer} />
                          )
                          break
                        case 'ordering':
                          content = (
                            <OrderingCard key={q.id} question={q} questionNumber={num} onAnswer={onAnswer} />
                          )
                          break
                      }

                      return (
                        <div
                          key={q.id}
                          className={`w-full max-w-4xl ${isVisible ? 'block' : 'hidden'}`}
                          aria-hidden={!isVisible}
                        >
                          {content}
                        </div>
                      )
                    })}
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
