import { DocumentData } from "firebase/firestore/lite";
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

export interface RecipeIngredient {
    amount?: number | string;
    ingredient?: Ingredient | DocumentData;
    items?: RecipeIngredient[];
    name?: string;
    optional?: boolean;
    preparation?: string;
    size?: string;
    substitutes?: string[];
    unit?: string;
}