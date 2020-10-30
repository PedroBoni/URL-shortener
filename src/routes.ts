import express from 'express';
import UrlController from './controller/UrlController';

const routes = express.Router();

routes.post("/shorten", UrlController.store);
routes.get("/:id", UrlController.show);
routes.get("/", UrlController.index)
export default routes;