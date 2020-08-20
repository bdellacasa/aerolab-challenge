import styled from 'styled-components';

export const Navbar = styled.nav`
  display: flex;
  flex-direction: column;
  background: #ededed;

  @media screen and (min-width: 1280px) {
    flex-direction: row;
  }
`;

export const NavItem = styled.div`
  flex-direction: row;

  @media screen and (min-width: 1280px) {
    flex-direction: column;
  }
`;

export const NavCollapse = styled.div`
  display: ${(props) => props.open ? 'flex' : 'none'};
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 1280px) {
    display: flex;
    flex-direction: row;
  }

`;

export const Toggle = styled.div`
  display: block;
  position: absolute;
  top: 5px;
  right: 20px;
  color: #000000;
  font-size: 24px;

  @media screen and (min-width: 600px) {
    top: 20px;
  }

  @media screen and (min-width: 1280px) {
    display: none;
  }

`;

export const Img = styled.img`
  margin-left: 2vw;
  width: 300px;
  height: 80px;

  @media screen and (max-width: 420px) {
    width: 200px;
    height: 50px;
  }
`;

export const TextContainer = styled.div`
  display: flex;

  @media screen and (max-width: 420px) {
    flex-direction: column;
  }
`;

export const Text = styled.p`
  margin-top: 20px;
  margin-left: 3vw;
  font-size: 18px;
  font-weight: 300;
  font-family: 'Source Sans Pro', sans-serif;
  color: #5c5c5c;

  &:hover {
    color: #111111;
  }

  @media screen and (max-width: 420px) {
    font-size: 1.2em;
    margin-left: 0;
  }
`;

export const PointsContainer = styled.div`
  width: 100px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  background: #D3D0D0;
  border-radius: 2em;

  @media screen and (min-width: 1280px) {
    margin-left: 10px;
  }
`;

export const TextPoints = styled.div`
  flex-direction: column;
  margin-top: 5px;
`;

export const ImgCoin = styled.div`
  flex-direction: column;
  margin-left: 5px;
`;

export const ImgBuy = styled(ImgCoin)`
  margin-top: 20px;

  @media screen and (min-width: 1280px) {
    margin-left: 10px;
  }
`;
