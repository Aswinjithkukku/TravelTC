import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import axios from '../../axios'

const initialState = {
    loading: false,
    Home: {},
    topAttractions: [],
    bestSellingAttractions: []
}

// export const getState = createAsyncThunk(
//     "general/getState",
//     async(args, {getState}) => {
//         const response =  await axios.get('/general/state')
//         return response.data;
//     }
// )

// get single logo for navbar
export const getHome = createAsyncThunk(
    "general/getHome",
    async(args, {getState}) => {
        // const { token } = getState().user
        // const config = {
        //     headers: {
        //         Authorization: `Bearer ${token}`,
        //       },
        // }
        const response =  await axios.get(`/home/`)
        return response.data;
    }
)



const generalSlice = createSlice({
    name: "general",
    initialState,
    extraReducers: {
        [getHome.pending]: (state, action) => {
            state.loading = true
        },
        [getHome.fulfilled]: (state, action) => {
            state.loading = false
            state.home = action.payload?.home
            state.topAttractions = action.payload?.topAttractions
            state.bestSellingAttractions = action.payload?.bestSellingAttractions
        },

    }
})

// export const {
// } = generalSlice.actions

export default generalSlice.reducer