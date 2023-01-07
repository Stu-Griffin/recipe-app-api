import bcrypt from 'bcrypt';
import { UserI } from '../types/user.types';
import UserModel from '../models/user.model';

class UserServices {
	async findOneUserById(id: string) {
		const result = await UserModel.findOne({_id: id});
		return ({
			status: 200,
			data: result
		});
	}
	async signInUser(user: UserI) {
		const {email, password} = user;
		const result = await UserModel.findOne({email: email});
		if (!result) {
			return({
				status: 404,
				data: `User not found`
			});
		}
		// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
		const isPassValid = bcrypt.compareSync(password, result.password!);
		if (!isPassValid) {
			return({
				status: 400,
				data: `Invalid password`
			});
		}
		return({
			status: 200,
			data: result[`_id`]
		});
	}
	async signUpUser(user: UserI) {
		const {email, password, login} = user;
		const result = await UserModel.findOne({email: email});
		if (result) {
			return({
				status: 404,
				data: `User with email: ${email} allready existed`
			});
		}
		const hashPassword = await bcrypt.hash(password, 5);
		await UserModel.create({
			email: email,
			password: hashPassword,
			login: login
		});
		return({
			status: 200,
			data: `User was created`
		});
	}
	async changeUser(id: string, user: UserI) {
		const { password, avatar } = user;
		if(avatar?.split(`/`).reverse()[0] === `undefined`) {
			user.avatar = undefined;
		}
		if(password) {
			const hashPassword = await bcrypt.hash(password, 5);
			user.password = hashPassword;
		}
		await UserModel.updateOne({ _id: id }, user);
		if(avatar?.split(`/`).reverse()[0] === `undefined`) {
			return({
				status: 200,
				data: `Changes were saved`
			});
		} else {
			return({
				status: 200,
				data: avatar
			});
		}
	}
	async deleteUser(id: string) {
		await UserModel.deleteOne({_id: id});
		return ({
			status: 200,
			data: `User was deleted`
		});
	}
}

export default UserServices;