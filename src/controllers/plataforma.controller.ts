import { Plataforma } from "../model/plataforma.model"

export const GetPlataformas = (): Plataforma[] => {
    let p: Plataforma[] = [];
    p.push({
        Id: 1, 
        Nombre: "netflix",
        Imagen_URL: "https://onx.la/e459c",
        Descripcion: "Netflix es buena porque si",
        Precio: 5000
    });

    p.push({
        Id: 2, 
        Nombre: "Amazon prime",
        Imagen_URL: "https://onx.la/33425",
        Descripcion: "amazon es bueno porque si",
        Precio: 5000
    });
    return p;
}