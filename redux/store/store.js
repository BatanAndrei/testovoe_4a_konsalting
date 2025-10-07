import { configureStore } from '@reduxjs/toolkit';
import tariffCardSlice from '../slices/tariffCardSlice';

export const makeStore = () => {
  return configureStore({
    reducer: {
      extraAllTariff: tariffCardSlice,
      getColorTimerStars: tariffCardSlice,
    },
  });
};
