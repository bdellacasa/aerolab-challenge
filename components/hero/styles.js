import styled from 'styled-components';

export const Background = styled.div`
  width: 100vw;
  backgroundColor: #ffffff;
  height: 600px;
  background-size: 90% 90%;
  align-content: center;
  background-image: url(${(props) => props.img});

  @media screen and (max-width: 420px) {
    height: 500px;
    background-size: 90% 50%;
  }
`;

export const Opacity = styled.div`
  background: rgb(0, 0, 0, 0.4);
  height: 600px;

  @media screen and (max-width: 420px) {
    height: 500px;
  }
`;

export const Container = styled.div`
  width: fit-content;    
  align-items: flex-start;
  margin-left: 14vw;
  padding-top: 120px;

  @media screen and (max-width: 420px) {
    padding-top: 60px;
    margin-left: 5px;
  }
`;

export const Text = styled.p`
  text-align: start; 
  color: #ffffff;
  font-size: 1.5em;
  font-family: 'Roboto', sans-serif;
`;

const TitleFont = styled.p`
  font-family: 'Monserrat', sans-serif;
  font-weight: bold;
  text-align: start;
`;

export const MainTitle = styled(TitleFont)`
  font-size: 4em;
  color: #47B0E0;
`;

export const Title = styled(TitleFont)`
  font-size: 3em;
  color: #ffffff;
`;

export const Button = styled.button`
  font-size: 14px;
  padding: 10px 50px;
  border-radius: 8px;
  box-shadow: 0px 10px 20px -10px rgba(0, 0, 0, 0.95);
  background-color:#EFEFEF;
  display: inline-block;
  cursor:pointer;
  color: #474747;
  font-family: 'Roboto', sans-serif;
  text-decoration:none;
  
  &:hover {
    color: #ffffff;
    background-color:#599bb3;
  }
`;
