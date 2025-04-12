import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Recipe } from '@/models/recipes';

interface RecipeState {
	items: Recipe[]
};

const initialState: RecipeState = {
    items: []
};

export const recipesSlice = createSlice({
    name: 'recipes',
    initialState: initialState,
    reducers: {
        set: (state, action: PayloadAction<Recipe[]>) => {
            state.items = action.payload;
        },
        updateRecipe: (state, action: PayloadAction<Recipe>) => {
            state.items.forEach((recipe) => {
                if (recipe.name === action.payload.name) {
                    recipe.ingredients = action.payload.ingredients;
                }
            });
        }
    }
});

export default recipesSlice.reducer;