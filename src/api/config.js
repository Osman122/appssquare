import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL : "https://clinic-api.appssquare.com/"
})

axiosInstance.interceptors.request.use((config) => {
    config.headers['accept']= 'application/json'
    return config

}, (error) => {
    console.log(error)
})

axiosInstance.interceptors.response.use((response) => {
    return response
}, (error) => {
    console.log(error)
})