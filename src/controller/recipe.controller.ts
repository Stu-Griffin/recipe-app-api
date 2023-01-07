import { Response, Request } from 'express';
import RecipeServices from '../services/recipe.services';
import tryCatchMiddleware from '../middlewares/try.catch.middleware';

interface MulterRequest extends Request {
  file: any;
}

export class RecipeController {
	constructor(private userService: RecipeServices) {}
	async getOneRecipeById(req: Request, res: Response) {
		tryCatchMiddleware(req, res, this.userService.findOneRecipeById(req.params.id));
	}
	async get(req: Request, res: Response) {
		const type = req.query.type?.toString();
		const page = req.query.page?.toString();
		if(type && page) {
			tryCatchMiddleware(req, res, this.userService.findRecipes(type, page));
		} else {
			res.send({
				status: 404,
				data: `Enter type as a query params`
			});
		}
	}
	async getByAuthor (req: Request, res: Response) {
		tryCatchMiddleware(req, res, this.userService.findRecipesByAuthor(req.params.id));
	}
	async post(req: Request, res: Response) {
		tryCatchMiddleware(req, res, this.userService.createRecipe({
			type: req.body.type,
			title: req.body.title,
			authorId: req.body.authorId,
			steps: req.body.steps.split(`,`),
			authorLogin: req.body.authorLogin,
			description: req.body.description,
			ingredients: req.body.ingredients.split(`,`),
			image: `assets/recipes/${(req as MulterRequest)[`file`]?.filename}`,
		}));
	}
	async put(req: Request, res: Response) {
		tryCatchMiddleware(req, res, this.userService.changeRecipe(req.params.id, {
			rate: req.body.rate,
			title: req.body.title,
			steps: req.body.steps.split(`,`),
			description: req.body.description,
			ingredients: req.body.ingredients.split(`,`),
			image: `assets/recipes/${(req as MulterRequest)[`file`]?.filename}`,
		}));
	}
	async delete(req: Request, res: Response) {
		tryCatchMiddleware(req, res, this.userService.deleteRecipe(req.params.id));
	}
}

const recipeController = new RecipeController(new RecipeServices());

export default recipeController;