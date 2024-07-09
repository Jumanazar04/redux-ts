import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./features/counter/counterSlice";
import categorySlice from "./features/category/categorySlice";

export const store = configureStore({
    reducer: {
        counter: counterSlice,
        category: categorySlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;