import axios from 'axios';

const axiosClient = axios.create({
    baseURL: 'http://localhost:5000', // Backend API URL
    headers: {
        'Content-Type': 'application/json',
    },
});

export default axiosClient;
