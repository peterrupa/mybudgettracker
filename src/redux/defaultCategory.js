import { createReducer } from 'reduxsauce';
import { persistentReducer } from 'redux-pouchdb-plus';

import { defaultCategoriesDB } from '../db';

/* ------------- Types and Action Creators ------------- */

/* ------------- Initial State ------------- */

export const INITIAL_STATE = {
    defaultCategories: []
};

/* ------------- Reducers ------------- */

/* ------------- Hookup Reducers To Types ------------- */

const defaultCategory = createReducer(INITIAL_STATE, {});

Object.defineProperty(defaultCategory, 'name', {
    value: 'defaultCategory'
});

export const reducer = persistentReducer(defaultCategory, {
    db: defaultCategoriesDB
});
