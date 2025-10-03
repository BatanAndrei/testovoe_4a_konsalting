import { createAsyncThunk } from '@reduxjs/toolkit';

export const RequestGetAllTariff = createAsyncThunk(
  'tariffCards/RequestGetAllTariff',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `https://t-core.fit-hub.pro/Test/GetTariffs`,
        {
          method: 'GET',
        }
      );

      if (!response.ok) {
        throw new Error('Ошибка при получении тарифов');
      }

      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue({
        message: error.message,
      });
    }
  }
);
