import styled from 'styled-components';

export const ButtonDefault = styled.button`  
  display: inline-block;
  color: white;
  text-decoration: none;
  padding: .5em 2em;
  outline: none;
  border-width: 2px 0;
  border-style: solid none;
  border-color: #FDBE33 #000 #D77206;
  border-radius: 6px;
  background: linear-gradient(#F3AE0F, #E38916) #E38916;
  transition: 0.2s;
  &:hover { background: linear-gradient(#f5ae00, #f59500) #f5ae00; }
  &:active { background: linear-gradient(#f59500, #f5ae00) #f59500; }
`
 
