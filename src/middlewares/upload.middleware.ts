import multer from "multer";
import path from "node:path";

const avatarStorage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, `assets/avatars`);
	},
	filename: (req, file, cb) => {
		const imageName = `AVATAR${Date.now()}${path.extname(file.originalname)}`;
		cb(null, imageName);
		return imageName;
	}
});

const recipeStorage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, `assets/recipes`);
	},
	filename: (req, file, cb) => {
		const imageName = `RECIPE${Date.now()}${path.extname(file.originalname)}`;
		cb(null, imageName);
		return imageName;
	}
});

export const avatarUpload = multer({
	storage: avatarStorage
});

export const recipeUpload = multer({
	storage: recipeStorage
});