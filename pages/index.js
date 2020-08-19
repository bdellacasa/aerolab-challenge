import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { connect } from 'react-redux';
import * as actions from '../redux/actions/Actions';
import Layout from '../components/layout/Layout';
import Hero from '../components/hero/Hero';
import List from '../components/list/List';
import { Container, IndexContainer, Title } from '../styles/styles';
import { LIST_TYPE } from '../utils/Constants';
import categories from '../utils/categories';

export function Index({ user, productsLoaded, getUser, getProducts }) {
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

  const selectCategory = (name) => {
    router.push({
      pathname: '/category',
      query: { name },
    })
  };

  const renderContent = () => {
    return (
      <Container>
        <Hero imgUrl={'/header-x1.png'} />
        <Title>Categories</Title>
        <IndexContainer>
          <List data={categories} type={LIST_TYPE.CATEGORIES} itemsPerPage={categories.length} onClick={(name) => selectCategory(name)} />
        </IndexContainer>
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
  getProducts: () => dispatch(actions.getProducts()),
  getUser: () => dispatch(actions.getUser()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Index);
