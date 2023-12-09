import styled from 'styled-components';

export const CarMileageSelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;

  label {
    color: #8a8a89;
    font-size: 14px;
    font-weight: 500;
  }

  div {
    display: flex;

    div {
      position: relative;
      input {
        width: 160px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border: none;
        border-radius: 14px;
        background: #f7f7fb;
        color: #121417;
        font-size: 18px;
        font-weight: 500;
        line-height: normal;

        &[data-from='From'] {
          padding: 14px 0px 14px 75px;
          border-top-right-radius: 0;
          border-bottom-right-radius: 0;
          border-right: 1px solid #8a8a8933;
        }

        &[data-to='To'] {
          padding: 14px 0px 14px 53px;
          border-top-left-radius: 0;
          border-bottom-left-radius: 0;
        }
      }

      p {
        position: absolute;
        left: 24px;
        top: 14px;
        color: #8a8a89;
        font-size: 18px;
        font-weight: 500;
        line-height: 1.11;
      }
    }
  }
`;
