import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import axios from '../../axios'

const initialState = {
    loading: false,
    state: [],
    logo: ""
}

export const getState = createAsyncThunk(
    "general/getState",
    async(args, {getState}) => {
        // const { token } = getState().user
        const config = {
            headers: {
              "Content-Type": "application/json",
            //   "Access-Control-Allow-Origin": "*",
            //   "Access-Control-Request-Headers": "Content-Type, Authorization",
            },
          };
        const response =  await axios.get('/general/state',config)
        return response.data;
    }
)
export const getLogo = createAsyncThunk(
    "general/getLogo",
    async(args, {getState}) => {
        // const { token } = getState().user
        // const config = {
        //     headers: {
        //         Authorization: `Bearer ${token}`,
        //       },
        // }
        const response =  await axios.post(`/general/logo/${1}`)
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
        [getLogo.pending]: (state, action) => {
            state.loading = true
        },
        [getLogo.fulfilled]: (state, action) => {
            state.loading = false
            state.logo = action.payload
        },

    }
})

// export const {
// } = generalSlice.actions

export default generalSlice.reducer