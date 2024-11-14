import express from 'express';
import { bookRouter } from './bookRoutes';

export const routes = express.Router();

routes.use('/api/books', bookRouter);