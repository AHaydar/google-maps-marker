import React from 'react';
import GoogleMapReact from 'google-map-react';


class Map extends React.Component {
    static defaultProps = {
        center: {
          lat: -36.850720,
          lng: 174.764580
        },
        zoom: 11
      };

    render() {
        return (
            <div className="map-container">
            <GoogleMapReact
                bootstrapURLKeys={{key: 'AIzaSyAkezbPMdYvv85VEKL8YpmzncjjuXZ_6pY'}}
                defaultCenter={this.props.center}
                defaultZoom={this.props.zoom}
                />
            </div>
        )
    }
}

export default Map;