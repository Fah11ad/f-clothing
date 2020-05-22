//REDUCER 4 //
// Action is just a function return an object

export const setCurrentUser = user => ({
    type: 'SET_CURRENT_USER',
    payload: user
})