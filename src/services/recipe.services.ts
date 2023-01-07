import RecipeModel from '../models/recipe.model';
import { CreateRecipeI, EditRecipeI } from '../types/recipe.types';

class RecipeServices {
	async findOneRecipeById(id: string) {
		const result = await RecipeModel.findOne({_id: id});
		return({
			status: 200,
			data: result
		});
	}
	async findRecipes(type: string, page: string) {
		const result = await RecipeModel.find({type: type}).skip((+page - 1) * 10).limit(8);
		return({
			page,
			status: 200,
			data: result
		});
	}
	async findRecipesByAuthor(id: string) {
		const result = await RecipeModel.find({authorId: id});
		return({
			status: 200,
			data: result
		});
	}
	async createRecipe(recipe: CreateRecipeI) {
		const result = await RecipeModel.create({...recipe});
		return({
			status: 200,
			data: result
		});
	}
	async changeRecipe(id: string, recipe: EditRecipeI) {
		if(recipe.image?.split(`/`).reverse()[0] === `undefined`) {
			recipe.image = undefined;
		}
		const result = await RecipeModel.updateOne({ _id: id }, recipe);
		return({
			status: 200,
			data: result
		});
	}
	async deleteRecipe(id: string) {
		const result = await RecipeModel.deleteOne({_id: id});
		return({
			status: 200,
			data: result
		});
	}
}

export default RecipeServices;