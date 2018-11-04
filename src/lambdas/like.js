import querystring from 'querystring'

exports.handler = async (event, context) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' }
  }

  const token =
    event.headers.authorization &&
    event.headers.authorization.replace(/^Bearer (.+)?$/, '$1')

  if (!token) {
    return { statusCode: 401, body: 'Missing autherization token' }
  }

  let body = ''
  try {
    body = JSON.parse(event.body)
  } catch (e) {
    return {
      statusCode: 400,
      body: 'Invalid body. Expected a valid JSON string',
    }
  }

  const { piece } = body

  if (!piece) {
    return { statusCode: 400, body: 'Missing piece id in the body' }
  }

  const response = {
    piece,
  }
  return {
    headers: { 'Content-Type': 'application/json' },
    statusCode: 200,
    body: JSON.stringify(response),
  }
}
