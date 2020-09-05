import axios from 'axios';

class Client {
    constructor() {
        this.client = axios.create({
            baseURL: 'https://api.unsplash.com',
            headers: {
                Authorization: 'Client-ID 1a4928e42dd2bbe079c6b520c22c578973b09a94e1a62f6f1136296b45ed96c7'
            },
        });
    }

    getPhotos(term) {
        return this.client.get('/search/photos', {
            params: {
                query: term
            }
        });
    }
}

const axiosClient = new Client();
export default axiosClient;