import SHOP_DATA from "../../pages/shop/shop.data"

// SHOP DATA to REDUX - 1 -
const INITIAL_STATE = {
    collections: SHOP_DATA 
}

const shopReducer = (state= INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state
    }
}

export default shopReducer