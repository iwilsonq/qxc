import get from 'lodash/get'

export const makeFaunaGreatAgain = obj => ({
  id: get(obj, 'ref.value.id'),
  ...obj.data,
})
