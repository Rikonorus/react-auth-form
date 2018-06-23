import React, {Component} from 'react';
import CountrySelector from '../CountrySelector/CountrySelector';
import CountryNumber from '../CountryNumber/CountryNumber';
import Phone from '../Phone/Phone';
import flagsMap from '../../serverData/CountriesFlagsMap';


class PhoneNumberInput extends Component {
  state = {
    countryCode : flagsMap[this.props.value.slice(-10)] || 'ru',
    countryNumber : this.props.value.slice(0, this.props.value.length - 10) || "+7",
    phoneNumber : this.props.value.slice(-10),
    fullPhoneNumber : ''
  };
  changeFullPhoneNumber = () => {
    this.props.onChange(this.state.fullPhoneNumber);
  };
  changeCountryCode = (value) => {
    let countryNumber = Object.keys(flagsMap)[Object.values(flagsMap).indexOf(value)];
    let fullPhoneNumber = countryNumber + this.state.phoneNumber;
    this.setState({
      countryCode : value,
      countryNumber : countryNumber,
      fullPhoneNumber : fullPhoneNumber
    }, this.changeFullPhoneNumber);

  };
  changeCountryNumber = (e) => {
    let countryNumber = e.currentTarget.value;
    let fullPhoneNumber = countryNumber + this.state.phoneNumber;
    let countryCode = flagsMap[countryNumber] || '';
    this.setState({
      countryNumber : countryNumber,
      countryCode : countryCode,
      fullPhoneNumber : fullPhoneNumber
    }, this.changeFullPhoneNumber);
  };
  changePhoneNumber = (e) => {
    let phoneNumber = e.currentTarget.value;
    let fullPhoneNumber = this.state.countryNumber + phoneNumber;
    this.setState({
      phoneNumber : e.currentTarget.value,
      fullPhoneNumber : fullPhoneNumber
    }, this.changeFullPhoneNumber);
  };


  render() {
    return (
      <div id="inputPhone">
        <label htmlFor="inputPhone" className="text-secondary form__label">ТЕЛЕФОН</label>
        <div className="input-group mb-3">
          <div className="input-group-prepend" style={{flexBasis : "14%"}}>
            <span className="input-group-text" id="basic-addon3">
              <CountrySelector value={this.state.countryCode}
                               onSelectCountry={this.changeCountryCode}/>
            </span>
          </div>
          <div className="fullNumber">
            <CountryNumber value={this.state.countryNumber}
                           onChange={this.changeCountryNumber}/>
            <Phone value={this.state.phoneNumber}
                   onChange={this.changePhoneNumber}/>
          </div>
        </div>
      </div>
    )
  }
}

export default PhoneNumberInput;