import React from 'react';
import { useSelector } from 'react-redux';
import { Card, InfoContainer, Title, Text, RedeemContainer, CostText, ImageCost, Button, TextContainer, RedeemText } from './styles';

const ProductCard = ({ name, category, cost, src, onClick }) => {
  const userPoints = useSelector((state) => state.user ? state.user.points : 0);
  const redeemable = userPoints > cost;
  const message = !redeemable ? `To redeem it you need ${cost - userPoints}` : 'This product is redeemable';

  const handleOnClick = () => {
    onClick();
  }

  return (
    <Card>
      <img src={src} />
      <InfoContainer>
        <Title>{name}</Title>
        <Text>{category}</Text>
        <RedeemContainer>
          <Button enable={redeemable} onClick={() => handleOnClick()}>Reedeem now</Button>
          <CostText>{cost}</CostText>
          <ImageCost src="/icons/coin.svg" />
        </RedeemContainer>
      </InfoContainer>
      <TextContainer>
        <RedeemText>{message}</RedeemText>
        {!redeemable && <ImageCost src="/icons/coin.svg" />}
      </TextContainer>
    </Card>
  )
}

export default ProductCard;
