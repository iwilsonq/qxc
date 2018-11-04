type User = {
  id: string
}

type Artist = {
  id: string
  firstName: string
  lastName: string
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

type Impression = {
  userId: string
  impressions: {
    _pieceId: number // not sure if we should build it as an object wtih
    // keys being pieceId and value being a score
  }
}

// q.Map(q.Paginate(q.Match(q.Index("all_piece"))),function(x){return q.Get(x)})
