import {check} from 'express-validator'
import express from 'express';
import { Validar } from "../helpers/validation.helper";

export const ValidateCreate = [
    check('Imagen_URL').exists()
    .withMessage("La propiedad es requerida")
    .notEmpty()
    .withMessage("La propiedad esta vacia"),
    check('Nombre').exists()
    .withMessage("La propiedad es requerida")
    .notEmpty()
    .withMessage("La propiedad esta vacia"),
    check('Descripcion').exists()
    .withMessage("La propiedad es requerida")
    .notEmpty()
    .withMessage("La propiedad esta vacia"),
    check('Precio').exists()
    .withMessage("La propiedad es requerida")
    .notEmpty()
    .withMessage("La propiedad esta vacia"),
    (req: express.Request, res: express.Response, next: () => any) => {
        Validar(req, res, next);
    }
]

export const ValidateEliminar = [
    check('Id').exists()
    .withMessage("La propiedad es requerida")
    .notEmpty()
    .withMessage("La propiedad esta vacia"),
    (req: express.Request, res: express.Response, next: () => any) => {
        Validar(req, res, next);
    }
]