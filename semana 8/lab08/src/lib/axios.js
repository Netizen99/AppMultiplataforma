import axios from 'axios';

const instance = axios.create({
	baseURL: 'http://192.168.43.228:5000'
	// http://172.23.15.219:5000
	// http://192.168.43.228:5000
});

export default instance;
