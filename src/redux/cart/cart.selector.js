import { createSelector } from "reselect";

//input selector -> take a piece of the state to use it next selector
const selectCart = (state) => state.cart;

// output selector
export const selectCartItems = createSelector(
  //contain two argument 1- array of input selector & 2- function of selected value
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartHeddin = createSelector(
  [selectCart],
  (cart) => cart.hidden
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (accumulatedQuantity, cartItem) =>
        accumulatedQuantity + cartItem.quantity,
      0
    )
);

export const selectCartTotal = createSelector(
    [selectCartItems], 
    (cartItems) =>
    cartItems.reduce(
    (accumulatedQuantity, cartItem) =>
      accumulatedQuantity + cartItem.quantity * cartItem.price,
    0
  )
);
