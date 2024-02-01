import axios from '../axios'

const handleLoginAPI = (email, password) => {
    return axios.post('/api/v1/login',
        {
            email: email,
            password: password
        })
}

const getAllUsers = (id) => {
    return axios.get(`/api/v1/get-all-users?id=${id}`)
}

const createNewUser = (data) => {
    return axios.post('/api/v1/create-user', data)
}

const deleteUser = (id) => {
    return axios.delete(`/api/v1/delete-user?id=${id}`)
}

const editUser = (userData) => {
    return axios.put(`/api/v1/edit-user`, userData)
}

export {
    handleLoginAPI,
    getAllUsers,
    createNewUser,
    deleteUser,
    editUser
}