import { useElection, useCandidates } from '../data'
import CandidatesDeck from './CandidatesDeck'
import logo from '../assets/logo.svg'

const App = () => {
  const [isRunning, finish] = useElection()
  const candidates = useCandidates()

  return (
    <div id="app">
      <div className="container">
        <h1 className="title">
          The Election
        </h1>

        {isRunning ? (
          <>
            <button type="button" className="btn-finish" onClick={finish}>
              Finish Counting
            </button>

            <CandidatesDeck candidates={candidates} />
          </>
        ) : (
          <img src={logo} className="logo" alt="logo" />
        )}
      </div>
    </div>
  )
}

export default App
