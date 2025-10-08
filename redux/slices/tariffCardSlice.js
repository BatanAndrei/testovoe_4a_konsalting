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
    getColorTimerStars: (state, { payload }) => {
      state.colorTimerStars = payload;
    },
    setDiscountHasDisappeared: (state, { payload }) => {
      state.discountHasDisappeared = payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(RequestGetAllTariff.pending, (state) => {
      state.status = 'loading';
      state.error = null;
    });
    builder.addCase(RequestGetAllTariff.fulfilled, (state, { payload }) => {
      state.dataAllTariff = payload;
      state.status = 'succeeded';
    });
    builder.addCase(RequestGetAllTariff.rejected, (state, { payload }) => {
      if (payload) {
        state.error = payload.message;
      } else {
        state.error = error.message;
      }
      state.status = 'failed';
    });
  },
});

export const { getColorTimerStars, setDiscountHasDisappeared } =
  tariffCardSlice.actions;
export default tariffCardSlice.reducer;
