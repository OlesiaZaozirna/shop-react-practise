import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

import { BASE_URL } from "../../utils/constants";

export const getCategories = createAsyncThunk(
  "categories/getCategories",
  async (_, thunkAPI) => {
    try {
      const res = await axios(`${BASE_URL}/categories`);
      const categoryNames = [
        "Clothes",
        "Electronics",
        "Furniture",
        "Shoes",
        "Miscellaneous",
      ];
      const categories = res.data.filter((category) =>
        categoryNames.includes(category.name)
      );
      return categories;

      return categories;
    } catch (err) {
      console.log(err);
      return thunkAPI.rejectWithValue(err);
    }
  }
);

const categoriesSlice = createSlice({
  name: "categories",
  initialState: {
    list: [],
    isLoading: false,
  },
  extraReducers: (builder) => {
    builder.addCase(getCategories.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getCategories.fulfilled, (state, { payload }) => {
      state.list = payload;
    });
    builder.addCase(getCategories.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export default categoriesSlice.reducer;
