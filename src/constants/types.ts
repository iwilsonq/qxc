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

interface ImpressionsPage {
  galleries: GalleryImpression[]
}

type GalleryImpression = {
  galleryId: string
  title: string
  fullAddress: string
  score: number
  phone: string
  pieces: Piece[]

  lat: 37.7749,
  lng: 122.4194,
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
