import React from 'react';
/*import PropTypes from "prop-types";*/
import './flags.css';

const Flag = (props) => {
  return <div className={`flag ${props.countryCode ? 'flag-' + props.countryCode : 'empty'}`}
              onClick={props.onClick}
              value={props.countryCode}/>
};

/*Flag.propTypes = {
  countryCode : PropTypes.string.isRequired,
  onClick : PropTypes.func.isRequired
};*/
export default Flag;