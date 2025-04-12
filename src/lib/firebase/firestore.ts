import {
	collection,
	DocumentData,
	getDoc,
	getDocs,
	orderBy,
	query,
	QuerySnapshot
} from 'firebase/firestore';
import { db } from './firebaseApp';
import { getImageUrl } from './storage';
import { Recipe, RecipeIngredient } from '@/models/recipes';
import { Ingredient } from '@/models/ingredients';

const recipesRef = collection(db, "recipes");

export const getAllRecipes = async (): Promise<Recipe[]> => {
	let allRecipes: Recipe[] = [];
	if (recipesRef) {
		const recipesQuery = query(recipesRef, orderBy("name", "asc"));
		try {
			const querySnap = await getDocs(recipesQuery);
			allRecipes = await getRecipeImage(querySnap);
		} catch (e) {
			console.log("Error getting all recipes: ", e);
		}
	} else {
		console.log("Error with collection: ", recipesRef);
	}
	return allRecipes;
};

const getRecipeImage = async (recipeQuery: QuerySnapshot<DocumentData, DocumentData>): Promise<Recipe[]> => {
	const recipes: Recipe[] = [];
	for (const recipe of recipeQuery.docs) {
		if (recipe) {
			const recipeData = (recipe.data() as Recipe);
			recipeData.image = await getImageUrl(recipeData.image);
			recipes.push(recipeData);
		} else {
			console.log("Error with recipe: ", recipe);
		}
	}
	return recipes;
};

export const getIngredients = async (recipe: Recipe): Promise<void> => {
	for (const recipeIngredient of recipe.ingredients) {
		if (Object.keys(recipeIngredient).includes("items")) {
			for (const items of recipeIngredient.items as RecipeIngredient[]) {
				items.ingredient = await getIngredient(items.ingredient);
			}
		} else if (Object.keys(recipeIngredient).includes("ingredient")) {
			recipeIngredient.ingredient = await getIngredient(recipeIngredient.ingredient);
		} else {
			console.log("Error with recipe ingredient: ", recipeIngredient);
		}
	}
};

const getIngredient = async (ingredientRef: any): Promise<Ingredient> => {
	let ingredient: Ingredient = {} as Ingredient;
	try {
		let docSnap = await getDoc(ingredientRef);
		ingredient = docSnap.data() as Ingredient;
	} catch (e) {
		console.log("Error getting ingredient: ", e);
	}
	return ingredient;
};