import styled from 'styled-components';

export const NavLinkWrapper = styled.div`
  font-size: 30px;
  font-weight: 600;
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-top: 20px;

  a {
    padding: 5px;
    text-decoration: none;
    color: #3470ff;
    transition: color 0.5s, background-color 0.5s;
    border-radius: 5px;
    position: relative;

    &:hover {
      background-color: #3470ff;
      color: white;
    }

    &.active {
      &::after {
        content: '';
        display: block;
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 100%;
        height: 3px;
        border-radius: 3px;
        background-color: #3470ff;
      }
    }
  }
`;
