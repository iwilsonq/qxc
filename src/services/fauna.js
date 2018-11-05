import axios from 'axios'
// import faunadb, { query as q } from 'faunadb'
// import { makeFaunaGreatAgain } from '../helpers/fauna'

// const client = new faunadb.Client({ secret: process.env.FAUNADB_SERVER_SECRET })

export const fetchPieces = () => {
  // return client
  //   .query(q.Map(q.Paginate(q.Match(q.Index('all_piece'))), x => q.Get(x)))
  //   .then(res => res.data)
  //   .then(pieces => pieces.map(makeFaunaGreatAgain))
  return axios('/.netlify/functions/exhibits')
}

export const fetchImpressions = () => {
  return axios('/.netlify/functions/impressions')
}

export const submitAnswer = () => {}

