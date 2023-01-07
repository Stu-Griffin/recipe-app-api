export interface CreateRecipeI {
	type: string;
	steps: string;
	title: string;
	rate?: number;
	image: string;
	authorId: string;
	description: string;
	ingredients: string;
	authorLogin: string;
}
export interface EditRecipeI {
	rate: number;
	steps: string;
	title: string;
	description: string;
	ingredients: string;
	image: string|undefined;
}
export interface imageFile {
	path: string;
	size: number;
	encoding: string;
	mimetype: string;
	filename: string;
	fieldname: string;
	destination: string;
	originalname: string;
}