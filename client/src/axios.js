import axios from 'axios';

export default axios.create({
    // baseURL: 'https://a.walletbot.online',
    baseURL: 'http://127.0.0.1:5000/api/v1',
});