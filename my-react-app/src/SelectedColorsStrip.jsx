import React from 'react';
import PropTypes from 'prop-types';

function SelectedColorsStrip({ colors }) {
 return (
    <div className="selected-colors-strip">
      {colors.map((color, index) => (
        <div key={index} className="color-box" style={{ backgroundColor: color }}></div>
      ))}
    </div>
 );
}

SelectedColorsStrip.propTypes = {
 colors: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default SelectedColorsStrip;
