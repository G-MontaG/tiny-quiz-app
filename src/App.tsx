import Antwoorden from './Antwoorden'
import './App.css'
import { QuizProvider } from './entities'
import Vraag from './Vraag'

function App() {
  return (
    <QuizProvider>
      <div className="grid h-screen grid-cols-2">
        <div
          className={`left-1 border-r-[3px] border-blue-100 bg-blue-300 p-10`}
        >
          <Vraag />
        </div>
        <div className="flex items-center justify-center p-10">
          <Antwoorden />
        </div>
      </div>
    </QuizProvider>
  )
}

export default App
