import { PrismaClient } from "@prisma/client";

export async function findAllProducts() {
    const prisma = new PrismaClient();
    try {
        const result = await prisma.product.findMany();
        return result;
    } catch (e) {
        console.error(e);
        throw e
    }
    finally {
        await prisma.$disconnect();
    }
}