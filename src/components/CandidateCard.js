
const CandidateCard = (props) => (
  <div className="candidate-card">
    <header>
      <img src={props.avatar} alt="avatar do candidato"/>
      <h1>{props.name}</h1>
    </header>
    <span>{props.votes} <small>votes</small></span>
    <button type="button" onClick={props.vote}>+ Vote</button>
  </div>
)

export default CandidateCard
