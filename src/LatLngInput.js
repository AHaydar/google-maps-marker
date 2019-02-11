import React from 'react';
import PropTypes from 'prop-types';

const LatLngInput = ({
  lat, lng, onChange, onSubmit,
}) => (
  <div>
    <label htmlFor="lat">
            Latitude:
      <input
        className="coordinates-input"
        id="lat"
        type="text"
        value={lat}
        onChange={onChange}
      />
    </label>
    <br />
    <label htmlFor="lng">
            Longitude:
      <input
        className="coordinates-input"
        id="lng"
        type="text"
        value={lng}
        onChange={onChange}
      />
    </label>
    <br />
    <button type="button" onClick={onSubmit}>Pin it</button>
  </div>
);

LatLngInput.propTypes = {
  lat: PropTypes.string.isRequired,
  lng: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default LatLngInput;
