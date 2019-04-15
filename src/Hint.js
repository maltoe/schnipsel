import React, { Component } from 'react';
import { Icon } from 'nes-react';

import Speech from './Speech';

class Hint extends Component {
  state = {
    unlocked: false,
  }

  componentDidMount() {
    const { unlocked } =  this.props;
    this.setState({ unlocked });
  }

  render() {
    const { quest } = this.props;
    const { unlocked } = this.state;

    return (
      <>
        {!unlocked && (
          <Speech className="hint-unlock-dialog" withOK onOKClick={this.handleUnlock}>
            <p>Ihr wisst schon nicht weiter?</p>
            <p>Ihr bekommt einen Tipp, aber das kostet <Icon icon="star" /> 50!</p>
          </Speech>
        )}

        {unlocked && (
          <Speech className="hint-dialog">
            {quest.hint}
          </Speech>
        )}
      </>
    );
  }

  handleUnlock = () => {
    const { onHintUnlocked } = this.props;
    this.setState({ unlocked: true });
    onHintUnlocked();
  }
}

export default Hint;
