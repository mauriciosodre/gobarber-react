import styled from 'styled-components';

export const Container = styled.div`
  background: #232129;
  border-radius: 10px;
  border: 2px solid #232129;
  padding: 16px;
  width: 100%;
  color: #666360;

  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  input {
    flex: 1;
    border: 0;
    background: transparent;
    color: #f4ede8;

    &::placeholder {
      color: #666360;
    }
  }

  input:-webkit-autofill {
    -webkit-box-shadow: 200px 200px #232129 100px inset;
    box-shadow: 200px 200px 100px #232129 inset;
    -webkit-text-fill-color: #f4ede8 !important;
  }

  svg {
    margin-right: 16px;
  }
`;
