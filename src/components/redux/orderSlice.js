import { createSlice } from '@reduxjs/toolkit';

const orderSlice = createSlice({
  name: 'orders',
  initialState: { status: 'Processing', orderId: null },
  reducers: {
    trackOrder: (state, action) => {
      state.status = action.payload.status;
      state.orderId = action.payload.orderId;
    },
  },
});

export const { trackOrder } = orderSlice.actions;
export default orderSlice.reducer;
