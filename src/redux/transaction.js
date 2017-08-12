import { createReducer, createActions } from 'reduxsauce';
import { persistentReducer } from 'redux-pouchdb-plus';

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
    addTransaction: ['testValue']
});

export const TransactionTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */

export const INITIAL_STATE = {
    transactions: []
};

/* ------------- Reducers ------------- */

export const addTransaction = (state, { testValue }) => ({
    ...state,
    transactions: [
        ...state.transactions,
        {
            data: testValue
        }
    ]
});

/* ------------- Hookup Reducers To Types ------------- */

const transaction = createReducer(INITIAL_STATE, {
    [Types.ADD_TRANSACTION]: addTransaction
});

Object.defineProperty(transaction, 'name', {
    value: 'transaction'
});

export const reducer = persistentReducer(transaction);
