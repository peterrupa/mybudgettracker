import PouchDB from 'pouchdb-browser';

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

        this.syncInstance = this.userDB.sync(remoteURL, {
            live: true,
            retry: true
        });

        return this.syncInstance;
    },
    cancelSync: () => {
        this.syncInstance.cancel();
    }
};
