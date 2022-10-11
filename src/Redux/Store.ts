import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import AuthSlice from '../Features/Auth/AuthSlice';
import TaskSlice from '../Features/Task/TaskSlice';

export const store = configureStore({
  reducer: {
    auth: AuthSlice,
    task: TaskSlice,
  },
  devTools: true,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
