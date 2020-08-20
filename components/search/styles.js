import styled from 'styled-components';

export const Container = styled.div`
  display: flex;

  @media screen and (min-width: 1024px) {
    margin-left: 150px;
  }

`;

export const Input = styled.input`
  padding-left: 10px;
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 18px;
  border: 1px solid #c9c7c7;

  @media screen and (min-width: 320px) {
    width: 260px;
  }

  @media screen and (min-width: 360px) {
    width: 300px;
  }

  @media screen and (min-width: 640px) {
    width: 400px;
  }

  @media screen and (min-width: 1024px) {
    width: 500px;
  }
`;

export const IconContainer = styled.div`
  background-color: white;
  width: 45px;
  height: 38px;
  border: 1px solid #c9c7c7;
  border-radius: 0 0.3em 0.3em 0;
`;

export const Button = styled.img`
  width: 30px;
  height: 35px;
  padding-left: 10px;

  @media screen and (max-width: 420px) {
    width: 25px;
    height: 30px;
    padding-left: 5px;
    padding-top: 5px;
  }
`;
