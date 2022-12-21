import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import axios from '../../axios'

const initialState = {
    loading: false,
    state: [],
    logo: "",
    banners: [],
    sections: [],
    helplines:[]
}

export const getState = createAsyncThunk(
    "general/getState",
    async(args, {getState}) => {
        const response =  await axios.get('/general/state')
        return response.data;
    }
)

// get single logo for navbar
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

// get images for banner
export const getBanners = createAsyncThunk(
    "general/getBanners",
    async(args, {getState}) => {
        const { data } = await axios.get('/general/landinpage')
        console.log(data);
        return data
    }
)

// for mapping each sections 
export const getSections = createAsyncThunk(
    "general/getSections",
    async(args, {getState}) => {
        const { data } = await axios.get('/general/sectionactivity')
        console.log(data)
        return data
    }
)

// for helpline section
export const getHelplines = createAsyncThunk(
    "general/getHelplines",
    async(args,{getState}) => {
        const { data } = await axios.get('/general/helpline')
        console.log(data)
        return data
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

        [getBanners.pending]: (state, action) => {
            state.loading = true
        },
        [getBanners.fulfilled]: (state, action) => {
            state.loading = false
            state.banners = action.payload
        },

        [getSections.pending]: (state, action) => {
            state.loading = true
        },
        [getSections.fulfilled]: (state, action) => {
            state.loading = false
            state.sections = action.payload
        },

        [getHelplines.pending]: (state, action) => {
            state.loading = true
        },
        [getHelplines.fulfilled]: (state, action) => {
            state.loading = false
            state.helplines = action.payload
        },

    }
})

// export const {
// } = generalSlice.actions

export default generalSlice.reducer