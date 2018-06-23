import React, {Component} from 'react';
import professions from '../../serverData/Professions';

class ProfessionList extends Component {
  render() {
    return (
      <ul className="list-group">
        {professions
          .filter(prof => prof.toUpperCase().indexOf(this.props.value.toUpperCase()) === 0)
          .map((prof, i) => (
            <li className="list-group-item"
                key={i}
                onClick={this.props.clickHandler}>
              {<strong>{prof.slice(0, this.props.value.length)}</strong>}
              {prof.slice(this.props.value.length)}
            </li>
          ))}
      </ul>
    )
  }
}

export default ProfessionList;