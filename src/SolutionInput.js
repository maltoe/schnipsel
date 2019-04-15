import React, { Component } from 'react';
import { Button, TextInput } from 'nes-react';

import Score from './Score';

import './SolutionInput.css';

class SolutionInput extends Component {
  state = {
    correct: false,
  }

  render() {
    const { quest, onCorrectSolution, solved } = this.props;
    const { label, loot, solutions } = quest;
    const { correct } = this.state;

    const placeholder = solutions[0].toString().replace(/[\w]/gi, '_');

    return (
      <div className="solution">
        <TextInput
          label={label}
          placeholder={placeholder}
          onChange={this.handleInputChange}
          success={correct}
          className="solution-input"
        />

        <Button
          onClick={onCorrectSolution}
          disabled={!correct && !solved}
          primary={correct && !solved}
          className="solution-loot-button"
        >
          {solved && (
            <span>Looted</span>
          )}
          {!solved && (
            <Score score={loot} />
          )}
        </Button>
      </div>
    );
  }

  handleInputChange = (e) => {
    const solution = e.target.value;
    const { quest: { solutions } } = this.props;

    const correct = solutions.map((s) => s.toUpperCase()).includes(solution.toUpperCase());

    this.setState({ correct });
  };
}

export default SolutionInput;
