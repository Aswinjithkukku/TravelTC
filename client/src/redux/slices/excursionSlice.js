import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import axios from '../../axios'

const initialState = {
    loading: false,
    moreDestinations: []
}

export const getMoreDestinations = createAsyncThunk(
    "excursion/getMoreDestinations",
    async(dispatch, {getState}) => {
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
    }
})

// export const {
// } = excursionSlice.actions

export default excursionSlice.reducer