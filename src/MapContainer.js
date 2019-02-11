import React from 'react';
import PropTypes from 'prop-types';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';


const MapContainer = ({ google, markerCoordinates }) => (
  <div className="map-container">
    <Map
      google={google}
      zoom={14}
    >

      {markerCoordinates.map(coordinate => (
        <Marker
          key={coordinate.id}
          position={
              { lat: coordinate.lat, lng: coordinate.lng }
            }
        />
      ))
      }
    </Map>
  </div>
);
MapContainer.propTypes = {
  google: PropTypes.string.isRequired,
  markerCoordinates: PropTypes.shape([
    {
      lat: PropTypes.string.isRequired,
      lng: PropTypes.string.isRequired,
    },
  ]).isRequired,
};

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAkezbPMdYvv85VEKL8YpmzncjjuXZ_6pY',
})(MapContainer);
