import Axios from 'axios';

export default Axios.create(
    {
        baseURL: 'https://api.unsplash.com',
        headers: {
            Authorization: 'Client-ID 7e54b788332cdd81e71fdd5176b98175646e8a7d1f38777a5a0f0353e0458f53'
        }
    });