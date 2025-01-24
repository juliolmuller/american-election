function CandidateCard({ name, avatar, votes, addVote }) {
  return (
    <div className="candidate-card">
      <header>
        <img src={avatar} alt="avatar do candidato" />
        <h2>{name}</h2>
      </header>
      <span>
        {votes} <small>votes</small>
      </span>
      <button type="button" onClick={addVote}>
        +Vote
      </button>
    </div>
  );
}

export default CandidateCard;
