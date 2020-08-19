import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  margin-top: 10px;
  margin-left: 10vw;

  @media screen and (max-width: 420px) {
    margin-left: 0vw;
    flex-direction: row;
  }
`;

export const Input = styled.input`
  width: 500px;
  padding-left: 10px;
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 18px;

  @media screen and (max-width: 420px) {
    width: 80vw;
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
