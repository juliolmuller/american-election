import CandidateCard from './CandidateCard'
import logo from '../assets/logo.svg'
import avatarTrump from '../assets/avatar-trump.png'
import avatarBiden from '../assets/avatar-biden.png'

const App = () => {
  const candidates = [
    { name: 'Donald Trump', avatar: avatarTrump, votes: 0 },
    { name: 'Joe Biden', avatar: avatarBiden, votes: 0 },
  ]

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
          <CandidateCard {...candidates[0]} />
          <CandidateCard {...candidates[1]} />
          <CandidateCard {...candidates[0]} />
          <CandidateCard {...candidates[1]} />
        </div>
        {false && (
          <img src={logo} className="logo" alt="logo" />
        )}
      </div>
    </div>
  )
}

export default App
