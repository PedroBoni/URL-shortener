import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import routes from './routes';

if(process.env.TS_NODE_DEV){
  dotenv.config();
}

const app = express()

app.use(cors())
app.use(express.json());
app.use("/", routes);


app.listen(3001);