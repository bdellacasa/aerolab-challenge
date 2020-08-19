import styled from 'styled-components';

export const PaginationContainer = styled.div`
  margin-left: 62vw;

  @media screen and (max-width: 420px) {
    margin-left: 24vw;
  }
`;

export const ListContainer = styled.div`
  width: 80vw;
  margin-left: 4vw;
  display: grid;
  grid-template-columns: repeat(${(props) => props.col}, 1fr);
  grid-column-gap: 15px;
  grid-row-gap: 50px;
  justify-content: center;
  margin-top: 60px;

  @media screen and (max-width: 420px) {
    grid-template-columns: repeat(1, 1fr);
    grid-row-gap: 80px;
    margin-left: 5vw;
    align-self: center;
  }
`;
