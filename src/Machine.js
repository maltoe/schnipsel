import React, { Component } from 'react';
import SimpleStorage from 'react-simple-storage';
import { Button } from 'nes-react';

import App from './App';

import './Machine.css';

const newGame = () => ({
  score: 0,
  questsSolved: [],
  hintsUnlocked: [],
})

const newState = {
  currentGameIndex: null,
  games: Array(3).fill(newGame()),
};

class Machine extends Component {
  state = newState;

  render() {
    const { currentGameIndex, games } = this.state;

    const currentGame = currentGameIndex !== null ? games[currentGameIndex] : null;

    return (
      <>
        <SimpleStorage parent={this} />
        <App
          currentGame={currentGame}
          saveGames={games}
          reducer={this.reducer}
        />
        <Button className="machine-reset-button" onClick={this.resetMachine}>
          Reset
        </Button>
      </>
    );
  }

  reducer = (action, payload) => {
    switch (action) {
      case 'load_game':
        this.setState({ currentGameIndex: payload });
        break;

      case 'exit_game':
        this.setState({ currentGameIndex: null });
        break;

      case 'update_game':
        this.updateGame(payload);
        break;
    }
  }

  updateGame = (payload) => {
    const { currentGameIndex } = this.state;
    let { games } = this.state;
    games[currentGameIndex] = { ...games[currentGameIndex], ...payload };
    this.setState({ games });
  }

  resetMachine = () => {
    this.setState(newState);
  }
}

export default Machine;
