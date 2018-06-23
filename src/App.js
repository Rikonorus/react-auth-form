import React, {Component} from 'react';
import './App.css';

import PhoneNumberInput from './components/PhoneNumberInput/PhoneNumberInput';
import ProfessionInput from "./components/ProfessionInput/ProfessionInput";

class App extends Component {
  state = {
    name : '',
    surname : '',
    profession : '',
  };
  onChangeName = (e) => {
    this.setState({
      name : e.currentTarget.value
    })
  };
  onChangeSurname = (e) => {
    this.setState({
      surname : e.currentTarget.value
    })
  };
  onChangeProfession = (value) => {
    this.setState({
      profession : value
    })
  };

  render() {
    return (
      <form style={{
        margin : '150px auto',
        width : '320px'
      }}>
        <p className="text-center"><strong>Зарегистрируйтесь</strong> и начните продавать услуги через интернет сегодня</p>
        <div className="form-row">
          <div className="form-group col-md-6 form__user-name">
            <label htmlFor="inputName" className="text-secondary form__label">ИМЯ</label>
            <input type="text"
                   className="form-control"
                   id="inputName"
                   placeholder="Сергей"
                   onChange={this.onChangeName}
                   value={this.state.name}
            />
          </div>
          <div className="form-group col-md-6 form__user-surname">
            <label htmlFor="inputSurname" className="text-secondary form__label">ФАМИЛИЯ</label>
            <input type="text"
                   className="form-control"
                   id="inputSurname"
                   placeholder="Миргород"
                   onChange={this.onChangeSurname}
                   value={this.state.surname}
            />
          </div>
          <ProfessionInput value={this.state.profession}
                           onChange={this.onChangeProfession}/>
        </div>
        <PhoneNumberInput/>
        <button type="submit" className="btn btn-primary btn-block sing-up-btn">Зарегистрироваться</button>
      </form>
    );
  }
}

export default App;
