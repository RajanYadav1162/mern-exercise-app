import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

//...express middleware.....
app.use(cors());
app.use(express.json());

//......starting mongodb atlast connection .......

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });

const connection = mongoose.connection;
connection.once('open', () => {
  console.log('mongoDB database connection established successfully!');
});

app.listen(PORT, (req, res) => {
  console.log(`server is running at port: ${PORT}`);
});
