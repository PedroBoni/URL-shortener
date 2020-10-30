import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import routes from './routes';

if(process.env.TS_NODE_DEV){
  dotenv.config();
}
const port = process.env.PORT || 3001;

const app = express()

app.use(cors())
app.use(express.json());
app.use("/", routes);


app.listen(port);