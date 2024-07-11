import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

export interface Product {
    name: string;
    image: string;
}

interface DataState {
    value: Product[];
    isLoading: boolean;
    isError: boolean;
}

const initialState: DataState = {
    value: [],
    isLoading: false,
    isError: false,
};

export const fetchData = createAsyncThunk<Product[]>('data/fetchData', async () => {
    const res = await axios.get('https://ecommerce-backend-fawn-eight.vercel.app/api/products');
    return res.data;  
});

const productSlice = createSlice({
    name: 'data',  
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchData.pending, (state) => {
                state.isLoading = true;
                state.isError = false; 
            })
            .addCase(fetchData.fulfilled, (state, action: PayloadAction<Product[]>) => {
                state.isLoading = false;
                state.value = action.payload;  
            })
            .addCase(fetchData.rejected, (state) => {
                state.isLoading = false;
                state.isError = true;
            });
    },
});

export default productSlice.reducer;
