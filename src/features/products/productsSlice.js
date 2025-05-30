import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_ENDPOINT } from "../../constants/API_ENDPOINT";

const initialState = {
  isLoading: true,
  products: [],
  productsToShow: [],
  selectProduct: null,
};

export const getProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    try {
      const response = await fetch(API_ENDPOINT);
      const data = await response.json();

      return data.map((el) => ({ ...el, quantity: 1 }));
    } catch (error) {
      console.error("Failed to fetch products:", error);
    }
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setSelectProduct: (state, { payload: productId }) => {
      state.selectProduct = state.products.find(
        (item) => item.id === productId
      );
    },
    clearSelectProduct: (state) => {
      state.selectProduct = null;
    },
    setProductsToShow: (state, { payload: query }) => {
      if (!query) {
        state.productsToShow = state.products;
        return;
      }

      state.productsToShow = state.products.filter((product) =>
        product.title.toLowerCase().includes(query.toLowerCase())
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProducts.fulfilled, (state, { payload: products }) => {
        state.isLoading = false;
        state.products = products;
        state.productsToShow = products;
      })
      .addCase(getProducts.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { setSelectProduct, setProductsToShow, clearSelectProduct } =
  productsSlice.actions;

export const productsReducer = productsSlice.reducer;
