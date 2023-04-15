import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {link} from "./usersSlice";

const initialState = {
    user: {},
    load: true
}

export const getUser = createAsyncThunk('user', async (id) => {
    const {data} = await axios.get(`${link}/${id}`)
    return data
})

const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getUser.pending, (state) => {
                state.load = true
            })
            .addCase(getUser.fulfilled, (state, action) => {
                state.user = action.payload
                state.load = false
            })
    }
})

export default userSlice.reducer;
export const userSelect = state => state.userSlice;