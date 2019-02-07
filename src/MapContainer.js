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

    // renderMarkers(map, maps) {
    //     let marker = new maps.Marker({
    //         position: {
    //             lat: -36.854750,
    //             lng: 174.763230
    //         },
    //         map,
    //         title: 'My first marker'
    //     })
    // }

    render() {
        return (
            <div className="map-container">
                <Map
                    google={this.props.google}
                    zoom={14}
                >
                {this.props.setMarker ? 
                    <Marker position={{lat: this.props.lat, lng: this.props.lng}} />
                    :
                    null
                }
                </Map>
            </div>
        )
    }
}
// Map.defaultProps = {
//     zoom: 13,
//     // Auckland, by default
//     initialCenter: {
//       lat: -36.850720,
//       lng: 174.764580
//     }
// }

export default GoogleApiWrapper({
    apiKey: 'AIzaSyAkezbPMdYvv85VEKL8YpmzncjjuXZ_6pY'
  })(MapContainer)