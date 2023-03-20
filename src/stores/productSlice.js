import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { STATUS } from '../utils/status';
import { BASE_URL } from "../utils/apiURL";
const initialState = {
    product: [],
    productStatus: STATUS.IDLE,
    productSingle: [],
    productSingleStatus: STATUS.IDLE
}
export const fetchAsyncProduct = createAsyncThunk(
    "product/fetch",
    async (limit) => {
        const reponse = await fetch(`${BASE_URL}products?limit=${limit}`);
        const data = await reponse.json();
        return data;
    }
)
export const fetchAsyncProductSingle = createAsyncThunk(
    "product-single/fetch",
    async (id) => {
        const reponse = await fetch(`${BASE_URL}products/${id}`);
        const data = await reponse.json();
        return data;
    }
)
const productSlice = createSlice({
    name: "product",
    initialState,
    extraReducers: (buider) => {
        buider.addCase(fetchAsyncProduct.pending, (state, action) => {
            state.productStatus = STATUS.IDLE;
        }),
            buider.addCase(fetchAsyncProduct.fulfilled, (state, action) => {
                state.productStatus = STATUS.SUCCEEDED;
                state.product = action.payload;
            }),
            buider.addCase(fetchAsyncProduct.rejected, (state, action) => {
                state.productStatus = STATUS.FAILED;
            })
        buider

            .addCase(fetchAsyncProductSingle.pending, (state, action) => {
                state.productSingleStatus = STATUS.IDLE;
            })
            .addCase(fetchAsyncProductSingle.fulfilled, (state, action) => {
                state.productSingleStatus = STATUS.SUCCEEDED;
                state.productSingle = action.payload;
            })
            .addCase(fetchAsyncProductSingle.rejected, (state, action) => {
                state.productSingleStatus = STATUS.FAILED;
            })
    }
})
export default productSlice.reducer;