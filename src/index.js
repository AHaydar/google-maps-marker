import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const WelcomeToRide = () => (
    <div className="welcome">
        <span className="welcome-title">Welcome to Ride Vis.</span>
        <br />
        <br />
        Please update your ride's coordinates and see it presented on the map.
    </div>
);

ReactDOM.render(<WelcomeToRide />, document.getElementById('root'));
