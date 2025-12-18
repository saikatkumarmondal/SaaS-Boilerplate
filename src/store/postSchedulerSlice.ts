// postScheduleSlice.ts
import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

export type PostContent = {
  textContent: string;
  mediaFile: File | null;
  postTime: string;
};

type PostScheduleState = {
  content: PostContent;
};

const initialState: PostScheduleState = {
  content: {
    textContent: '',
    mediaFile: null,
    postTime: '',
  },
};

const postScheduleSlice = createSlice({
  name: 'postSchedule',
  initialState,
  reducers: {
    setContent: (state, action: PayloadAction<PostContent>) => {
      state.content = action.payload;
    },
    setTextContent: (state, action: PayloadAction<string>) => {
      state.content.textContent = action.payload;
    },
    setMediaFile: (state, action: PayloadAction<File | null>) => {
      state.content.mediaFile = action.payload;
    },
    setPostTime: (state, action: PayloadAction<string>) => {
      state.content.postTime = action.payload;
    },
    resetContent: (state) => {
      state.content = initialState.content;
    },
  },
});

export const {
  setContent,
  setTextContent,
  setMediaFile,
  setPostTime,
  resetContent,
} = postScheduleSlice.actions;

export default postScheduleSlice.reducer;
