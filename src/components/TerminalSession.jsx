import React from 'react';
import Terminal from 'spectacle-terminal';
import Typist from 'react-typist';
import PropTypes from 'prop-types';

export const BREAKPOINT_FORMAT = /%{(\w+)}%/;

class TerminalSession extends React.Component {
  render() {
    const { source, title, prompt, breakpoints, promptStyle, ...props } = this.props;

    const sessionCode = source.split(/\r?\n/).map((line, i) => {
      if (line.startsWith('>')) {
        return (
          <div style={{display: 'inline-flex', ...promptStyle}}>
            {prompt}
            <Typist cursor={{hideWhenDone: true, element: '█'}}>{line.slice(1)}</Typist>
            {document.dispatchEvent(new KeyboardEvent('keydown',{'key':'Shift'}))}
          </div>
        );
      }
      if (breakpoints !== undefined) {
        const match = line.match(BREAKPOINT_FORMAT);

        if (match != null && breakpoints[match[1]] !== undefined) {
          return breakpoints[match[1]]() || '';
        }
      }

      return <div>{line}</div>;
    });

    return (
      <Terminal
        title={title}
        output={sessionCode}
        {...props}
      />
    );
  }
}

TerminalSession.propTypes = {
  source: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  breakpoints: PropTypes.objectOf(PropTypes.func),
  prompt: PropTypes.string,
  promptStyle: PropTypes.string
};

export default TerminalSession;
