import styled, { keyframes } from "styled-components";

const scrollAnimation = keyframes`
  from {
    transform: translate(0, 0);
  }
  
  to {
    transform: translate(-33.33%, 0);
  }
`;

const Wave = styled.div`
  will-change: transform;
  width: 200%;
  height: 126px;
  color: red;
  left: 0;
  bottom: ${props => props.bottom};
  position: absolute;
  opacity: ${props => props.opacity};
  background-image: url(${props => props.src});
  
  animation: ${scrollAnimation} ${props => props.speed} ease infinite ${props => props.direction};
`;

Wave.defaultProps = {
  bottom: 0,
  opacity: 1
};

export default Wave;
