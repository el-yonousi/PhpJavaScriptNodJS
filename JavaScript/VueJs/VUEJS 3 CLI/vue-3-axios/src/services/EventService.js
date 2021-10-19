import axios from 'axios'

const apiClient = axios.create({
    baseURL: 'https://api-casetrue.herokuapp.com/api/',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    }
})

export default {
    getEvents () {
        return apiClient.get('/all')
    },
    getEventDetails (name) {
        return apiClient.get(`/name/${name}`)
    }
}