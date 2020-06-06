//REDUX 2 //
// Root Reducer is just compine slice reducers

import { combineReducers } from "redux";

//PERSIST 2
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // local storage
//PERSIST 2 END

import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";
import directoryReducer from "./directory/directory.reducer";
import shopReducer from "./shop/shop.reducer";

//PERSIST 3 JSON object for persist congiguration
const persistConfig = {
  key: 'root', // key for at what point inside our reducer object want to start store everything
  storage,
  whitelist: ['cart'] // whitelist is array contain a string name of any of reducer that want to store
} 
////PERSIST 3 END //

//PERSIST 4
const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer // SHOP DATA to REDUX - 2 - pull it to root reducer
})

export default persistReducer(persistConfig, rootReducer)
////PERSIST 4 END //

// export default combineReducers({
//   user: userReducer,
//   cart: cartReducer
// });
