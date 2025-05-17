import { useQuizContext } from '../entities'

function Vraag() {
  const { huidigeVraag, vragen } = useQuizContext()

  return (
    <div>
      <p className="text-2xl text-white">
        {huidigeVraag + 1} van {vragen.length}
      </p>
      <h1 className="text-6xl text-white">{vragen[huidigeVraag].vraag}</h1>
    </div>
  )
}

export default Vraag
