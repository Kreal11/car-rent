import styled from 'styled-components';

export const CatalogItem = styled.li`
  width: 274px;
  overflow: hidden;

  & img {
    width: 401px;
    height: 268px;
    border-radius: 14px;
    object-fit: cover;
    /* clip-path: polygon(0% 0%, 100% 0%, 100% 98%, 0% 98%); */
    margin-bottom: 14px;
  }
`;

export const ItemHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  color: #121417;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;

  & div {
    display: flex;
  }

  span {
    color: #3470ff;
  }
`;

export const ItemDescrList = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  column-gap: 12px;
  row-gap: 4px;
  flex-wrap: wrap;
  /* flex-wrap: wrap; */
  margin-bottom: 28px;
  max-height: 40px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;

  & li {
    color: rgba(18, 20, 23, 0.5);
    font-size: 12px;
    line-height: 1.5;
    position: relative;
    /* white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis; */

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

export const ItemButton = styled.button`
  color: #fff;
  font-size: 13px;
  font-weight: 600;
  line-height: 1.42;
  padding: 12px 99px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background: #3470ff;
  margin: 0 auto;

  &:active {
    background-color: #0b44cd;
  }
`;

export const ImgWrapper = styled.div`
  position: relative;
`;

export const ChooseCarButton = styled.button`
  background-color: transparent;
  position: absolute;
  top: 4%;
  left: 89%;
`;
