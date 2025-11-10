import{configureStore}from'@reduxjs/toolkit'
import apiSlice from'./Slice/api'
export const store = configureStore({
    reducer:{
     api:apiSlice,
    },
})