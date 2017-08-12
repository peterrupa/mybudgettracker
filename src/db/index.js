import PouchDB from 'pouchdb-browser';

import DB_CONFIG from '../config/db';

const userDB = new PouchDB('db');

const defaultCategoriesDB = new PouchDB(`${DB_CONFIG.url}/default_categories`, {
    ajax: {
        timeout: 10000
    },
    skip_setup: true
});

const sync = remoteURL => {
    userDB.sync(remoteURL, {
        live: true,
        retry: true
    });
};

// Expose PouchDB for debugging
window.PouchDB = PouchDB;

export { userDB, defaultCategoriesDB, sync };
