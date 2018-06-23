import React, {Component} from 'react';
import PropTypes from 'prop-types';

class CountryNumber extends Component {
  render() {
    return (
      <input type="text"
             className="form-control"
             style={{
               flexGrow : '0.2',
               borderRight : 'none',
               paddingRight : '0'
             }}
             onChange={this.props.onChange}
             placeholder="+7"/>)
  }
}

CountryNumber.propTypes = {
  onChange : PropTypes.func
};
export default CountryNumber;