import axios from 'axios';
import { store } from '../App';
import { startLoading, finishLoading } from '../reducers/loadingSlice';

// axios.defaults.baseURL = 'http://localhost:8080';
axios.defaults.baseURL = location.origin;

const timeout = 5000;

function newAbortSignal(timeoutMs = 0) {
    const abortController = new AbortController();
    setTimeout(() => abortController.abort(), timeoutMs);

    return abortController.signal;
}

// Create a new Axios instance
const instance = axios.create();

// Add a request interceptor
instance.interceptors.request.use((config) => {
    store.dispatch(startLoading());
    return config;
});

// Add a response interceptor
instance.interceptors.response.use(
    (response) => {
        store.dispatch(finishLoading());
        // Any status code that lie within the range of 2xx cause this function to trigger
        return response;
    },
    (error) => {
        store.dispatch(finishLoading());
        if (error.response && error.response.status === 401) {
            // Redirect to login page if response status is 401
            window.location.href = '/login';
        }
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        return Promise.reject(error);
    }
);

export const get = (url, options = {}) => {
    return instance.get(url, { signal: newAbortSignal(timeout), ...options });
};

export const post = (url, data, options = {}) => {
    return instance.post(url, data, {
        signal: newAbortSignal(timeout),
        ...options
    });
};

export const remove = (url, options = {}) => {
    return instance.delete(url, {
        signal: newAbortSignal(timeout),
        ...options
    });
};
