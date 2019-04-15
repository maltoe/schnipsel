import React, { Component } from 'react';
import { Container } from 'nes-react';

import SolutionInput from './SolutionInput';

import './Quest.css';

class Quest extends Component {
  render() {
    const { quest, solved, onQuestSolved } = this.props;
    console.log('Quest', solved);

    return (
      <div className="quest">
        <Container className="quest-intro-container" rounded>
          <div className="quest-intro-scroll">
            <h1>{quest.title}</h1>
            <p className="quest-intro">{quest.intro}</p>
          </div>
        </Container>
        {!solved && (
          <div className="quest-actions">
            <SolutionInput
              quest={quest}
              onCorrectSolution={onQuestSolved}
            />
          </div>
        )}
        {solved && (
          <Container rounded>
            Quest complete.
          </Container>
        )}
      </div>
    );
  }
}

export default Quest;
