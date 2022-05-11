import styled from 'styled-components';

export const InputDefault = styled.input` 
  background-color: transparent;
  border: none;
  border-bottom: 1px solid #9e9e9e;
  border-radius: 0;
  outline: none;
  height: 3rem;
  width: 100%;
  font-size: 16px;
  margin: 0 0 8px 0;
  padding: 0;
  box-shadow: none;
  box-sizing: content-box;
  transition: box-shadow .3s, border .3s;
  &:focus{
    border-bottom: 1px solid #26a69a;
    box-shadow: 0 1px 0 0 #26a69a;
  }
`