// src/store/index.ts
import { configureStore } from '@reduxjs/toolkit';

import postScheduleReducer from './postSchedulerSlice';

export const store = configureStore({
  reducer: {
    postSchedule: postScheduleReducer, // ✅ now defined
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          'postSchedule/setContent',
          'postSchedule/setMediaFile',
        ],
        ignoredPaths: ['postSchedule.content.mediaFile'],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
