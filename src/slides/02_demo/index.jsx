import 'prismjs/components/prism-c';
import 'prismjs/themes/prism-solarizedlight.css';

import { Column, Columns } from 'bloomer';
import React from 'react';
import { CodePane, Heading, Image, Slide, Text } from 'spectacle';
import CodeSlide from 'spectacle-code-slide';
import Terminal from 'spectacle-terminal';
import preloader from 'spectacle/lib/utils/preloader';

import Command from '../../components/Command';
import Particle from '../../components/Particle';
import QTDesktop from './assets/qt-desktop.gif';
import QTLogo from './assets/qt-logo.png';
import QTWasm from './assets/qt-webassembly.gif';

preloader({
  QTDesktop,
  QTWasm,
  QTLogo
});

const BuildLog = [
  <Command output={(
    <CodePane textSize={40} lang='c' source={require('./assets/source/hello.c.example')} />
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

const QTDemo = () => (
  <Slide style={{zIndex: 1}} transition={['zoom', 'fade']}>
    <Heading textColor='#41cd52'>Slate</Heading>
    <Text textColor='white'>Pixel Art Editor</Text>
    <Columns isCentered isVCentered>
      <Column isSize='1/3'>
        <Image src={QTDesktop} />
      </Column>
      <Column isSize='2/3'>
        <Image src={QTWasm} />
      </Column>
    </Columns>
    <Columns isCentered isVCentered>
      <Column isSize='1/3'>
        <Text textColor='white' bold>Windows</Text>
      </Column>
      <Column isSize='2/3'>
        <Text textColor='white' bold>WebAssembly</Text>
      </Column>
    </Columns>
    <Particle src={QTLogo} width='7%' top='90%' speed='20s'/>
    <Particle src={QTLogo} width='2%' top='10%' left=' 40%' speed='10s'/>
    <Particle src={QTLogo} width='3%' top='20%' left='30%' speed='40s'/>
    <Particle src={QTLogo} width='4%' top='40%' speed='50s'/>
    <Particle src={QTLogo} width='10%' top='40%' left='70%' speed='140s'/>
  </Slide>
);

const HelloWorldCode = () => (
  <Slide bgColor='quintary' controlColor='transparent'>
    <Terminal
      title='wasm-talk'
      output={BuildLog}
      showFirstEntry
      isMaximized
    />
  </Slide>
);

const HelloWorldPreview = () => (
  <Slide controlColor='transparent'>
    <Terminal isMaximized showFirstEntry title='Chrome - Emscripten-Generated Code' output={[
      <iframe
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: 'white',
          position: 'absolute',
          marginTop: '-15px',
          marginLeft: '-15px'
        }}
        title='hello-world-preview'
        src={process.env.PUBLIC_URL + '/examples/hello-world/hello.html'}
      />
    ]}>
    </Terminal>
  </Slide>
);

const EvenOddCode = () => (
  <CodeSlide
    transition={[]}
    lang='c'
    bgColor='primary'
    code={require('./assets/source/even-odd.c.example')}
    ranges={[
      { loc: [0, 3], title: 'Pair ou impair ?' },
      { loc: [4, 5], title: 'Boucle de 0 à 42' },
      { loc: [5, 7], title: 'Si le nombre est divisible par 2 = pair' },
      { loc: [7, 9], title: 'Sinon il est impair' },
      { loc: [0, 12]}
    ]}
  />
);

const EvenOddPreview = () => (
  <Slide controlColor='transparent'>
    <Terminal isMaximized showFirstEntry title='Chrome - Emscripten-Generated Code' output={[
      <iframe
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: 'white',
          position: 'absolute',
          marginTop: '-15px',
          marginLeft: '-15px'
        }}
        title='pair-impair-preview'
        src={process.env.PUBLIC_URL + '/examples/even-odd/even-odd.html'}
      />
    ]}>
    </Terminal>
  </Slide>
);

export default [
  QTDemo,
  HelloWorldCode,
  HelloWorldPreview,
  EvenOddCode,
  EvenOddPreview
];
