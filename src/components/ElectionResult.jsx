import spinner from '../assets/spinner.svg';

function ElectionResult({ candidates }) {
  const totalVotes = candidates.reduce((acc, { votes }) => acc + votes, 0);
  const rank = [...candidates]
    .sort((c1, c2) => c2.votes - c1.votes)
    .map((candidate) => ({ ...candidate, percentage: candidate.votes / totalVotes }));

  return (
    <div className="election-result">
      <div className="election-winner">
        <img src={spinner} className="spinner" alt="spinner" />
        <img
          src={rank[0].avatar}
          className="avatar animate__animated animate__bounce animate__repeat-3"
          alt="avatar do candidato"
        />
      </div>
      <h2>{rank[0].name} won!</h2>
      <div className="rank">
        {rank.map((candidate) => (
          <div key={candidate.name} className="rank-item">
            <div>{candidate.name}</div>
            <div>{candidate.votes} votes</div>
            <div>{Math.round(candidate.percentage * 100)}%</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ElectionResult;
