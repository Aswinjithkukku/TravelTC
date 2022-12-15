import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import axios from '../../axios'

const initialState = {
    loading: false,
    moreDestinations: [],
    excursions: [],
    enquiryExcursion: []
}

export const getMoreDestinations = createAsyncThunk(
    "excursion/getMoreDestinations",
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
export const getExcursions = createAsyncThunk(
    "excursion/getExcursions",
    async(args, {getState}) => {
        // const { token } = getState().user
        // const config = {
        //     headers: {
        //         Authorization: `Bearer ${token}`,
        //       },
        // }
        const response =  await axios.get('/tour/exe')
        return response.data;
    }
)



const excursionSlice = createSlice({
    name: "excursion",
    initialState,
    extraReducers: {
        [getMoreDestinations.pending]: (state, action) => {
            state.loading = true
        },
        [getMoreDestinations.fulfilled]: (state, action) => {
            state.loading = false
            state.moreDestinations = action.payload
        },
        [getExcursions.pending]: (state, action) => {
            state.loading = true
        },
        [getExcursions.fulfilled]: (state, action) => {
            state.loading = false
            state.excursions = action.payload
        },
    }
})

// export const {
// } = excursionSlice.actions

export default excursionSlice.reducer