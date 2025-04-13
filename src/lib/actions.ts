import { Recipe } from '@/models/recipes';

export const setRecipes = (recipes: Recipe[]) => ({
    type: 'recipes/set',
    payload: recipes
});

export const updateRecipe = (recipe: Recipe) => ({
    type: 'recipes/updateRecipe',
    payload: recipe
});

export const setDarkMode = (isDarkModeOn: boolean) => ({
    type: 'darkMode/set',
    payload: isDarkModeOn
});