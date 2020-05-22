import { UserActionTypes } from './user.types'

//REDUCER 4 //
// Action is just a function return an object

export const setCurrentUser = user => ({
    type: UserActionTypes.SET_CURRENT_USER,
    payload: user
})