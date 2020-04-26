import axios from 'axios';
import store from '../store';
import authController from '../controllers/authController';

export default () => {
  axios.interceptors.response.use((response) => response,
    (error) => {
      if (error.response.status === 401) {
        store.dispatch('logout');
      }
      return Promise.reject(error);
    });

  axios.interceptors.request.use((request) => {
    const token = authController.getToken();
    const newRequest = request;
    if (token) {
      newRequest.headers.Authorization = token;
    }
    return newRequest;
  });
};
