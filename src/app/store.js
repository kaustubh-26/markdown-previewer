import { configureStore } from '@reduxjs/toolkit';
import priviewReducer from '../features/preview/previewSlice';

export const store = configureStore({
  reducer: priviewReducer,
});
