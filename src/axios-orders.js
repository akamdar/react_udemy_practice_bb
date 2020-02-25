import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-builder-cdc3b.firebaseio.com/'
});

export default instance;