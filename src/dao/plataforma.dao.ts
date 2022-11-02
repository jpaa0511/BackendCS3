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
}