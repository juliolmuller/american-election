import spinner from '../assets/spinner.svg'

const ElectionResult = (props) => {
  const totalVotes = props.candidates.reduce((acc, { votes }) => acc + votes, 0)
  const rank = [...props.candidates]
    .sort((c1, c2) => c2.votes - c1.votes)
    .map((candidate) => ({ ...candidate, percentage: candidate.votes / totalVotes }))

  return (
    <div className="election-result">
      <div className="election-winner">
        <img src={spinner} className="spinner" alt="spinner" />
        <img src={rank[0].avatar} className="avatar" alt="avatar do candidato" />
      </div>
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
  )
}

export default ElectionResult
