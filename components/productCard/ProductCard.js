import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Card, InfoContainer, Title, Text, RedeemContainer, CostText, ImageCost, Button, TextContainer, RedeemText, Placeholder } from './styles';

const ProductCard = ({ name, category, cost, src, onClick }) => {
  const userPoints = useSelector((state) => state.user ? state.user.points : 0);
  const redeemable = userPoints > cost;
  const message = !redeemable ? `To redeem it you need ${cost - userPoints}` : 'This product is redeemable';
  const [loadedImg, setLoadedImg] = useState(false);

  const handleOnClick = () => {
    onClick();
  }

  return (
    <Card>
      {!loadedImg && <Placeholder />}
      <div style={!loadedImg ? { overflow: 'hidden' } : {}}>
        <img src={src} onLoad={() => setLoadedImg(true)} />
      </div>
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
        <RedeemText redeemable={redeemable}>{message}</RedeemText>
        {!redeemable && <ImageCost src="/icons/coin.svg" />}
      </TextContainer>
    </Card>
  )
}

export default ProductCard;
