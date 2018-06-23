import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Phone extends Component {
  render() {
    return (
      <input
        type="text"
        className="form-control"
        style={{
          borderLeft : 'none',
          paddingLeft : '0'
        }}
        onChange={this.props.onChange}
        placeholder="123 456 78 90"/>
    )
  }
}
Phone.propTypes = {
  onChange : PropTypes.func
};
export default Phone;