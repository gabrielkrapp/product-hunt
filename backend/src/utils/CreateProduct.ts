import { PrismaClient } from "@prisma/client";

export async function createProduct(title: string, description: string) {
    const prisma = new PrismaClient();
    try {
        const product = await prisma.product.create({
            data: {
                title,
                description,
                upvotes: 0,
            },
        });
        return product;
    } catch (error) {
        console.error('Error creating product:', error);
        throw error;
    } 
    finally {
        await prisma.$disconnect();
    }
}
