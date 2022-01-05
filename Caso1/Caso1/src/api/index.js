import axios from 'axios'

export const Axios = axios.create({
    baseURL: 'https://api-dev404.herokuapp.com/'
})