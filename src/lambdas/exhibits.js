require('dotenv').config({ path: './.env.development' })
import querystring from 'querystring'
import map from 'lodash/map'
import faunadb, { query as q } from 'faunadb'
import { makeFaunaGreatAgain } from '../helpers/fauna'

const secret = process.env.FAUNADB_SERVER_SECRET
const client = new faunadb.Client({ secret })

exports.handler = async (event, context) => {
  if (event.httpMethod !== 'GET') {
    return { statusCode: 405, body: 'Method Not Allowed' }
  }

  const pieces = await client.query(
    q.Map(q.Paginate(q.Match(q.Index('all_piece'))), x => q.Get(x)),
  )

  let response = {}
  try {
    response = map(pieces.data, makeFaunaGreatAgain)
  } catch (e) {
    return { statusCode: 500, body: `Fauna! Please! ${e.message}` }
  }

  return {
    headers: { 'Content-Type': 'application/json' },
    statusCode: 200,
    body: JSON.stringify(response),
  }
}
