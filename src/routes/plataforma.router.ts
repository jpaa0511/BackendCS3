import express, { request } from 'express';
import * as PlataformaController from '../controllers/plataforma.controller';

const router = express.Router();

router.get('/', (req, res) => {
    res.json(PlataformaController.GetPlataformas());
});

export default router;