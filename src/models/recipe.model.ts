import { model, Schema } from 'mongoose';
import { CreateRecipeI } from '../types/recipe.types';

const recipe = new Schema({
	type: { type: String, required: true },
	steps: { type: Array, required: true },
	title: { type: String, required: true },
	image: { type: String, required: true },
	authorId: { type: String, required: true },
	ingredients: { type: Array, required: true },
	authorLogin: { type: String, required: true },
	description: { type: String, required: true },
	rate: { type: Number, required: false, default: 0 },
});

export default model<CreateRecipeI>(`Recipes`, recipe);