import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.quantity += parseInt(action.payload.selectedQuantity);
      state.products.push(action.payload);
      state.total +=
        action.payload.price.$numberDecimal * action.payload.selectedQuantity;
    },
  },
});

export const { addProduct } = cartSlice.actions;
export default cartSlice.reducer;
