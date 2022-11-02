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


// export const PostPersona = async (P: Plataforma): Promise<boolean> => {
//     try {
//         return DaoPersona.CrearPersona(P);
//     } catch (error) {
//         throw error;
//     }
// }