
const CandidateCard = (props) => (
  <div className="candidate-card">
    <header>
      <img src={props.avatar} alt="avatar do candidato"/>
      <h2>{props.name}</h2>
    </header>
    <span>{props.votes} <small>votes</small></span>
    <button type="button" onClick={props.addVote}>+Vote</button>
  </div>
)

export default CandidateCard
