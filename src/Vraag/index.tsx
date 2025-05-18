import { useCallback } from 'react'
import { useQuizContext } from '../entities'

function Vraag() {
  const { huidigeVraag, vragen, antwoord, punten, setQuizState } =
    useQuizContext()

  function handleNext() {
    setQuizState({
      huidigeVraag: huidigeVraag + 1,
      punten,
    })
  }

  return (
    <div className="flex h-full flex-col">
      <div className="flex grow flex-col justify-center">
        <p className="text-2xl text-white text-shadow-2xs">
          {huidigeVraag + 1} van {vragen.length}
        </p>
        <h1 className="text-6xl text-white text-shadow-2xs">
          {vragen[huidigeVraag].vraag}
        </h1>
      </div>
      <div className="flex items-center justify-between">
        <h2 className="text-xl text-white">Punten: {punten}</h2>
        {huidigeVraag < vragen.length - 1 && (
          <button
            type="button"
            disabled={antwoord === undefined}
            className={`
              relative inline-flex items-center justify-center rounded-md border
              border-gray-200 bg-white px-5 py-2.5 text-gray-900
              hover:bg-gray-100 hover:shadow-sm
              disabled:cursor-not-allowed disabled:bg-white
              disabled:text-gray-700 disabled:shadow-none
            `}
            onClick={handleNext}
          >
            Volgende vraag
          </button>
        )}
      </div>
    </div>
  )
}

export default Vraag
