import React, { Component } from 'react';
import { Balloon, Button, Sprite } from 'nes-react';

import './Speech.css';

class Speech extends Component {
  static defaultProps = {
    withOK: false,
    onOKClick: null,
  }

  render() {
    const {
      children,
      withOK,
      onOKClick,
    } = this.props;

    return (
      <div className="speech">
        <Balloon fromLeft>
          <p>{children}</p>
          <div className="speech-actions">
            {withOK && (
              <Button onClick={onOKClick}>OK</Button>
            )}
          </div>
        </Balloon>
        <Sprite sprite="mario" />
      </div>
    );
  }
}

export default Speech;
