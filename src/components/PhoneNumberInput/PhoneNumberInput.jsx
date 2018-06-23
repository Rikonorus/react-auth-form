import React, {Component} from 'react';
import CountrySelector from '../CountrySelector/CountrySelector';
import CountryNumber from '../CountryNumber/CountryNumber';
import Phone from '../Phone/Phone';

class PhoneNumberInput extends Component {
  state = {
    countryCode : "ru",
    countryNumber : "+7"
  };
  changeCountryNumber = (e) => {
    this.setState({countryNumber : e.currentTarget.value});
  };
  changeCountryCode = (value) => {
    this.setState({countryCode : value});
  };

  render() {
    return (
      <div>
        <label htmlFor="inputProfession" className="text-secondary form__label">ТЕЛЕФОН</label>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon3">
              <CountrySelector onSelectCountry={this.changeCountryCode}/>
            </span>
          </div>
          <CountryNumber onChange={this.changeCountryNumber}/>
          <Phone/>
        </div>
      </div>
    )
  }
}

export default PhoneNumberInput;