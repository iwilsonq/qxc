import faunadb, { query as q } from 'faunadb'

const client = new faunadb.Client({ secret: process.env.FAUNADB_SERVER_SECRET })

const normalizeFauna = obj => ({ id: obj.ref.value.id, ...obj.data })

export const fetchPieces = () => {
  return client
    .query(q.Map(q.Paginate(q.Match(q.Index('all_piece'))), x => q.Get(x)))
    .then(res => res.data)
    .then(pieces => pieces.map(normalizeFauna))
}
