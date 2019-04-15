import React, { Component } from 'react';

import Header from './Header';
import Hint from './Hint';
import Quest from './Quest';
import QuestSelect from './QuestSelect';

import quests from './quests';

const GameState = {
  IN_QUEST_SELECT: 0,
  IN_HINT: 1,
  IN_QUEST: 2,
};

const solved = (game, quest) => (game.questsSolved.includes(quest.title));
const unlocked = (game, quest) => (game.hintsUnlocked.includes(quest.title));

class Game extends Component {
  state = {
    gameState: GameState.IN_QUEST_SELECT,
    quest: null,
    withBackButton: false,
  }

  render() {
    const {
      game,
      onExitClick,
    } = this.props;

    const { gameState, quest, withBackButton  } = this.state;

    return (
      <div>
        <Header
          game={game}
          quest={quest}
          onExitClick={onExitClick}
          onQuestsClick={this.handleQuestsClick}
          onBackClick={this.handleBackClick}
          onHintClick={this.handleHintClick}
          withQuestsButton={gameState === GameState.IN_QUEST}
          withHintButton={gameState === GameState.IN_QUEST && quest.hint}
          withBackButton={withBackButton}
        />

        {gameState === GameState.IN_QUEST_SELECT && (
          <QuestSelect
            game={game}
            onQuestSelect={this.handleQuestSelect}
          />
        )}

        {gameState === GameState.IN_HINT && (
          <Hint
            quest={quest}
            onHintUnlocked={() => this.handleGameEvent('hintsUnlocked', -10)}
            unlocked={unlocked(game, quest)}
          />
        )}

        {gameState === GameState.IN_QUEST && (
          <Quest
            quest={quest}
            onQuestSolved={this.handleQuestSolved}
            solved={solved(game, quest)}
          />
        )}
      </div>
    );
  }

  handleQuestsClick = () => {
    this.setState({
      withBackButton: true,
      gameState: GameState.IN_QUEST_SELECT,
    });
  };

  handleQuestSelect = (questIndex) => {
    this.setState({
      withBackButton: false,
      quest: quests[questIndex],
      gameState: GameState.IN_QUEST,
    });
  };

  handleHintClick = () => {
    this.setState({
      withBackButton: true,
      gameState: GameState.IN_HINT,
    });
  };

  handleBackClick = () => {
    this.setState({
      withBackButton: false,
      gameState: GameState.IN_QUEST,
    });
  };

  handleQuestSolved = () => {
    const { quest } = this.state;

    this.handleGameEvent('questsSolved', quest.loot);

    this.setState({
      withBackButton: false,
      gameState: GameState.IN_QUEST_SELECT,
    });
  }

  handleGameEvent = (attr, deltaScore) => {
    const { game, onGameUpdate } = this.props;
    const { quest } = this.state;

    const newState = [
      ...game[attr],
      quest.title,
    ]

    onGameUpdate({ score: game.score + deltaScore, [attr]: newState });
  };
}

export default Game;
