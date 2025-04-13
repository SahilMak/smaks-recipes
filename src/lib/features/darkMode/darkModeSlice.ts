import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface DarkModeState {
    on: boolean
};

const initialState: DarkModeState = {
    on: false
};

export const darkModeSlice = createSlice({
    name: 'darkMode',
    initialState: initialState,
    reducers: {
        set: (state, action: PayloadAction<boolean>) => {
            state.on = action.payload;
        }
    }
});

export default darkModeSlice.reducer;