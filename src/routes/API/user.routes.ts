import { Router, Request, Response } from 'express';
import userController from '../../controller/user.controller';
import { avatarUpload } from '../../middlewares/upload.middleware';


const router: Router = Router();

router.delete(`/:id`, async (req: Request, res: Response) => userController.delete(req, res));
router.get(`/:id`, async (req: Request, res: Response) => userController.getOneUserById(req, res));
router.post(`/sign-in`, async (req: Request, res: Response) => userController.signInUser(req, res));
router.post(`/sign-up`, async (req: Request, res: Response) => userController.signUpUser(req, res));
router.put(`/:id`, avatarUpload.single(`avatar`), async (req: Request, res: Response) => userController.put(req, res));

export default router;