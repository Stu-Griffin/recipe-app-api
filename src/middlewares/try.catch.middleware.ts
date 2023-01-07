import { Response, Request } from 'express';

export async function tryCatchMiddlewareNotAPI(calback: unknown, successMsg: string) {
	try {
		await calback;
		console.log(successMsg);
	} catch (err) {
		console.log(err);
	}
}

export default async function tryCatchMiddlewareAPI(req: Request, res: Response, calback: unknown) {
	try {
		const response = await calback;
		res.status(200);
		res.send(response);
	} catch (err) {
		console.log(err);
		res.status(500).json({ error: `by the method ${req.method}, on path ${req.path} was error` });
	}
}