import React from 'react';
import Map from './Map';

class WelcomeToRide extends React.Component {
    state = {
        showMap: false
    }
    
    handleButtonClick = () => {
        this.setState({
            showMap: !this.state.showMap
        })
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
                    {this.state.showMap ? <Map />: null}
                </div>
            </>
        );
    }
}


export default WelcomeToRide;