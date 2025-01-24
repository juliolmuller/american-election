import CandidateCard from './CandidateCard';

function CandidatesDeck({ candidates }) {
  return (
    <div className="candidates-deck">
      {candidates.map((candidate) => (
        <CandidateCard key={candidate.name} {...candidate} />
      ))}
    </div>
  );
}

export default CandidatesDeck;
