import { Plataforma } from "../model/plataforma.model"
import * as DaoPlataforma from '../dao/plataforma.dao'

export const GetPlataformas = async (): Promise<Plataforma[]> => {
    try {
        let p: Plataforma[] = await DaoPlataforma.ListarPlataformas();
        return p;
    } catch (error) {
        throw error;
    }
}

export const PostPlataforma = async (P: Plataforma): Promise<boolean>=> {
    
    try {
       return DaoPlataforma.AgregarPlataforma(P);
      
    } catch (error) {
        throw error;
    }
   
}

export const EliminarPlataforma = async (Id: string): Promise<Plataforma[]> => {
    try {
        let p: Plataforma[] = await DaoPlataforma.EliminarProductos(Id);
        return p;
    } catch (error) {
        throw error;
    }
}

