import React, {Component} from 'react';
import PropTypes from "prop-types";
import Flag from '../Flag/Flag';


let flagsMap = {
  "+7" : "ru",
  "+81" : "jp",
  "+86" : "cn",
  "+93" : "af",
  "+47" : "no"
};

class FlagSelector extends Component {
  onSelectFlag = (e) => {
    this.props.onSelect(e.currentTarget.getAttribute('value'));
  };

  render() {
    return (
      <div>
        <button
          className="btn btn-sm dropdown-toggle dropdown-btn"
          type="button"
          onClick={this.props.onClick}>
        </button>
        <div
          className={`dropdown-menu ${(this.props.needShowFlags && "show") || ''}`}
          style={{minWidth : "0"}}>
          {Object
            .values(flagsMap)
            .map((flag, i) =>
              (<Flag countryCode={flag}
                     key={i}
                     onClick={this.onSelectFlag}/>)
            )
          }
        </div>
      </div>
    )
  }
}

FlagSelector.propTypes = {
  needShowFlags : PropTypes.bool.isRequired
};
export default FlagSelector;