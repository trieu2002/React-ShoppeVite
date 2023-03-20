import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "../utils/apiURL";
import { STATUS } from '../utils/status';
const initialState = {
    categories: [],
    categoriesStatus: STATUS.IDLE,
    categoryProduct: [],
    categoryProductStatus: STATUS.IDLE
}
export const fetchAsyncCategories = createAsyncThunk(
    "categories/fetch",
    async () => {
        const response = await fetch(`${BASE_URL}products/categories`);
        const data = await response.json();
        return data;
    }

)

const categorySlice = createSlice({
    name: 'categories',
    initialState,
    extraReducers: (buider) => {
        buider.addCase(fetchAsyncCategories.pending, (state, action) => {
            state.categoriesStatus = STATUS.LOADING
        }),
            buider.addCase(fetchAsyncCategories.fulfilled, (state, action) => {
                state.categories = action.payload;
                state.categoriesStatus = STATUS.SUCCEEDED;
            }),
            buider.addCase(fetchAsyncCategories.rejected, (state, action) => {
                state.categoriesStatus = STATUS.FAILED;
            })
    }
})

export default categorySlice.reducer;
