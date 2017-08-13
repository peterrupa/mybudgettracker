import PouchDB from 'pouchdb-browser';

import { store } from '../';
import UserActions from '../redux/user';
import DB_CONFIG from '../config/db';

// Expose PouchDB for debugging
window.PouchDB = PouchDB;

export default {
    userDB: new PouchDB('temp'),
    defaultCategoriesDB: new PouchDB(`${DB_CONFIG.url}/default_categories`, {
        ajax: {
            timeout: 10000
        },
        skip_setup: true
    }),
    syncInstance: null,

    initializeUserDB: username => {
        this.userDB = new PouchDB(`db$${username}`);
    },
    sync: remoteURL => {
        if (!this.userDB) {
            throw new Error('UserDB is not yet initialized');
        }

        this.syncInstance = this.userDB
            .sync(remoteURL, {
                live: true,
                retry: true
            })
            .on('error', e => {
                if (e.status === 401) {
                    store.dispatch(UserActions.requestLogout());
                }
            });

        return this.syncInstance;
    },
    cancelSync: () => {
        this.syncInstance.cancel();
    }
};
