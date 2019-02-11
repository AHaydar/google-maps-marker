import React from 'react';
import { Map, Marker, GoogleApiWrapper} from 'google-maps-react';


class MapContainer extends React.Component {
    static defaultProps = {
        center: {
          lat: -36.850720,
          lng: 174.764580
        },
        zoom: 12
      };

    render() {
        return (
            <div className="map-container">
                <Map
                    google={this.props.google}
                    zoom={14}
                >

                {this.props.markerCoordinates.map(coordinate => 
                    <Marker position={{lat: coordinate.lat, lng: coordinate.lng}} />
                )}
                </Map>
            </div>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyAkezbPMdYvv85VEKL8YpmzncjjuXZ_6pY'
  })(MapContainer)