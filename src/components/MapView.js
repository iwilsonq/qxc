import React from 'react'
import { Map, TileLayer, Marker } from 'react-leaflet'

const MapView = props => {
  const initialPosition = [37.7841353, -122.3956773] // github office
  const zoom = 13
  return (
    <Map center={initialPosition} zoom={zoom} style={{ height: '100%' }}>
      <TileLayer
        attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
        url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png"
      />
      {props.galleries.map(gallery => {
        const pos = [gallery.lat, gallery.lng]
        return <Marker key={gallery.galleryId} position={pos} />
      })}
    </Map>
  )
}

export default MapView
