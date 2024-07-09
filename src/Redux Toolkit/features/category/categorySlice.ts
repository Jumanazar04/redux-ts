import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

interface Category {
    id: string;
    name: string;
    image: string;
}

interface DataState {
    value: Category[];
    isLoading: boolean;
    isError: boolean;
}

const initialState: DataState = {
    value: [],
    isLoading: false,
    isError: false,
};

export const fetchData = createAsyncThunk<Category[]>('data/fetchData', async () => {
    const res = await axios.get('https://ecommerce-backend-fawn-eight.vercel.app/api/categories');
    return res.data;  
});

const dataSlice = createSlice({
    name: 'data',  
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchData.pending, (state) => {
                state.isLoading = true;
                state.isError = false; 
            })
            .addCase(fetchData.fulfilled, (state, action: PayloadAction<Category[]>) => {
                state.isLoading = false;
                state.value = action.payload;  
            })
            .addCase(fetchData.rejected, (state) => {
                state.isLoading = false;
                state.isError = true;
            });
    },
});

export default dataSlice.reducer;
