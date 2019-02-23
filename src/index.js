import _ from './env';
import React from 'react';
import ReactDOM from 'react-dom';
import WelcomeToRide from './WelcomeToRide';
import './index.css';

console.log(process.env.GOOGLE_MAPS_API_KEY);
console.log(process.env);

ReactDOM.render(<WelcomeToRide />, document.getElementById('root'));
