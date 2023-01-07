import 'dotenv/config';
import mongoose from 'mongoose';

const connectDB = async () => {
	try {
		mongoose.set(`strictQuery`, true);
		if(process.env.URL) {
			await mongoose.connect(`mongodb+srv://adminus:1234567890@cluster0.1uyhaqy.mongodb.net/?retryWrites=true&w=majority`);
			console.log(`Connected to DB`);
		} else {
			console.log(`You forgot add dotenv's variables`);
		}
	} catch(e: unknown) {
		console.log(e);
	}
};

export default connectDB;