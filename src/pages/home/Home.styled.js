import styled, { keyframes } from 'styled-components';

export const HomeWrapper = styled.div`
  position: relative;
  height: 100vh;
  overflow: hidden;
`;

const moveCar = keyframes`
    0% {
    left: -100px; 
  }
  100% {
    left: 100%; 
  }
  `;

const typeIn = keyframes`
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const CarWrapper = styled.div`
  position: absolute;
  top: 27%;
  left: -100px;
  width: 300px;
  height: 300px;
  background-size: contain;
  animation: ${moveCar} 5s linear forwards;
`;

export const TextWrapper = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 24px;
  font-weight: bold;
  opacity: 0;
  animation: ${typeIn} 5s forwards, ${fadeIn} 1s 2.7s forwards;
`;
