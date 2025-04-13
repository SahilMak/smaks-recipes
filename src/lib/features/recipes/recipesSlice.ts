import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Recipe } from '@/models/recipes';

interface RecipesState {
	list: Recipe[]
};

const initialState: RecipesState = {
    list: []
};

export const recipesSlice = createSlice({
    name: 'recipes',
    initialState: initialState,
    reducers: {
        set: (state, action: PayloadAction<Recipe[]>) => {
            state.list = action.payload;
        },
        updateRecipe: (state, action: PayloadAction<Recipe>) => {
            state.list.forEach((recipe) => {
                if (recipe.name === action.payload.name) {
                    recipe.ingredients = action.payload.ingredients;
                }
            });
        }
    }
});

export default recipesSlice.reducer;