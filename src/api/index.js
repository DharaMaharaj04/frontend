import axios from 'axios';

const url = 'http://localhost:9000/patients';

export const fetchPosts = () => axios.get(url);