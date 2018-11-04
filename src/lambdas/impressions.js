require('dotenv').config({ path: './.env.development' })
import querystring from 'querystring'
import faunadb, { query as q } from 'faunadb'

const secret = process.env.FAUNADB_SERVER_SECRET
const client = new faunadb.Client({ secret })

exports.handler = async (event, context) => {
  if (event.httpMethod !== 'GET') {
    return { statusCode: 405, body: 'Method Not Allowed' }
  }

  // const galleriesBySomething = await client.query(
  //   q.Map(q.Paginate(q.Match(q.Index('all_piece'))), x => q.Get(x)),
  // )

  const galleries = [
    {
      galleryId: '123',
      title: 'Grand Gallery',
      fullAddress: '1238 Somestreet, San Francisco, CA',
      score: 2,
      pieces: [
        {
          id: 'piece1',
          title: 'Ancient cave painting',
          movement: 'bce',
          url: '1.jpg',
        },
        {
          id: 'piece2',
          title: 'Another something',
          movement: 'bce',
          url: '2.jpg',
        },
      ],

      lat: 37.7749,
      lng: 122.4194,
    },
    {
      galleryId: '124',
      title: 'Picasso Arts',
      fullAddress: '121 Folsom street, San Francisco, CA',
      score: 1,
      pieces: [
        {
          id: 'piece3',
          title: 'Hello wsomething',
          movement: 'bce',
          url: '3.jpg',
        }
      ],

      lat: 37.2749,
      lng: 122.6194,
    },
    {
      galleryId: '125',
      title: 'Picasso Arts 2',
      fullAddress: '121 Folsom street, San Francisco, CA',
      score: 0,
      pieces: [],

      lat: 37.2749,
      lng: 122.6194,
    },
    {
      galleryId: '126',
      title: 'Picasso Arts 3',
      fullAddress: '121 Folsom street, San Francisco, CA',
      score: 0,
      pieces: [],

      lat: 37.2749,
      lng: 122.6194,
    },
  ]

  const response = {
    data: galleries,
  }

  return {
    headers: { 'Content-Type': 'application/json' },
    statusCode: 200,
    body: JSON.stringify(response),
  }
}
