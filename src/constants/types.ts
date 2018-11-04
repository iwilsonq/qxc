// TODO: TBD
type User = {
  id: string
  impressions: Impression[]
}

type Impression = {
  pieceId: '123',
  // -1 dislike, 0 undo|clear state, 1 like
  score: -1
}

type Piece = {
  id: string
  url: string
  galleryId: string
  title: string
  movement: string
  artist: Artist
}

type Gallery = {
  title: string
  fullAddress: string
  lat: number
  lng: number
}

// Unused
type Artist = {
  id: string
  firstName: string
  lastName: string
}
