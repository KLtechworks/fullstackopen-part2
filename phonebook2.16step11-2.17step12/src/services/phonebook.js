// 2.13: The Phonebook step 8
import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const create = newPerson => {
    const request = axios.post(baseUrl, newPerson)
    return request.then(response => response.data)
}

// 2.15*: The Phonebook step 10
const update = (id, newPerson) => {
    const request = axios.put(`${baseUrl}/${id}`, newPerson)
    return request.then(response => response.data)
}

// 2.14: The Phonebook step 9
const remove = (id) => {
    return axios.delete(`${baseUrl}/${id}`)
                .then(() => {
                    console.log('deleted', id)
                    return id
    })
}

export default { getAll, create, update, remove}