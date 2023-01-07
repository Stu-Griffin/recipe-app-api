import { Router, Request, Response } from 'express';
import recipeController from '../../controller/recipe.controller';
import { recipeUpload } from '../../middlewares/upload.middleware';

const router: Router = Router();

router.get(`/`, async (req: Request, res: Response) => recipeController.get(req, res));
router.delete(`/:id`, async (req: Request, res: Response) => recipeController.delete(req, res));
router.get(`/:id`, async (req: Request, res: Response) => recipeController.getOneRecipeById(req, res));
router.get(`/author/:id`, async (req: Request, res: Response) => recipeController.getByAuthor(req, res));
router.put(`/:id`, recipeUpload.single(`image`), async (req: Request, res: Response) => recipeController.put(req, res));
router.post(`/`, recipeUpload.single(`image`), async (req: Request, res: Response) => recipeController.post(req, res));

export default router;