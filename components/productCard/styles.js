import styled from 'styled-components';

export const Card = styled.div`
  width: 280px;
  height: 390px;
  border: 1px solid #E9E7E7;
  transition: 0.4s;

  &:hover {
    box-shadow: 0px 10px 20px -10px rgba(0, 0, 0, 0.95);
  }
  
  @media screen and (max-width: 420px) {
    width: 260px;
    height: 400px;
  }
`;

export const InfoContainer = styled.div`
  padding-top: 10px;
  padding-left: 20px;
  padding-bottom: 10px;

  @media screen and (max-width: 420px) {
    padding-bottom: 20px;
  }
`;

export const Title = styled.h5`
  font-family: 'Roboto', sans-serif;
  color: #111111;
`;

export const Text = styled.p`
  font-family: 'Roboto', sans-serif;
  color: #111111;
`;

export const RedeemContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const CostText = styled(Text)`
  text-align: center;
  text-align: center;
  padding-top: 10px;
  padding-left: 20px;

  @media screen and (max-width: 420px) {
    padding-left: 10px;
  }
`;

export const ImageCost = styled.img`
  padding-left: 10px;
`;

export const Button = styled.button`
  font-family: arial;
  color: ${(props) => props.enable ? '#103669': '#567093'};
  font-size: 16px;
  box-shadow: 1px 1px 1px #BEE2F9;
  padding: 10px 15px;
  border-radius: 10px;
  border: ${(props) => props.enable ? '2px solid #3866A3' : '#BECBD3'};
  background: ${(props) => props.enable ? 'linear-gradient(to top, #63B8EE, #468CCF)': '#BECBD3'};
`;

export const TextContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 279px;
  height: 62px;
  align-items: center;
  background: #EEEEEE;
  border: 1px solid #D1D1D1;

  @media screen and (max-width: 420px) {
    width: 260px;
  }
`;

export const RedeemText = styled.div`
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  color: #807F7F;
  
  @media screen and (max-width: 420px) {
    padding-top: 10px;
    padding-left: 10px;
  }
`;
