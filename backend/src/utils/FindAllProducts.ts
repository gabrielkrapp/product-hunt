import { GETPRODUCTS } from "../database/Querys/RouterQuerys";
import { pool } from "../database/database";

export async function findAllProducts() {
    const client = await pool.connect();
    try {
        const result = await client.query(GETPRODUCTS);
        return result.rows;
    } finally {
        client.release();
    }
}