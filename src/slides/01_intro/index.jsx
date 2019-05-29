import React from 'react';
import { Slide, Heading, Image, Text, Layout } from 'spectacle';
import preloader from 'spectacle/lib/utils/preloader';
import styled, { keyframes } from 'styled-components';

import WasmLogo from './assets/webassembly.png';
import Wave from './assets/wave.png';

preloader({
  WasmLogo,
  Wave
});

const scrollAnimation = keyframes`
  from {
    transform: translate(0, 0);
  }
  
  to {
    transform: translate(-33.33%, 0);
  }
`;

const glowingAnimation = keyframes`
  from {
    box-shadow: 0 0 30px #654ff0; 
  }
  
  to {
    box-shadow: 0 0 220px #654ff0;
  }
`;


const StyledLogo = styled(Image)`
  animation: ${glowingAnimation} 5s ease infinite alternate;
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
  
  animation: ${scrollAnimation} ${props => props.speed} ease infinite ${props => props.direction};
`;

const SplashScreen = () => (
  <Slide bgColor='primary'>
    <Heading textColor='shade-1' bold fit>Web Assembly</Heading>
    <StyledLogo id='logo' src={WasmLogo} width='40%' />
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
