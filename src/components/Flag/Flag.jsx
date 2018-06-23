import React from 'react';
/*import PropTypes from "prop-types";*/
import './flags.css';

const Flag = (props) => {
  return <div className={`flag flag-${props.countryCode}`}
              onClick={props.onClick}
              value={props.countryCode}/>
};

/*Flag.propTypes = {
  countryCode : PropTypes.string.isRequired,
  onClick : PropTypes.func.isRequired
};*/
export default Flag;