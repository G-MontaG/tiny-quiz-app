import Antwoorden from './Antwoorden'
import './App.css'
import { QuizProvider } from './entities'
import Vraag from './Vraag'
import GithubIcon from './assets/github-mark.svg'

function App() {
  return (
    <QuizProvider>
      <div className="grid h-screen grid-cols-2">
        <div
          className={`left-1 border-r-[3px] border-blue-100 bg-blue-300 p-10`}
        >
          <Vraag />
        </div>
        <div className="flex flex-col items-end p-10">
          <Antwoorden />
          <a
            href="https://github.com/G-MontaG/tiny-quiz-app"
            className={`inline-flex items-center underline`}
          >
            <img src={GithubIcon} className="mr-2 size-6" /> GitHub
          </a>
        </div>
      </div>
    </QuizProvider>
  )
}

export default App
