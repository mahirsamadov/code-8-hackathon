import axios from "axios";
import { getToken } from "../helpers/tokenSettings";

const URL = 'https://api.sulnar.com/api/v1/auth/'
const localURL = 'http://172.21.176.1:9090/api/v1/auth/'

const authNetwork = axios.create({
    baseURL: URL,
   
})

authNetwork.defaults.headers.common['Authorization'] = `Bearer ${getToken()}`;

export const signUp = async (data) => {
    
    const reposnse = await authNetwork.post('/register', data)
    return reposnse.data

}

export const signIn = async (data) => {
   const response = await authNetwork.post('/', data)
    return response.data
}