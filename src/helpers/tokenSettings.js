export const setToken = (token) => {
    localStorage.setItem('jwt', token)
}

export const getToken = () => localStorage.getItem('token')