import { createSlice } from '@reduxjs/toolkit';
import { RequestGetAllTariff } from '../../api/getAllTariffCard';

const initialState = {
  dataAllTariff: [],
  status: 'idle',
  error: null,
};

export const tariffCardSlice = createSlice({
  name: 'tariffCard',
  initialState,
  reducers: {},

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

export const { allTariff } = tariffCardSlice.actions;
export default tariffCardSlice.reducer;
