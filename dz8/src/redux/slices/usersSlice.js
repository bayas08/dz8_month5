import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

export const link = 'https://jsonplaceholder.typicode.com/users'

const initialState = {
    users: [],
    load: true
}

export const getUsers = createAsyncThunk('users', async () => {
    const {data} = await axios.get(link)
    console.log(data)
    return data
})

const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getUsers.pending, (state) => {
                state.load = true
            })
            .addCase(getUsers.fulfilled, (state, action) => {
                state.users = action.payload
                state.load = false
            })
            .addCase(getUsers.rejected, () => {
                alert('Error Server')
            })
    }
})

export default userSlice.reducer;
export const usersSelect = state => state.usersSlice;