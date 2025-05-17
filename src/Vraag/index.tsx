import { useQuizContext } from '../entities'

function Vraag() {
  const { huidigeVraag, vragen } = useQuizContext()

  return (
    <div>
      <p>
        {huidigeVraag + 1} van {vragen.length}
      </p>
      <h1 className="text-4xl text-white">{vragen[huidigeVraag].vraag}</h1>
    </div>
  )
}

export default Vraag
