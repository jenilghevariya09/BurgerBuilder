import axios from 'axios'

 const instance = axios.create({
    baseURL: "//add your Firebase Realtime Database URL"
});

export default instance;
