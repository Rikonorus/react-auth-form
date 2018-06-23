import React, {Component} from 'react';
import ProfessionsList from '../ProfessionList/ProfessionList';

class ProfessionInput extends Component {
  state = {
    profession : this.props.value,
    professionSelected : true
  };

  handleChangeProfession = (e) => {
    this.setState({
      profession : e.currentTarget.value,
      professionSelected : false
    });
    this.props.onChange(e.currentTarget.value);
  };
  selectProfession = (e) => {
    this.setState({
      profession : e.currentTarget.innerText,
      professionSelected : true
    });
    this.props.onChange(e.currentTarget.innerText);
  };

  render() {
    return (
      <div className="form-group col-lg-12">
        <label htmlFor="inputProfession" className="text-secondary form__label">ПРОФЕССИЯ</label>
        <input type="text"
               className="form-control"
               id="inputProfession"
               onChange={this.handleChangeProfession}
               value={this.state.profession}
               tabIndex="3"/>
        {this.state.profession.length !== 0
        && !this.state.professionSelected
        && <ProfessionsList value={this.state.profession}
                            clickHandler={this.selectProfession}/>}
      </div>
    )
  }
}

export default ProfessionInput;