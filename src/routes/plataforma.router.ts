import express, { request } from 'express';
import * as PlataformaController from '../controllers/plataforma.controller';
import { Plataforma } from '../model/plataforma.model';

const router = express.Router();

router.get('/', (_, res) => {
    PlataformaController.GetPlataformas()
        .then((obj) => {
            res.json(obj);
        }).catch((e) => {
            res.status(500).json(e);
        });
});

export default router;