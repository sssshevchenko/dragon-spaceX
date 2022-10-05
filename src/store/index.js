import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authSlice from "./reducers/auth/authSlice";
import fetchAllSlice from "./reducers/fetch/fetchAllSlice";
import fetchFirstDragonSlice from "./reducers/fetch/fetchFirstDragonSlice";


const rootReducer = combineReducers({
    auth: authSlice,
    fetchFirst: fetchFirstDragonSlice,
    fetchAll: fetchAllSlice
})

export const store = configureStore({
    reducer: rootReducer
})