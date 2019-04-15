import React, { Component } from 'react';
import classNames from 'classnames';

import Alert from './Alert';
import Menu from './Menu';
import Game from './Game';

import './App.css';

export const AlertState = {
  HIDDEN: 0,
  SHOWN: 1,
};

class App extends Component {
  state = {
    game: null,
    alertState: AlertState.HIDDEN,
  }

  render() {
    const { currentGame, saveGames } = this.props;
    const { alertState } = this.state;

    const overlayClasses = classNames('overlay', { 'overlay-shown': alertState === AlertState.SHOWN });

    return (
      <>
        <div className={overlayClasses}>
          <div className="screen">
            <Alert />
          </div>
        </div>

        <div className="screen">
          {currentGame === null && (
            <Menu
              saveGames={saveGames}
              onSaveGameSelect={this.handleSaveGameSelect}
            />
          )}

          {currentGame !== null && (
            <Game
              game={currentGame}
              onExitClick={this.handleExitClick}
              onGameUpdate={this.handleGameUpdate}
            />
          )}
        </div>
      </>
    );
  }

  handleSaveGameSelect = (gameIndex) => {
    const { reducer } = this.props;
    reducer("load_game", gameIndex);
  };

  handleExitClick = () => {
    const { reducer } = this.props;
    reducer("exit_game");
  };

  handleGameUpdate = (payload) => {
    const { reducer } = this.props;
    reducer('update_game', payload);
  };
}

export default App;
