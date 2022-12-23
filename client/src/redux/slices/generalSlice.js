import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import axios from '../../axios'

const initialState = {
    loading: false,
    state: [],
    logo: [],
    sectionData: [],
    banners: [],
    sections: [],
    helplines:[],
    independentBlog: [],
    footers: []
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
        const response =  await axios.get(`/general/logo?is_active=1`)
        return response.data;
    }
)

// get images for banner 
export const getBanners = createAsyncThunk(
    "general/getBanners",
    async(args, {getState}) => {
        const { data } = await axios.get(`/general/landingpage/${1}`)
        // console.log(data);
        return data
    }
)

// for mapping each sections 
export const getSections = createAsyncThunk(
    "general/getSections",
    async(args, {getState}) => {
        const { data } = await axios.get('/general/sectionactivity')
        // console.log(data)
        return data
    }
)
// for mapping each sections data
export const getSectionData = createAsyncThunk(
    "general/getSectionData",
    async(args, {getState}) => {
        const { data } = await axios.get('/general/sectiontour')
        // console.log(data)
        return data
    }
)

// for helpline section
export const getHelplines = createAsyncThunk(
    "general/getHelplines",
    async(args,{getState}) => {
        const { data } = await axios.get('/general/helpline')
        // console.log(data)
        return data
    }
)

// for helpline section
export const getIndependentBlog = createAsyncThunk(
    "general/getIndependentBlog",
    async(args,{getState}) => {
        const { data } = await axios.get('/general/blog')
        // console.log(data)
        return data
    }
)

// for footer section
export const getFooter = createAsyncThunk(
    "general/getFooter",
    async(args,{getState}) => {
        const { data } = await axios.get('/general/footer')
        // console.log(data)
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

        [getSectionData.pending]: (state, action) => {
            state.loading = true
        },
        [getSectionData.fulfilled]: (state, action) => {
            state.loading = false
            state.sectionData = action.payload
        },

        [getHelplines.pending]: (state, action) => {
            state.loading = true
        },
        [getHelplines.fulfilled]: (state, action) => {
            state.loading = false
            state.helplines = action.payload
        },

        [getIndependentBlog.pending]: (state, action) => {
            state.loading = true
        },
        [getIndependentBlog.fulfilled]: (state, action) => {
            state.loading = false
            state.independentBlog = action.payload
        },

        [getFooter.pending]: (state, action) => {
            state.loading = true
        },
        [getFooter.fulfilled]: (state, action) => {
            state.loading = false
            state.footers = action.payload
        },

    }
})

// export const {
// } = generalSlice.actions

export default generalSlice.reducer