import React from 'react';

const LatLngInput = ({ lat, lng, onChange, onSubmit }) => (
    <div>
        <label>
            Latitude:
            <input 
                id="lat" 
                type="text"
                value={lat}
                onChange={onChange} 
            />
        </label>
        <br />
        <label>
            Longitude:
            <input
                id="lng"
                type="text"
                value={lng}
                onChange={onChange}
            />
        </label>
        <br />
        <button onClick={onSubmit}>Pin it</button>
    </div>
);

export default LatLngInput;