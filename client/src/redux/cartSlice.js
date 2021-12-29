import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  products: [],
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
      quantity: data.quantity,
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
    });
  },
});

export const { removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
