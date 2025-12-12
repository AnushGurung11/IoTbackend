import express from 'express';
import { addData, getData } from '../controller/DataController.js';

const router = express.Router();

router.post('/data', addData);

router.get('/data', getData);

export default router;
