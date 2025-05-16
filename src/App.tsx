import './App.css'
import { QuizProvider } from './entities'
import Vraag from './Vraag'

function App() {
  return (
    <QuizProvider>
      <div className="h-screen grid grid-cols-2">
        <div className="flex items-center justify-center bg-sky-300">
          <Vraag />
        </div>
        <div className="flex items-center justify-center">
          <div>
            <p>Antwoord 1</p>
            <p>Antwoord 2</p>
            <p>Antwoord 3</p>
          </div>
        </div>
      </div>
    </QuizProvider>
  )
}

export default App
