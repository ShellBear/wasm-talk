import React from 'react';
import { Slide, Heading, Image, Text, Layout } from 'spectacle';
import preloader from "spectacle/lib/utils/preloader";
import styled, { keyframes } from 'styled-components';

import WasmLogo from './assets/wasm-ferris.png';
import Wave from './assets/wave.png';

preloader({
  WasmLogo,
  Wave
});

const rotate = keyframes`
  from {
    transform: rotate(15deg);
  }

  to {
    transform: rotate(-15deg);
  }
`;

const slide = keyframes`
  from {
    transform: translate(0, 0);
  }
  
  to {
    transform: translate(-33.33%, 0);
  }
`;

const StyledLogo = styled(Image)`
  animation: ${rotate} 2s ease 0s alternate infinite;
`;

const StyledWave = styled.div`
  will-change: transform;
  width: 200%;
  height: 126px;
  color: red;
  left: 0;
  bottom: ${props => props.bottom};
  position: absolute;
  opacity: ${props => props.opacity};
  background-image: url(${Wave});
  
  animation: ${slide} ${props => props.speed} ease infinite ${props => props.direction};
`;

const SplashScreen = () => (
  <Slide bgColor='primary'>
    <Heading textColor='shade-1' bold fit>Web Assembly</Heading>
    <StyledLogo alt='wasm' src={WasmLogo} width={600} padding='3rem' />
    <StyledWave speed='20s' opacity={0.5} bottom='40px' direction='alternate' />
    <StyledWave speed='15s' opacity={1} bottom={0} direction='alternate-reverse' />
  </Slide>
);

const Hello = () => (
  <Slide bgColor='thirdary'>
    <Heading textColor='quinary' bold fit>Hello</Heading>
    <Layout style={{marginTop: '20px'}}>
      <Text textColor='shade-2'>Yann SAINSON</Text>
      <Text textColor='shade-2'>Antoine ORDONEZ</Text>
    </Layout>
    <Layout>
      <Text textColor='yellow' bold>@byFuuRy</Text>
      <Text textColor='yellow' bold>@Shellbear</Text>
    </Layout>
  </Slide>
);


export default [
  SplashScreen,
  Hello
];
