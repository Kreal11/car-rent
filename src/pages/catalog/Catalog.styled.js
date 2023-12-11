import styled from 'styled-components';

export const CatalogList = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  row-gap: 50px;
  column-gap: 29px;
  margin-top: 50px;
  margin-bottom: 100px;

  h3 {
    text-align: center;
    margin: 0 auto;
    max-width: 400px;
    font-size: 24px;
  }
`;

export const CatalogWrapper = styled.div`
  padding: 20px 128px 150px 128px;
`;

export const SearchForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 18px;
`;

export const SearchButton = styled.button`
  max-width: 136px;
  max-height: 48px;
  color: white;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.42;
  display: flex;
  padding: 14px 44px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background: #3470ff;

  &:active {
    background-color: #0b44cd;
  }
`;

export const LoadMoreButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 79px;
  margin: 0 auto;
  background-color: transparent;
  color: #3470ff;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  text-decoration-line: underline;

  &:active {
    color: #0b44cd;
  }
`;

export const LoaderWrapper = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: center;
`;
