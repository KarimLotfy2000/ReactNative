import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  sms: false,
  push: false,
  email: false,
};

export const notificationsSlice = createSlice({
  name: 'notifications',

  initialState,

  reducers: {
    toggleSMS: (state, action) => {
      state.sms = (action.payload);
    },
    togglePush: (state, action) => {
      state.push = (action.payload);
    },
    toggleEmail: (state, action) => {
      state.email = (action.payload);
    },
  },
});

export const { toggleSMS, togglePush, toggleEmail } = notificationsSlice.actions;

export default notificationsSlice.reducer;