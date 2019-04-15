import React, { Component } from 'react';
import { Button, Container } from 'nes-react';

import Score from './Score';

class SaveGameSelectOption extends Component {
  render() {
    const { game, name, onSaveGameSelect } = this.props;

    return (
      <Button
        className="savegame-select-option"
        onClick={() => onSaveGameSelect(game)}
      >
        <Container rounded>
          <h2>{name}</h2>
        </Container>
        {game.score !== 0 && (
          <Score score={game.score} />
        )}
        {game.score === 0 && (
          <p>New Game</p>
        )}
      </Button>
    );
  }
}

export default SaveGameSelectOption;
