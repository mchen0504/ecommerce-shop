import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  products: [],
  total: 0,
};

export const addToCart = createAsyncThunk(
  "cart/addToCart",
  async ({ id, selectedSize, selectedColor, selectedQuantity }) => {
    const { data } = await axios.get(
      `http://localhost:5000/api/products/${id}`
    );
    const payload = {
      id: data._id,
      title: data.title,
      src: data.src,
      price: data.price.$numberDecimal,
      qtyInStock: data.qtyInStock,
      size: selectedSize,
      color: selectedColor,
      qty: selectedQuantity,
    };
    return payload;
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    removeFromCart(state, action) {
      state.products = state.products.filter(
        (existedProduct) => existedProduct.id !== action.payload
      );
      state.total = state.products.reduce(
        (price, product) => product.price * product.qty + price,
        0
      );
    },
    editCart(state, action) {
      const product = action.payload;
      const existed = state.products.find(
        (existedProduct) =>
          existedProduct.id === product.id &&
          existedProduct.size === product.size &&
          existedProduct.color === product.color
      );
      existed.qty = Number(product.qty);
      state.total = state.products.reduce(
        (price, product) => product.price * product.qty + price,
        0
      );
    },
    resetCart(state) {
      state.products = [];
      state.total = 0;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addToCart.fulfilled, (state, action) => {
      const product = action.payload;
      const existed = state.products.find(
        (existedProduct) =>
          existedProduct.id === product.id &&
          existedProduct.size === product.size &&
          existedProduct.color === product.color
      );
      if (existed) {
        existed.qty += Number(product.qty);
      } else {
        state.products.push(product);
      }
      state.total = state.products.reduce(
        (price, product) => product.price * product.qty + price,
        0
      );
    });
  },
});

export const { removeFromCart, editCart, resetCart } = cartSlice.actions;
export default cartSlice.reducer;
