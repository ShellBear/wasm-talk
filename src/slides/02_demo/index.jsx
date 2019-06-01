import React from 'react';
import { Slide, CodePane } from 'spectacle';
import Terminal from 'spectacle-terminal';
import Command from '../../components/Command';

const BuildLog = [
  <Command output={(
    <CodePane textSize={40} lang='clike' source={require('./assets/build/hello.c.example')} />
  )}>
    > vim hello.c
  </Command>,
  <Command output={'hello.c'}>
    > ls
  </Command>,
  <Command>
    > emcc hello.c -s WASM=1 -o hello.html
  </Command>,
  <Command output={'hello.c  hello.html  hello.js  hello.wasm'}>
    > ls
  </Command>,
  <Command output={'hello.wasm: WebAssembly (wasm) binary module version 0x1 (MVP)'}>
    > file hello.wasm
  </Command>,
];

const CodeExample = () => (
  <Slide bgColor='quintary'>
    <Terminal
      title='wasm-talk'
      showFirstEntry={true}
      output={BuildLog}
    />
  </Slide>
);

export default [
  CodeExample
];
