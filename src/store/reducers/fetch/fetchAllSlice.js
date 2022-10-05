import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAllDragons = createAsyncThunk(
    'fetchAllSlice/fetchAllDragons',
    async (_, { rejectWithValue, dispatch}) => {
        try{
            const response = await axios.get('https://api.spacexdata.com/v4/dragons')
            if(!response.status) {
                throw new Error('Network Error')
            }
            dispatch(setAllInfo(response.data))     
            
        } catch(error) {
            return rejectWithValue(error.message)
        }      
    }
)
export const fetchEachDragon = createAsyncThunk(
    'fetchAllSlice/fetchEachDragon',
    async (id, { rejectWithValue, dispatch}) => {
        try{
            const response = await axios.get(`https://api.spacexdata.com/v4/dragons/${id}`)
            if(!response.status) {
                throw new Error('Network Error')
            }
            dispatch(setEachInfo(response.data))     
            
        } catch(error) {
            return rejectWithValue(error.message)
        }      
    }
)

const fetchAllSlice = createSlice({
    name: 'fetchAll',
    initialState: {
        infoAll: [],
        infoEach: [],
        status: null,
        error: null,
    },
    reducers: {
        setAllInfo(state, action) {
            state.infoAll = action.payload
        },
        setEachInfo(state, action) {
            state.infoEach = [action.payload]
        }
    },
    extraReducers: {
        [fetchAllDragons.pending]: (state) => {
            state.status = 'loading'
            state.error = null
        },
        [fetchAllDragons.fulfilled]: (state) => {
            state.status = 'resolved'
        },
        [fetchAllDragons.rejected]: (state, action) => {
            state.status = 'rejected'
            state.error = action.payload
        },
        [fetchEachDragon.pending]: (state) => {
            state.status = 'loading'
            state.error = null
        },
        [fetchEachDragon.fulfilled]: (state) => {
            state.status = 'resolved'
        },
        [fetchEachDragon.rejected]: (state, action) => {
            state.status = 'rejected'
            state.error = action.payload
        }
    }
})

export default fetchAllSlice.reducer;
export const {setAllInfo, setEachInfo} = fetchAllSlice.actions;