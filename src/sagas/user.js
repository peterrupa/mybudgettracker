import { call, put } from 'redux-saga/effects';
import { reinit } from 'redux-pouchdb-plus';

import AppActions from '../redux/app';
import UserActions from '../redux/user';
import db from '../db';
import { store } from '../';

export function* whoami(api) {
    const response = yield call(api.whoami);

    if (response.ok) {
        const user = response.data;

        if (user) {
            db.initializeUserDB(user._id);
            store.dispatch(reinit());
            db.sync(user.session.userDBs.db);
            yield put(UserActions.setUser(user));
        } else {
            yield put(UserActions.clearUser());
        }

        yield put(AppActions.startApp());
    }
}

export function* logout(api) {
    const response = yield call(api.logout);

    if (response.ok) {
        yield put(UserActions.clearUser());

        // disconnect db
        db.cancelSync();
    }
}
