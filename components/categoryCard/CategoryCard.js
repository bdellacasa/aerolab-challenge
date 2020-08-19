import React from 'react';
import { Card, Img, Title } from './styles';

const CategoryCard = ({ name, img, onClick }) => {
  return (
    <Card onClick={() => onClick()}>
      <Img className={"category-card-img"} src={img} alt="" />
      <Title className={"category-card-name"}>{name}</Title>
    </Card>
  )
}

export default CategoryCard;