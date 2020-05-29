import ShopActionTypes from "./shop.types";

// SHOP DATA to REDUX - 1 -
const INITIAL_STATE = {
  collections: null,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    //Bring SHOP Data to our App - 7 -
    case ShopActionTypes.UPDATE_COLLECTIONS:
      return {
        ...state,
        collections: action.payload,
      };
      //Bring SHOP Data to our App - 7 - END /////// 
    default:
      return state;
  }
};

export default shopReducer;
