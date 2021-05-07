import { useState } from 'react'
import avatarTrump from './assets/avatar-trump.png'
import avatarBiden from './assets/avatar-biden.png'

export const useElection = () => {
  const [isOpen, setState] = useState(true)

  return [isOpen, () => setState(false)]
}

export const useCandidate = (candidateName, candidateAvatar) => {
  const [name] = useState(candidateName)
  const [avatar] = useState(candidateAvatar)
  const [votes, setVotes] = useState(0)

  const addVote = () => setVotes((votes) => votes + 1)

  return { name, avatar, votes, addVote }
}

export const useCandidates = () => {
  const candidates = []
  candidates.push(useCandidate('Jair Trump', avatarTrump))
  candidates.push(useCandidate('Josnei Biden', avatarBiden))
  /* candidates.push(useCandidate(...)) */

  return candidates
}
