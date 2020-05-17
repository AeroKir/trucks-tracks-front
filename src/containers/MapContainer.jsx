import React, { Component } from 'react';
import L from 'leaflet';
import { Map, TileLayer, LayersControl, LayerGroup } from 'react-leaflet';

import DriversLayer from '../layers/DriversLayer';

import 'leaflet/dist/leaflet.css';
import './MapContainer.css';

const position = [49.00, 32.00];
const zoomLevel = 8;
const { Overlay } = LayersControl;

class MapContainer extends Component {
  render() {
    return (
      <Map center={position} zoom={zoomLevel}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <LayersControl>
          <Overlay name="Drivers">
            <LayerGroup>
              <DriversLayer />
            </LayerGroup>
          </Overlay>
        </LayersControl>
      </Map>
    );
  }

}

export default MapContainer;
