import { createSelector } from "reselect";
//input selector
const selectUser = (state) => state.user;

// other input selector - we use it for hidden cart
// const selectCart = (state) => state.cart;

//output selector
export const selectCurrenUser = createSelector(
  [selectUser],
  (user) => user.currentUser
);
