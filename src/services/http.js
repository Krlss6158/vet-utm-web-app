import axios from 'axios';
const api_url = 'http://192.168.100.101:5000/api';

export const Login = (email, password) => {
    return axios.post(`${api_url}/users/signin`, { email, password }).
        then(e => e.data).
        catch(e => e.response.status);
}

export const updateUser = (user_id, data) => {
    return axios.put(`${api_url}/users/${user_id}`, data).
        then(e => e.data).
        catch(e => e.response.status);
}

export const getProvinces = () => {
    return axios.get(`${api_url}/provinces`).
        then(e => e.data).
        catch(e => e.response.status);
}

export const getCantons = (idProvince) => {
    return axios.get(`${api_url}/provinces/${idProvince}`).
        then(e => e.data).
        catch(e => e.response.status);
}

export const getOneUser = (data) => {
    return axios.get(`${api_url}/users/${data}`).
        then(e => e.data).
        catch(e => e.response.status)
}

export const getAllUsers = () => {
    return axios.get(`${api_url}/users`).
        then(e => e.data).
        catch(e => e.response.status)
}

export const deleteUser = (id) => {
    return axios.delete(`${api_url}/users/${id}`).
        then(e => e.data).
        catch(e => e.response.status)
}

export const createUser = (data) => {
    return axios.post(`${api_url}/users/`, data).
        then(e => e.data).
        catch(e => e.response.status)
}