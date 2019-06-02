import React from 'react';
import { Slide, Heading, Text, Layout } from 'spectacle';
import preloader from 'spectacle/lib/utils/preloader';
import styled from 'styled-components';

import Wave from '../../components/Wave';
import Particle from '../../components/Particle';

import WaveImg from './assets/wave.png';
import CubeImg from './assets/cube.png';

preloader({
  WaveImg,
  CubeImg
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

export default [
  SplashScreen,
  Hello
];
