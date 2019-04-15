import React, { Component } from 'react';
import { Balloon, Button, Sprite } from 'nes-react';

import './Alert.css';

class Alert extends Component {
  static defaultProps = {
    content: 'Hello, I\'m Mario!'
  }

  render() {
    const { content } = this.props;

    return (
      <div className="alert">
        <Balloon fromLeft>
          <p>{content}</p>
          <div className="alert-actions">
            <Button>OK</Button>
          </div>
        </Balloon>
        <Sprite sprite="mario" />
      </div>
    );
  }
}

export default Alert;
