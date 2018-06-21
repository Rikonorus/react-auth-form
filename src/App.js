import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Flag from './components/Flag/Flag';
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
      professionSelected : true
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
              && <ProfessionsList value={this.state.profession} clickHandler={this.selectProfession}/>}
          </div>
        </div>
        {/* <div className="form-group col-md-4"> */}
        <label htmlFor="inputProfession" className="text-secondary form__label">ТЕЛЕФОН</label>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon3">
              <Flag />
            </span>
          </div>
          <input type="text" className="form-control" placeholder="+7 123 456 78 90" />
        </div>
        {/* </div> */}
        <button type="submit" className="btn btn-primary btn-block sing-up-btn">Зарегистрироваться</button>
      </form>
    );
  }
}

export default App;
