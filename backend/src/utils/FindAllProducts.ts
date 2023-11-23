import { GETPRODUCTS } from "../database/Querys/RouterQuerys";
import { pool } from "../database/database";

export async function findAllProducts(): Promise<Product[]> {
    const client = await pool.connect();
    try {
        const result = await client.query<Product>(GETPRODUCTS);
        return result.rows;
    } finally {
        client.release();
    }
}