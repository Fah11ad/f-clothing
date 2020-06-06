import ShopActionTypes from "./shop.types";

// SHOP DATA to REDUX - 1 -
const INITIAL_STATE = {
  collections: null,
  isFetching: false,
  errorMessage: undefined,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ShopActionTypes.FETCH_COLLECTIONS_START:
      return {
        ...state,
        isFetching: true,
      };
    case ShopActionTypes.FETCH_COLLECTIONS_SUCCESS:
      return {
        ...state,
        collections: action.payload,
        isFetching: false,
      };
    case ShopActionTypes.FETCH_COLLECTIONS_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };
    //Bring SHOP Data to our App - 7 -
    // case ShopActionTypes.UPDATE_COLLECTIONS:
    //   return {
    //     ...state,
    //     collections: action.payload,
    //   };
    //Bring SHOP Data to our App - 7 - END ///////
    default:
      return state;
  }
};

export default shopReducer;
