import styled from 'styled-components';

export const AccAndFunctHeader = styled.h3`
  color: #121417;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.42;
  margin-bottom: 8px;
`;

export const AccAndFunctList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  column-gap: 12px;
  color: rgba(18, 20, 23, 0.5);
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
  width: 100%;

  &:nth-last-child() {
    margin-bottom: 4px;
  }

  & li {
    position: relative;

    &::after {
      content: '';
      position: absolute;
      height: 16px;
      width: 1px;
      background-color: rgba(18, 20, 23, 0.1);
      right: -6px;
      top: 0;
      bottom: 0;
      margin: auto;
    }
  }

  li:last-child::after {
    content: none;
  }
`;
