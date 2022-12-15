import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import axios from '../../axios'

const initialState = {
    loading: false,
    state: [],
}

export const getState = createAsyncThunk(
    "general/getState",
    async(args, {getState}) => {
        // const { token } = getState().user
        // const config = {
        //     headers: {
        //         Authorization: `Bearer ${token}`,
        //       },
        // }
        const response =  await axios.get('/general/state')
        return response.data;
    }
)


const generalSlice = createSlice({
    name: "general",
    initialState,
    extraReducers: {
        [getState.pending]: (state, action) => {
            state.loading = true
        },
        [getState.fulfilled]: (state, action) => {
            state.loading = false
            state.state = action.payload
        },

    }
})

// export const {
// } = generalSlice.actions

export default generalSlice.reducer