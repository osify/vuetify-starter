import axios from 'axios';
import qs from 'qs';
// FAKE API for learning only
// eslint-disable-next-line
const API_URL = 'https://jsonplaceholder.typicode.com';

export default {
  getPosts() {
    return axios.get(`${API_URL}/posts`);
  },
  savePost(article) {
    return axios.post(`${API_URL}/posts`, qs.stringify(article));
  },
};
