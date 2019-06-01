import React from 'react';
import { Image } from "spectacle";
import styled, { keyframes } from "styled-components";

const cubeAnimation = keyframes`
  0% {
    opacity: 0;
    transform: translate(0) rotate(0);
  }
  
  50% {
    opacity: 0.5;
  }
  
  100% {
    opacity: 0;
    transform: translate(800%, -300%) rotate(360deg);
  }
`;

const Particle = styled(Image)`
  left: ${props => props.left};
  top: ${props => props.top};
  position: absolute;
  animation: ${cubeAnimation} ${props => props.speed} linear infinite;
`;

Particle.defaultProps = {
  left: 0,
  top: 0
};

export default Particle;
