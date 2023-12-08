import { VOTEPRODUCT } from "../database/Querys/RouterQuerys";
import { pool } from "../database/database";

export async function voteProduct(productId: string): Promise<Product> {
    const client = await pool.connect();
    try {
        const result = await client.query<Product>(VOTEPRODUCT, [productId]);
        return result.rows[0];
    } finally {
        client.release();
    }
}