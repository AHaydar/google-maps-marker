import React from 'react';
import MapContainer from './MapContainer';
import LatLngInput from './LatLngInput';

class WelcomeToRide extends React.Component {
    state = {
      showMap: false,
      lat: '',
      lng: '',
      markerCoordinates: [
      ],
    }

    handleButtonClick = () => {
      const { showMap } = this.state;
      this.setState({
        showMap: !showMap,
      });
    }

    handleInputChange = (event) => {
      const { id } = event.target;
      this.setState({
        [id]: event.target.value,
      });
    }

    handleSubmit = () => {
      const { markerCoordinates, lat, lng } = this.state;
      this.setState({
        markerCoordinates: [
          ...markerCoordinates,
          {
            lat,
            lng,
          },
        ],
      });
      console.log(markerCoordinates);
    }

    render() {
      const {
        showMap, lat, lng, markerCoordinates,
      } = this.state;
      return (
        <>
          <div className="welcome">
            <span className="welcome-title">Welcome to Ride Vis.</span>
            <br />
            <br />
                    Please update the coordinates of your ride and see it presented on the map.
            <br />
            <br />
            <button
              type="button"
              className="show-map-button"
              onClick={this.handleButtonClick}
            >
              {showMap ? "I'm bored.. Hide the map" : 'Show me the map'}
            </button>
            {showMap
              ? (
                <>
                  <MapContainer
                    lat={lat}
                    lng={lng}
                    markerCoordinates={markerCoordinates}
                  />
                  <br />
                  <LatLngInput
                    lat={lat}
                    lng={lng}
                    onChange={this.handleInputChange}
                    onSubmit={this.handleSubmit}
                  />
                </>
              )
              : null}
          </div>
        </>
      );
    }
}


export default WelcomeToRide;
