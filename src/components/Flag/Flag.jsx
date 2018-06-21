import React, { Component } from 'react';
import './flags.css';

let flagsMap = {
  "+7": "ru",
  "+81": "jp",
  "+86": "cn",
  "+93": "af",
  "+47": "no"
};

class List extends Component {
  state = {
    showFlags: false
  }
  handlerClick = (e) => {
    debugger;
    this.setState({
      showFlags: !this.state.showFlags
    })
  }
  selectCountry = (e) => {

  }
  render() {
    debugger;
    return (
      <div className="dropdown" style={{ display: 'flex' }}>
        <Flag countryISO={"ru"} onClick={this.handlerClick} />
        <button className="btn btn-sm dropdown-toggle dropdown-btn" type="button" onClick={this.handlerClick}>
        </button>
        <div className={`dropdown-menu ${(this.state.showFlags && "show") || ''}`} style={{ minWidth: "0" }}>
          {Object.values(flagsMap).map((flag, i) => <Flag countryISO={flag} key={i} onclick={this.selectCountry}/>)}
        </div>
      </div>
        )
      }
    }
    
const Flag = (props) => {
  return <div className={`flag flag-${props.countryISO}`} onClick={props.onClick} />
}
export default List;
