import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import type { PayloadAction } from '@reduxjs/toolkit';

interface Product {
    id: number;
    title: string;
}

interface ProductsState {
    products: Array<Product>
}

const initialState: ProductsState = {
    products: []
};

export const productSlice = createSlice({
    name: "productsData",
    initialState,
    reducers: {
        addProducts: (state: ProductsState, action: PayloadAction<Array<Product>>) => {
            state.products = [...action.payload]
        }
    }
});

export const { addProducts } = productSlice.actions;

export const getProducts = (state: RootState) => state.productsData.products;

export default productSlice.reducer;