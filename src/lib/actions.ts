import { Recipe } from '@/models/recipes';

export const setRecipes = (recipes: Recipe[]) => ({
    type: 'recipes/set',
    payload: recipes
});