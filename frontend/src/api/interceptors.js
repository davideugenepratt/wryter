import axios from 'axios';
import store from '../store';
import AuthHelper from '../helpers/authHelper';

export default () => {
  axios.interceptors.response.use((response) => response,
    (error) => {
      if (error.response.status === 401) {
        store.dispatch('logout');
      }
      return Promise.reject(error);
    });

  axios.interceptors.request.use((request) => {
    const token = AuthHelper.getToken();
    const newRequest = request;
    if (token) {
      newRequest.headers.Accept = 'application/json';
      newRequest.headers['Content-Type'] = 'application/json';
      newRequest.headers.Authorization = `Bearer ${token}`;
    }
    return newRequest;
  });
};
