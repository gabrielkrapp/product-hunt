import { REMOVEVOTEPRODUCT, VOTEPRODUCT } from "../database/Querys/RouterQuerys";
import { pool } from "../database/database";

export async function voteProduct(productId: string, action: 'add' | 'remove'): Promise<Product> {
    const client = await pool.connect();
    try {
        const query = action === 'add' ? VOTEPRODUCT : REMOVEVOTEPRODUCT;
        const result = await client.query<Product>(query, [productId]);
        return result.rows[0];
    } finally {
        client.release();
    }
}