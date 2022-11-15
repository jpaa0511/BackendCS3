import express, { request } from 'express';
import * as PlataformaController from '../controllers/plataforma.controller';
import { Plataforma } from '../model/plataforma.model';
import * as Validaciones from '../validators/plataforma.validator';

const router = express.Router();

router.get('/', (_, res) => {
    PlataformaController.GetPlataformas()
        .then((obj) => {
            res.json(obj);
        }).catch((e) => {
            res.status(500).json(e);
        });
});

router.post('/',  Validaciones.ValidateCreate, (req: express.Request, res: express.Response) => {
    PlataformaController.PostPlataforma(req.body as Plataforma)
    .then((f) => {
        if (f)
            res.status(201).send();
        else
            res.status(500).send()
    }).catch((e) => {
        res.status(500).json(e);
    });
});

router.delete('/:Id', (req: express.Request, res: express.Response) => {
    PlataformaController.EliminarPlataforma(req.params.Id)
        .then((obj) => {
            res.json(obj);
        }).catch((e) => {
            res.status(500).json(e);
        });
});

export default router;