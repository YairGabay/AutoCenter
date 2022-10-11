import { createAsyncThunk } from '@reduxjs/toolkit';

import { AuthService } from './Auth.service';

export const validateUser = createAsyncThunk(
  'auth/validateUser',
  async (data: any) => {
    console.log('auth/validateUser');
    const response = await AuthService.validateUser(data);
    return response.data;
  },
);
