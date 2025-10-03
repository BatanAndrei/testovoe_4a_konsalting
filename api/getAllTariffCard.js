import { createAsyncThunk } from '@reduxjs/toolkit';

export const RequestGetAllTariff = createAsyncThunk(
  'TariffCards/getAllTariff',
  async (thunkApi) => {
    const response = await fetch(`https://t-core.fit-hub.pro/Test/GetTariffs`, {
      method: 'GET',
    });

    const data = await response.json();

    if (response.status !== 200) {
      return thunkApi.rejectWithValue({
        message: 'Faild request',
      });
    }

    return data;
  }
);
