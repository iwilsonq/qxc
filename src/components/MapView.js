import React from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'

const MapView = props => {
  const position = [37.7841353, -122.3956773] // github office
  const zoom = 15
  return (
    <Map center={position} zoom={zoom}>
      <TileLayer
        attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </Map>
  )
}

export default MapView
