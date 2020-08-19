import React from 'react';
import { useRouter } from 'next/router';
import { Background, Opacity, Container, MainTitle, Title, Text, Button } from './styles';

const Hero = ({ imgUrl }) => {
  const router = useRouter();
  return (
    <Background img={imgUrl}>
      <Opacity>
        <Container>
          <MainTitle>AeroStore</MainTitle>
          <Title>Electronics</Title>
          <Text>We have much more for you!</Text>
          <Button onClick={() => router.push('/products')}>SEE MORE</Button>
        </Container>
      </Opacity>
    </Background>
  )
}

export default Hero;
