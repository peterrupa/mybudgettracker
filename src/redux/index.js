import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import createHistory from 'history/createBrowserHistory';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';
import { persistentStore } from 'redux-pouchdb-plus';

import rootSaga from '../sagas';
import { userDB } from '../db';

export const history = createHistory();

const middleware = routerMiddleware(history);

const configureStore = (rootReducer, rootSaga) => {
    const sagaMiddleware = createSagaMiddleware();

    const composeFunctions = [
        applyMiddleware(middleware),
        applyMiddleware(sagaMiddleware),
        persistentStore({ db: userDB }),
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
            window.__REDUX_DEVTOOLS_EXTENSION__()
    ];

    const store = createStore(
        rootReducer,
        compose(...composeFunctions.filter(x => x))
    );

    sagaMiddleware.run(rootSaga);

    return store;
};

export default () => {
    const reducers = combineReducers({
        app: require('./app').reducer,
        user: require('./user').reducer,
        transaction: require('./transaction').reducer,
        defaultCategory: require('./defaultCategory').reducer,
        router: routerReducer
    });

    return configureStore(reducers, rootSaga);
};
