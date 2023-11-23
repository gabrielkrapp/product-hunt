import { GETPRODUCTBYID } from "../database/Querys/RouterQuerys";
import { pool } from "../database/database";

export async function findProductById(productId: string): Promise<Product | null> {
    const client = await pool.connect();
    try {
        const result = await client.query<Product>(GETPRODUCTBYID, [productId]);
        if (result.rows.length === 0) {
            return null;
        }
        return result.rows[0];
    } finally {
        client.release();
    }
}