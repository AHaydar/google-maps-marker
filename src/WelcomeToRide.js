import React from 'react';
import MapContainer from './MapContainer';
import LatLngInput from './LatLngInput';

class WelcomeToRide extends React.Component {
    state = {
        showMap: false,
        lat: '',
        lng: '',
        markerCoordinates: [],
    }
    
    handleButtonClick = () => {
        this.setState({
            showMap: !this.state.showMap
        })
    }

    handleInputChange = (event) => {
        const id = event.target.id;
        this.setState({
            [id]: event.target.value
        });
    }

    handleSubmit = (event) => {
        this.setState({
            markerCoordinates: [
                ...this.state.markerCoordinates, 
                {
                    lat: this.state.lat,
                    lng: this.state.lng,
                }
            ]
        });        
    }

    render () {
        return(
            <>
                <div className="welcome">
                    <span className="welcome-title">Welcome to Ride Vis.</span>
                    <br />
                    <br />
                    Please update your ride's coordinates and see it presented on the map.
                    <br />
                    <br />
                    <button
                        className="show-map-button"
                        onClick={this.handleButtonClick}>
                            {this.state.showMap ? "I'm bored.. Hide the map" : "Show me the map"}
                    </button>
                    {this.state.showMap ? 
                        <>
                            <MapContainer 
                                lat={this.state.lat}
                                lng={this.state.lng}
                                markerCoordinates={this.state.markerCoordinates}
                            />
                            <br />
                            <LatLngInput 
                                lat={this.state.lat}
                                lng={this.state.lng}
                                onChange={this.handleInputChange}
                                onSubmit={this.handleSubmit}    
                            />
                        </>
                        : null}
                </div>
            </>
        );
    }
}


export default WelcomeToRide;