import styled from 'styled-components';

export const PaginationContainer = styled.div`
  margin-left: 62vw;

  @media screen and (max-width: 420px) {
    margin-left: 24vw;
  }
`;

export const ListContainer = styled.div`
  display: grid;
  grid-column-gap: 15px;
  grid-row-gap: 50px;
  align-content: center;
  margin-top: 60px;

  @media screen and (min-width: 320px) {
    grid-template-columns: repeat(1, 1fr);
    grid-row-gap: 80px;
  }

  @media screen and (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (min-width: 1280px) {
    grid-template-columns: repeat(${(props) => props.col}, 1fr);
    grid-column-gap: 50px;
  }
`;
