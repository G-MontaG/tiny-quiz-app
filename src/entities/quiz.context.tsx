import {
  createContext,
  use,
  useMemo,
  useState,
  type ReactNode,
  type SetStateAction,
} from 'react'
import vragen from '../assets/vragen.json'

interface QuizState {
  huidigeVraag: number
  punten: number
}
interface QuizContextState {
  vragen: typeof vragen
  huidigeVraag: number
  punten: number

  setQuizState: (newState: SetStateAction<QuizState>) => void
}
const QuizContext = createContext<QuizContextState | null>(null)

export function QuizProvider({ children }: { children: ReactNode }) {
  const [quizState, setQuizState] = useState({
    huidigeVraag: 0,
    punten: 0,
  })

  const value = useMemo(
    () => ({
      vragen,
      ...quizState,
      setQuizState,
    }),
    [quizState],
  )

  return <QuizContext value={value}>{children}</QuizContext>
}

export function useQuizContext() {
  const context = use(QuizContext)

  if (!context) {
    throw new Error('Context is leeg')
  }

  return context
}
