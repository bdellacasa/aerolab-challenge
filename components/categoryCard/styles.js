import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  height: 220px;
  border-radius: 8px;
  border: 1px solid #E9E7E7;
  justify-content: center;
  transition: 0.4s;

  &:hover {
    box-shadow: 0px 10px 20px -10px rgba(0, 0, 0, 0.95);
  }

  @media screen and (max-width: 420px) {
    width: 250px;
    height: 180px;
  }
`;

export const Img = styled.img`
  width: 210px;
  height: 150px;
  background-size: cover;
  margin-left: 20px;

  @media screen and (max-width: 420px) {
    width: 180px;
    height: 130px;
    padding-left: 15px;
  }
`;

export const Title = styled.h5`
  padding-top: 10px;
  font-size: 1.3em;
  font-family: 'Roboto', sans-serif;
  text-align: center;

  @media screen and (max-width: 420px) {
    padding-top: 0px;
    font-size: 1.2em;
  }
`;
