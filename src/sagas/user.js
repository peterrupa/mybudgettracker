import { call, put } from 'redux-saga/effects';
import AppActions from '../redux/app';
import UserActions from '../redux/user';

export function* whoami(api) {
    const response = yield call(api.whoami);

    if (response.ok) {
        const user = response.data;

        if (user) {
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
    }
}
