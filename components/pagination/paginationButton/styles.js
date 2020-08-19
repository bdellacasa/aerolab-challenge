import styled from 'styled-components';

export const Button = styled.button`
  font-family: arial;
  font-size: 14px;
  box-shadow: 1px 1px 1px #BEE2F9;
  padding: 10px 16px;
  border: 1px solid #3866A3;
  color: ${(props) => props.active ? '#FFFFFF': '#000000'};
  background: ${(props) => props.active ? `linear-gradient(to top, #468CCF, #63B8EE);` : '#FFFFFF'};
  border-radius: ${(props) => props.first ? '8px 0 0 8px': props.last ? '0 8px 8px 0' : '0'};

  &:hover {
    color: #FFFFFF;
    background: ${(props) => props.active ? `linear-gradient(to top, #468CCF, #63B8EE);` : '#ddd'};
  }
`;
