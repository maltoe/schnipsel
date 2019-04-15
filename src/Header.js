import React, { Component } from 'react';
import { Button, Container, Icon } from 'nes-react';

import './Header.css';

class Header extends Component {
  render() {
    const {
      game,
      onExitClick,
      onQuestsClick,
      onHintClick,
      onBackClick,
      withQuestsButton,
      withHintButton,
      withBackButton,
    } = this.props;

    return (
      <Container id="statusbar">
        <div className="nav">
          <Button
            className="nav-button"
            onClick={onExitClick}
            warning
          >
            Exit
          </Button>

          {withQuestsButton && (
            <Button
              className="nav-button"
              onClick={onQuestsClick}
            >
              Quests
            </Button>
          )}

          {withHintButton && (
            <Button
              className="nav-button"
              onClick={onHintClick}
            >
              Hint
            </Button>
          )}

          {withBackButton && (
            <Button
              className="nav-button"
              onClick={onBackClick}
            >
              Back
            </Button>
          )}
        </div>
        <div className="score">
          <Icon icon="star" className="score-icon" large />
          <span className="score-text">{game.score}</span>
        </div>
      </Container>
    );
  }
}

export default Header;
