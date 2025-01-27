import { Ingredient } from "./ingredients";

export interface Recipe {
    cookware: string[];
    cuisine?: string;
    description?: string;
    directions: string[];
    image: string;
    ingredients: RecipeIngredient[];
    meal: string;
    name: string;
    preparations?: string[];
    servings: number;
}

interface RecipeIngredient {
    amount?: number | string;
    ingredient?: Ingredient;
    items?: RecipeIngredient[];
    name?: string;
    optional?: boolean;
    preparation?: string;
    size?: string;
    substitutes?: string[];
    unit?: string;
}