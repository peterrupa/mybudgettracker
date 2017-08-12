import { createReducer, createActions } from 'reduxsauce';

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
    requestWhoAmI: null,
    setUser: ['user'],
    clearUser: null,
    requestLogout: null
});

export const UserTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */

export const INITIAL_STATE = {
    user: null
};

/* ------------- Reducers ------------- */

export const setUser = (state, { user }) => ({
    ...state,
    user
});

export const clearUser = state => ({
    ...state,
    user: null
});

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
    [Types.SET_USER]: setUser,
    [Types.CLEAR_USER]: clearUser
});
