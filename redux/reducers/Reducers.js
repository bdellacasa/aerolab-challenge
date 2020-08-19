import * as types from '../actions/types';

const initialState = {
  user: undefined,
  products: [],
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_USER_START:
    case types.GET_PRODUCTS_START:
    case types.GET_USER_ERROR:
    case types.GET_PRODUCTS_ERROR:
    case types.ADD_POINTS:
    case types.REDEEM:
      return state;

    case types.GET_USER_SUCCESS:
      const user = action.payload;
      return { ...state, user };

    case types.GET_PRODUCTS_SUCCESS:
      const products = action.payload;
      return { ...state, products };

    default:
      return state;
  }
};

export default reducer;