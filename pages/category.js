import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { connect } from 'react-redux';
import * as actions from '../redux/actions/Actions';
import Layout from '../components/layout/Layout';
import List from '../components/list/List';
import { Container, ProductsContainer, ProductsTitle } from '../styles/styles';
import { LIST_TYPE } from '../utils/Constants';

export function Category({ user, productsLoaded, getUser, getProducts, redeem }) {
  const [title, setTitle] = useState('');
  const [products, setProducts] = useState([]);
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      getUser();
    }
  }, [user])

  useEffect(() => {
    if (productsLoaded && productsLoaded.length === 0) {
      getProducts();
    }
  }, [productsLoaded])

  const filterByCategory = (name) => {
    setTitle(name);
    if (productsLoaded) {
      const filteredProducts = productsLoaded.filter(product => product.category === name);
      setProducts(filteredProducts);
    }
  };

  useEffect(() => {
    const query = router.query.name;
    filterByCategory(query)
  }, [productsLoaded])

  const redeemProduct = (productId) => {
    redeem(productId);
  }

  const renderContent = () => {
    return (
      <Container>
        <ProductsTitle>{title}</ProductsTitle>
        <ProductsContainer>
          <List data={products} type={LIST_TYPE.PRODUCTS} itemsPerPage={12} onClick={(productId) => redeemProduct(productId)} />
        </ProductsContainer>
      </Container>
    )
  }

  return (
    <Layout>
      {renderContent()}
    </Layout>
  )
}

/*
* @param {ReduxState} state
* @param {object} props
*/
const mapStateToProps = (state, props) => ({
  productsLoaded: state.products,
  user: state.user,
});

const mapDispatchToProps = dispatch => ({
  getUser: () => dispatch(actions.getUser()),
  getProducts: () => dispatch(actions.getProducts()),
  redeem: (id) => dispatch(actions.redeem(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Category);