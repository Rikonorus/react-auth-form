import React, {Component} from 'react';
import './flags.css';

let flagsMap = {
  "+7" : "ru",
  "+81" : "jp",
  "+86" : "cn",
  "+93" : "af",
  "+47" : "no"
};

class CountrySelector extends Component {
  state = {
    countryISO : "ru",
    showFlags : false
  };
  selectCountry = (value) => {
    this.setState({
      countryISO : value,
      showFlags : false
    });
  };
  showCountriesMenu = () => {
    this.setState({
      showFlags : true
    });
  };

  render() {
    return (
      <div className="dropdown" style={{display : 'flex'}}>
        <Flag countryISO={this.state.countryISO}
              onClick={this.showCountriesMenu}/>
        <FlagSelector needShowFlags={this.state.showFlags}
                      onSelect={this.selectCountry}/>
      </div>
    )
  }
}


class FlagSelector extends Component {
  state = {
    showFlags : this.props.needShowFlags,
    value : null
  };
  showCountriesMenu = () => {
    this.setState({
      showFlags : !this.state.showFlags
    })
  };
  onSelectFlag = (e) => {
    this.setState({
      showFlags : false,
      value : e.currentTarget.getAttribute('value')
    });
    this.props.onSelect(this.state.value);
  };

  render() {
    return (
      <div>
        <button
          className="btn btn-sm dropdown-toggle dropdown-btn"
          type="button"
          onClick={this.showCountriesMenu}>
        </button>
        <div
          className={`dropdown-menu ${(this.state.showFlags && "show") || ''}`}
          style={{minWidth : "0"}}>
          {Object
            .values(flagsMap)
            .map((flag, i) =>
              (<Flag countryISO={flag} key={i} onClick={this.onSelectFlag}/>)
            )
          }
        </div>
      </div>
    )
  }
}


const Flag = (props) => {
  return <div className={`flag flag-${props.countryISO}`}
              onClick={props.onClick}
              value={props.countryISO}/>
};

export default CountrySelector;
