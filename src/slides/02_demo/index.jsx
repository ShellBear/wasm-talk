import React from 'react';
import { Slide, CodePane } from 'spectacle';
import TerminalSession from '../../components/TerminalSession';

const CodeExample = () => (
  <Slide bgColor='quintary'>
    <TerminalSession title='wasm-talk' prompt='> ' showFirstEntry={true} source={require('./assets/build/build.log.example')} breakpoints={{
      vim: () => <CodePane textSize={40} lang='clike' source={require('./assets/build/hello.c.example')} />
    }} />
  </Slide>
);

export default [
  CodeExample
];
