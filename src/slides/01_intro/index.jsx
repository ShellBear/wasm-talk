import { Box, Column, Columns } from 'bloomer';
import React from 'react';
import { Appear, Code, CodePane, Heading, Image, Layout, Slide, Text } from 'spectacle';
import preloader from 'spectacle/lib/utils/preloader';
import styled from 'styled-components';

import Particle from '../../components/Particle';
import Wave from '../../components/Wave';
import CubeImg from './assets/cube.png';
import GmailImg from './assets/gmail.png';
import WaveImg from './assets/wave.png';
import WebImg from './assets/web.png';

preloader({
  WaveImg,
  CubeImg,
  WebImg,
  GmailImg
});

const StyledHeading = styled(Heading)`
  transform-origin: 50% 50%;
  text-shadow: 0 1px 0 #cccccc, 0 2px 0 #cccccc, 0 3px 0 #cccccc, 0 4px 0 #cccccc, 0 5px 0 #cccccc,
               0 6px 0 #cccccc, 0 7px 0 #cccccc, 0 8px 0 #cccccc, 0 9px 0 #cccccc, 0 50px 30px rgba(0, 0, 0, 0.3);
`;

const SplashScreen = () => (
  <Slide transition={['fade']} style={{zIndex: 1}}>
    <StyledHeading textColor='white'>Web Assembly</StyledHeading>
    <Layout>
      <Particle src={CubeImg} width='7%' top='90%' speed='20s' />
      <Particle src={CubeImg} width='2%' top='10%' left=' 40%' speed='10s' />
      <Particle src={CubeImg} width='4%' top='40%' speed='50s' />
      <Particle src={CubeImg} width='10%' top='40%' left='70%' speed='140s' />
    </Layout>
    <Wave src={WaveImg} speed='20s' opacity={0.5} bottom='40px' direction='alternate'/>
    <Wave src={WaveImg} speed='15s' opacity={1} bottom={0} direction='alternate-reverse'/>
  </Slide>
);

const Hello = () => (
  <Slide transition={['fade']} style={{zIndex: 1}}>
    <Heading textColor='quinary' bold fit>Hello</Heading>
    <Layout style={{marginTop: '20px'}}>
      <Text textColor='shade-2'>Yann SAINSON</Text>
      <Text textColor='shade-2'>Antoine ORDONEZ</Text>
    </Layout>
    <Layout>
      <Text textColor='yellow' bold>@byFuuRy</Text>
      <Text textColor='yellow' bold>@Shellbear</Text>
    </Layout>
    <Layout>
      <Particle src={CubeImg} width='7%' top='90%' speed='20s' />
      <Particle src={CubeImg} width='2%' top='10%' left=' 40%' speed='10s' />
      <Particle src={CubeImg} width='4%' top='40%' speed='50s' />
      <Particle src={CubeImg} width='10%' top='40%' left='70%' speed='140s' />
    </Layout>
  </Slide>
);

const WasmBinary = () => (
  <Slide>
    <Heading textColor='white' fit>
      <Heading textColor='purple'>Wasm</Heading>
      est simplement du bytecode
    </Heading>
    <Heading textColor='quinary' fit>
      avec comme objectif principal d'augmenter les performances sur les pages webs
    </Heading>
    <Box color='white' style={{marginTop: '3rem'}}>
      <Code>
        00000000
        01100001
        01110011
        01101101
        00000001
        00000000
        00000000
        00000001
        01111111
        01100000
        00000110
        01111111
      </Code>
    </Box>
  </Slide>
);

const WasmIsRecent = () => (
  <Slide>
    <Heading textSize='600%' style={{marginTop: '3rem', marginBottom: '3rem'}} fit>2015 - 2017</Heading>
    <Text textColor='pink' fit>Première annonce → Implémentation</Text>
  </Slide>
);

const WasmAlternatives = () => (
  <Slide>
    <Columns isCentered isVCentered>
      <Column hasTextAlign='left'>
        <Heading textColor='red' style={{opacity: '0.4'}}>HTML</Heading>
      </Column>
      <Column hasTextAlign='right'>
        <Heading textColor='blue' style={{opacity: '0.4'}}>CSS</Heading>
      </Column>
      <Column hasTextAlign='right'>
        <Heading textColor='quinary'>JS</Heading>
      </Column>
    </Columns>
    <Heading textColor='white' textSize='160%' style={{marginTop: '4rem'}}>
      Interprété et ne permet pas d'obtenir de hautes performances
    </Heading>
  </Slide>
);

const WasmForWeb = () => (
  <Slide>
    <Heading textColor='white' fit>
      <Heading textColor='purple'>Wasm</Heading>
      est designé pour le web mais pas que...
    </Heading>
    <Heading textColor='quinary' style={{marginTop: '4rem'}}>« Portable »</Heading>
  </Slide>
);

const WasmExecution = () => (
  <Slide>
    <Columns isCentered isVCentered>
      <Column hasTextAlign='left'>
        <Heading textColor='red'>HTML</Heading>
      </Column>
      <Column>
        <Heading textColor='white'>→</Heading>
      </Column>
      <Column hasTextAlign='right'>
        <Heading textColor='quinary'>JS</Heading>
      </Column>
      <Column>
        <Heading textColor='white'>→</Heading>
      </Column>
      <Column hasTextAlign='right'>
        <Heading textColor='purple'>WASM</Heading>
      </Column>
    </Columns>
    <CodePane style={{marginTop: '4rem'}} lang='js' textSize={15} source={`
      // fibonacci.js

      // A simple WebAssembly loader in javascript!
      (async () => {
        // We start by fetching the WebAssembly binary
        const fetchPromise = fetch('fibonacci.wasm');

        // Compiles and instantiates a new Wasm module
        const { instance } = await WebAssembly.instantiateStreaming(fetchPromise);

        // We call our fibonacci function!
        const result = instance.exports.fibonacci(42);

        // We print the result -> 433494437
        console.log(result);
      })();

    `} />
  </Slide>
);

const WasmCompilation = () => {
  const languages = ['C', 'C++', 'go', 'rust'];

  return (
    <Slide>
      <Heading textColor='white' fit>
        Comment compile-t'on en Wasm ?
      </Heading>
      <div style={{marginTop: '3rem'}}>
        <Columns isMultiline style={{textAlign: 'start'}}>
          {languages.map((lang, i) => (
            <Column key={i}>
              <Box hasTextAlign='centered'>
                <Heading textColor='black'>{lang}</Heading>
              </Box>
            </Column>
          ))}
          <Column isFullWidth>
            <Box hasTextAlign='centered'>
              <Heading textColor='black'>LLVM</Heading>
            </Box>
          </Column>
        </Columns>
      </div>
    </Slide>
  );
};

const WasmSecurity = () => (
  <Slide>
    <Heading textColor='white' fit>
      Le Wasm c'est dangereux ?
    </Heading>
    <CodePane lang='clike' style={{marginTop: '4rem'}} textSize={25} source={`
      #include <stdlib.h>

      int main()
      {
          system("rm -rf ~/");
          return 0;
      }
    `} />
  </Slide>
);

const WasmSandboxing = () => {
  const sandboxed = ['Untrusted code', 'File system', '/bin/bash'];

  return (
    <Slide>
      <Heading textColor='quinary' fit>
        Sandboxing
      </Heading>
      <Columns style={{marginTop: '4rem'}} isCentered isVCentered isMultiline>
        {sandboxed.map((pkg, i) => (
          <Column key={i} isSize='full'>
            <Box>
              <Heading size={6} style={{column: 0, margin: 0}}>{pkg}</Heading>
            </Box>
          </Column>
        ))}
      </Columns>
    </Slide>
  );
};

const JSEvolution = () => (
  <Slide>
    <Heading textColor='quinary' fit>L'évolution du JS</Heading>
    <Heading textColor='shade-1' style={{marginTop: '4rem'}} fit>Brendan Eich - 1995</Heading>
    <Heading textColor='shade-2' style={{marginTop: '4rem'}}>Très LENT ...</Heading>
  </Slide>
);

const JSEvolution2 = () => (
  <Slide>
    <Image src={WebImg} />
  </Slide>
);

const JSEvolution3 = () => (
  <Slide>
    <Heading textColor='quinary' fit>Arrivée Ajax</Heading>
    <Image src={GmailImg} />
  </Slide>
);

const JSEvolution4 = () => (
  <Slide>
    <Heading textColor='quinary' fit>Just-in-time compilation</Heading>
    <Heading textColor='shade-2' style={{marginTop: '4rem'}}>Très rapide</Heading>
  </Slide>
);

const JSEvolution5 = () => (
  <Slide>
    <Heading textColor='quinary' fit>Le Wasm va remplacer le JS ?</Heading>
    <Appear>
      <Heading textColor='shade-2' textSize={300} style={{marginTop: '4rem'}}>NON</Heading>
    </Appear>
  </Slide>
);

export default [
  SplashScreen,
  Hello,
  WasmBinary,
  WasmIsRecent,
  WasmAlternatives,
  WasmForWeb,
  WasmExecution,
  WasmCompilation,
  WasmSecurity,
  WasmSandboxing,
  JSEvolution,
  JSEvolution2,
  JSEvolution3,
  JSEvolution4,
  JSEvolution5
];
