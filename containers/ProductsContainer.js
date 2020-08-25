import React from 'react';
import List from '../components/list/List';
import { Container, ProductsListContainer, ProductsTitle } from '../styles/styles';
import { LIST_TYPE } from '../utils/Constants';

const ProductsContainer = ({ products = [], title = null, productQuantity = null, redeem }) => {
  return (
    <Container>
      <div>
        {title && title.length > 0 && products.length > 0 && <ProductsTitle>{title}</ProductsTitle>}
        {productQuantity && <ProductsTitle>{productQuantity}</ProductsTitle>}
      </div>
      <ProductsListContainer>
        <List data={products} type={LIST_TYPE.PRODUCTS} itemsPerPage={12} onClick={(productId) => redeem(productId)} />
      </ProductsListContainer>
    </Container>
  )
}

export default ProductsContainer;