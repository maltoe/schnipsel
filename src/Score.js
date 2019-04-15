import React, { Component } from 'react';
import { Icon } from 'nes-react';

import './Score.css';

class Score extends Component {
  render() {
    const { score } = this.props;

    return (
      <div className="score">
        <Icon icon="star" className="score-icon" large />
        <span className="score-text">{score}</span>
      </div>
    );
  }
}

export default Score;
