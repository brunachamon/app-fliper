import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import summaryReducer from '../slices/summary';

export const store = configureStore({
  reducer: {
    summary: summaryReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
