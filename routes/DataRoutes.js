import express from 'express';
import { addData, getCurrentData, getData } from '../controller/DataController.js';

const router = express.Router();

router.post('/data', addData);

router.get('/alldata', getData);

router.get('/currentdata',getCurrentData);

export default router;
