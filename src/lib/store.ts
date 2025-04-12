import { configureStore } from '@reduxjs/toolkit';
import { recipesSlice } from './features/recipes/recipesSlice';

export const makeStore = () => {
	return configureStore({
	  	reducer: {
			recipes: recipesSlice.reducer
		}
	});
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];