import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
//action
export const fetchApi = createAsyncThunk('fetchApi', async (payload, {rejectWithValue}) => {
    try {
        console.log("calling api");
        const response = await fetch('https://jsonplaceholder.typicode.com/todos')        
        return response.json()
    } catch (error) {
        console.error("error", error);
        
        return rejectWithValue(error.message);
    }

})
const apiSlice = createSlice({
    name: 'api',
    initialState: {
        isLoading: false,
        data: [],
        error: null,
    },

    extraReducers: (builder) => {
        builder.addCase(fetchApi.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(fetchApi.rejected, (state, action) => {
            state.error = true;
            state.data = action.payload;
        })
        builder.addCase(fetchApi.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        })
    }
})
export default apiSlice.reducer;
