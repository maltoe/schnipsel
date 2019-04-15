import React, { Component } from 'react';
import { Button } from 'nes-react';

import quests from './quests';

import './QuestSelect.css';

const questSolved = (questTitle, game) => (game.questsSolved.includes(questTitle));
const questEnabled = (quest, game) => (quest.depends === null || questSolved(quest.depends, game));

class QuestSelect extends Component {
  render() {
    const { game, onQuestSelect } = this.props;

    return (
      <div className="quest-select">
        {quests.map((quest, idx) => (
          <Button
            key={quest.title}
            className="quest-select-button"
            disabled={!questEnabled(quest, game)}
            primary={quest.main && questEnabled(quest, game)}
            onClick={() => onQuestSelect(idx)}
          >
            {quest.title}
          </Button>
        ))}
      </div>
    );
  }
}

export default QuestSelect;
