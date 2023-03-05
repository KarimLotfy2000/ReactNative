import { configureStore } from '@reduxjs/toolkit';
import notificationsReducer from './notificationsSlice';

const store = configureStore({
  reducer: {
    notifications: notificationsReducer,
  },
});

export default store;