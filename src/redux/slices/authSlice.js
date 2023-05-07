import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
    name: "auth", 
    initialState: {fincode: '', serialNumber: 0, phoneNumber: '',  password: ''},
    reducers: {
        signIn:  (state, action) => {
            state = action.payload
        }
    }
})