import React from 'react';
import { Slide, Heading, BlockQuote, Quote, Cite, Appear, Layout, Text, Anim, Fill } from 'spectacle';
import preloader from 'spectacle/lib/utils/preloader';
import styled, { keyframes } from 'styled-components';
import { Box, Columns, Column } from 'bloomer';
import Terminal from 'spectacle-terminal';

import Command from '../../components/Command';
import Particle from '../../components/Particle';

import WapmLogo from './assets/wapm-logo.png';
import WasmerLogo from './assets/wasmer-logo.png';


preloader({
  WapmLogo,
  WasmerLogo
});

const Usage = () => (
  <Slide bgColor='quinary' transition={['slide', 'fade']}>
    <BlockQuote>
      <Quote>
        While WebAssembly is designed to run on the Web, it is also desirable for it to be able to execute well in other environments.
      </Quote>
      <Cite>webassembly.org</Cite>
    </BlockQuote>
  </Slide>
);

const textPopUpTop = keyframes`
  from {
    transform: translateY(0);
    transform-origin: 50% 50%;
    text-shadow: none;
  }
  to {
    transform: translateY(-50px);
    transform-origin: 50% 50%;
    text-shadow: 0 1px 0 #cccccc, 0 2px 0 #cccccc, 0 3px 0 #cccccc, 0 4px 0 #cccccc, 0 5px 0 #cccccc,
                 0 6px 0 #cccccc, 0 7px 0 #cccccc, 0 8px 0 #cccccc, 0 9px 0 #cccccc, 0 50px 30px rgba(0, 0, 0, 0.3);
  }
`;

const loopTextAnimation = keyframes`
  from {
    transform: translateY(-50px);
  }
  
  to {
    transform: translateY(-30px);
  }
`;

const SyledHeading = styled(Heading)`
  animation: ${textPopUpTop} 5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both,
             ${loopTextAnimation} 4s ease infinite alternate;
  animation-delay: 0s, 5s;
`;

const Wasmer = () => {
  const packages = ['sqlite', 'nginx', 'lua'];

  return (
    <Slide transition={['slide', 'fade']}>
      <Appear>
        <SyledHeading textColor='white'>Wasmer</SyledHeading>
      </Appear>
      <Anim
        easing={'cubic'}
        transitionDuration={500}
        fromStyle={{transform: 'translateY(40px) scale(.8)', opacity: 0}}
        toStyle={[{transform: 'translateY(20px) scale(1)', opacity: 1}]}
      >
        <div>
          <Columns isCentered={true} isVCentered={true}>
            {packages.map((pkg, i) => (
              <Column key={i}>
                <Box>
                  <Layout style={{alignItems: 'center', justifyContent: 'center'}}>
                    <Heading size={6} style={{column: 0, margin: 0}}>{pkg}</Heading>
                    <Text textColor='shade-3' style={{column: 0, margin: 0}}>.wasm</Text>
                  </Layout>
                </Box>
              </Column>
            ))}
          </Columns>
        </div>
      </Anim>
      <Appear>
        <Fill>
          <Terminal style={{zIndex: 10}} output={[
            <Command output={'Running Nginx on localhost:8080\nPress Ctrl-C to stop...'}>
              > wasmer run nginx.wasm
            </Command>
          ]}/>
        </Fill>
      </Appear>
      <Particle src={WasmerLogo} width='7%' top='90%' speed='20s'/>
      <Particle src={WasmerLogo} width='2%' top='10%' left=' 40%' speed='10s'/>
      <Particle src={WasmerLogo} width='3%' top='20%' left='30%' speed='40s'/>
      <Particle src={WasmerLogo} width='4%' top='40%' speed='50s'/>
      <Particle src={WasmerLogo} width='10%' top='40%' left='70%' speed='140s'/>
    </Slide>
  );
};

export default [
  Usage,
  Wasmer
];
