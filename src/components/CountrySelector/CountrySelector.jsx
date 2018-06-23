import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Flag from '../Flag/Flag';
import FlagSelector from '../FlagSelector/FlagSelector';


class CountrySelector extends Component {
  state = {
    countryCode : "ru",
    showFlags : false
  };
  selectCountry = (value) => {
    this.setState({
      countryCode : value,
      showFlags : false
    });
    this.props.onSelectCountry(value);
  };
  toggleCountriesMenu = () => {
    this.setState({
      showFlags : !this.state.showFlags
    });
  };

  render() {
    return (
      <div className="dropdown" style={{display : 'flex'}}>
        <Flag countryCode={this.state.countryCode}
              onClick={this.toggleCountriesMenu}/>
        <FlagSelector needShowFlags={this.state.showFlags}
                      onClick={this.toggleCountriesMenu}
                      onSelect={this.selectCountry}/>
      </div>
    )
  }
}

CountrySelector.propTypes = {
  onSelectCountry : PropTypes.func.isRequired
};

export default CountrySelector;
