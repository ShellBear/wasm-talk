import React from 'react';
import Typist from 'react-typist';
import PropTypes from 'prop-types';

class Command extends React.Component {
  state = { finished: false };

  onFinished() {
    this.setState({ finished: true });
  }

  render() {
    return (
      <div>
        <Typist
          onTypingDone={() => this.onFinished()}
          cursor={{hideWhenDone: true, element: '█'}}
        >
          {this.props.children}
        </Typist>
        <div>
          {this.state.finished ? this.props.output : '\n'}
        </div>
      </div>
    )
  }
}

Command.propTypes ={
  output: PropTypes.any
};

export default Command;
