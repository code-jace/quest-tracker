import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import authRouter from './routes/auth'; // Import the authRouter module
import questsRouter from './routes/quest.routes'; // Import the questsRouter module
import adventuresRouter from './routes/adventure.routes';

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors({ origin: 'http://localhost:4200' }));
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/quest-tracker', {
});

const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});

// Routes


app.use('/api/auth', authRouter);
app.use('/api/quests', questsRouter);
app.use('/api/adventures', adventuresRouter);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});