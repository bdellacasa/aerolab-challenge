import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  margin-bottom: 10vh;
  background: white;
  align-content: center;
`;

export const IndexContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const Title = styled.h3`
  padding-left: 8vw;
  padding-top: 100px;
  font-family: 'Lato', sans-serif;
  font-weight: 900;
`;

export const ProductsListContainer = styled(IndexContainer)`
  margin-top: 50px;
`;

export const ProductsTitle = styled.h4`
  padding-left: 8vw;
  padding-top: 85px;
  font-family: 'Lato', sans-serif;
  font-weight: bold;
`;
