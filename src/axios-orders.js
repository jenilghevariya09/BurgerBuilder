import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react--burger-builder-d48bc-default-rtdb.asia-southeast1.firebasedatabase.app/'
});

export default instance;