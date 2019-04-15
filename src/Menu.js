import React, { Component } from 'react';

import SaveGameSelectOption from './SaveGameSelectOption';

import './Menu.css';

class Menu extends Component {
  render() {
    const { saveGames, onSaveGameSelect } = this.props;

    return (
      <div className="menu">
        <h1>Schnipseljagd</h1>

        <div className="savegame-select">
          {saveGames.map((game, idx) => (
            <SaveGameSelectOption
              game={game}
              onSaveGameSelect={() => onSaveGameSelect(idx)}
              key={idx}
              name={`#${idx + 1}`}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Menu;
