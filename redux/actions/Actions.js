import * as types from './types';
import API from '../../utils/Api';

const getUserStart = () => ({
  type: types.GET_USER_START
});

const getUserSuccess = (payload) => ({
  type: types.GET_USER_SUCCESS,
  payload
});

const getUserError = () => ({
  type: types.GET_USER_ERROR
})

const getProductsStart = () => ({
  type: types.GET_PRODUCTS_START
});

const getProductsSuccess = (payload) => ({
  type: types.GET_PRODUCTS_SUCCESS,
  payload
});

const getProductsError = () => ({
  type: types.GET_PRODUCTS_ERROR
})

export const getUser = () => (dispatch) => {
  dispatch(getUserStart());
  API.getUser()
    .then(response => {
      dispatch(getUserSuccess(response));
    })
    .catch(err => {
      console.log(err.message)
      dispatch(getUserError());
    });
}

export const getProducts = () => (dispatch) => {
  dispatch(getProductsStart());
  API.getProducts()
    .then(response => {
      dispatch(getProductsSuccess(response));
    })
    .catch(err => {
      console.log(err.message)
      dispatch(getProductsError());
    });
}

export const addPoints = (amount = 1000) => (dispatch) => {
  API.addPoints(amount)
    .then(response => {
      if (response.message) {
        dispatch(getUser());
      }
      dispatch({ type: types.ADD_POINTS });
    })
}

export const redeem = (productId) => (dispatch) => {
  API.redeem(productId)
    .then(response => {
      if (response.message) {
        dispatch(getUser());
      }
      dispatch({ type: types.REDEEM });
    })
}

