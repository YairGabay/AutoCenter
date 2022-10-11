import { createSlice } from '@reduxjs/toolkit';

interface TaskState {
  type: string;
  loading: boolean;
  error: string;
}
const initialState: TaskState = {
  type: '',
  loading: false,
  error: '',
};

const TaskSlice = createSlice({
  name: 'Task',
  initialState,
  reducers: {
    somefunc: () => {},
  },
});

export const { somefunc } = TaskSlice.actions;
export default TaskSlice.reducer;
