/* eslint-disable no-empty-pattern */
import { createSlice } from '@reduxjs/toolkit';
import { validateUser } from './Thunks';

interface AuthState {
  userName: string;
  password: string;
  loading: boolean;
  error: string;
  users: [];
}

const initialState: AuthState = {
  userName: '',
  password: '',
  loading: false,
  error: '',
  users: [],
};
const extraReducres = {
  [validateUser.pending.type]: (state: any) => {
    state.loading = true;
  },
  [validateUser.fulfilled.type]: (state: any, { payload }: any) => {
    console.log(state, payload);
    state.loading = false;
    state.users = payload;
    state.error = '';
  },
  [validateUser.rejected.type]: (state: any, action: any) => {
    console.log(state, action);
    state.loading = false;
    state.error = action.error.message ?? 'Something went wrong';
  },
};

const AuthSlice = createSlice({
  name: 'Auth',
  initialState,
  reducers: {},
  extraReducers: {
    ...extraReducres,
  },
});

export const {} = AuthSlice.actions;
export default AuthSlice.reducer;
