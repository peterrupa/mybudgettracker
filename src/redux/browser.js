import { createReducer, createActions } from 'reduxsauce';

import { store } from '../';

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
    setBrowserWidth: ['browserWidth']
});

export const BrowserTypes = Types;
export default Creators;

export const SCREEN_SIZES = {
    MOBILE: 320,
    TABLET: 768,
    DESKTOP: 1024
};

/* ------------- Initial State ------------- */

export const INITIAL_STATE = {
    browserWidth: window.innerWidth,
    size: getSize(window.innerWidth)
};

/* ------------- Reducers ------------- */

export const setBrowserWidth = (state, { browserWidth }) => ({
    ...state,
    browserWidth,
    size: getSize(browserWidth)
});

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
    [Types.SET_BROWSER_WIDTH]: setBrowserWidth
});

function getSize(browserWidth) {
    if (browserWidth >= SCREEN_SIZES.DESKTOP) {
        return 'DESKTOP';
    } else if (browserWidth >= SCREEN_SIZES.TABLET) {
        return 'TABLET';
    } else {
        return 'MOBILE';
    }
}

// initialize resizer
window.onresize = () => {
    store.dispatch(Creators.setBrowserWidth(window.innerWidth));
};
