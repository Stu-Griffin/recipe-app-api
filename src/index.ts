import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import AppRouter from './routes/';
import bodyParser from 'body-parser';
import connectDB from './config/connectDB';

const app = express();
const router = new AppRouter(app);

app.use(bodyParser.json());
app.use(`/assets`, express.static(`assets`));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors({origin: `*`, methods: [`GET`, `POST`, `PUT`, `DELETE`]}));

connectDB();
router.init();

app.listen(process.env.PORT, (): void => console.log(`Server Running!\nBy this link http://127.0.0.1:${process.env.PORT}/`));