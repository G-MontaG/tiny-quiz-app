import { useQuizContext } from '../entities'

function Antwoorden() {
  const { huidigeVraag, vragen } = useQuizContext()

  const vraagData = vragen[huidigeVraag]

  return (
    <div className="flex w-full flex-col space-y-5">
      {vraagData.antwoorden.map((antwoord, index) => (
        <button
          type="button"
          className={`
            relative inline-flex items-center justify-center rounded-md border
            border-gray-200 bg-white px-5 py-2.5
            hover:bg-gray-100 hover:shadow-sm
            focus:ring-4 focus:ring-gray-100 focus:outline-none
          `}
          key={index}
        >
          {antwoord}
        </button>
      ))}
    </div>
  )
}

export default Antwoorden
