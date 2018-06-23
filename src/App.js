import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CountrySelector from './components/Flag/Flag';
import ProfessionsList from './components/Profession/List';


class App extends Component {
  state = {
    profession: '',
    professionSelected: false
  }
  handleChangeProfession = (e) => {
    debugger;
    this.setState({
      profession: e.currentTarget.value,
      professionSelected: false
    })
  }
  selectProfession = (e) => {
    debugger;
    this.setState({
      profession: e.currentTarget.innerText,
      professionSelected: true
    })
  }
  render() {
    return (
      <form style={{ margin: '150px auto', width: '320px' }}>
        <p className="text-center"><strong>Зарегистрируйтесь</strong> и начните продавать услуги через интернет сегодня</p>
        <div className="form-row">
          <div className="form-group col-md-6 form__user-name">
            <label htmlFor="inputName" className="text-secondary form__label">ИМЯ</label>
            <input type="text" className="form-control" id="inputName" placeholder="Сергей" />
          </div>
          <div className="form-group col-md-6 form__user-surname">
            <label htmlFor="inputSurname" className="text-secondary form__label">ФАМИЛИЯ</label>
            <input type="text" className="form-control" id="inputSurname" placeholder="Миргород" />
          </div>
          <div className="form-group col-lg-12">
            <label htmlFor="inputProfession" className="text-secondary form__label">ПРОФЕССИЯ</label>
            <input type="text" className="form-control" id="inputProfession" onChange={this.handleChangeProfession} value={this.state.profession} />
            {this.state.profession.length !== 0
              && !this.state.professionSelected
              && <ProfessionsList value={this.state.profession} clickHandler={this.selectProfession} />}
          </div>
        </div>
        <PhoneNumberInput />
        <button type="submit" className="btn btn-primary btn-block sing-up-btn">Зарегистрироваться</button>
      </form>
    );
  }
}

class PhoneNumberInput extends Component {
  state = {
    countryCode: "ru",
    countryNumber: "+7"
  };
  changeCountryNumber = (e) => {
    this.setState({ countryNumber: e.currentTarget.value });
  };
  changeCountyCode = (flag)=>{
    this.setState({countryCode: flag.state.countryISO});
  };
  render() {
    return (
      <div>
        <label htmlFor="inputProfession" className="text-secondary form__label">ТЕЛЕФОН</label>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon3">
              <CountrySelector />
            </span>
          </div>
          <CountryNumber onChange={this.changeCountryNumber} />
          <Phone />
        </div>
      </div>
    )
  }
}

class CountryNumber extends Component {
  render() {
    return (
      <input type="text"
        className="form-control"
        style={{
          flexGrow: '0.2',
          borderRight: 'none',
          paddingRight: '0'
        }}
        onChange={this.props.onChange}
        placeholder="+7" />)
  }
}
class Phone extends Component {
  render() {
    return (
      <input
        type="text"
        className="form-control"
        style={{
          borderLeft: 'none',
          paddingLeft: '0'
        }}
        placeholder="123 456 78 90" />
    )
  }
}



export default App;
