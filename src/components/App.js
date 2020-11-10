import CandidateCard from './CandidateCard'
import { useCandidates } from '../data'
import logo from '../assets/logo.svg'

const App = () => {
  const candidates = useCandidates()

  return (
    <div id="app">
      <div className="container">
        <h1 className="title">
          The Election
        </h1>
        <button type="button" className="btn-finish">
          Finish Counting
        </button>

        <div className="card-deck">
          {candidates.map((candidate) => (
            <CandidateCard key={candidate.name} {...candidate} />
          ))}
        </div>

        <img src={logo} className="logo" alt="logo" />
      </div>
    </div>
  )
}

export default App
