import React, {Component} from 'react';

/*import PropTypes from 'prop-types';*/

class CountryNumber extends Component {
  render() {
    return (
      <input type="text"
             className="form-control countryCode"
             onChange={this.props.onChange}
             value={this.props.value}
             placeholder="+7"
             tabIndex="4"/>)
  }
}

/*CountryNumber.propTypes = {
  onChange : PropTypes.func,
  value: PropTypes.string
};*/
export default CountryNumber;