import React from 'react';
import { Slide, Heading, Text, Layout } from 'spectacle';
import preloader from 'spectacle/lib/utils/preloader';

import Wave from '../../components/Wave';
import Particle from '../../components/Particle';

import WaveImg from './assets/wave.png';
import CubeImg from './assets/cube.png';

preloader({
  WaveImg,
  CubeImg
});

const SplashScreen = () => (
  <Slide bgColor='primary' style={{zIndex: 1}}>
    <Heading textColor='shade-1' bold fit>Web Assembly</Heading>
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
