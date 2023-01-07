import { Response, Request } from 'express';
import UserServices from '../services/user.services';
import tryCatchMiddleware from '../middlewares/try.catch.middleware';

interface MulterRequest extends Request {
  file: any;
}

export class UserController {
	constructor(private userService: UserServices) {}
	async getOneUserById(req: Request, res: Response) {
		tryCatchMiddleware(req, res, this.userService.findOneUserById(req.params.id));
	}
	async put(req: Request, res: Response) {
		tryCatchMiddleware(req, res, this.userService.changeUser(req.params.id, {
			login: req.body.login,
			email: req.body.email,
			avatar: `assets/avatars/${(req as MulterRequest)[`file`]?.filename}`,
			password: req.body.password
		}));
	}
	async signInUser(req: Request, res: Response) {
		tryCatchMiddleware(req, res, this.userService.signInUser({
			email: req.body.email,
			password: req.body.password
		}));
	}
	async signUpUser(req: Request, res: Response) {
		tryCatchMiddleware(req, res, this.userService.signUpUser({
			email: req.body.email,
			password: req.body.password,
			login: req.body.login
		}));
	}
	async delete(req: Request, res: Response) {
		tryCatchMiddleware(req, res, this.userService.deleteUser(req.params.id));
	}
}

const userController = new UserController(new UserServices());

export default userController;