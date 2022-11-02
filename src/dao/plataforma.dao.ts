import GetConnection from "../conexion/connection";
import { Plataforma } from "../model/plataforma.model";

export const ListarPlataformas = async (): Promise<Plataforma[]> => {
    try {
        let tsql = "SELECT * FROM plataforma";
        const pool = await GetConnection();
        let rs = await pool.query<Plataforma>(tsql);
        if (rs != undefined) {
            return rs.recordset;
        }
        return [];
    } catch (error) {
        throw error;
    }
};

export async function AgregarPlataforma(p: Plataforma):Promise<boolean> {
    try {
     let tsql = `Insert into plataforma (Imagen_URL, Nombre, Descripcion, Precio) values ('${p.Imagen_URL}', '${p.Nombre}', '${p.Descripcion}', ${p.Precio})`;
         const pool = await GetConnection();
         let rs = await pool.query(tsql);
         if (rs != undefined) {
             return rs.rowsAffected.length==1;
         }
         return false;
    } catch (error) {
     throw error;
    }
 };