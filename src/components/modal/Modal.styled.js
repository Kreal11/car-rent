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
  box-sizing: border-box;
  background-color: white;
  height: auto;
  position: absolute;
  display: flex;
  max-width: 541px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 40px;
  border-radius: 24px;

  img {
    width: 469px;
    height: 314px;
    border-radius: 14px;
    object-fit: cover;
    margin-bottom: 14px;
    position: relative;
  }
`;

export const ItemHeaderModalWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  color: #121417;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.5;

  & div {
    display: flex;
  }

  span {
    color: #3470ff;
  }
`;

export const ItemTagsModalList = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  column-gap: 12px;
  row-gap: 4px;
  flex-wrap: wrap;
  margin-bottom: 14px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  max-width: 350px;

  & li {
    color: rgba(18, 20, 23, 0.5);
    font-size: 12px;
    line-height: 1.5;
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

export const ItemDescrModalP = styled.p`
  color: #121417;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.42;
  margin-bottom: 24px;
`;

export const CloseModalButton = styled.button`
  background-color: transparent;
  padding: 0;
  position: absolute;
  width: 18px;
  height: 18px;
  top: 16px;
  right: 16px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const RentCarButton = styled.button`
  color: white;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.42;
  display: inline-flex;
  padding: 12px 50px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background: #3470ff;
`;
