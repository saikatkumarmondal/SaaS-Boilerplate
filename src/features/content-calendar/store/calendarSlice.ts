import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import type { CalendarPost } from '../types/calendar.types';

type CalendarState = {
  posts: CalendarPost[];
};

const initialState: CalendarState = {
  posts: [],
};

const calendarSlice = createSlice({
  name: 'calendar',
  initialState,
  reducers: {
    addPost(state, action: PayloadAction<CalendarPost>) {
      state.posts.push(action.payload);
    },
  },
});

export const { addPost } = calendarSlice.actions;
export default calendarSlice.reducer;
