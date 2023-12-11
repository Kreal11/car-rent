import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const HomeWrapper = styled.div`
  position: relative;
  min-height: 100vh;
  overflow: hidden;
`;

export const BgImage = styled.img`
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  filter: blur(15px);
  animation: ${fadeIn} 10s ease-in;
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

export const CarWrapper = styled.div`
  position: absolute;
  top: 20%;
  left: -100px;
  width: 400px;
  height: auto;
  background-size: contain;
  animation: ${moveCar} 7s linear forwards;
`;

export const TextHeader = styled.h1`
  max-width: 1200px;
  position: absolute;
  text-align: center;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 70px;
  font-weight: 600;
  color: #fdfdfe;
  text-shadow: 1px 1px 1px #a4c4da, 1px 2px 1px #a4c4da, 1px 3px 1px #a4c4da,
    1px 4px 1px #a4c4da, 1px 5px 1px #a4c4da, 1px 6px 1px #a4c4da,
    1px 10px 5px rgba(164, 196, 218, 0.5),
    1px 15px 10px rgba(164, 196, 218, 0.4),
    1px 20px 30px rgba(164, 196, 218, 0.3),
    1px 25px 50px rgba(164, 196, 218, 0.2);
  opacity: 0;
  animation: ${typeIn} 6.5s forwards, ${fadeIn} 1s 3.8s forwards;

  span {
    color: #3470ff;
  }

  h2 {
    display: flex;
    justify-content: center;
    text-align: center;
    font-size: 50px;
  }
`;

export const OfferHeader = styled.h2`
  margin-top: 24px;
  text-align: center;
  font-size: 50px;
  color: #3470ff;
  text-transform: uppercase;
  text-shadow: 1px 1px 1px #a4c4da, 1px 2px 1px #a4c4da, 1px 3px 1px #a4c4da,
    1px 4px 1px #a4c4da, 1px 5px 1px #a4c4da, 1px 6px 1px #a4c4da,
    1px 10px 5px rgba(164, 196, 218, 0.5),
    1px 15px 10px rgba(164, 196, 218, 0.4),
    1px 20px 30px rgba(164, 196, 218, 0.3),
    1px 25px 50px rgba(164, 196, 218, 0.2);
`;

export const ServicesList = styled.ul`
  list-style: none;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 30px 0;

  li {
    display: flex;
    padding: 14px 28px;
    justify-content: center;
    align-items: center;
    gap: 8px;
    border-radius: 35px;
    background: #f9f9f9;
    font-size: 24px;
  }
`;

export const AdvantagesSection = styled.section`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 0 auto;
  margin-bottom: 60px;
`;

export const AdvantageItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 35px;
  background: #e0ecf4;
  flex: 1;
  margin: 20px;
  padding: 20px;
  text-align: center;

  h3 {
    font-size: 24px;
    margin-bottom: 10px;
  }

  p {
    font-size: 16px;
  }
`;

export const CarBrandsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, 100px);
  grid-template-rows: repeat(auto-fit, 100px);
  /* column-gap: 120px; */
  /* row-gap: 5px; */
  justify-content: space-between;
  padding: 0px 30px 20px 30px;

  li {
    display: flex;
    justify-content: center;
    max-width: 200px;
    max-height: 200px;

    img {
      object-fit: contain;
    }
  }
`;
