import { MOCK_PIECES } from '../constants/data'

export const fetchPieces = () => {
  return new Promise((resolve, reject) => {
    if (!MOCK_PIECES) {
      reject('No pieces found :(')
    }
    resolve(MOCK_PIECES)
  })
}
