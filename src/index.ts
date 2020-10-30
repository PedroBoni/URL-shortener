import express from 'express';
import cors from 'cors';

import routes from './routes';

if(process.env.TS_NODE_DEV){
  require("dotenv").config();
}

const port = process.env.PORT || 3001;

const app = express()

app.use(cors())
app.use(express.json());
app.use("/", routes);


app.listen(port);