import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./features/counter/counterSlice";
import categorySlice from "./features/category/categorySlice";
import peoductsSlice from "./features/product/peoducts.Slice";
import TodoSlice from "./features/todo/TodoSlice";

export const store = configureStore({
    reducer: {
        counter: counterSlice,
        category: categorySlice,
        product: peoductsSlice,
        todos: TodoSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;