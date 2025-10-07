import { createSlice } from '@reduxjs/toolkit';
import { RequestGetAllTariff } from '../thunks/getAllTariffCard';

const initialState = {
  dataAllTariff: [],
  status: 'idle',
  error: null,
  colorTimerStars: '#FFBB00',
  discountHasDisappeared: false,
};

export const tariffCardSlice = createSlice({
  name: 'tariffCard',
  initialState,
  reducers: {
    getColorTimerStars: (state, action) => {
      state.colorTimerStars = action.payload;
    },
    setDiscountHasDisappeared: (state, action) => {
      state.discountHasDisappeared = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(RequestGetAllTariff.pending, (state) => {
      state.status = 'loading';
      state.error = null;
    });
    builder.addCase(RequestGetAllTariff.fulfilled, (state, { payload }) => {
      state.dataAllTariff = payload;
      state.status = 'idle';
    });
    builder.addCase(RequestGetAllTariff.rejected, (state, { payload }) => {
      if (payload) state.error = payload.message;
      state.status = 'idle';
    });
  },
});

export const { getColorTimerStars, setDiscountHasDisappeared } =
  tariffCardSlice.actions;
export default tariffCardSlice.reducer;
