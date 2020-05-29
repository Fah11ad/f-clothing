//Bring SHOP Data to our App - 6 -
import ShopActionTypes from "./shop.types";

export const updateCollections = (collectionsMap) => ({
  type: ShopActionTypes.UPDATE_COLLECTIONS,
  payload: collectionsMap,
});
