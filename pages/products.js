import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { connect } from 'react-redux';
import * as actions from '../redux/actions/Actions';
import { checkWordMatch } from '../utils/Helpers';
import ProductsContainer from '../containers/ProductsContainer';

function Products({ user, productsLoaded, getUser, getProducts, redeem }) {
  const [title, setTitle] = useState('');
  const [products, setProducts] = useState([]);
  const [productQuantity, setProductQuantity] = useState([]);
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

  useEffect(() => {
    if (router.query.name && productsLoaded) {
      const query = router.query.name;
      const filteredProducts = productsLoaded.filter(product => checkWordMatch(query, product.name) || checkWordMatch(query, product.category));
      setTitle(query);
      setProducts(filteredProducts);
      if (filteredProducts.length > 0) {
        setProductQuantity(`${filteredProducts.length} results`);
      } else {
        setProductQuantity("No results matching your search");
      }
    } else if (productsLoaded) {
      setProducts(productsLoaded);
      setProductQuantity(`${productsLoaded.length} results`);
    }
  }, [productsLoaded, router.query.name])

  const redeemProduct = (productId) => {
    redeem(productId);
  }

  return (
    <ProductsContainer title={title} productQuantity={productQuantity} products={products} redeem={(productId) => redeemProduct(productId)} />
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
)(Products);