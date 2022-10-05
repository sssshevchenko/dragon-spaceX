import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchFirstDragon = createAsyncThunk(
    'fetchFirst/fetchFirstDragon',
    async (_, { rejectWithValue, dispatch}) => {
        try{
            const response = await axios.get('https://api.spacexdata.com/v4/dragons/5e9d058759b1ff74a7ad5f8f')
            if(!response.status) {
                throw new Error('Network Error')
            }
            dispatch(setFirstInfo(response.data))     
            
        } catch(error) {
            return rejectWithValue(error.message)
        }      
    }
)

const fetchFirstDragonSlice = createSlice({
    name: 'fetchFirst',
    initialState: {
        infoFirst: [],
        status: null,
        error: null,
    },
    reducers: {
        setFirstInfo(state, action) {
            state.infoFirst = [action.payload]
        }
    },
    extraReducers: {
        [fetchFirstDragon.pending]: (state) => {
            state.status = 'loading'
            state.error = null
        },
        [fetchFirstDragon.fulfilled]: (state) => {
            state.status = 'resolved'
        },
        [fetchFirstDragon.rejected]: (state, action) => {
            state.status = 'rejected'
            state.error = action.payload
        }
    }
})

export default fetchFirstDragonSlice.reducer;
export const {setFirstInfo} = fetchFirstDragonSlice.actions;