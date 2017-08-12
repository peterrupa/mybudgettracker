import apisauce from 'apisauce';

const API_URL = 'http://dev.mybudgettracker.com:8000';

// @TODO: make ENV for base URL
const create = (baseURL = API_URL) => {
    const api = apisauce.create({
        baseURL,
        withCredentials: true,
        headers: {
            'Cache-Control': 'no-cache',
            'Content-Type': 'application/json'
        },
        timeout: 10000
    });

    return {
        whoami: () => api.get('/auth'),
        logout: () => api.post('/auth/logout')
    };
};

export default {
    create
};
