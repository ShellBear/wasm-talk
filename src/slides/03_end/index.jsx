import React from 'react';
import { Slide, Heading, Text, Code, } from 'spectacle';
import styled from 'styled-components';
import Terminal from 'spectacle-terminal';
import Loading from 'react-loading';
import Typist from 'react-typist';

const Container = styled.div`
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: space-between;
  
  > * {
    padding: 5rem;
  }
`;

class FakeClone extends React.Component {
  state = {
    finishedTyping: false
  };


  async onFinishedTyping() {
    this.setState({
      finishedTyping: true
    });
  }

  render() {
    return (
      <Terminal title='want to get source code?' showFirstEntry={true} output={[
        <div>
          <Typist onTypingDone={() => this.onFinishedTyping()} cursor={{hideWhenDone: true, element: '█'}}>
            > git clone <Code textColor='senary' fit>https://github.com/ShellBear/wasm-talk</Code>
          </Typist>
          {this.state.finishedTyping && (
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Loading type='bars' color='#fff' height={60} width={60} />
              <span style={{ marginLeft: '1rem' }}>Cloning into 'wasm-talk'...</span>
            </div>
          )}
        </div>
      ]}/>
    );
  }
}

const EndingSlide = () => (
  <Slide bgColor={'secondary'}>
    <Heading textColor='#FAB05E'>Thank you for your attention</Heading>
    <Container>
        <Text textColor='shade-1' fit>The slide source code and examples are available at:</Text>
    </Container>
    <FakeClone />
  </Slide>
);

export default [
  EndingSlide
];
