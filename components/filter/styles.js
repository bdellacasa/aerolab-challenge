import styled from 'styled-components';

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  height: 50px;
  justify-content: center;
  padding-top: 10px;
  color: #6F6F6F;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 150px;
  position: absolute;
`;

export const Select = styled.div`
  display: ${(props) => props.show ? 'flex': 'none'};
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: absolute;
  z-index: 1;
  margin-top: 50px;
  background: #EDEBEA;
`;

export const CurrentVal = styled.div`
  flex-direction: column;
`;

export const Option = styled(Row)`
  width: 150px;

  &:hover {
    color: #468CCF;
  }
`;