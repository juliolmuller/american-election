import CandidateCard from './CandidateCard'

const CandidatesDeck = (props) => (
  <div className="candidates-deck">
    {props.candidates.map((candidate) => (
      <CandidateCard key={candidate.name} {...candidate} />
    ))}
  </div>
)

export default CandidatesDeck
