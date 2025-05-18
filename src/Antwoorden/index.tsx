import { useQuizContext } from '../entities'

function Antwoorden() {
  const { huidigeVraag, vragen, punten, antwoord, setQuizState } =
    useQuizContext()

  function handleAntwoord(index: number) {
    setQuizState({
      huidigeVraag,
      punten:
        index === vragen[huidigeVraag].correctAntwoord ? punten + 10 : punten,
      antwoord: index,
    })
  }

  return (
    <div className="flex w-full grow flex-col justify-center space-y-5">
      {antwoord === undefined ? (
        vragen[huidigeVraag].antwoorden.map((antwoord, index) => (
          <button
            type="button"
            className={`
              relative inline-flex items-center justify-center rounded-md border
              border-gray-200 bg-white px-5 py-2.5 text-gray-900
              hover:bg-gray-100 hover:shadow-sm
            `}
            key={index}
            onClick={() => handleAntwoord(index)}
          >
            {antwoord}
          </button>
        ))
      ) : (
        <>
          {antwoord === vragen[huidigeVraag].correctAntwoord ? (
            <h2 className="inline-flex text-center text-4xl text-green-500">
              <span className={`material-symbols-outlined mr-2 text-4xl!`}>
                check
              </span>
              Waar
            </h2>
          ) : (
            <h2 className="inline-flex text-center text-4xl text-red-500">
              <span className={`material-symbols-outlined mr-2 text-4xl!`}>
                close
              </span>
              Niet waar
            </h2>
          )}
          <p>{vragen[huidigeVraag].feit}</p>
        </>
      )}
    </div>
  )
}

export default Antwoorden
