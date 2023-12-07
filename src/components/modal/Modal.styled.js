import styled from 'styled-components';

export const WrapperOverlay = styled.div`
  position: fixed;
  z-index: 4;
  inset: 0;
  display: flex;
  overflow-y: scroll;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(10px);
`;

export const ModalWrapper = styled.div`
  background-color: white;
  width: 541px;
  height: auto;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 40px;
  border-radius: 24px;
`;
