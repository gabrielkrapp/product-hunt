import { HASUSERVOTED } from "../database/Querys/RouterQuerys";
import { pool } from "../database/database";

export async function hasUserVoted(userId: string, productId: string): Promise<boolean> {
    const client = await pool.connect();

    try {
        const result = await client.query(
            HASUSERVOTED,
            [userId, productId]
        );

        return result.rows.length > 0;
    } catch (error) {
        console.error('Error checking user vote:', error);
        throw error;
    } finally {
        client.release();
    }
}
