import React from 'react';
import Loading from 'react-loading';
import { Code, Heading, Layout, Slide, Text } from 'spectacle';
import Terminal from 'spectacle-terminal';
import styled from 'styled-components';

import Command from '../../components/Command';

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

const PresentationSlide = () => (
  <Slide>
    <Heading textColor='pink' fit>Dessert, un projet à suivre...</Heading>
    <Heading textColor='shade-1' style={{marginTop: '3rem', marginBottom: '3rem'}}>EIP Epitech</Heading>
    <Code textColor='senary'>https://github.com/dessert-wasm</Code>
  </Slide>
);

const EndingSlide = () => (
  <Slide bgColor={'secondary'}>
    <Heading textColor='#FAB05E'>Thank you for your attention</Heading>
    <Container>
      <Text textColor='shade-1' fit>The source code of this presentation is available at:</Text>
    </Container>
    <Terminal title='want to get source code?' showFirstEntry output={[
      <Command output={(
        <Layout style={{alignItems: 'center'}}>
          <Loading type='bars' color='#fff' height={60} width={60} />
          <span style={{marginLeft: '1rem'}}>Cloning into 'wasm-talk'...</span>
        </Layout>
      )}>
        > git clone <Code textColor='senary' fit>https://github.com/ShellBear/wasm-talk</Code>
      </Command>
    ]}/>
  </Slide>
);

export default [
  PresentationSlide,
  EndingSlide
];
