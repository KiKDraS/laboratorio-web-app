import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchProducts } from "./productsAPI";
import { updateProductQuantity } from "../../utils/updateProductQuantity";

const initialState = {
  isLoading: true,
  products: [],
  productsToShow: [],
  selectProduct: null,
};

export const getProducts = createAsyncThunk(
  "products/fetchProducts",
  async (API_ENDPOINT) => {
    try {
      // const response = await fetchProducts(API_ENDPOINT);
      // const data = await response.json();
      // return data;
      return await fetchProducts(API_ENDPOINT);
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
    addOneToSelectedProduct: (state) => {
      state.selectProduct.quantity = state.selectProduct.quantity + 1;
      updateProductQuantity(
        `${state.selectProduct.id}-modalQuantity`,
        state.selectProduct.quantity
      );
    },
    removeOneFromSelectedProduct: (state) => {
      state.selectProduct.quantity = state.selectProduct.quantity - 1;
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

export const {
  setSelectProduct,
  addOneToSelectedProduct,
  removeOneFromSelectedProduct,
  clearSelectProduct,
} = productsSlice.actions;

export const productsReducer = productsSlice.reducer;
