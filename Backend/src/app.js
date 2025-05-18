import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  cors({
    origin: process.env.ORIGIN,
    optionsSuccessStatus: 200,
    credentials: true,
  })
);
app.use(cookieParser());

// routes
import { userRoute } from './routes/User.route.js';
import { tokenRoute } from './routes/Token.route.js';
app.use('/api/v1/user', userRoute);
app.use('/api/v1/token', tokenRoute);

export { app };
