import styled from 'styled-components';

export const ConditionsHeader = styled.h3`
  color: #121417 !important;
  font-size: 14px !important;
  font-weight: 500 !important;
  line-height: 1.42 !important;
  margin-bottom: 8px !important;
  text-align: start !important;
  max-width: none !important;
`;

export const ConditionsList = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 24px;

  li {
    display: flex;
    padding: 7px 14px;
    justify-content: center;
    align-items: center;
    gap: 8px;
    border-radius: 35px;
    background: #f9f9f9;
    color: #363535;
    font-family: Montserrat;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5;
    letter-spacing: -0.02em;
  }

  span {
    color: #3470ff;
    font-family: Montserrat;
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: 1.5;
    letter-spacing: -0.02em;
  }
`;
