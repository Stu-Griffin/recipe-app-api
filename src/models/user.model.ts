import { model, Schema } from 'mongoose';
import { UserI } from '../types/user.types';

const user = new Schema({
	login: { type: String, required: true },
	email: { type: String, required: true },
	password: { type: String, required: true },
	avatar: { type: String, required: false, default: `assets/avatars/avatar.png` },
});

export default model<UserI>(`Users`, user);