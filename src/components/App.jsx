import { useElection, useCandidates } from '../data';
import CandidatesDeck from './CandidatesDeck';
import ElectionResult from './ElectionResult';

function App() {
  const [isRunning, finish] = useElection();
  const candidates = useCandidates();

  return (
    <div id="app">
      <div className="container">
        <h1 className="title">American Election</h1>

        {isRunning ? (
          <>
            <button type="button" className="btn-finish" onClick={finish}>
              Done Voting
            </button>

            <CandidatesDeck candidates={candidates} />
          </>
        ) : (
          <ElectionResult candidates={candidates} />
        )}
      </div>
    </div>
  );
}

export default App;
