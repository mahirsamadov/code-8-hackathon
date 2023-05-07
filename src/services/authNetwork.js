import axios from "axios";

const URL = 'http://18.222.37.82:9090/api/v1/auth/'

const authNetwork = axios.create({
    baseURL: URL
})


export const signUp = async (data) => {
    
    const reposnse = await authNetwork.post('/register', data)
    return reposnse.data

}

export const signIn = async (data) => {
   const response = await authNetwork.post('/', data)
    return response.data
}