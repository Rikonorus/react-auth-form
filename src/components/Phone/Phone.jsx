import React, {Component} from 'react';

/*import PropTypes from 'prop-types';*/

class Phone extends Component {
  render() {
    return (
      <input
        type="text"
        className="form-control phoneNumber"
        value={this.props.value}
        onChange={this.props.onChange}
        placeholder="123 456 78 90"
        tabIndex="5"/>
    )
  }
}

/*Phone.propTypes = {
  onChange : PropTypes.func
};*/
export default Phone;